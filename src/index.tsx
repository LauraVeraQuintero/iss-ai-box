import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";

import Router from "./router";
import {Header} from "./components/Header";
import React from "react";

const App: React.FC = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  </LocalizationProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
