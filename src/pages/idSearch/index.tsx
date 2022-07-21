import React from "react";
import { idSearchSchema, idSearchUiSchema } from "./schemaFile";

import { BasicLayoutForm } from "@/components";
export const IdSearch = () => {
  return (
    <BasicLayoutForm schema={idSearchSchema} uiSchema={idSearchUiSchema} />
  );
};
