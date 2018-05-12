import { AxiosInstance, AxiosRequestConfig } from "axios";
import { IConfig } from "../config/interfaces";
import {
  AppStoreSymbol,
  AxiosSymbol,
  ConfigSymbol,
  container,
  VkRequestsServiceSymbol
} from "../inversify";
import { bindings } from "../inversify/bindings";
import { IAppStore } from "../stores/interfaces";
import { IVkRequestsService } from "./interfaces";

const accessToken = "test_access_token";
beforeEach(async () => {
  await container.loadAsync(bindings);
  const appStore = container.get<IAppStore>(AppStoreSymbol);
  appStore.setAccessToken(accessToken);
});
afterEach(async () => {
  container.unload(bindings);
});
it("send request to the vk api", async () => {
  const vkService = container.get<IVkRequestsService>(VkRequestsServiceSymbol);
  const methodName = "vkMethod";
  const query = {
    foo: "bar",
    baz: "2"
  };

  const config = container.get<IConfig>(ConfigSymbol);
  const axios = container.get<AxiosInstance>(AxiosSymbol);
  const axiosSpy = jest.spyOn(axios, "get").mockImplementation(() => {
    return { data: null };
  });
  await vkService.get(methodName, query);
  const vkUrl = `https://api.vk.com/method/${methodName}`;
  const requestConfig: AxiosRequestConfig = {
    params: { ...query, v: config.vkApiVersion }
  };
  expect(axiosSpy).toBeCalledWith(vkUrl, requestConfig);
  axiosSpy.mockReset();
});
