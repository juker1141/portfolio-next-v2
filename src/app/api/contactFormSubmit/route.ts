import { NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: Request, response: Response) {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();
  const { gRecaptchaToken, name, email, message } = postData;

  console.log(
    "gRecaptchaToken,name,email,message:",
    gRecaptchaToken?.slice(0, 10) + "...",
    name,
    email,
    message
  );

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      console.log("try send email");
      transport.sendMail(mailOptions, function (err) {
        console.log(err);
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  let res: any;
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    console.log("recaptcha error:", e);
  }

  if (res && res.data?.success && res.data?.score > 0.5) {
    try {
      // Save data to the database from here
      await sendMailPromise();
      console.log("Saving data to the database:", name, email, message);
      console.log("res.data?.score:", res.data?.score);

      return NextResponse.json({
        success: true,
        name,
        email,
        message,
        score: res.data?.score,
      });
    } catch (e) {
      return NextResponse.json({
        success: false,
        name,
        message: "failed to sending email",
      });
    }
  } else {
    console.log("fail: res.data?.score:", res.data?.score);
    return NextResponse.json({ success: false, name, score: res.data?.score });
  }
}
