import React from "react";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (Object.getOwnPropertyNames(this.state).includes(event.target.name)) {
      const data = {};
      data[event.target.name] = event.target.value;
      this.setState(data);
    } else {
      throw new Error(
        "A Change event was fired, but input name '" +
          event.target.name +
          "' unknown"
      );
    }
  }

  handleSubmit(event) {
    console.log("hi");
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
        <p>Name: {this.state.name}</p>
        <p>E-Mail: {this.state.email}</p>
        <p>Message: {this.state.message}</p> */}
      </div>
    );
  }
}

export default ContactPage;
