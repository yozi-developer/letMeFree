import { Observable } from "rxjs";

export interface IAppStore {
  readonly accessToken: Observable<string | undefined>;

  setAccessToken(newToken: string): void;
}
