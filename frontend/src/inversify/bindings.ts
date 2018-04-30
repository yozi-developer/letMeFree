import { ContainerModule, interfaces } from "inversify";
import { AppStore } from "../stores/AppStore";
import { IAppStore } from "../stores/interfaces";
import { AppStoreSymbol } from "./symbols";

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
  }
);
