"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
// import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = ({
  fullpageApi,
  isWideScreen,
}: {
  fullpageApi: any;
  isWideScreen: boolean;
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [notification, setNotification] = useState("");

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(
    async (data: any) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("yourAction");
      console.log(token);
      submitEnquiryForm(token, data);
      // Do whatever you want with the token
    },
    [executeRecaptcha]
  );

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // (window as any).grecaptcha.ready(function () {
  //   //   (window as any).grecaptcha
  //   //     .execute("reCAPTCHA_site_key", { action: "submit" })
  //   //     .then(function (token) {
  //   //       // Add your logic to submit to your backend server here.
  //   //     });
  //   // });
  // };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleReCaptchaVerify(data);
  };

  const submitEnquiryForm = (gReCaptchaToken: string, data: any) => {
    async function goAsync() {
      const response = await axios({
        method: "post",
        url: "/api/contactFormSubmit",
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
          gRecaptchaToken: gReCaptchaToken,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      if (response?.data?.success === true) {
        setNotification(`Success with score: ${response?.data?.score}`);
      } else {
        setNotification(`Failure with score: ${response?.data?.score}`);
      }
    }
    goAsync().then(() => {}); // suppress typescript error
  };

  return (
    <div className="section relative overflow-x-hidden">
      <Image
        className="absolute top-40 -left-20 hidden lg:block"
        src="/images/potato4.svg"
        width={200}
        height={200}
        alt="potato4"
      />
      <Image
        className="absolute top-1/2 -translate-y-1/2 -right-24 -rotate-3 hidden lg:block"
        src="/images/potato5.svg"
        width={250}
        height={250}
        alt="potato5"
      />
      <div className="container min-h-screen mx-auto flex justify-center items-center relative lg:overflow-hidden">
        <Image
          className="absolute -top-20 left-52 -rotate-3 hidden xl:block"
          src="/images/potato3.svg"
          width={150}
          height={150}
          alt="potato3"
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 px-4 lg:px-8 xl:px-0 md:mt-12 lg:mb-0">
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <h4 className="font-amatic-sc font-bold text-8xl lg:mb-24">
              Get in Touch
            </h4>
            <Image
              src="/images/contact-main2.svg"
              width={400}
              height={400}
              className="hidden lg:block"
              alt="contact-main"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="doodle font-amatic-sc text-3xl flex flex-col items-end w-full"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  id="name"
                  className={`px-2 bg-beige ${errors.name && "error"}`}
                  {...register("name", { required: true, maxLength: 30 })}
                />
                {errors.name && (
                  <span className="text-xl lg:text-2xl font-bold text-rose-500">
                    Name field is required
                  </span>
                )}
              </div>

              <div className="w-full flex flex-col relative">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  id="email"
                  className={`px-2 bg-beige ${errors.email && "error"}`}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-xl lg:text-2xl font-bold text-rose-500">
                    Email field is required
                  </span>
                )}
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="message" className="font-bold">
                  Message
                </label>
                <textarea
                  rows={isWideScreen ? 5 : 3}
                  id="message"
                  className={`resize-none bg-beige px-2 focus-visible:outline-none  ${
                    errors.message && "error"
                  }`}
                  {...register("message", { required: true, maxLength: 200 })}
                />
                {errors.message && (
                  <span className="text-xl lg:text-2xl font-bold text-rose-500">
                    Message field is required
                  </span>
                )}
              </div>

              <div className="w-full relative flex justify-end">
                <Image
                  className="absolute -bottom-20 -left-16 hidden lg:block"
                  src="/images/potato1.svg"
                  width={250}
                  height={250}
                  alt="potato1"
                />
                <Image
                  src="/images/contact-main2.svg"
                  width={200}
                  height={200}
                  className="absolute -bottom-20 -left-6 z-10 lg:hidden"
                  alt="contact-main-mobile"
                />
                <button
                  type="submit"
                  className="font-bold font-amatic-sc w-1/2 mt-4 lg:mt-10 flex justify-center items-center relative group"
                >
                  <div className="relative">
                    Submit
                    <div className="invisible group-hover:visible group-hover:text-black group-hover:text-4xl absolute top-0 left-1/2 -translate-x-1/2 z-30 lg:z-10 transition-all">
                      Submit
                    </div>
                  </div>
                  <Image
                    className="absolute top-30 lg:-top-24 right-1/2 translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 brightness-90 transition-all scale-[2] lg:scale-100 z-20 lg:z-0"
                    src="/images/element/e-24.svg"
                    width={240}
                    height={240}
                    alt="e-24-tomato-onclick"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="bg-primary">
        <div className="container p-6 h-full mx-auto flex justify-center items-center">
          <div className="w-full flex justify-between items-center">
            <Image
              src="/images/logo-white.svg"
              alt="logo-footer"
              width="60"
              height="60"
            />
            <div className="flex justify-center text-lg text-white font-black">
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </div>
            <ul className="flex justify-center items-center mb-6 lg:mb-0">
              <li className="mr-2">
                <a
                  href="https://www.linkedin.com/in/chih-lung-tu-a6807821a/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center m-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="white" size="2xl" />
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="https://github.com/juker1141"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center m-2"
                >
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    color="white"
                    size="2xl"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:juker1141@gmail.com"
                  className="flex items-center m-2"
                >
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    color="white"
                    size="2xl"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
