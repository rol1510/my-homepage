import React from "react";
import { withRouter } from "react-router-dom";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <p
          className="font-round font-bold text-4xl text-blue-700
                    text-center mt-10"
        >
          Wups!
        </p>
        <p
          className="font-round text-md text-gray-600
                    text-center mt-4"
        >
          {this.props.message}
        </p>
        <p
          className="font-round text-xl text-black
                    text-center mt-3"
        >
          Look's like I messed something up, you shouldn't be here 😅
        </p>
        <div className="mt-7">
          <button
            className="px-6 py-2 mx-2
                     bg-blue-700 border-2 border-blue-700
                     rounded-full shadow-lg
                     text-white font-bold font-round
                     hover:underline cursor-pointer"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Back To Home
          </button>
          <button
            className="px-6 py-2 mx-2
                     bg-white border-2 border-blue-700
                     rounded-full shadow
                     text-blue-700 font-bold font-round
                     hover:underline cursor-pointer"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Previous Page
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ErrorPage);
