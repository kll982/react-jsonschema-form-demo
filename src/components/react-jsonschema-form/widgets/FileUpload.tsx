import React, { useEffect, useState } from "react";
import { Upload, Button } from "antd";
import type { UploadProps } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { UploadOutlined } from "@ant-design/icons";

interface FileChange {
  value?: Array<object>;
  onChange: (file: Array<object>) => void;
}

const FileWidget = (props: FileChange) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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
    console.log("info", info, newFileList);
  };
  const uploadProps: UploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    ...props,
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
