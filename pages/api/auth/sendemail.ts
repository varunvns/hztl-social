// import type { NextApiRequest, NextApiResponse } from 'next'
const mail = require("@sendgrid/mail");
//mail.setApiKey(process.env.SENDGRID_API_KEY);
mail.setApiKey(
  "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"
);

export default function handler(email: string) {
  console.log("INSIDE SEND MAIL");
  const message = `
    Email: ${email}
    Message:'Hi ${email} You have been successfully registered to Horizontal Social'
    `;
  const data = {
    to: email,
    from: "dtiwari@horizontal.com",
    subject: "HZTL Social Account Creation Confirmation",
    text: message,
  };
  console.log("sending email");
  const status: boolean = mail.send(data);
  if (status) {
    console.log("email sent");
    console.log(email);
  }
}
