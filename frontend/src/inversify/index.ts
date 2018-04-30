import { bindings } from "./bindings";
import { container, lazyInject } from "./container";

container.load(bindings);

export { container, lazyInject } from "./container";
export * from "./symbols";
