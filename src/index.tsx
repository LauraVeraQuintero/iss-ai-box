import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";

import Router from "./router";
import {Header} from "./components/Header";

const rootElement = document.getElementById("root");

const render = () => {
  const app = (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </LocalizationProvider>
  );

  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(app);
  }
};

render();
