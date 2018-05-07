declare module "*/tests.config.json" {
  export interface IVkTestAccount {
    readonly id: number;
  }

  export interface ITestsConfigJson {
    readonly vkAccount: IVkTestAccount;
  }

  const exp: ITestsConfigJson;

  export default exp;
}
