import React, { useEffect, useState } from "react";
import { Card, Button, DatePicker, TimePicker } from "antd";
// import "./index.less";

interface ColorPickerProps {
  color?: string;
  value?: string;
  handleOnColorClick?: () => void;
  handleOnColorClose?: () => void;
  handleOnColorChange?: (color: string) => void;
}
const DateTimePicker = () => {
  return (
    <div>
      DatePicker
      <DatePicker />
      TimePicker
      <TimePicker />
    </div>
  );
};
console.log("<DateTimePicker", <DateTimePicker />);
export default DateTimePicker;
