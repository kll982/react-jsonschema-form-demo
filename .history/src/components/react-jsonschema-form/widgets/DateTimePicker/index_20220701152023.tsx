import React, { useEffect, useState } from "react";
import { Card, Button, DatePicker, TimePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { SketchPicker } from "react-color";
import "./index.less";

interface ColorPickerProps {
  color?: string;
  value?: string;
  handleOnColorClick?: () => void;
  handleOnColorClose?: () => void;
  handleOnColorChange?: (color: string) => void;
}
const ColorPicker = (props: ColorPickerProps) => {
  return (
    <div>
      <DatePicker />
      <TimePicker />
    </div>
  );
};
export default ColorPicker;
