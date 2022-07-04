import React, { useRef } from "react";
import { Button, Row, Col } from "antd";
import RjsfForm from "@rjsf/antd";
import { DateTimePicker } from "../widgets";
import { testSchema, testUiSchema, widgets } from "./utils";
import "../index.less";

// Define a custom component for handling the root position object
class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formData };
  }

  onChange(name) {
    return (event) => {
      this.setState(
        {
          [name]: parseFloat(event.target.value),
        },
        () => this.props.onChange(this.state)
      );
    };
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div>
        <input type="number" value={lat} onChange={this.onChange("lat")} />
        <input type="number" value={lon} onChange={this.onChange("lon")} />
      </div>
    );
  }
}

const fields = { geo: GeoPosition };

export const BasicLayoutForm = () => {
  const onSubmit = ({ formData }, e) =>
    console.log("Data submitted: ", formData);

  const onError = (errors) => {
    console.log("errors", errors);
  };

  return (
    <div className={"form"}>
      <DateTimePicker />
      {/* 默认button type="button" ,需自定义submit button */}
      <RjsfForm
        widgets={widgets}
        schema={testSchema}
        uiSchema={testUiSchema}
        onSubmit={onSubmit}
        onError={onError}
        fields={fields}
        // ObjectFieldTemplate={ObjectFieldTemplate}
      >
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </RjsfForm>
    </div>
  );
};
