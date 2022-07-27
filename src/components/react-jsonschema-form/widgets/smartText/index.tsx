import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { Checkbox, Input } from "antd";

const { TextArea } = Input;
type Textvalue = TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
interface TextAreaProps {
  value: Textvalue;
  formData?: Textvalue;
  onChange?: (vale: Textvalue) => void;
}

const SmartTextWidget = (props: TextAreaProps) => {
  const { value, formData, onChange } = props;
  const [text, setText] = useState<Textvalue>(value || formData);

  useEffect(() => {
    onChange && onChange(text);
  }, [text]);

  return (
    <>
      <Checkbox></Checkbox>
      <TextArea
        value={value}
        allowClear
        autoSize={{ minRows: 5 }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        style={{ width: "100%", maxHeight: 180, overflow: "auto" }}
      />
    </>
  );
};

export default SmartTextWidget;
