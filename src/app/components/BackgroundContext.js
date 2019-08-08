import React from "react";
import { useState } from "react";

const BackgroundContext = React.createContext("black");

function withBackgroundColor(Component) {
  function WrappedComponent(props) {
    return (
      <BackgroundContext.Consumer>
        {context => <Component {...props} {...context} />}
      </BackgroundContext.Consumer>
    );
  }

  return WrappedComponent;
}

function BackgroundContextProvider({ children }) {
  const [background, setBackground] = useState("pink");

  return (
    <BackgroundContext.Provider value={{ setBackground, background }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export default BackgroundContext;
export { withBackgroundColor, BackgroundContextProvider };
