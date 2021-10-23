export const ContactForm = () => {
  return (
    <form name="contact" data-netlify="true">
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
