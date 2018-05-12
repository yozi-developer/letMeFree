import { AxiosInstance } from "axios";
import { AsyncContainerModule, interfaces } from "inversify";
import { Config } from "../config/Config";
import { IConfig } from "../config/interfaces";
import { axios } from "../services/Axios";
import { IVkRequestsService } from "../services/interfaces";
import { VkRequestsService } from "../services/VkRequestsService";
import { AppStore } from "../stores/AppStore";
import { IAppStore } from "../stores/interfaces";
import {
  AppStoreSymbol,
  AxiosSymbol,
  ConfigSymbol,
  VkRequestsServiceSymbol
} from "./symbols";

export const bindings = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
  ) => {
    bind<IAppStore>(AppStoreSymbol)
      .to(AppStore)
      .inSingletonScope();
    bind<IVkRequestsService>(VkRequestsServiceSymbol)
      .to(VkRequestsService)
      .inSingletonScope();
    bind<AxiosInstance>(AxiosSymbol).toConstantValue(axios);
    bind<IConfig>(ConfigSymbol)
      .to(Config)
      .inSingletonScope();
  }
);
