import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DatePicker } from "antd";
import moment, { Moment } from "moment";

const initTime = "00:00";
const minuteForamt = "HH:mm";
const minuteYearForamt = "YYYY-MM-DD HH:mm";
type timeValObj = {
  from: string | undefined;
  to: string | undefined;
};

interface SearchRangePickerProps {
  value?: timeValObj;
  formData: timeValObj;
  onChange: (val: timeValObj) => void;
}

export default function SearchRangePicker(props: SearchRangePickerProps) {
  const contRef = useRef(null);
  const { formData, value } = props;
  //   const timesValue = (value && moment(value)) || (formData && moment(formData));
  const timesValue = formData || value;

  const fromInitDate = useMemo(() => {
    return timesValue.from ? moment(timesValue.from) : null;
  }, [timesValue?.from]);
  const fromInitTime = useMemo(() => {
    return timesValue?.from
      ? moment(timesValue.from)
      : moment(initTime, minuteForamt);
  }, [timesValue?.from]);
  const toInitDate = useMemo(() => {
    return timesValue?.to ? moment(timesValue.to) : null;
  }, [timesValue?.to]);
  const toInitTime = useMemo(() => {
    return timesValue?.to
      ? moment(timesValue.to)
      : moment(initTime, minuteForamt);
  }, [timesValue?.to]);

  const [fromOpen, setFromOpen] = useState<boolean>(false);
  const [toOpen, setToOpen] = useState<boolean>(false);
  const [fromTimeOpen, setFromTimeOpen] = useState<boolean>(false);
  const [toTimeOpen, setToTimeOpen] = useState<boolean>(false);
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);

  const [fromDate, setFromDate] = useState(fromInitDate);
  const [fromTime, setFromTime] = useState(fromInitTime);
  const [toDate, setToDate] = useState(toInitDate);
  const [toTime, setToTime] = useState(toInitTime);

  useEffect(() => {
    setFromDate(fromInitDate);
  }, [fromInitDate]);
  useEffect(() => {
    setFromTime(fromInitTime);
  }, [fromInitTime]);
  useEffect(() => {
    setToDate(toInitDate);
  }, [toInitDate]);
  useEffect(() => {
    setToTime(toInitTime);
  }, [toInitTime]);

  useEffect(() => {
    const formDateTime = getDateTime(fromDate, fromTime)?.format(
      minuteYearForamt
    );
    const toDateTime = getDateTime(toDate, toTime)?.format(minuteYearForamt);
    props.onChange({
      from: formDateTime,
      to: toDateTime,
    });
  }, [fromDate, fromTime, toDate, toTime]);

  const clickHandler = useCallback(
    (e: MouseEvent) => {
      // Since we use "fromOpen" and toOpen to control the popup, we need manually control click-out closing
      const path = e.composedPath();
      const insidePanel = path.some(
        (pathNode) =>
          (pathNode as HTMLElement).classList?.contains(
            "ant-picker-panel-container"
          ) || (pathNode as HTMLElement).classList?.contains("ant-picker")
      );

      if (!insidePanel) {
        setToOpen(false);
        setFromOpen(false);
        setFromTimeOpen(false);
        setToTimeOpen(false);
      }
    },
    [fromDate, fromTime, toDate, toTime]
  );

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [clickHandler]);

  const getDateTime = (date: Moment | null, time: Moment) => {
    //Combine the from date with from time
    if (date) {
      const combinedDate = moment(date.startOf("d"))
        .add(time.hours(), "hour")
        .add(time.minutes(), "minute");
      return combinedDate;
    }
    return null;
  };

  const onFromDateClick = () => {
    setFromOpen(true);
    setToOpen(false);
  };

  const onToDateClick = () => {
    setFromOpen(false);
    setToOpen(true);
  };

  const onFromDateChange = (val: Moment | null) => {
    setFromDate(val);
    if (val) {
      //For clear, do not focus on the "To" input
      setFromOpen(false);
      setToOpen(true);
    }
  };

  const onToDateChange = (val: Moment | null) => {
    setToOpen(false);
    setToDate(val);
  };

  const onFromTimeChange = (time: Moment | null) => {
    setFromTime(time || moment(initTime, minuteForamt));
    setFromTimeOpen(false);
    setToTimeOpen(true);
  };

  const onToTimeChange = (time: Moment | null) => {
    setToTime(time || moment(initTime, minuteForamt));
    setToTimeOpen(false);
  };

  const onFromTimeSelect = (time: Moment) => {
    const [fromHour, formMinutes] = [fromTime.hours(), fromTime.minutes()];
    const [currentHour, currentMinutes] = [time.hours(), time.minutes()];
    if (
      currentHour &&
      currentMinutes &&
      fromHour !== currentHour &&
      formMinutes !== currentMinutes
    ) {
      setFromTime(time);
      setFromTimeOpen(false);
    }
  };

  const onToTimeSelect = (time: Moment) => {
    const [toHour, toMinutes] = [toTime.hours(), toTime.minutes()];
    const [currentHour, currentMinutes] = [time.hours(), time.minutes()];
    if (
      currentHour &&
      currentMinutes &&
      toHour !== currentHour &&
      toMinutes !== currentMinutes
    ) {
      setToTime(time);
      setToTimeOpen(false);
    }
  };

  return (
    <>
      <div className="search-range-picker__cont">
        <div className="search-range-picker__from">
          <DatePicker
            value={fromDate}
            className="search-range-picker__datepicker"
            placeholder={"From"}
            ref={fromDateRef}
            onChange={onFromDateChange}
            onClick={onFromDateClick}
            open={fromOpen}
            showToday={false}
          />
          <DatePicker.TimePicker
            value={fromTime}
            className="search-range-picker__timepicker"
            format={minuteForamt}
            allowClear={false}
            onChange={onFromTimeChange}
            onSelect={onFromTimeSelect}
            open={fromTimeOpen}
            onClick={() => setFromTimeOpen(true)}
          />
        </div>
        <span className="search-range-picker__separator">~</span>
        <div className="search-range-picker__to">
          <DatePicker
            open={toOpen}
            value={toDate}
            placeholder={"To"}
            ref={toDateRef}
            onChange={onToDateChange}
            onClick={onToDateClick}
            className="search-range-picker__datepicker"
            showToday={false}
          />
          <DatePicker.TimePicker
            value={toTime}
            className="search-range-picker__timepicker"
            allowClear={false}
            format={minuteForamt}
            onChange={onToTimeChange}
            onSelect={onToTimeSelect}
            open={toTimeOpen}
            onClick={() => setToTimeOpen(true)}
          />
        </div>
      </div>
    </>
  );
}
