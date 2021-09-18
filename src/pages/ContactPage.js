import React from "react";
import emailjs from "emailjs-com";
import secrets from "../secrets";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requestDone: true,
      formData: { name: "", email: "", message: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendEmail(from_name, from_email, message) {
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

  handleChange(event) {
    console.log(Object.getOwnPropertyNames(this.state.formData));
    if (
      Object.getOwnPropertyNames(this.state.formData).includes(
        event.target.name
      )
    ) {
      const data = { ...this.state.formData };
      data[event.target.name] = event.target.value;
      this.setState({ formData: data });
    } else {
      throw new Error(
        "A Change event was fired, but input name '" +
          event.target.name +
          "' unknown"
      );
    }
  }

  handleSubmit(event) {
    console.log("Submit clicked");
    // TODO: Verify Form content
    this.sendEmail(
      this.state.formData.name,
      this.state.formData.email,
      this.state.formData.message
    );
  }

  render() {
    const inputboxFormatting =
      "px-2 py-1 m-2 my-3 ml-0 w-full shadow rounded font-round";

    return (
      <div className="bg-gray-100 w-2/3 m-auto p-6 shadow-md rounded-xl">
        <p className="mt-2 mb-4 text-center text-2xl font-round">Contact Me!</p>

        {/* form onSubmit is not working for some reason */}
        <from>
          <input
            className={inputboxFormatting}
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />

          <input
            className={inputboxFormatting}
            type="email"
            name="email"
            placeholder="E-Mail"
            onChange={this.handleChange}
          />

          <textarea
            className={inputboxFormatting}
            type="text"
            name="message"
            placeholder="Message"
            rows="5"
            onChange={this.handleChange}
          />

          <div className="flex justify-center w-full">
            <button
              className="bg-blue-700 px-8 py-2 mt-4 mb-2
                         shadow rounded-full
                         text-white font-round font-bold text-lg
                         active:bg-blue-800
                         transition-transform transform duration-300 ease-in-out
                         hover:scale-110"
              onClick={this.handleSubmit}
            >
              Send
            </button>
          </div>
        </from>

        {/* Debug Output of the input */}
        {/* <p className="m-16"></p>
        <p>Name: {this.state.formData.name}</p>
        <p>E-Mail: {this.state.formData.email}</p>
        <p>Message: {this.state.formData.message}</p>
        <p>{this.state.requestDone ? "done" : "blocked"}</p> */}
      </div>
    );
  }
}

export default ContactPage;
