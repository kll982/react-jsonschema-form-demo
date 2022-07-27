import { Col, InputNumber, Row } from "antd";
import React from "react";

// Define a custom component for handling the root position object
class GeoPosition extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { ...props.formData };
  }

  onChange(name: any) {
    return (value: number) => {
      this.setState(
        {
          [name]: value,
        },
        () => this.props.onChange(this.state)
      );
    };
  }

  render() {
    const { lat, lon } = this.state;
    return (
      <div>
        <Row>
          <Col span={24}>{this.props?.schema?.title}</Col>
          <Col>
            <InputNumber
              type="number"
              value={lat}
              onChange={this.onChange("lat")}
            />
            <InputNumber
              type="number"
              value={lon}
              onChange={this.onChange("lon")}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GeoPosition;
