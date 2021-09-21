import React from "react";
import emailjs from "emailjs-com";
import secrets from "../secrets";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";

function sendEmail(from_name, from_email, message) {
  if (this.state.requestDone === false) return;
  this.setState({ requestDone: false });

  emailjs
    .send(
      secrets.EMAILJS_SERVICE_ID,
      secrets.EMAILJS_TEMPLATE_ID,
      {
        from_name: from_name,
        from_email: from_email,
        message: message,
      },
      secrets.EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log(result);
        this.setState({ requestDone: true });
      },
      (error) => {
        console.log(error);
        this.setState({ requestDone: true });
      }
    );
}

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const showError = meta.touched && meta.error;

  return (
    <div className="mt-4">
      <label className="ml-2" htmlFor={props.id || props.name}>
        {label}
      </label>
      <Field
        className={`mt-1 px-2 py-1 w-full
                   shadow rounded font-round
                   outline-none border-2 border-transparent focus:border-blue-500
                   ${showError ? "border-red-500" : ""}
                   ${meta.touched && !meta.error ? "border-green-500" : ""}`}
        {...props}
        {...field}
      />
      {showError && (
        <div className="ml-2 mt-1 text-sm text-red-500 ">{meta.error}</div>
      )}
    </div>
  );
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { blockSubmit: false };
  }
  // const inputboxFormatting = `
  //     px-2 py-1 m-2 my-3 ml-0 w-full
  //     shadow rounded font-round
  //     outline-none border-2 border-transparent focus:border-blue-500`;
  render() {
    return (
      <div
        className="bg-gray-100 p-6 shadow-md rounded-xl
        mx-5 mt-6 md:mt-14 md:m-auto md:w-2/3 lg:w-1/3"
      >
        <p className="mt-2 mb-4 text-center text-2xl font-round">Contact Me!</p>

        {/* form onSubmit is not working for some reason */}

        <Formik
          initialValues={{
            name: "a",
            email: "c@c.c",
            message: "b",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, "Must be less than 50 characters")
              .required("Enter your Name"),
            email: Yup.string()
              .email("Invalid E-Mail")
              .required("E-Mail Required"),
            message: Yup.string()
              .max(1024 * 10, "Message to long")
              .required("Enter your Message"),
          })}
          onSubmit={(values, actions) => {
            if (this.state.blockSubmit) return;
            this.setState({ blockSubmit: true }); // block further submits

            console.log("submit");
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));

              // unblock if submit was fine
              actions.setSubmitting(false);
              this.setState({ blockSubmit: false });
            }, 1000);
          }}
        >
          {(formik) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Jane"
              />

              <MyTextInput
                label="E-Mail"
                name="email"
                type="text"
                placeholder="jane@gmail.com"
              />

              <MyTextInput
                label="Message"
                name="message"
                as="textarea"
                type="text"
                placeholder="jane@gmail.com"
                rows="6"
              />

              <div className="mt-5 flex justify-center">
                <button
                  className={`px-6 py-2
                         bg-blue-700 border-2 border-blue-700
                         rounded-full shadow-lg
                         text-white font-bold font-round
                         cursor-pointer
                         transform transition hover:scale-110
                         ${
                           this.state.blockSubmit
                             ? "bg-blue-900 border-blue-900"
                             : ""
                         }`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="mt-8 mb-0 text-md text-gray-700 font-round">
          E-Mail
          <a
            className="ml-5 hover:underline"
            href={`mailto:${secrets.CONTACT_EMAIL}`}
          >
            {secrets.CONTACT_EMAIL}
          </a>
        </p>
      </div>
    );
  }
}

export default ContactPage;

// handleChange(event) {
//   console.log(Object.getOwnPropertyNames(this.state.formData));
//   if (
//     Object.getOwnPropertyNames(this.state.formData).includes(
//       event.target.name
//     )
//   ) {
//     const data = { ...this.state.formData };
//     data[event.target.name] = event.target.value;
//     this.setState({ formData: data });
//   } else {
//     throw new Error(
//       "A Change event was fired, but input name '" +
//         event.target.name +
//         "' unknown"
//     );
//   }
// }

// handleSubmit(event) {
//   console.log("Submit clicked");
//   // TODO: Verify Form content
//   // TODO: Feedback on E-Mail send functionality
//   this.sendEmail(
//     this.state.formData.name,
//     this.state.formData.email,
//     this.state.formData.message
//   );
// }
