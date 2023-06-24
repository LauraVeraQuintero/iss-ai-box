import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";

import Router from "./router";

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
