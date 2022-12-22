import React from "react";
import { Formik } from "formik";
import Heading from "../Heading";

const CommentForm = ({ mode }) => (
  <div>
    <Heading heading="Leave a Reply" size={5} mode={mode} />
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
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-10">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="flex flex-col gap-10 relative w-full md:w-1/2">
              <div className="flex relative w-full">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name"
                  className={`${
                    mode === "dark" ? "form-input" : "form-input-w"
                  } rounded-lg p-6 text-3xl w-full`}
                />
                <div className=" absolute -bottom-9 text-xl">
                  {errors.name && touched.name && errors.name}
                </div>
              </div>
              <div className="flex relative w-full">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  className={`${
                    mode === "dark" ? "form-input" : "form-input-w"
                  } rounded-lg p-6 text-3xl w-full`}
                />
                <div className=" absolute -bottom-9 text-xl">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <input
                type="url"
                name="website"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.website}
                placeholder="Website"
                className={`${
                  mode === "dark" ? "form-input" : "from-input-w"
                } rounded-lg p-6 text-3xl w-full`}
              />
              {errors.website && touched.website && errors.website}
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex h-full items-start relative w-full">
                <textarea
                  type="text"
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                  placeholder="Comment"
                  className={`${
                    mode === "dark" ? "form-input" : "from-input-w"
                  } text-start comment-box rounded-lg p-4 text-3xl h-full w-full`}
                />
                <div className=" absolute -bottom-9 text-xl">
                  {errors.comment && touched.comment && errors.comment}
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex gap-4 ${
              mode === "dark" ? "socialButton" : "socialButton-w"
            } w-fit justify-center items-center p-5 rounded-xl text-2xl`}
          >
            SUBMIT NOW
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default CommentForm;
