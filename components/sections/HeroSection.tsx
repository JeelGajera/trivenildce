import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="hero min-h-screen mb-10"
      style={{ backgroundImage: "url(/images/HeroSection.png)" }}
    >
      <div className="hero-overlay bg-opacity-50 bg-gray-950"></div>
      <div className="container flex flex-col sm:flex-row items-center flex-wrap justify-center md:justify-between lg:justify-between w-[98%]">
        <div className="text w-[100%] md:w-[50%] lg:w-[60%] p-3">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl mt-20 sm:mt-0 font-clourso shadow-md animate-glitch"
          >
            <span className=" text-teal-500">Triveni 2k24</span> - Embark on the journey of <span className="text-red-500"> InnoCulture </span>
          </h1>
          <div className="buttons mt-10 w-full">
            <Link href="/events">
              <Button size="lg">
                ✨Unlock the Excitement!
                <ArrowRight className="ml-2 w-4 h-4 animate-pulse" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="side-image mt-12 lg:mb-24 lg:mt-0 mb-0 justify-center items-center">
          {/* animated triveni logo */}
          <div className="relative w-56 sm:w-auto sm:mt-52">
            <Image
              src="/hero/logo.png"
              alt="Triveni Logo"
              width={180}
              height={80}
              className="w-28 sm:w-[200px] absolute invert top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="w-56 sm:w-auto sm:mt-52">
              <Image
                src="/hero/Mna.png"
                alt="Triveni Logo"
                width={420}
                height={420}
                className="animate-spinSlow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
