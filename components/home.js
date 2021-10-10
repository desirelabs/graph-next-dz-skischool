import styled from "styled-components";

const BgHolder = styled.div`
  background-image:url(assets/img/gallery/header-bg.png);
  background-position:right top;
  background-size:contain;
`

export const Home = ({ data }) => {
  const { heading, headingCopy1
  } = data;
  return (
    <section className="py-0" id="home">
      <BgHolder className="bg-holder">
      </BgHolder>

      <div className="container">
        <div className="row align-items-center min-vh-75 min-vh-xl-100">
          <div className="col-md-8 col-lg-6 text-md-start text-center">
            <h1 className="display-1 lh-sm text-uppercase text-light">{heading}<br className="d-xxl-block" />{headingCopy1}</h1>
            <div className="pt-4"><a className="btn btn-lg btn-outline-primary me-3" href="#services">Discover now</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
