import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import routes from "./config";
import {Styles} from "../styles/styles";

const Router: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
        {routes.map((routeItem) => {
          return <Route key={routeItem.path} path={routeItem.path} element={routeItem.component} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
