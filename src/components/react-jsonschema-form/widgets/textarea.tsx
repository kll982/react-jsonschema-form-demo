import React, { useEffect, useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;
type Textvalue = string | number | readonly string[];
interface TextAreaProps {
  value: Textvalue;
  formData?: Textvalue;
  onChange?: (vale: Textvalue) => void;
}

const TextAreaWidget = (props: TextAreaProps) => {
  const { value, formData, onChange } = props;
  const [text, setText] = useState<Textvalue>(value || formData);

  useEffect(() => {
    onChange && onChange(text);
  }, [text]);

  return (
    <TextArea
      value={value}
      allowClear
      autoSize={{ minRows: 5 }}
      onChange={(e) => {
        setText(e.target.value);
      }}
      style={{ width: "100%", maxHeight: 180, overflow: "auto" }}
    />
  );
};

export default TextAreaWidget;
