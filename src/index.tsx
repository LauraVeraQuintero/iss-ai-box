import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

import Router from "./router";
import {Header} from "./components/Header";
import React from "react";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
