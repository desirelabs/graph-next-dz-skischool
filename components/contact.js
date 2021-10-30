import { ContactForm } from "./form";
import Markdown from "markdown-to-jsx";
import { Section, SectionTitle } from "./styled";

export const Contact = (props) => {
  const { data } = props;
  const { titre, infosDeContact, paragraphe, dTails } = data;
  return (
    <Section appearance="dark" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center my-5">
            <SectionTitle appearance="light">{titre}</SectionTitle>
            <div>
              <Markdown options={{ forceBlock: true }}>{paragraphe}</Markdown>
            </div>
          </div>
        </div>
        <div className="row flex-center h-100">
          <div className="col-lg-6 text-light">
            <h5 className="mb-4">
              <Markdown>{infosDeContact}</Markdown>
            </h5>
            <div className="mb-4">
              <Markdown options={{ forceBlock: false }}>{dTails}</Markdown>
            </div>
          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
};
