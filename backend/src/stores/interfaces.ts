import { BehaviorSubject } from "rxjs/src/internal/BehaviorSubject";

export interface IAppStore {
  readonly accessToken: BehaviorSubject<string | undefined>;

  setAccessToken(newToken: string): void;
}
