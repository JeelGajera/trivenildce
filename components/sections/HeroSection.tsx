import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="hero min-h-screen mb-10"
      style={{ backgroundImage: "url(/images/HeroSection.png)" }}
    >
      <div className="hero-overlay bg-opacity-65 bg-gray-950"></div>
      <div className="container flex items-center flex-wrap justify-center md:justify-between lg:justify-between w-[98%]">
        <div className="text w-[100%] md:w-[50%] lg:w-[60%] p-3">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl"
            style={{ fontFamily: "Kalnia, sarif" }}
          >
            Triveni 2k24 - Embark on the journey on InnoCulture
          </h1>
          <div className="buttons mt-10 w-[100%]">
            <button
              className="p-3 mr-5 inline-flex items-center justify-center opacity-90 hover:opacity-100 w-[20sem] sm:w[5em] hover:rounded-md transition duration-200"
              style={{ backgroundColor: "blue", fontWeight: "500" }}
            >
              <span className="mr-3">View All Events</span>
              <Image
                src="/images/Up_RIght_Icon.png"
                alt="icon"
                height={10}
                width={10}
              />
            </button>
            <button
              className="p-3 hover:border-blue-200 opacity-90 hover:opacity-100 w-[5em] lg:w-[7em] mt-5 hover:rounded-md transition duration-200"
              style={{ border: "1px solid white" }}
            >
              Gallery
            </button>
          </div>
        </div>
        <div className="side-image mt-12 lg:mb-24 lg:mt-0 mb-0 justify-center">
          <Image
            src="/images/Wave.png"
            alt="Hold For The Wave"
            height={170}
            width={170}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
