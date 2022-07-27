import React, { TextareaHTMLAttributes, useEffect, useState } from "react";
import { Checkbox, Input } from "antd";

const { TextArea } = Input;
type Textvalue = TextareaHTMLAttributes<HTMLTextAreaElement>["value"];
interface TextAreaProps {
  formData: {
    text: Textvalue;
    check: boolean;
  };
  onChange: (value: { text: Textvalue; check: boolean }) => void;
}

const SmartText = (props: TextAreaProps) => {
  const { formData, onChange } = props;
  const [text, setText] = useState<Textvalue>(formData.text);
  const [check, setCheck] = useState<boolean>(formData.check);

  useEffect(() => {
    onChange && onChange({ text, check });
  }, [text, check]);

  return (
    <>
      <Checkbox value={check} onChange={(e) => setCheck(e.target.checked)}>
        Quick search from nodes
      </Checkbox>
      <TextArea
        value={text}
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

export default SmartText;
