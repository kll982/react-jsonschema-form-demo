import React, { useEffect, useState } from "react";
import { Card, Button, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { SketchPicker } from "react-color";
import "./index.less";

interface ColorPickerProps {
  width?: string;
  height?: string;
  color?: string;
  handleOnColorClick?: () => void;
  handleOnColorClose?: () => void;
  handleOnColorChange?: (color: string) => void;
}
const ColorPicker = (props: ColorPickerProps) => {
  const [colorPickerVisble, setColorPickerVisble] = useState<boolean>(false);
  const [color, setColor] = useState<string>(props.color || "#000");

  useEffect(() => {
    setColorPickerVisble(false);
  }, [color]);

  const handleClick = () => {
    setColorPickerVisble(!colorPickerVisble);
    props.handleOnColorClick && props.handleOnColorClick();
  };

  const handleClose = () => {
    setColorPickerVisble(false);
    props.handleOnColorClose && props.handleOnColorClose();
  };

  const handleChange = (color: { hex: string }) => {
    console.log("color", color);
    setColor(color.hex);
    props.handleOnColorChange && props.handleOnColorChange(color.hex);
  };

  return (
    <div>
      <Space className="color-wrap">
        {/* <Button>Pick a Color</Button> */}
        <span
          onClick={handleClick}
          className="color-bg"
          style={{ background: color }}
        />
        {color}
      </Space>
      {colorPickerVisble ? (
        <Card
          title="Choose Picker"
          extra={
            <Button
              type="link"
              onClick={handleClose}
              icon={<CloseOutlined />}
            />
          }
          style={{ width: 300 }}
        >
          <SketchPicker color={color} onChange={handleChange} />
        </Card>
      ) : null}
    </div>
  );
};
export default ColorPicker;
