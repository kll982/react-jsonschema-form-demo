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
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "src/pages/home";
import { TimeWheel } from "src/pages/time-wheel";
import { IdSearch } from "src/pages/idSearch";
import { BasicLayoutForm } from "src/pages/schema/rightFormSchema";
import { ThemesForm } from "src/pages/schema/themesSchema";
import { WidgetsForm } from "src/pages/schema/widgetsSchemas";

export const Routers = [
  {
    path: "/",
    children: [
      {
        path: "/",
        label: "home",
        element: <Home />,
      },
      { path: "/home", label: "home", element: <Home /> },
      {
        path: "/rjsf-form",
        label: "rjsf-form",
        children: [
          { path: "/rjsf-form/widght", element: <WidgetsForm /> },
          { path: "/rjsf-form/BasicLayoutForm", element: <BasicLayoutForm /> },
          { path: "/rjsf-form/ThemeForm", element: <ThemesForm /> },
        ],
      },
      { path: "/idSearch", label: "idSearch", element: <IdSearch /> },
      { path: "/time-wheel", label: "time-wheel", element: <TimeWheel /> },
    ],
  },
];

export const Router = () => {
  const routes = useRoutes(Routers);

  return routes;
};
