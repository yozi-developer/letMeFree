import { observer } from "mobx-react";
import * as React from "react";
import { VkAuthIpcSymbol, lazyInject } from "../../inversify";
import { IVkAuthIpc } from "../../services/interfaces";
import { Button } from "semantic-ui-react";

interface ISignInScreenProps {}

class SignInScreen extends React.Component<ISignInScreenProps, {}> {
  @lazyInject(VkAuthIpcSymbol) private vkAuthIpc!: IVkAuthIpc;
  public render() {
    return <Button onClick={this.onClickSignIn}>Sign-in</Button>;
  }

  private onClickSignIn = () => {
    this.vkAuthIpc.requestTokenRefresh();
  };
}

const WrappedComponent = observer(SignInScreen);

export { WrappedComponent as SignInScreen };
