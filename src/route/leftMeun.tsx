import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
// Navigate 跳转
const LeftMenu = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      label: "home",
      key: "/home",
    },
    {
      label: "自定义表单",
      key: "/rjsf-form",
      children: [
        { key: "/rjsf-form/widget", label: "widget" },
        { key: "/rjsf-form/field", label: "field" },
        { key: "/rjsf-form/BasicLayoutForm", label: "form" },
        { key: "/rjsf-form/ThemeForm", label: "颜色配置" },
      ],
    },
    // {
    //   label: "dnd idSearch",
    //   key: "/idSearch",
    // },
    {
      label: "时间轮",
      key: "/time-wheel",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
  };

  return (
    <Menu
      mode="inline"
      onClick={onClick}
      defaultSelectedKeys={["/home"]}
      items={items}
    />
  );
};

export default LeftMenu;
