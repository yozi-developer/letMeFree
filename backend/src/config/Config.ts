import { injectable } from "inversify";
import { IConfig } from "./interfaces";

@injectable()
export class Config implements IConfig {
  public readonly vkApiVersion = "5.74";
}
