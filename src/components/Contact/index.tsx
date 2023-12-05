import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Inputs = {
  name: string;
  email: string;
  content: string;
};

const Contact = () => {
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="section relative">
      <Image
        className="absolute top-36 -left-20"
        src="/images/potato4.svg"
        width={200}
        height={200}
        alt="potato4"
      />
      <Image
        className="absolute top-1/2 -translate-y-1/2 -right-24 -rotate-3"
        src="/images/potato5.svg"
        width={250}
        height={250}
        alt="potato5"
      />
      <div className="container min-h-screen mx-auto flex justify-center items-center relative overflow-hidden">
        <Image
          className="absolute -top-20 left-52 -rotate-3"
          src="/images/potato3.svg"
          width={150}
          height={150}
          alt="potato3"
        />
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10">
          <div className="lg:col-span-2 flex flex-col items-center justify-between">
            <h4 className="font-amatic-sc font-bold text-8xl">Get in Touch</h4>
            <Image
              src="/images/contact-main2.svg"
              width={400}
              height={400}
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
                  className="px-2"
                  {...register("name", { required: true, maxLength: 30 })}
                />
                {errors.name && <span>Name field is required</span>}
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  id="email"
                  className="px-2"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>Email field is required</span>}
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="content" className="font-bold">
                  Content
                </label>
                <textarea
                  rows={5}
                  id="content"
                  className="resize-none px-2 focus-visible:outline-none"
                  {...register("content", { required: true, maxLength: 200 })}
                />
                {errors.content && <span>Content field is required</span>}
              </div>

              <div className="w-full relative flex justify-end">
                <Image
                  className="absolute -bottom-20 -left-16"
                  src="/images/potato1.svg"
                  width={250}
                  height={250}
                  alt="potato1"
                />
                <button
                  type="submit"
                  className="font-bold font-amatic-sc w-1/2 mt-10 flex justify-center items-center relative group"
                >
                  {/* <Image
                    className="absolute -top-8 -left-12 invisible group-hover:visible brightness-90 rotate-90"
                    src="/images/element/e-24.svg"
                    width={70}
                    height={70}
                    alt="e-24"
                  /> */}
                  <div className="relative">
                    Submit
                    <div className="invisible group-hover:visible group-hover:text-black group-hover:text-4xl absolute top-0 left-1/2 -translate-x-1/2 z-10 transition-all">
                      Submit
                    </div>
                  </div>
                  <Image
                    className="absolute -top-24 right-1/2 translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 brightness-90 z-0 transition-all"
                    src="/images/element/e-24.svg"
                    width={240}
                    height={240}
                    alt="e-24"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
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
                  {/* <i className="fab fa-linkedin text-3xl"></i> */}
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
                  {/* <i className="fab fa-github-square text-3xl"></i> */}
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
                  {/* <i className="fas fa-envelope-square text-3xl"></i> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
