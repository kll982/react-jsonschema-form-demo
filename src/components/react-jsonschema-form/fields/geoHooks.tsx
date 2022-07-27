import { Col, InputNumber, Row } from "antd";
import { JSONSchema7 } from "json-schema";
import React, { useEffect, useState } from "react";

// Define a custom component for handling the root position object
const GeoPosition = (props: {
  onChange: (value: { lat: number; lon: number }) => void;
  formData: {
    lat: number;
    lon: number;
  };
  schema: JSONSchema7;
}) => {
  const { formData } = props;
  const [lat, setLat] = useState<number>(formData?.lat);
  const [lon, setLon] = useState<number>(formData?.lon);

  useEffect(() => {
    props.onChange({
      lat,
      lon,
    });
  }, [lat, lon]);

  return (
    <div>
      <Row>
        <Col span={24}>{props?.schema?.title}</Col>
        <Col>
          <InputNumber
            type="number"
            value={lat}
            onChange={(value) => setLat(value)}
          />
          <InputNumber
            type="number"
            value={lon}
            onChange={(value) => setLon(value)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default GeoPosition;
