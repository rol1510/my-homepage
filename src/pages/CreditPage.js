function Links(props) {
  return (
    <>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/roundicons"
          title="Roundicons"
        >
          Roundicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>

      <div>
        <a href="https://www.freepik.com/photos/school">
          School photo created by rawpixel.com - www.freepik.com
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/photos/office">
          Office photo created by mdjaff - www.freepik.com
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/photos/logo">
          Logo photo created by creativeart - www.freepik.com
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/photos/background">
          Background photo created by creativeart - www.freepik.com
        </a>
      </div>
      <div>
        <a href="https://www.freepik.com/photos/people">
          People photo created by rawpixel.com - www.freepik.com
        </a>
      </div>
    </>
  );
}

export default function CreditPage(props) {
  return (
    <div
      className="bg-gray-100 p-6 mx-auto mt-10
                 desktop:max-w-2xl mobile:mx-5
                 shadow-md rounded-xl text-center"
    >
      <h1 className="font-round font-bold text-xl">
        Credits for all the icons and pictures on this website
      </h1>
      <h2 className="text-lg text-gray-500 mb-10">
        (no space in the footer or next to the grapic, so here you go)
      </h2>
      <Links />
    </div>
  );
}
