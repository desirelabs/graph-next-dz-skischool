import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinning = css`
  width: 20px;
  height: 20px;
  display: block;
  animation: 0.7s linear 0s infinite running ${spin};
`;

const IconWrapper = styled.span`
  ${(props) => props.isSpinning && spinning};
  height: 27px;
`;

export const Icon = (props) => {
  return (
    <IconWrapper isSpinning={props.isSpinning}>{props.children}</IconWrapper>
  );
};
