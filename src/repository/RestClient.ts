export interface RestClient {
    get<Response>(url: string, queryParams?: Record<string, any>): Promise<Response>;
}