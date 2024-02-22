import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

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
            <Button size="lg">
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
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
