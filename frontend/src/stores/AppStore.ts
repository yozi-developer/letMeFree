import { inject, injectable } from "inversify";
import { action, observable } from "mobx";
import { isVkTokenUpdated, IVkTokenMessage } from "../common/ipc";
import { VkAuthIpcSymbol } from "../inversify";
import { IVkAuthIpc } from "../services/interfaces";
import { IAppStore } from "./interfaces";

@injectable()
export class AppStore implements IAppStore {
  @observable public token: string | undefined;

  @action
  public updateToken(newToken: string | undefined): void {
    this.token = newToken;
  }

  public unmount() {
    this.vkAuthIpc.detachListener(this.onVkTokenMessage);
  }

  constructor(@inject(VkAuthIpcSymbol) private vkAuthIpc: IVkAuthIpc) {
    this.vkAuthIpc.attachListener(this.onVkTokenMessage);
  }

  private onVkTokenMessage = (event: any, payload: IVkTokenMessage) => {
    if (isVkTokenUpdated(payload)) {
      this.updateToken(payload.token);
    }
  };
}
