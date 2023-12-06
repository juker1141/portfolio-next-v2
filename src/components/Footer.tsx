import Image from "next/image";

const Footer = () => {
  return (
    <div className="block lg:hidden section bg-secondary">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <div>
            <Image
              src="/images/logo-white.svg"
              alt="logo"
              width="60"
              height="60"
            />
          </div>
          <ul className="flex justify-center w-full mb-6">
            <li className="mr-2">
              <a
                href="https://www.linkedin.com/in/chih-lung-tu-a6807821a/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center m-2"
              >
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
            </li>
            <li className="mr-2">
              <a
                href="https://github.com/juker1141"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center m-2"
              >
                <i className="fab fa-github-square text-3xl"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:juker1141@gmail.com"
                className="flex items-center m-2"
              >
                <i className="fas fa-envelope-square text-3xl"></i>
              </a>
            </li>
          </ul>
          <div className="flex justify-center text-sm font-black">
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
