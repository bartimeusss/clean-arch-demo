import { NotificationView } from 'application/port/NotificationView';

export class AlertNotificationView implements NotificationView {
    showError(message: string): void {
        alert(`Error! ${message}`);
    }
}