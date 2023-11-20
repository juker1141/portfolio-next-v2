import { FormEvent } from "react";

const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // (window as any).grecaptcha.ready(function () {
    //   (window as any).grecaptcha
    //     .execute("reCAPTCHA_site_key", { action: "submit" })
    //     .then(function (token) {
    //       // Add your logic to submit to your backend server here.
    //     });
    // });
  };

  return (
    <div className="section">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="contact">Contact</label>
            <input id="contact" type="textarea" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
