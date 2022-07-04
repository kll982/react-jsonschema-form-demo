import React, { useEffect, useState } from "react";
import { Card, Button, DatePicker, TimePicker } from "antd";
// import "./index.less";

const DateTimePicker = () => {
  return (
    <div>
      <DatePicker />

      <TimePicker />
    </div>
  );
};
console.log("<DateTimePicker", <DateTimePicker />);
export default DateTimePicker;
