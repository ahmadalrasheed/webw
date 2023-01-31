import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled, { css } from "styled-components";

export const ButtonBody = styled.button<any>`
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid gray;
  text-align: center;
  cursor: pointer;
  &:disabled {
    border: none;
    background-color: #ebebe4;
    cursor: not-allowed;
    &:hover {
      background-color: #ebebe4 !important;
    }
  }
  &:hover {
    ${(props) =>
      props?.hoverBackgroundColor &&
      !props?.disabled &&
      css`
        background-color: ${props?.hoverBackgroundColor};
      `}
  }
  ${(props) =>
    props?.backgroundColor &&
    !props?.disabled &&
    css`
      background-color: ${props?.backgroundColor};
    `}
  ${(props) =>
    props?.color &&
    !props?.disabled &&
    css`
      color: ${props?.color};
    `}
    ${(props) =>
    props?.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
    ${(props) =>
    props?.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
      border: 0px;
    `}
`;
