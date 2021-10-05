import React from "react";
import emailjs from "emailjs-com";
import secrets from "../secrets";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { translator, ts } from "../js/translation";

// TODO: Move sanitize into a global file
function sanitize(string) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return string.replace(reg, (match) => map[match]);
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

    this.state = { blockSubmit: false, requestDone: true };

    // Else it will NOT update right
    translator.registerToOnChange(() => {
      this.forceUpdate();
    });
  }

  sendEmail(from_name, from_email, message) {
    if (this.state.requestDone === false) return;
    this.setState({ requestDone: false });

    // escape all possible user entered html, so we can - more or less - savely
    // use the <br/> tag for the email message preview
    // from_name + from_email will be escaped on emailjs's side
    message = sanitize(message).replaceAll("\n", "<br/>");

    toast
      .promise(
        emailjs.send(
          secrets.EMAILJS_SERVICE_ID,
          secrets.EMAILJS_TEMPLATE_ID,
          {
            from_name: from_name,
            from_email: from_email,
            message: message,
          },
          secrets.EMAILJS_USER_ID
        ),
        ts.contactPage.toasts
      )
      .then(
        (result) => {
          console.log(result);
          this.setState({ requestDone: true });
        },
        (error) => {
          console.log(error);
          // unblock submit button if the email fails
          this.setState({ requestDone: true, blockSubmit: false });
        }
      );
  }

  render() {
    return (
      <div
        className="bg-gray-100 p-6  mx-5 mt-6
                   desktop:mt-14 desktop:m-auto desktop:max-w-lg
                   shadow-md rounded-xl"
      >
        <p className="mt-2 mb-4 text-center text-2xl font-round">
          {ts.contactPage.title}
        </p>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, ts.contactPage.errors.e1)
              .required(ts.contactPage.errors.e2),
            email: Yup.string()
              .email(ts.contactPage.errors.e3)
              .required(ts.contactPage.errors.e4),
            message: Yup.string()
              .max(10000, ts.contactPage.errors.e5)
              .required(ts.contactPage.errors.e6),
          })}
          onSubmit={(values, actions) => {
            // block all further submits
            // Submit can only be clicked once. exception: email fails
            if (this.state.blockSubmit) return;
            this.setState({ blockSubmit: true });

            console.log("submit");
            actions.setSubmitting(false);

            this.sendEmail(values.name, values.email, values.message);
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
                label={ts.contactPage.messageTitle}
                name="message"
                as="textarea"
                type="text"
                placeholder={ts.contactPage.messagePlaceholder}
                rows="6"
              />

              <div className="mt-5 flex justify-center">
                <button
                  className={`px-6 py-2
                              border-2 rounded-full shadow-lg
                              text-white font-bold font-round
                              cursor-pointer
                              transform transition hover:scale-110
                              ${
                                this.state.blockSubmit
                                  ? "bg-gray-600 border-gray-600"
                                  : "bg-blue-700 border-blue-700"
                              }`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p
          className="mt-8 mb-0 text-md text-gray-700 font-round text-center
                     mobile:flex mobile:flex-col"
        >
          E-Mail
          <a
            className="desktop:ml-4 hover:underline"
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
