import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./components/Counter";
import { reducer } from "./reducers/index";
// import History from "./components/History";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <div style={styles}>
          <h2>
            Simple Counter
          </h2>
          <div>
            <Counter />
            {/* <History /> */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App