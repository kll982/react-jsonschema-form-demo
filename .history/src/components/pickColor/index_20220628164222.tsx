import { useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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

  const styles = reactCSS({
    default: {
      color: {
        width: props.width || "72px",
        height: props.height || "24px",
        background: props.color || "#fff",
        borderRadius: "2px",
      },
      swatch: {
        background: props.color || "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      <div
        className="mark-color-btn ant-btn map-color-picker-btn"
        onClick={handleClick}
      >
        {t("pick_a_color", "Pick a Color")}
      </div>
      {colorPickerVisble ? (
        <div style={styles.popover as React.CSSProperties}>
          <div
            style={styles.cover as React.CSSProperties}
            onClick={handleClose}
          />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};
export default ColorPicker;
