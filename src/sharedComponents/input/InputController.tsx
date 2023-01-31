import React, { FunctionComponent } from "react";
import {
  InputElement,
  Label,
  InputElementContainer,
  EyeContainer,
  Body,
} from "./Theme";



interface InputControllerInfo {
  type: string;
  name: string;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  placeHolder?: string;
  register?: any;
  required?: boolean;
  errors?: any;
  validation?: any;
  style?:any
}

export const InputController: FunctionComponent<InputControllerInfo> = ({
  type,
  name,
  label,
  id,
  className,
  disabled,
  value,
  defaultValue,
  placeHolder,
  register,
  required,
  errors,
  validation,
  style,
  ...rest
}) => {
  
  return (
    <Body>
      <InputElementContainer className={className}>
        <Label for={id} required={required}>{label}</Label>
        <InputElement
          {...style}
          type={type}
          name={name}
          id={id && id}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          {...register?.register(name, validation && validation)}
        />
      </InputElementContainer>
      {<p>{errors && errors[name]?.message}</p>}
    </Body>
  );
};

export default InputController;
