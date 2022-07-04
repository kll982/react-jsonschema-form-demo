import React, { useEffect, useState } from "react";
import { Card, Button, DatePicker, TimePicker } from "antd";
// import "./index.less";

const DateTimePicker = (props: any) => {
  console.log("props", props);
  return (
    <div>
      <DatePicker />
      <TimePicker />
    </div>
  );
};
export default DateTimePicker;
