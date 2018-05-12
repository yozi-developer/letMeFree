import { AxiosInstance } from "axios";
import { inject, injectable } from "inversify";
import { IConfig } from "../config/interfaces";
import { AppStoreSymbol, AxiosSymbol, ConfigSymbol } from "../inversify";
import { IAppStore } from "../stores/interfaces";
import { IVkRequestsService } from "./interfaces";

@injectable()
export class VkRequestsService implements IVkRequestsService {
  constructor(
    @inject(AppStoreSymbol) private appStore: IAppStore,
    @inject(AxiosSymbol) private axios: AxiosInstance,
    @inject(ConfigSymbol) private config: IConfig
  ) {}

  private readonly base = "https://api.vk.com/method";

  public async get<R>(
    methodName: string,
    params: { [p: string]: string }
  ): Promise<R> {
    const response = await this.axios.get<R>(`${this.base}/${methodName}`, {
      params: { ...params, v: this.config.vkApiVersion }
    });

    return response.data;
  }
}
