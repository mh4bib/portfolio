import nodemailer from "nodemailer";

export const sendMail = async ({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) => {
  try {
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: to,
      subject: subject,
      text: message,
    };

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const res = await transporter.sendMail(mailOptions);
    return res;
  } catch (error) {
    return false;
  }
};
