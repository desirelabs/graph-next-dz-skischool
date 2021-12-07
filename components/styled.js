import styled from "styled-components";

export const Section = styled.section.attrs({
  className: "",
})`
  background-color: ${({ appearance }) =>
    appearance === "dark" ? "#070707" : "#E6E6E6"};
  position: relative;
  padding-top: 72px;
  padding-bottom: 0;

  @media (min-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const SectionTitle = styled.h2.attrs({
  className: "text-uppercase text-center",
})`
  color: ${({ appearance }) => (appearance === "dark" ? "#070707" : "#E6E6E6")};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button.attrs({
  className: "btn btn-lg btn-primary",
})`
  height: 45px;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
`;
