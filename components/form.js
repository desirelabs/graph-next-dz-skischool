import { Button } from "./styled";
import axios from "axios";
import { createRef, Fragment, useRef, useState } from "react";
import { Icon } from "./icons";
import { SpinnerIcon } from "./icons/spinner";
import { ReCAPTCHA } from "react-google-recaptcha";
import { Alert } from "./alert";

export const ContactForm = () => {
  const formRef = useRef();
  const recaptchaRef = createRef();

  const [loading, setLoading] = useState(false);

  const initialAlert = { type: "", message: "" };
  const [alert, setAlert] = useState(initialAlert);

  const initialData = { name: "", email: "", message: "" };
  const [data, setData] = useState(initialData);

  const defineAlert = ({ message, type }) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(initialAlert);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/contact", data)
      .then(() => {
        defineAlert({ type: "success", message: "Message sent successfully!" });
        setLoading(false);
        setData(initialData);
        formRef?.current.reset();
      })
      .catch((error) => {
        defineAlert({
          type: "danger",
          message:
            "Something went wrong... Alternatively, you can send us an email.",
        });
        setLoading(false);
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    alert(`Hey`);
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current.reset();
  };

  return (
    <Fragment>
      <Alert type={alert.type} message={alert.message} />
      <form
        ref={formRef}
        name="contact"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <ReCAPTCHA
          ref={recaptchaRef}
          size="normal"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <sup>*</sup>
          </label>
          <input
            required={true}
            type="name"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            disabled={loading ? "disabled" : ""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <sup>*</sup>
          </label>
          <input
            required={true}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            disabled={loading ? "disabled" : ""}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-check-label" htmlFor="message">
            Message <sup>*</sup>
          </label>
          <textarea
            required={true}
            className="form-control"
            id="message"
            name="message"
            onChange={handleChange}
            rows="3"
            disabled={loading ? "disabled" : ""}
          />
        </div>
        <Button
          type="submit"
          className="d-flex justify-content-center"
          disabled={
            loading || !data.name || !data.email || !data.message
              ? "disabled"
              : ""
          }
        >
          {loading ? (
            <Icon isSpinning>
              <SpinnerIcon />
            </Icon>
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </Fragment>
  );
};
