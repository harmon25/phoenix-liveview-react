import * as React from "react";
import ReactDOM from "react-dom";

// not even exporting this, only really need push event...
const LiveViewContext = React.createContext({ pushEvent: () => {} });

/**
 * usePushEvent, just returns the push event function to push an event up the live view
 */
export const usePushEvent = () => {
  const { pushEvent } = React.useContext(LiveViewContext);
  return pushEvent;
};

/**
 *
 * @param {*} props
 */
export const LiveViewContextProvider = ({ children, pushEvent }) => {
  return (
    <LiveViewContext.Provider value={{ pushEvent }}>
      {children}
    </LiveViewContext.Provider>
  );
};

/**
 * Generates a hydrate function to be used in liveview hooks
 *
 * Object of components that can be server rendered, and also hydrated via liveview
 * @param {object} components
 */
export function genHydrate(components) {
  /**
   *
   * @param {string} componentName
   * @param {string} rootId
   * @param {string} pushEvent
   * @param {object} props
   */
  return function hydrate(componentName, rootId, pushEvent, props = {}) {
    const Comp = components[componentName];

    ReactDOM.hydrate(
      <LiveViewContextProvider pushEvent={pushEvent}>
        <Comp {...props} />
      </LiveViewContextProvider>,
      document.getElementById(rootId)
    );
  };
}

const noOp = () => {};

export function genServerRender(components) {
  const { renderToString } = require("react-dom/server");
  return function render(componentName, props) {
    const Comp = components[componentName];
    const App = (
      <LiveViewContextProvider pushEvent={noOp}>
        <Comp {...props} />
      </LiveViewContextProvider>
    );

    renderToString(App);
  };
}
