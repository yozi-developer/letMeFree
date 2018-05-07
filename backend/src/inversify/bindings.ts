import { AsyncContainerModule, interfaces } from "inversify";
import { ITestsConfig, ITestsConfigJson } from "../config/interfaces";
import { TestsConfig } from "../config/TestsConfig";
import { TestsConfigSymbol } from "./symbols";
import testsConfigJson from "../../tests.config.json";
export const bindings = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
  ) => {
    bind<ITestsConfigJson>(testsConfigJson as any).toConstantValue(
      testsConfigJson
    );

    bind<ITestsConfig>(TestsConfigSymbol)
      .to(TestsConfig)
      .inSingletonScope();
  }
);
