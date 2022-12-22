import React from "react";
import { Formik } from "formik";
import { AiOutlineArrowRight } from "react-icons/ai";

const ContactForm = ({ mode }) => (
  <div>
    <Formik
      initialValues={{ name: "", email: "", website: "", comment: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.comment) {
          errors.comment = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            color:
              mode === "dark" ? "var(--color-body)" : "var(--color-body-white)",
          }}
          className="flex flex-col w-full gap-10"
        >
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col gap-14 relative w-full ">
              <div className="flex flex-col gap-14 md:flex-row md:gap-10">
                <div className="flex flex-col relative w-full gap-4">
                  <label for="name" className="uppercase text-xl">
                    your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={`${
                      mode === "dark" ? "form-input" : "form-input-w"
                    } rounded-lg p-6 text-3xl w-full`}
                  />
                  <div className=" absolute -bottom-9 text-xl warning">
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>
                <div className="flex flex-col gap-4 relative w-full">
                  <label for="phoneNumber" className="uppercase text-xl">
                    phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    className={`${
                      mode === "dark" ? "form-input" : "form-input-w"
                    } rounded-lg p-6 text-3xl w-full`}
                  />
                  <div className=" absolute -bottom-9 text-xl warning">
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 relative w-full">
                <label for="email" className="uppercase text-xl">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`${
                    mode === "dark" ? "form-input" : "form-input-w"
                  } rounded-lg p-6 text-3xl w-full`}
                />
                <div className=" absolute -bottom-9 text-xl warning">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div className="flex flex-col gap-4 relative w-full">
                <label for="subject" className="uppercase text-xl">
                  subject
                </label>
                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  className={`${
                    mode === "dark" ? "form-input" : "form-input-w"
                  } rounded-lg p-6 text-3xl w-full`}
                />
                <div className=" absolute -bottom-9 text-xl warning">
                  {errors.subject && touched.subject && errors.subject}
                </div>
              </div>
              <div className="flex flex-col gap-4 h-full items-start relative w-full">
                <label for="message" className="uppercase text-xl">
                  your message
                </label>
                <textarea
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={`${
                    mode === "dark" ? "form-input" : "form-input-w"
                  } text-start ${
                    mode === "dark" ? "comment-box" : "comment-box-w"
                  } rounded-lg p-4 text-3xl h-full w-full`}
                />
                <div className=" absolute -bottom-9 text-xl warning">
                  {errors.message && touched.message && errors.message}
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex gap-4 ${
              mode === "dark" ? "socialButton" : "socialButton-w"
            }  justify-center items-center warning p-5 rounded-xl text-2xl`}
          >
            SENT MESSAGE <AiOutlineArrowRight />
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
