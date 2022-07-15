import React, { useEffect, useState } from "react";
import { Upload, Button } from "antd";
import type { UploadProps } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { UploadOutlined } from "@ant-design/icons";

interface FileChange {
  value?: UploadFile[];
  formData?: UploadFile[];
  onChange: (file: UploadFile[]) => void;
  option?: object;
}

const FileWidget = (props: FileChange) => {
  const { value, formData, option } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(
    value || formData || []
  );

  useEffect(() => {
    props?.onChange(fileList);
  }, [fileList]);

  const handleChange: UploadProps["onChange"] = (info) => {
    const { fileList } = info;
    let newFileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    // .filter((file) => file.status === "done");

    setFileList(newFileList);
  };
  const uploadProps: UploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    ...option,
    onChange: handleChange,
    fileList,
  };

  return (
    <Upload {...uploadProps} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};
export default FileWidget;
