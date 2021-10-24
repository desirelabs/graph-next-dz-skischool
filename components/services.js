import styled from "styled-components";
import { Section, SectionTitle } from "./styled";
import Markdown from "markdown-to-jsx";

const SpacerBg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  padding-bottom: 25%;
  &::after {
    content: "";
    padding-bottom: 10%;
  }
`;

export const Services = ({ data }) => {
  const {
    accroche,
    titreDeSection,
    additionnalImage,
    paragraphe,
    image,
    titreCopy1,
    paragrapheCopy1,
    imageCopy1,
    titreCopy2,
    paragrapheCopy2,
    imageCopy2,
    titreCopy3,
    paragrapheCopy3,
    imageCopy3,
    titreCopy4,
    paragrapheCopy4,
    imageCopy4,
    titreCopy5,
  } = data;

  const services = [
    { titre: titreCopy1, image: imageCopy1, description: paragrapheCopy1 },
    { titre: titreCopy2, image: imageCopy2, description: paragrapheCopy2 },
    { titre: titreCopy3, image: imageCopy3, description: paragrapheCopy3 },
  ];

  return (
    <Section className="bg-black pt-1 pb-0" id="services">
      <div className="container-lg pb-5">
        <div className="row justify-content-center pb-6">
          <div className="col-lg-7 mx-auto text-center my-5">
            <SectionTitle>{titreDeSection}</SectionTitle>
          </div>
        </div>
        <div className="row flex-center pb-6">
          <div className="col-6 order-md-0 text-center text-md-start">
            <img src={image.url} width="100%" alt={image.alt} />
          </div>
          <div className="col-sm-10 col-md-6 col-lg-6 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <SectionTitle>{accroche}</SectionTitle>
                <p className="my-4 pe-xl-5">{paragraphe}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-center pb-6">
          {services.map(({ titre, image, description }) => (
            <div
              key={titre}
              className="col-sm-10 col-md-4 col-lg-4 text-center text-md-start"
            >
              <div className="row h-100">
                <div className="col-12">
                  <SectionTitle className="text-center">{titre}</SectionTitle>
                  <img src={image.url} width="100%" alt={image.alt} />
                  <p className="my-4 pe-xl-5">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SpacerBg image={additionnalImage.url} />
      <div className="container-lg py-8 px-8">
        <div className="row flex-center pb-6">
          <div className="col-12 order-md-0 text-center text-md-start">
            <SectionTitle className="text-center">{titreCopy4}</SectionTitle>
          </div>
          <div className="col-12 order-md-0 text-center text-md-start">
            <p className="my-4 pe-xl-5">
              <Markdown>{paragrapheCopy4}</Markdown>
            </p>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-12 order-md-0 text-center text-md-start">
            <SectionTitle className="text-center">{titreCopy5}</SectionTitle>
          </div>
          <img src={imageCopy4.url} width="100%" alt={imageCopy4.alt} />
        </div>
      </div>
    </Section>
  );
};
