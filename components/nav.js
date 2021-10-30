import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const StyledNav = styled.nav`
  background-image: none;
  background-color: rgba(0, 0, 0, 0);
`;

export const Nav = () => {
  const [toggled, setToggle] = useState(false);

  const toggle = () => setToggle(!toggled);

  return (
    <StyledNav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block bg-black"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <Link href={"/"}>
          <a className="navbar-brand d-inline-flex">
            <img
              src="https://www.datocms-assets.com/56203/1635576866-untitled-edited.png?auto=format"
              width="80"
              alt="DZ-Ski School"
            />
          </a>
        </Link>
        <button
          className={toggled ? "navbar-toggler collapsed" : "navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon">{""}</span>
        </button>
        <div
          className={
            toggled
              ? "collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 show"
              : "collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end flex-grow-1">
            <li className="nav-item px-2">
              <a
                className="nav-link fw-bold active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-bold" href="#services">
                Exclusive services
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-bold" href="#news">
                News
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-bold" href="#prices">
                Prices
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-bold" href="#contact">
                Contact &amp; Booking
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};
