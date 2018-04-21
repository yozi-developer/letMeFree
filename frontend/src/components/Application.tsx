import * as React from "react";
import { hot } from "react-hot-loader";

interface IApplocationState {
  counter: number;
}

class Application extends React.Component<{}, IApplocationState> {
  public state: IApplocationState = {
    counter: 0
  };

  public render() {
    return (
      <div>
        Hello World from Electron!<button onClick={this.onClick}>
          {this.state.counter}
        </button>
      </div>
    );
  }

  private onClick = () => {
    this.setState((prevState: IApplocationState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  };
}

export default hot(module)(Application);
