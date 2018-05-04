import { observer } from "mobx-react";
import * as React from "react";
import { hot } from "react-hot-loader";
import { AppStoreSymbol, lazyInject } from "../inversify";
import { IAppStore } from "../stores/interfaces";
import { SignInScreen } from "./SignInScreen";

class Application extends React.Component<{}, {}> {
  @lazyInject(AppStoreSymbol) private appStore!: IAppStore;

  public componentWillUnmount() {
    this.appStore.unmount();
  }
  public render() {
    const token = this.appStore.token;
    return token ? <div>Your token is "{token}"</div> : <SignInScreen />;
  }
}

const WrappedComponent = observer(Application);

export default hot(module)(WrappedComponent);
