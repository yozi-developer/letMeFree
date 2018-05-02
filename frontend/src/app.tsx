import "reflect-metadata";
import "../dist/semantic/semantic.min.css";
import "./styles/global.css";

import { configure } from "mobx";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Application from "./components/Application";
import { container } from "./inversify";
import { bindings } from "./inversify/bindings";

configure({ enforceActions: true, computedRequiresReaction: true });
// load DI-container without circular dependencies in webpack
container.load(bindings);

// Create main element
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

// Render components
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
    import("./components/Application").then(Application_ => {
      render(Application_.default);
    });
  });
}
