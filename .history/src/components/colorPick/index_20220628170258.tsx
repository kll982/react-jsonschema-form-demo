import React, { useState } from "react";
import { Card } from "antd";
import { SketchPicker } from "react-color";

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

  const handleClick = () => {
    setColorPickerVisble(!colorPickerVisble);
    props.handleOnColorClick && props.handleOnColorClick();
  };

  const handleClose = () => {
    setColorPickerVisble(false);
    props.handleOnColorClose && props.handleOnColorClose();
  };

  const handleChange = (color: { hex: string }) => {
    setColor(color.hex);
    props.handleOnColorChange && props.handleOnColorChange(color.hex);
  };
  {
    /* <div>
          <div onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div> */
  }
  return (
    <div>
      <div
        className="mark-color-btn ant-btn map-color-picker-btn"
        onClick={handleClick}
      >
        "Pick a Color"
      </div>
      {colorPickerVisble ? (
        <Card
          title="Default size card"
          extra={<Button type="link">Link</Button>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      ) : null}
    </div>
  );
};
export default ColorPicker;
