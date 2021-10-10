import styled from "styled-components"

const StyledNav = styled.nav`
  background-image: none;
  background-comor: rgba(0,0,0,0)
`

export const Nav = () => {
  return (
    <StyledNav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
      <div className="container"><a className="navbar-brand d-inline-flex" href="index.html"><span className="text-light fs-2 fw-bold ms-2">DZ Ski School</span></a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end flex-grow-1">
            <li className="nav-item px-2"><a className="nav-link fw-bold active" aria-current="page" href="#home">Home</a></li>
            <li className="nav-item px-2"><a className="nav-link fw-bold" href="#services">Services</a></li>
            <li className="nav-item px-2"><a className="nav-link fw-bold" href="#news">News</a></li>
            <li className="nav-item px-2"><a className="nav-link fw-bold" href="#prices">Prices</a></li>
            <li className="nav-item px-2"><a className="nav-link fw-bold" href="#contact">Contact &amp; Booking</a></li>
          </ul>
        </div>
      </div>
    </StyledNav>
  )
}
