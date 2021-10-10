import styled, { css } from "styled-components";

const BgHolder = styled.div`
  background-image:url(https://www.datocms-assets.com/56203/1633872312-b9a941c8caa6528898418787e1b06f7c13cc86-mv2.webp);
  background-position: center 72px;
  background-size: cover;
  background-attachment: fixed;
`

const shadow = css`
  text-shadow: 0px 7px 19px rgb(100 100 111 / 20%);
  text-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
`

const H1 = styled.h1`
  ${shadow}
`

const Text = styled.h2`
  ${shadow}
`

const LargeButton = styled.a`
  padding: 15px 45px;
  text-transform: uppercase;
  border-width: 2px;
`;

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
            <H1 className="display-1 lh-sm text-uppercase text-light">{heading}<br className="d-xxl-block" />{headingCopy1}</H1>
            <Text className="pt-4">
              <LargeButton className="btn btn-lg btn-outline-primary me-3" href="#services">Discover now</LargeButton>
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}
