import * as React from "react";
import ReactDOM from "react-dom";

const LiveViewContext = React.createContext({ pushEvent: () => {} });

export const usePushEvent = () => {
  const { pushEvent } = React.useContext(LiveViewContext);
  return pushEvent;
};

export const LiveViewContextProvider = ({ children, pushEvent }) => {
  return (
    <LiveViewContext.Provider value={{ pushEvent }}>
      {children}
    </LiveViewContext.Provider>
  );
};

export function genHydrate(components) {
  return function (componentName, rootId, { props, pushEvent }) {
    const Comp = components[componentName];

    ReactDOM.hydrate(
      <LiveViewContextProvider pushEvent={pushEvent}>
        <Comp {...props} contexts={LiveViewContext} />
      </LiveViewContextProvider>,
      document.getElementById(rootId)
    );
  };
}
