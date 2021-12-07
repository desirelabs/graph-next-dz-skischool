import styled from "styled-components";
import Image from "next/image";
import { SectionTitle } from "./styled";

const Img = styled.img`
  margin: 12px;
`;

const InnerText = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const LeftReseau = ({ accroche, lien, icone }) => {
  return (
    <span className="float-end">
      {accroche.split("us").map(
        (chunck, i) =>
          i === 0 && (
            <span key={chunck} className="text-dark">
              <InnerText> {chunck + "us"}</InnerText>
              <a href={lien} target="_blank" rel="noreferrer">
                <Image src={icone.url} width="80" height="80" alt="Facebook" />
              </a>
            </span>
          )
      )}
    </span>
  );
};

const RightReseau = ({ accroche, lien, icone }) => {
  return (
    <span className="float-start">
      {accroche.split("us").map(
        (chunck, i) =>
          i === 1 && (
            <span key={chunck} className="text-dark">
              <a href={lien} target="_blank" rel="noreferrer">
                <Image src={icone.url} width="80" height="80" alt="Instagram" />
              </a>
              <InnerText>{chunck}</InnerText>
            </span>
          )
      )}
    </span>
  );
};

const StyledSection = styled.section.attrs({
  className: "pb-5 pt-5",
})`
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
          <SectionTitle appearance="dark">{titre}</SectionTitle>
        </div>
        <div className="row h-100 d-lg-flex align-items-center mb-4">
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
