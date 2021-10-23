import { ContactForm } from "./form";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center my-5">
            <h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase">
              what customers are saying
            </h5>
          </div>
        </div>
        <div className="row flex-center h-100">
          <div className="col-xl-9">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
