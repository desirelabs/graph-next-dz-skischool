import styled from "styled-components";
import { Fragment } from "react";

const Img = styled.img`
  margin: 12px;
`;

const LeftReseau = ({ accroche, lien, icone }) => {
  return (
    <span className=" pull-right">
      {accroche.split("us").map(
        (chunck, i) =>
          i === 0 && (
            <span className="text-dark">
              {" "}
              {chunck + "us"}
              <a href={lien}>
                <Img src={icone.url} alt="" />
              </a>
            </span>
          )
      )}
    </span>
  );
};

const RightReseau = ({ accroche, lien, icone }) => {
  return (
    <Fragment>
      {accroche.split("us").map(
        (chunck, i) =>
          i === 1 && (
            <span className="text-dark">
              <a href={lien}>
                <Img src={icone.url} alt="" />
              </a>
              {chunck}
            </span>
          )
      )}
    </Fragment>
  );
};

const StyledSection = styled.section`
  background-color: #ebf9ff;
`;

export const News = ({ data }) => {
  const {
    titre,
    accroche,
    lienDuRSeauSocial,
    icone,
    lienDuRSeauSocialCopy1,
    iconeCopy1,
    imagesDeLaGalerie,
  } = data;
  return (
    <StyledSection className="py-0 pb-6" id="news">
      <div className="container">
        <div className="text-center">
          <h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase text-dark">
            {titre}
          </h5>
        </div>
        <div className="row h-100 d-lg-flex align-items-center">
          <div className="col-6">
            <LeftReseau
              accroche={accroche}
              lien={lienDuRSeauSocial}
              icone={icone}
            />
          </div>
          <div className="col-6 ">
            <RightReseau
              accroche={accroche}
              lien={lienDuRSeauSocialCopy1}
              icone={iconeCopy1}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-latest"
                role="tabpanel"
                aria-labelledby="nav-latest-tab"
              >
                <div
                  className="carousel slide"
                  id="carouselLatest"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <div className="row h-100 align-items-center">
                        {imagesDeLaGalerie.map(({ responsiveImage }) => (
                          <div
                            key={responsiveImage.src}
                            className="col-sm-6 col-md-4 mb-4"
                          >
                            <div
                              className="card text-white p-6 pb-9"
                              style={{
                                background: `url(${responsiveImage.src}) no-repeat center / cover`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};
