export interface IVkRequestsService {
  get<R>(methodName: string, query: { [key: string]: string }): Promise<R>;
}

export interface IVkService {}
