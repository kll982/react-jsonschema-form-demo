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
import Home from "../home";
const RouteTable: SyncRoute.Routes[] = [
  {
    path: "/",
    component: <Home />,
    children: [],
  },
];

const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
  let mRouteTable: RouteObject[] = [];
  table.forEach((route) => {
    mRouteTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>路由加载ing...</div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children),
    });
  });
  return mRouteTable;
};

// 直接暴露成一个组件调用
export default () => useRoutes(syncRouter(RouteTable));
