import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "./store";
import history from "./history";
import GreekGods from "./containers/greekGodContainer/greekGod";
import NavBar from "./containers/navBar/navBar";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <GreekGods />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
