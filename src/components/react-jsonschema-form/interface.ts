import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { MouseEventHandler } from "react";

export interface RjsfProps {
  schema?: JSONSchema7;
  uiSchema?: UiSchema;
  widgets?: object;
  fields?: object;
  className?: string;
  children?: React.ReactNode;
  formData?: object;
  onSubmit?: (val: object) => void;
  onError?: (val: Array<object>) => void;
}

export interface PropertyDetail {
  content?: {
    props: any;
  };
}
export interface CustomizeFormProperties {
  properties?: PropertyDetail[];
  title?: string;
  description?: string;
}

export interface ArrayPropertyDetail {
  index: number;
  key?: string;
  className?: string;
  hasMoveUp?: boolean;
  hasMoveDown?: boolean;
  help?: string;
  onReorderClick: any;
  onDropIndexClick: any;
  children?: React.ReactNode;
}

export interface ArrayFieldProperties {
  className?: string | undefined;
  onAddClick: MouseEventHandler<HTMLButtonElement>;
  canAdd?: JSX.Element;
  items?: ArrayPropertyDetail[];
  title: string;
  description: string;
  properties?: PropertyDetail[];
}

export interface CustomField {
  id: string;
  classNames?: string;
  label: string;
  help?: string;
  required?: boolean;
  description?: string;
  errors?: string;
  children?: React.ReactNode;
  hidden?: boolean;
  schema?: JSONSchema7;
  uiSchema?: UiSchema;
}
