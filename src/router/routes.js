import RouteIndex from "./index";
import RouteMain from "./main";
import RouteAbout from "./about";

const Routes = [
  {
    exact: true,
    path: "/",
    name: "home",
    icon:"home",
    component: RouteIndex
  }, {
    path: "/main",
    name: "main",
    icon: "clipboard",
    component: RouteMain,
  }, {
    path: "/about",
    name: "about",
    icon: "question-circle",
    component: RouteAbout,
  }
];

export default Routes;