function NavBar(props) {
  return (
    <header className="flex justify-between items-center m-5">
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
      <div className="flex justify-between items-center">
        <p className="ml-16 text-gray-600">Contact</p>
        <p className="ml-16 text-gray-600">Resources</p>
        <p className="ml-16 text-gray-600">Samples</p>
      </div>
    </header>
  );
}

export default NavBar;
