import React, { PropsWithChildren, Context, createContext, memo, useContext } from 'react';
import { observer } from 'mobx-react';
import { pick } from 'lodash';
import autoBind from 'auto-bind';

export class ReactContextConnector<AppContext extends Record<string, any>> {
    private context?: Context<AppContext>;

    autoBindContext(context: AppContext): void {
        Object.values(context).forEach(it => {
            if (typeof it === 'object') {
                autoBind(it);
            }
        });
    }

    Provider: React.FC<PropsWithChildren<{ appContext: AppContext }>> = memo(({ children, appContext }) => {
        this.autoBindContext(appContext);

        if (!this.context) {
            this.context = createContext(appContext);
        }

        return this.context ? (
            <this.context.Provider value={appContext}>
                {children}
            </this.context.Provider>
        ) : null;
    });

    connect = <TProps extends Partial<AppContext>>(
        Component: React.ComponentType<TProps>,
        ...useCases: Extract<keyof TProps, keyof AppContext>[]
    ): React.ComponentType<Omit<TProps, keyof AppContext>> => {
        const ObserverComponent = observer(Component);

        return (
            ownProps: Omit<TProps, keyof AppContext>,
        ): JSX.Element | null => {
            if (!this.context) {
                return null;
            }

            const props = pick(useContext(this.context), ...useCases) as TProps;

            return (
                <ObserverComponent {...props} {...ownProps} />
            );
        };
    }
}

export type Connect<Context> = <TProps extends Partial<Context>>(
    Component: React.ComponentType<TProps>,
    ...useCases: Extract<keyof TProps, keyof Context>[]
) => React.ComponentType<Omit<TProps, keyof Context>>;