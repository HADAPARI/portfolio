import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-scroll";

export type contactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const inputNameRef = useRef(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<contactFormData>();

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const onSubmit = handleSubmit((data) => {
    const emailData = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    setIsSending(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY).then(
      () => {
        reset();
        setIsSending(false);
        toast.success("Message sent successfully ! I'll be in touch shortly", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        toast.error("An error has occurred, please resend the message", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    );
  });

  return (
    <section
      id="contact"
      className="px-4 sm:px-14 xl:px-40 py-14 bg-secondary text-white flex flex-col lg:flex-row"
    >
      <div className="lg:size-1/2 flex flex-col gap-7">
        <p className="text-2xl">
          Let' s make something amazing <br />
          toghtether.
        </p>
        <p className="text-2xl mb-16">
          Start by{" "}
          <Link
            to="contact"
            className="text-teal border-b-2 border-teal cursor-pointer"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            // onClick={() => inputNameRef?.current?.focus()}
          >
            {/* <label
              className="text-teal border-b-2 border-teal cursor-pointer"
              htmlFor="name"
            > */}
            saying hi
            {/* </label> */}
          </Link>
        </p>
      </div>
      <div className="lg:size-1/2">
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div>
            <input
              id="name"
              type="text"
              placeholder="name"
              className="input bg-white w-full p-3 rounded text-black focus:outline focus:outline-teal-600"
              {...register("name", { required: "* This field is required" })}
              ref={inputNameRef}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              className="input bg-white w-full p-3 rounded text-black focus:outline focus:outline-teal-600"
              {...register("email", { required: "* This field is required" })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <textarea
              placeholder="message"
              cols={30}
              rows={10}
              className="textarea bg-white w-full p-3 rounded text-black focus:outline focus:outline-teal-600"
              {...register("message", { required: "* This field is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="btn rounded hover:disabled:opacity-100 hover:opacity-80"
            disabled={isSending}
          >
            <FontAwesomeIcon
              icon={isSending ? faSpinner : faPaperPlane}
              className={`mr-2 ${isSending ? `animate-spin` : ``}`}
            />
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
