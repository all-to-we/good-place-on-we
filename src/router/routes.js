import RouteIndex from "./index";
import RouteMain from "./main";
import RouteAbout from "./about";

const Routes = [
  {
    exact: true,
    path: "/",
    name: "home",
    component: RouteIndex
  }, {
    path: "/main",
    name: "main",
    component: RouteMain,
  }, {
    path: "/about",
    name: "about",
    component: RouteAbout,
  }
];

export default Routes;