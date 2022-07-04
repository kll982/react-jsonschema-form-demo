import {
  ColorPicker,
  DateTimePicker,
  RangeDateTimePicker,
  GeoPosition,
} from "../widgets";
const widgets = {
  DateTimeWidget: DateTimePicker,
  RangeDateTimeWidget: RangeDateTimePicker,
  ColorWidget: ColorPicker,
};

// 抽离Date方法,做组件
const DatePickerSchema = {
  type: "object",
  title: "Range Title",
  properties: {
    from: {
      type: "string",
      label: false,
    },
    to: {
      type: "string",
      label: false,
    },
  },
};

const fields = { geo: GeoPosition, dateTime: DateTimePicker };
const queries = [
  { id: "1e461fe7-e115-493e-8bb6-8fe4eb89f675", title: "Person" },
  { id: "a8e59741-c919-4011-b21c-fa17131eb0fe", title: "Test App" },
  { id: "5a53ce46-7fe6-47e7-b0b6-10ee6d1b74d4", title: "Meeting Helper" },
  { id: "73f570b2-1f0e-4646-be32-cf9bc4d0154c", title: "Test Complex Object" },
  { id: "f003e960-84b4-11eb-9d1b-3d59b327759d", title: "Call" },
  { id: "query4", title: "Trip Search" },
  {
    id: "45675ac1-a8ac-4547-ae7e-f45667cd1e41",
    title: "Test Complex Object_copy",
  },
  { id: "00f2e51a-c585-4255-afb1-812ae5dfcdc8", title: "Test HTML Object" },
];

const enumName = queries.map((i) => i.title);
const enumValue = queries.map((i) => i.id);

const rangeShow = [...enumValue].filter((k, i) => i !== 0 && i !== 2);

const testSchema = {
  type: "object",
  properties: {
    type: {
      title: "Type",
      type: "string",
      enumNames: enumName,
      enum: enumValue,
      default: enumValue[2],
    },
    syncWithSelection: {
      title: "Quick search from nodes",
      type: "boolean",
    },
    teaxarea: {
      type: "string",
    },
  },
  dependencies: {
    type: {
      oneOf: [
        {
          properties: {
            type: {
              enum: rangeShow,
            },
            range: DatePickerSchema,
          },
        },
        {
          properties: {
            type: {
              enum: [enumValue[2]],
            },
            range: DatePickerSchema,
            range1: {
              type: "object",
              title: "Range1 Error 不渲染",
              value: {
                from: undefined,
                to: undefined,
              },
            },
          },
        },
      ],
    },
  },
};

const testUiSchema = {
  "ui:order": ["type", "syncWithSelection", "range", "*"],
  dateTimeRange: {
    "ui:options": {
      label: false,
    },
  },
  teaxarea: {
    "ui:widget": "textarea",
    "ui:options": {
      label: false,
    },
  },
  range: {
    "ui:options": {
      label: false,
    },
    from: {
      "ui:widget": "DateTimeWidget",
      "ui:options": {
        label: false,
      },
    },
    to: {
      "ui:widget": "DateTimeWidget",
      "ui:options": {
        label: false,
      },
    },
  },
  range1: {
    "ui:widget": "RangeDateTimeWidget",
  },
};

export { fields, widgets, testSchema, testUiSchema };
