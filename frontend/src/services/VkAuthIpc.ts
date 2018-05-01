import { ipcRenderer } from "electron";
import { injectable } from "inversify";
import { Channel, IVkRequestTokenRefresh } from "../common/ipc";
import { IVkAuthIpc, VkAuthIpcListener } from "./interfaces";

@injectable()
export class VkAuthIpc implements IVkAuthIpc {
  private channel = Channel.VK_TOKEN;
  public detachListener(listener: VkAuthIpcListener): void {
    ipcRenderer.removeListener(this.channel, listener);
  }
  public attachListener(listener: VkAuthIpcListener): void {
    ipcRenderer.on(this.channel, listener);
  }
  public requestTokenRefresh(): void {
    const message: IVkRequestTokenRefresh = { action: "request-refresh-token" };
    ipcRenderer.send(this.channel, message);
  }
}
