import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Application from "./components/Application";

// Create main element
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

// Render components
/* tslint:disable-next-line:variable-name */
const render = (Component: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mainElement
  );
};

render(Application);

// Hot Module Replacement API
if (typeof (module as any).hot !== "undefined") {
  (module as any).hot.accept("./components/Application", () => {
    /* tslint:disable-next-line:variable-name */
    import("./components/Application").then(Application_ => {
      render(Application_.default);
    });
  });
}
