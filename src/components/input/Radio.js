import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const RadioStyled = styled.label``;

const Radio = ({ checked, children, control, name, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <RadioStyled>
      <input
        onChange={() => {}}
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div
          className={`w-7 h-7 rounded-full ${
            checked ? "bg-green-400" : "bg-gray-200"
          }`}
        ></div>
        <span>{children}</span>
      </div>
    </RadioStyled>
  );
};

export default Radio;
