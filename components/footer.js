import { Footer } from "./styled";

export const Foot = () => (
  <Footer>
    {new Date().getFullYear()} DZ-SkiSchool &copy; -{" "}
    <a href="https://we-are-lion.fr" target="_blank">
      created by Franck LEBAS
    </a>
  </Footer>
);
