import { IVkTokenMessage } from "../common/ipc";

export type VkAuthIpcListener = (event: any, payload: IVkTokenMessage) => void;

export interface IVkAuthIpc {
  attachListener(listener: VkAuthIpcListener): void;
  detachListener(listener: VkAuthIpcListener): void;
  requestTokenRefresh(): void;
}
