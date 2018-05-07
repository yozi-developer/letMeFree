import { inject, injectable } from "inversify";
import { TestsConfigFileSymbol } from "../inversify";
import { ITestsConfig, ITestsConfigFile, IVkTestAccount } from "./interfaces";

@injectable()
export class TestsConfig implements ITestsConfig {
  public readonly vkAccount: IVkTestAccount;

  constructor(@inject(TestsConfigFileSymbol) private config: ITestsConfigFile) {
    this.vkAccount = Object.freeze(config.vkAccount);
  }
}
