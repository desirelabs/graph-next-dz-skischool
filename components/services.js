import styled from "styled-components";
import { Section, SectionTitle } from "./styled";
import Markdown from "markdown-to-jsx";
import { Fragment } from "react";

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
    <Section appearance="dark" id="services">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col">
            <SectionTitle appearance="light">{titreDeSection}</SectionTitle>
          </div>
        </div>
        <div className="row flex-center pb-6">
          <div className="col-lg-6 col-md-12 order-md-0 text-center text-md-start">
            <img src={image.url} width="100%" alt={image.alt} />
          </div>
          <div className="col-sm-10 col-md-6 col-lg-6 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <SectionTitle appearance="light">{accroche}</SectionTitle>
                <p className="my-4 pe-xl-5">{paragraphe}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-6">
          {services.map(({ titre, image, description }) => (
            <div
              key={titre}
              className="col-sm-10 col-md-4 col-lg-4 text-center text-md-start"
            >
              <SectionTitle appearance="light">{titre}</SectionTitle>
              <img src={image.url} width="100%" alt={image.alt} />
              <p className="my-4 pe-xl-5">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <SpacerBg image={additionnalImage.url} />
      <div className="container-lg py-8">
        <div className="row flex-center pb-6">
          <div className="col-12 order-md-0 text-center text-md-start">
            <SectionTitle appearance="light">{titreCopy4}</SectionTitle>
          </div>
          <div className="col-12 order-md-0 text-center text-md-start">
            <div className="my-4 pe-xl-5 text-start">
              <Markdown>{paragrapheCopy4}</Markdown>
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-12 order-md-0 text-center text-md-start">
            <SectionTitle appearance="light">
              {titreCopy5.split("\\n").map((el, i) =>
                i === 0 ? (
                  <Fragment key={i}>{el}</Fragment>
                ) : (
                  <Fragment key={i}>
                    <br />
                    {el}
                  </Fragment>
                )
              )}
            </SectionTitle>
          </div>
          <img src={imageCopy4.url} width="100%" alt={imageCopy4.alt} />
        </div>
      </div>
    </Section>
  );
};
