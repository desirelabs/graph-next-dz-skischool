import { Button } from "./styled";

export const ContactForm = () => {
  return (
    <form
      name="contact"
      data-netlify-recaptcha="true"
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="name" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-check-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" rows="3" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
