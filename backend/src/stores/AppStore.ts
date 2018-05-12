import { injectable } from "inversify";
import { BehaviorSubject } from "rxjs";
import { IAppStore } from "./interfaces";

@injectable()
export class AppStore implements IAppStore {
  public accessToken = new BehaviorSubject<string | undefined>(undefined);

  public setAccessToken(newToken: string | undefined): void {
    this.accessToken.next(newToken);
  }
}
