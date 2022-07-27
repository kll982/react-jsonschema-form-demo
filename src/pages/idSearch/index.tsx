import React from "react";
import { idSearchSchema, idSearchUiSchema } from "./schemaFile";

import { BasicLayoutForm } from "@/pages/schema/rightFormSchema";
export const IdSearch = () => {
  return (
    <BasicLayoutForm schema={idSearchSchema} uiSchema={idSearchUiSchema} />
  );
};
