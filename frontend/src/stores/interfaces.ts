export interface IAppStore {
  readonly token: string | undefined;
  updateToken(newToken: string | undefined): void;
  unmount(): void;
}
