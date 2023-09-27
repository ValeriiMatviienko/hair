import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function EmailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, number, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New message from contact form",
      text: `Name: ${name}\nNumber: ${number}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, _info) => {
      if (error) {
        return res
          .status(500)
          .json({ success: false, error: error.toString() });
      }
      res.status(200).json({ success: true, message: "Sent successfully" });
    });
  }
}
