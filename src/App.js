import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "./store";
import history from "./history";
import NavBar from "./containers/navBar/navBar";
import Routes from "./routes";
import BooksContainer from "./containers/bookContainer/books";
import Books from "./components/booksComponent/booksComponent";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <BooksContainer />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
