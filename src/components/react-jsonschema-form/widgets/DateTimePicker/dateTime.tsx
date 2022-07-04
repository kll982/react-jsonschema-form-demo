import React, { useEffect, useState } from "react";
import { Card, Button, DatePicker, TimePicker } from "antd";
import moment, { Moment } from "moment";
// import "./index.less";

const initTime = "00:00";
const minuteForamt = "HH:mm";
const minuteYearForamt = "YYYY-MM-DD HH:mm";

const getDateTime = (date: Moment, time: Moment) => {
  //Combine the from date with from time
  if (date) {
    const combinedDate = moment(date.startOf("d"))
      .add(time.hours(), "hour")
      .add(time.minutes(), "minute");
    return combinedDate;
  }
  return null;
};

const DateTimePicker = (props: any) => {
  const { formData, value, onChange } = props;
  const timesValue = (value && moment(value)) || (formData && moment(formData));
  const [date, setDate] = useState(timesValue);
  const [time, setTime] = useState(
    timesValue || moment(initTime, minuteForamt)
  );

  useEffect(() => {
    const values = getDateTime(date, time);
    onChange(values?.format(minuteYearForamt));
  }, [date, time]);

  return (
    <div>
      <DatePicker
        value={date}
        onChange={(val: Moment | null) => setDate(val)}
      />
      <TimePicker
        value={time}
        format={minuteForamt}
        onChange={(val: Moment | null) => setTime(val)}
      />
    </div>
  );
};
export default DateTimePicker;
