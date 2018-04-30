import { observer } from "mobx-react";
import * as React from "react";
import { hot } from "react-hot-loader";
import { AppStoreSymbol, lazyInject } from "../inversify";
import { IAppStore } from "../stores/interfaces";
import { LoadingScreen } from "./LoadingScreen";

class Application extends React.Component<{}, {}> {
  @lazyInject(AppStoreSymbol) private appStore!: IAppStore;
  constructor(props: {}) {
    super(props);
    console.log("Application");
  }

  public render() {
    const token = this.appStore.token;
    return token ? <div>Your token is "{token}"</div> : <LoadingScreen />;
  }
}

const WrappedComponent = observer(Application);

export default hot(module)(WrappedComponent);
