import { SectionTitle } from "../components/styled";
import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledLink = styled.a`
  color: red;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto", background: "none" }}
    width="88"
    height="88"
    display="block"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
  >
    <g transform="translate(86 50)">
      <circle r="5" fill="#ff727d">
        <animateTransform
          attributeName="transform"
          begin="-0.875s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(75.456 75.456) rotate(45)">
      <circle r="5" fill="#ff727d" fillOpacity="0.875">
        <animateTransform
          attributeName="transform"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(50 86) rotate(90)">
      <circle r="5" fill="#ff727d" fillOpacity="0.75">
        <animateTransform
          attributeName="transform"
          begin="-0.625s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(24.544 75.456) rotate(135)">
      <circle r="5" fill="#ff727d" fillOpacity="0.625">
        <animateTransform
          attributeName="transform"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(14 50) rotate(180)">
      <circle r="5" fill="#ff727d" fillOpacity="0.5">
        <animateTransform
          attributeName="transform"
          begin="-0.375s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(24.544 24.544) rotate(225)">
      <circle r="5" fill="#ff727d" fillOpacity="0.375">
        <animateTransform
          attributeName="transform"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(50 14) rotate(270)">
      <circle r="5" fill="#ff727d" fillOpacity="0.25">
        <animateTransform
          attributeName="transform"
          begin="-0.125s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
    <g transform="translate(75.456 24.544) rotate(315)">
      <circle r="5" fill="#ff727d" fillOpacity="0.125">
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
      </circle>
    </g>
  </svg>
);

export default function Success() {
  const router = useRouter();

  function startRedirect() {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }

  useEffect(() => {
    startRedirect();
  }, []);

  return (
    <Container>
      <SectionTitle>Form successfully submitted!</SectionTitle>
      <p>You are being redirected...</p>
      <p>
        <Spinner />
      </p>
      <p>
        If redirect did not work,{" "}
        <Link href={"/"}>
          <StyledLink>click here</StyledLink>
        </Link>
        .
      </p>
    </Container>
  );
}
