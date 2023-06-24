import Home from "../pages/Home";

const routes = [
  {
    path: "/home",
    exact: true,
    component: <Home />,
  },
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
];

export default routes;
