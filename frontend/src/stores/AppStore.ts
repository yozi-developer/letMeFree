import { ipcRenderer } from "electron";
import { injectable } from "inversify";
import { action, observable } from "mobx";
import { Channel, isVkTokenUpdated, IVkTokenMessage } from "../common/ipc";
import { IAppStore } from "./interfaces";

@injectable()
export class AppStore implements IAppStore {
  @observable public token: string | undefined;

  @action
  public updateToken(newToken: string | undefined): void {
    this.token = newToken;
  }

  constructor() {
    ipcRenderer.on(Channel.VK_TOKEN, this.onVkTokenMessage);
  }

  private onVkTokenMessage = (event: any, payload: IVkTokenMessage) => {
    if (isVkTokenUpdated(payload)) {
      this.updateToken(payload.token);
    }
  };
}
