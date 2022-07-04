import React, { useEffect, useState } from "react";
import { Card, Button, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { SketchPicker } from "react-color";
import "./index.less";

interface ColorPickerProps {
  color?: string;
  value?: string;
  handleOnColorClick?: () => void;
  handleOnColorClose?: () => void;
  handleOnColorChange?: (color: string) => void;
}
const ColorPicker = (props: ColorPickerProps) => {
  const [colorPickerVisble, setColorPickerVisble] = useState<boolean>(false);
  const [color, setColor] = useState<string | undefined>(
    props?.color || props?.value
  );

  console.log("colorPick", props);
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
      <div className="color-area" onClick={handleClick}>
        {color ? (
          <Space className="color-wrap">
            <span className="color-bg" style={{ background: color }} />
            <span style={{ color }}>{color}</span>
          </Space>
        ) : (
          <Button type="link">Pick a Color</Button>
        )}
      </div>

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
