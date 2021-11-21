const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_PKEY);

// your server-side functionality
async function setMail(data) {
  const { name, email, message } = data.body;
  const msg = {
    to:
      process.env.NEXT_PUBLIC_EMAIL_RECIPIENT.indexOf(",") !== -1
        ? process.env.NEXT_PUBLIC_EMAIL_RECIPIENT.split(";")
        : process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
    from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
    subject: `[DZ-Skischool] message de ${email} - ${name}`,
    text: message,
    html: message,
  };

  return await sgMail.send(msg);
}

export default async (req, res) => {
  const response = await setMail(req);
  res.send({
    statusCode: response[0].statusCode,
  });
};
