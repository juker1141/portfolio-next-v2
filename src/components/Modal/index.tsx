"use client";
import Image from "next/image";
import { Fragment, useCallback, useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "./styles.module.css";

type ModalType = "success" | "error" | "";

const Modal = ({
  modalRef,
  isShowModal,
  hideModal,
  modalType,
}: {
  modalRef: React.RefObject<HTMLDivElement>;
  isShowModal: boolean;
  hideModal: () => void;
  modalType: ModalType;
}) => {
  const renderModalTypeLayout = () => {
    switch (modalType) {
      case "success":
        return (
          <div className="absolute top-0 left-0 w-full h-full -z-5 clouds-wrapper">
            <Image
              className="absolute top-36 left-48 drop-shadow"
              width={180}
              height={180}
              src="/images/modal/cloud-1.svg"
              alt="cloud-1.svg"
            />
            <Image
              className="absolute top-24 left-1/3 drop-shadow"
              width={120}
              height={120}
              src="/images/modal/cloud-2.svg"
              alt="cloud-2.svg"
            />
            <Image
              className="absolute top-1/2 -translate-y-1/2 left-1/4 drop-shadow"
              width={80}
              height={80}
              src="/images/modal/cloud-2.svg"
              alt="cloud-2.svg"
            />
            <Image
              className="absolute top-2/3 left-16 drop-shadow"
              width={180}
              height={180}
              src="/images/modal/cloud-3.svg"
              alt="cloud-3.svg"
            />
            <Image
              className="absolute bottom-24 left-1/4 drop-shadow"
              width={120}
              height={120}
              src="/images/modal/cloud-4.svg"
              alt="cloud-4.svg"
            />
            <Image
              className="absolute bottom-36 left-1/2 -translate-x-1/2 drop-shadow"
              width={120}
              height={120}
              src="/images/modal/cloud-5.svg"
              alt="cloud-5.svg"
            />
            <Image
              className="absolute top-12 right-1/3 drop-shadow"
              width={80}
              height={80}
              src="/images/modal/cloud-3.svg"
              alt="cloud-3.svg"
            />
            <Image
              className="absolute top-1/2 right-24 drop-shadow"
              width={180}
              height={180}
              src="/images/modal/cloud-6.svg"
              alt="cloud-6.svg"
            />
            <Image
              className="absolute bottom-12 right-48 rotate-180 drop-shadow"
              width={180}
              height={180}
              src="/images/modal/cloud-1.svg"
              alt="cloud-1.svg"
            />
          </div>
        );
      case "error":
        return (
          <div className="absolute top-0 left-0 w-full h-full -z-5 clouds-wrapper">
            <Image
              className="absolute top-36 left-48 drop-shadow"
              width={200}
              height={200}
              src="/images/modal/cloud-dark-1.svg"
              alt="cloud-dark-1.svg"
            />
            <Image
              className="absolute top-24 left-1/3 drop-shadow"
              width={140}
              height={140}
              src="/images/modal/cloud-dark-2.svg"
              alt="cloud-dark-2.svg"
            />
            <Image
              className="absolute top-1/2 -translate-y-1/2 left-1/4 drop-shadow"
              width={100}
              height={100}
              src="/images/modal/cloud-dark-2.svg"
              alt="cloud-dark-2.svg"
            />
            <Image
              className="absolute top-2/3 left-16 drop-shadow"
              width={200}
              height={200}
              src="/images/modal/cloud-dark-3.svg"
              alt="cloud-dark-3.svg"
            />
            <Image
              className="absolute bottom-24 left-1/4 drop-shadow"
              width={140}
              height={140}
              src="/images/modal/cloud-dark-4.svg"
              alt="cloud-dark-4.svg"
            />
            <Image
              className="absolute bottom-36 left-1/2 -translate-x-1/2 drop-shadow"
              width={140}
              height={140}
              src="/images/modal/cloud-dark-5.svg"
              alt="cloud-dark-5.svg"
            />
            <Image
              className="absolute top-12 right-1/3 drop-shadow"
              width={100}
              height={100}
              src="/images/modal/cloud-dark-3.svg"
              alt="cloud-dark-3.svg"
            />
            <Image
              className="absolute top-1/2 right-24 drop-shadow"
              width={200}
              height={200}
              src="/images/modal/cloud-dark-6.svg"
              alt="cloud-dark-6.svg"
            />
            <Image
              className="absolute bottom-4 right-48 drop-shadow"
              width={200}
              height={200}
              src="/images/modal/cloud-dark-1.svg"
              alt="cloud-dark-1.svg"
            />
          </div>
        );
      default:
        return (
          <div className="absolute top-0 left-0 w-full h-full -z-5 clouds-wrapper"></div>
        );
    }
  };

  const renderModalTypeContent = () => {
    switch (modalType) {
      case "success":
        return (
          <Fragment>
            <h4 className="text-3xl lg:text-5xl font-amatic-sc font-bold text-center mb-4">
              Email sent successfully !!!
            </h4>
            <p className="text-xl text-center mb-4">
              I will contact you shortly. Thank you.
            </p>
          </Fragment>
        );
      case "error":
        return (
          <Fragment>
            <h4 className="text-3xl lg:text-5xl font-amatic-sc font-bold text-center mb-4">
              Email sent failed
            </h4>
            <p className="text-xl text-center mb-4">
              Something went wrong. Please try again later.
            </p>
          </Fragment>
        );
      default:
        return (
          <h4 className="text-3xl lg:text-5xl font-amatic-sc font-bold text-center mb-4">
            Loading...
          </h4>
        );
    }
  };

  return (
    <div
      ref={modalRef}
      className={`absolute top-0 left-0 z-[9999999] transition-opacity duration-100 ${
        isShowModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-screen h-screen flex justify-center items-center relative content backdrop-blur-sm ${
          modalType === "success" ? "" : "bg-black/30"
        }`}
      >
        <div className="bg-white rounded-[24px] w-full lg:w-1/3 mx-8 lg:mx-0 p-2 drop-shadow-images-sm">
          <div
            className={`bg-beige rounded-[16px] px-6 py-8 flex flex-col items-center justify-center ${styles.modalBorder}`}
          >
            <Image
              width={200}
              height={120}
              className="mb-8 images"
              src="/images/main/airplane.svg"
              alt="airplane.svg"
            />
            {renderModalTypeContent()}
            <button
              onClick={() => hideModal()}
              className={`font-amatic-sc text-3xl font-bold rounded px-12 ${
                modalType === "success"
                  ? "hover:bg-green-600"
                  : "hover:bg-red-500"
              } transition-all duration-500 ${styles.modalButton}`}
              type="button"
            >
              OK!
            </button>
          </div>
        </div>
        {renderModalTypeLayout()}
      </div>
    </div>
  );
};

const useModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("");

  // const { contextSafe } = useGSAP({ scope: modalRef });

  useGSAP(
    () => {
      if (modalRef.current) {
        const clouds =
          modalRef.current.querySelector(".clouds-wrapper")?.children;
        const content = modalRef.current.querySelector(".content")?.children;
        const images = modalRef.current.querySelector(".images");

        gsap.to(modalRef.current, {
          autoAlpha: 0,
          duration: 0,
        });

        if (clouds) {
          gsap.to(clouds, {
            y: 60,
            autoAlpha: 0,
            duration: 0,
          });
        }
        if (content) {
          gsap.to(content, {
            y: 60,
            autoAlpha: 0,
            duration: 0,
          });
        }

        gsap.to(images, {
          x: "50vw",
          y: "50vh",
          autoAlpha: 0,
          duration: 0,
        });
      }
    },
    { scope: modalRef }
  );

  const showModal = useCallback(
    (type: ModalType) => {
      if (modalRef.current && !isShowModal) {
        console.log(3213123);
        setModalType(type);
        const clouds =
          modalRef.current.querySelector(".clouds-wrapper")?.children;
        const content = modalRef.current.querySelector(".content")?.children;
        const images = modalRef.current.querySelector(".images");
        console.log(clouds, content, images);
        if (clouds && content) {
          gsap.to(modalRef.current, {
            autoAlpha: 1,
            duration: 0.2,
          });
          gsap.to(clouds, {
            ease: "sine.inOut",
            y: 0,
            delay: 0.2,
            autoAlpha: 1,
            duration: 0.3,
          });
          gsap.to(content, {
            ease: "sine.inOut",
            y: 0,
            delay: 0.2,
            autoAlpha: 1,
            duration: 0.4,
          });

          gsap.to(images, {
            ease: "sine.inOut",
            y: 0,
            x: 0,
            delay: 0.2,
            autoAlpha: 1,
            duration: 0.5,
            onComplete: () => {
              setIsShowModal(true);
            },
          });
          console.log(2131231312);
        }
      }
    },
    [isShowModal]
  );

  const hideModal = useCallback(() => {
    if (modalRef.current && isShowModal) {
      const clouds =
        modalRef.current.querySelector(".clouds-wrapper")?.children;
      const content = modalRef.current.querySelector(".content")?.children;
      const images = modalRef.current.querySelector(".images");

      if (clouds && content) {
        const cloudTl = gsap.timeline({ ease: "sine.inOut" });
        cloudTl
          .to(clouds, {
            y: -20,
            duration: 0.2,
          })
          .to(clouds, {
            y: 60,
            autoAlpha: 0,
            duration: 0.3,
          });

        const contentTl = gsap.timeline({ ease: "sine.inOut" });
        contentTl
          .to(content, {
            y: -20,
            duration: 0.3,
          })
          .to(content, {
            y: 60,
            autoAlpha: 0,
            duration: 0.4,
          });

        const imagesTl = gsap.timeline({ ease: "sine.inOut" });
        imagesTl
          .to(images, {
            y: -10,
            x: -10,
            duration: 0.3,
          })
          .to(images, {
            y: "-50vh",
            x: "-50vw",
            autoAlpha: 0,
            duration: 0.5,
          })
          .to(images, {
            y: "50vh",
            x: "50vw",
            duration: 0,
            onComplete: () => {
              setIsShowModal(false);
              setModalType("");
              gsap.to(modalRef.current, {
                autoAlpha: 0,
                duration: 0.2,
              });
            },
          });
      }
    }
  }, [isShowModal]);

  return { modalRef, modalType, isShowModal, showModal, hideModal };
};

export { Modal, useModal };
