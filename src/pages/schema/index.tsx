import React from "react";
import { RenderRjsfForm } from "components";
import { RjsfProps } from "components/react-jsonschema-form/interface";
import "./index.less";

export const SchemaForm = (props: RjsfProps) => <RenderRjsfForm {...props} />;
