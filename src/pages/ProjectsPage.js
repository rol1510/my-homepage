import React from "react";

// Well ... not proud, but it works
class SiteViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scale: 50 };

    this.normalWidth = 1920; // px
    this.normalHeight = 1080; // px
    this.roundScaleTo = 2; // multiple of
    this.containerRef = React.createRef();

    this.onResize = this.onResize.bind(this);
  }

  roundScale(val, multiple = 1) {
    return Math.floor(val / multiple) * multiple;
  }

  calScale(currentWidth) {
    const ratio = (currentWidth / this.normalWidth) * 100;
    return this.roundScale(ratio, this.roundScaleTo);
  }

  onResize() {
    // const width = window.innerWidth;
    const width = this.containerRef.current.offsetWidth;
    const newScale = this.calScale(width);
    const newHeight = this.roundScale(
      (width / this.normalWidth) * this.normalHeight
    );
    // console.log("resize", width, "scale", newScale, "newHeight", newHeight);

    this.containerRef.current.style.height = `${newHeight}px`;
    this.setState({ scale: newScale });
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize(); // so the size will be right on startup
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        className="flex justify-center w-full bg-pink-100"
      >
        {/* div used for centering. Without it the iframe won't be the right width */}
        <div>
          {/* TODO: remove bg-white? */}
          <iframe
            className={`bg-white transform origin-top scale-${this.state.scale}`}
            width={`${this.normalWidth}px`}
            height={`${this.normalHeight}px`}
            src={this.props.src}
          ></iframe>
        </div>
      </div>
    );
  }
}

export default function ProjectsPage(props) {
  const keepTailwindClasses =
    "scale-2 scale-4 scale-6 scale-8 scale-10 scale-12 scale-14 scale-16 scale-18 scale-20 scale-22 scale-24 scale-26 scale-28 scale-30 scale-32 scale-34 scale-36 scale-38 scale-40 scale-42 scale-44 scale-46 scale-48 scale-50 scale-52 scale-54 scale-56 scale-58 scale-60 scale-62 scale-64 scale-66 scale-68 scale-70 scale-72 scale-74 scale-76 scale-78 scale-80 scale-82 scale-84 scale-86 scale-88 scale-90 scale-92 scale-94 scale-96 scale-98";

  return (
    <div className="p-10">
      {/* hack to keep tailwind from purging those classes in prod */}
      <div className={`absolute -left-96 ${keepTailwindClasses}`}></div>

      <div
        className="bg-gray-100 p-6 mx-auto mt-10 h-auto
                   px-6 mobile:mx-5 h-96
                   shadow-md rounded-xl text-center"
      >
        <SiteViewer src="https://demo-1.roland-strasser.com" />
        <SiteViewer src="https://www.roland-strasser.com" />
        <SiteViewer src="https://www.orf.at" />
        <div>hi</div>
      </div>
    </div>
  );
}
