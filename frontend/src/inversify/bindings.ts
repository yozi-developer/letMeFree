import { ContainerModule, interfaces } from "inversify";
import { IVkAuthIpc } from "../services/interfaces";
import { VkAuthIpc } from "../services/VkAuthIpc";
import { AppStore } from "../stores/AppStore";
import { IAppStore } from "../stores/interfaces";
import { AppStoreSymbol, VkAuthIpcSymbol } from "./symbols";

export const bindings = new ContainerModule(
  (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
  ) => {
    bind<IAppStore>(AppStoreSymbol)
      .to(AppStore)
      .inSingletonScope();
    bind<IVkAuthIpc>(VkAuthIpcSymbol)
      .to(VkAuthIpc)
      .inSingletonScope();
  }
);
