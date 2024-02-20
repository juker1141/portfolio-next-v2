"use client";

import Image from "next/image";
import { useCallback, useState, useRef } from "react";

import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useMediaQuery } from "react-responsive";
import { largeScreenSize } from "@/util/screen";

import { Modal, useModal } from "@/components/Modal";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = ({ fullpageApi }: { fullpageApi: any }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [notification, setNotification] = useState("");

  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${largeScreenSize})`,
  });

  const { modalRef, modalType, isShowModal, showModal, hideModal } = useModal();

  useGSAP(
    () => {
      if (sectionRef.current) {
        const target: any = sectionRef.current;
        const layout = target.querySelector(".layout").children;
        const heading = target.querySelector(".heading");
        const content = target.querySelector(".content");
        const images = target.querySelector(".images");

        gsap.to(layout, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(heading, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(content, {
          autoAlpha: 0,
          duration: 0,
        });
        gsap.to(images, {
          autoAlpha: 0,
          x: "-30vw",
          duration: 0,
        });
      }
    },
    { scope: sectionRef }
  );

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

  const {
    register,
    handleSubmit,
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
    goAsync()
      .then(() => {
        showModal("success");
      })
      .catch(() => {
        showModal("error");
      }); // suppress typescript error
  };

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden fp-auto-height"
    >
      <div className="layout absolute w-full h-full -z-5">
        <Image
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:block drop-shadow"
          src="/images/main/potato1.svg"
          style={{ width: 250, height: 250 }}
          width={250}
          height={250}
          alt="potato1"
        />
        <Image
          className="absolute -top-20 left-52 -rotate-3 hidden xl:block drop-shadow"
          src="/images/main/potato3.svg"
          style={{ width: 150, height: 150 }}
          width={150}
          height={150}
          alt="potato3"
        />
        <Image
          className="absolute top-40 -left-20 hidden lg:block drop-shadow"
          src="/images/main/potato4.svg"
          style={{ width: 200, height: 200 }}
          width={200}
          height={200}
          alt="potato4"
        />
        <Image
          className="absolute top-1/2 -translate-y-1/2 -right-24 -rotate-3 hidden lg:block drop-shadow"
          src="/images/main/potato5.svg"
          style={{ width: 250, height: 250 }}
          width={250}
          height={250}
          alt="potato5"
        />
      </div>
      <div className="container min-h-full-dvh mx-auto flex justify-center items-center relative lg:overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 px-8 lg:px-8 xl:px-0 md:mt-12 lg:mb-0">
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <h4 className="font-amatic-sc font-bold text-7xl lg:text-8xl lg:mb-24 heading">
              Get in Touch
            </h4>
            <Image
              src="/images/main/contact-main.svg"
              style={{ width: 420, height: 420 }}
              width={420}
              height={420}
              className="hidden lg:block drop-shadow-images images"
              alt="contact-main"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="doodle font-amatic-sc text-xl lg:text-3xl flex flex-col items-end w-full content"
            >
              <div className="w-full flex flex-col">
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <div className="relative flex flex-col">
                  <input
                    id="name"
                    className={`px-1 lg:px-2 bg-beige focus:outline-blue-400 ${
                      errors.name && "error"
                    }`}
                    {...register("name", { required: true, maxLength: 30 })}
                  />
                  {errors.name && (
                    <span className="absolute top-1 left-2 lg:static text-2xl font-bold text-rose-500">
                      Name field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col relative">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <div className="relative flex flex-col">
                  <input
                    id="email"
                    className={`px-1 lg:px-2 bg-beige focus:outline-blue-400 ${
                      errors.email && "error"
                    }`}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="absolute top-1 left-2 lg:static text-2xl font-bold text-rose-500">
                      Email field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="message" className="font-bold">
                  Message
                </label>
                <div className="relative flex flex-col">
                  <textarea
                    rows={isLargeScreen ? 5 : 3}
                    id="message"
                    className={`resize-none bg-beige px-1 lg:px-2 focus:outline-blue-400  ${
                      errors.message && "error"
                    }`}
                    {...register("message", {
                      required: true,
                      maxLength: 200,
                    })}
                  />
                  {errors.message && (
                    <span className="absolute top-1 left-2 lg:static text-2xl font-bold text-rose-500">
                      Message field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full mt-2">
                <small className="text-sm lg:text-base xl:text-xl font-bold flex items-center flex-wrap leading-none">
                  This site is protected by reCAPTCHA and the Google
                  <a
                    className="px-2 underline decoration-primary underline-offset-1"
                    href="https://policies.google.com/privacy"
                  >
                    Privacy Policy
                  </a>
                  and
                  <a
                    className="px-2 underline decoration-primary underline-offset-1"
                    href="https://policies.google.com/terms"
                  >
                    Terms of Service
                  </a>
                  apply.
                </small>
              </div>

              <div className="w-full relative flex justify-end">
                <button
                  type="submit"
                  className="font-bold font-amatic-sc w-full lg:w-1/2 mt-4 lg:mt-10 flex justify-center items-center relative group"
                >
                  <div className="relative">
                    Submit
                    <div className="invisible group-hover:visible group-hover:text-black group-hover:text-4xl absolute top-0 left-1/2 -translate-x-1/2 z-30 lg:z-10 transition-all">
                      Submit
                    </div>
                  </div>
                  <Image
                    className="absolute top-30 lg:-top-24 right-1/2 translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all scale-[1.8] lg:scale-100 z-20 lg:z-0 drop-shadow"
                    src="/images/element/tomato.svg"
                    width={isLargeScreen ? 240 : 180}
                    height={isLargeScreen ? 240 : 180}
                    alt="e-24-tomato-onclick"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        modalRef={modalRef}
        isShowModal={isShowModal}
        hideModal={hideModal}
        modalType={modalType}
      />
    </section>
  );
};

export default Contact;
