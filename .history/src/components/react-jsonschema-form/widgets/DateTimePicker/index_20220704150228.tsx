import React, { useEffect, useState } from "react";
import { Card, Button, DatePicker, TimePicker } from "antd";
import moment from "moment";
// import "./index.less";

const DateTimePicker = (props: any) => {
  console.log("props", props);
  return (
    <div>
      <DatePicker
        value={props.value && moment(props.value)}
        onChange={(mobj, str) => props.onChange(str)}
      />
      {/* <TimePicker /> */}
    </div>
  );
};
export default DateTimePicker;
