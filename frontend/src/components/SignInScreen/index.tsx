import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import { VkAuthIpcSymbol, lazyInject } from "../../inversify";
import { IVkAuthIpc } from "../../services/interfaces";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

interface ISignInScreenProps {}

class SignInScreen extends React.Component<ISignInScreenProps, {}> {
  @lazyInject(VkAuthIpcSymbol) private vkAuthIpc!: IVkAuthIpc;
  @observable private loading: boolean = false;

  public render() {
    return (
      <Grid
        centered={true}
        verticalAlign={"middle"}
        style={{ height: "100vh" }}
      >
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Segment stacked={true}>
            <Header textAlign="center">Sign-in into your VK account</Header>
            <Button
              color="teal"
              fluid={true}
              size="large"
              loading={this.loading}
              disabled={this.loading}
              onClick={this.onClickSignIn}
            >
              Sign-in
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }

  private onClickSignIn = () => {
    this.setLoading(true);
    this.vkAuthIpc.requestTokenRefresh();
  };

  @action
  private setLoading(val: boolean) {
    this.loading = val;
  }
}

const WrappedComponent = observer(SignInScreen);

export { WrappedComponent as SignInScreen };
