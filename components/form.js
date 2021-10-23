export const ContactForm = () => {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="Contact-Form" value="contact" />
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
