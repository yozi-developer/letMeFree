// http://www.jamesmonger.com/post/react-component-dependency-injection.htm
import inversifyInjectDecorators from "inversify-inject-decorators";
import { Container } from "inversify";

const container = new Container();
const { lazyInject } = inversifyInjectDecorators(container);

export { container, lazyInject };
