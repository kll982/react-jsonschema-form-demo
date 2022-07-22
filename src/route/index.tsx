// 声明类型
namespace SyncRoute {
  export type Routes = {
    path: string;
    component: any;
    // component: React.LazyExoticComponent<any>;
    children?: Routes[];
  };
}

// 这个主要是路由表组件的写法
import React, { Suspense, lazy } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import Home from "src/pages/home";
import { TimeWheel } from "src/pages/time-wheel";
import { IdSearch } from "src/pages/idSearch";
import { BasicLayoutForm } from "components";

const Routers = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/home", element: <Home /> },
      { path: "/BasicLayoutForm", element: <BasicLayoutForm /> },
      { path: "/idSearch", element: <IdSearch /> },
      { path: "/time-wheel", element: <TimeWheel /> },
    ],
  },
];

const Router = () => {
  const routes = useRoutes(Routers);

  return routes;
};
export default Router;
