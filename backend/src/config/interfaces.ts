export interface ITestsConfig {
  readonly vkAccount: IVkTestAccount;
}

export interface ITestsConfigJson {
  vkAccount: IVkTestAccount;
}
export interface IVkTestAccount {
  readonly id: number;
}
