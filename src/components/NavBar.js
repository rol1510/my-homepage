import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <header className="flex justify-between items-center m-5">
      <Link to="/">
        <div className="flex items-center">
          <div
            className="w-12 h-12 bg-blue-700
          flex justify-center items-center
          text-white font-round font-bold text-3xl
          rounded-full
          "
          >
            R
          </div>

          <p className="ml-2 text-xl font-round">Roland Strasser</p>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <Link to="/contact">
          <p className="ml-16 text-gray-600">Contact</p>
        </Link>
        <Link to="/resources">
          <p className="ml-16 text-gray-600">Resources</p>
        </Link>
        <Link to="/samples">
          <p className="ml-16 text-gray-600">Samples</p>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
