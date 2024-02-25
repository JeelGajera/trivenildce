import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section
      className="container my-[100px] flex flex-col-reverse md:flex-row w-full gap-8 select-none justify-center items-center"
      id="about"
    >
      {/* left part */}
      <div className="w-full md:w-1/2">
        <h1 className="text-6xl font-bold my-10 md:my-0 font-actor text_shadow_red animate-glitch_wave">
          About Us
        </h1>
        <div className="my-[30px]">
          <h4 className="text-xl font-medium text-gray-500">
            Our college fest is envisioned as a dynamic amalgamation of diverse experiences, uniting students from varied backgrounds. Beyond mere entertainment, the objective is to create an indelible and meaningful experience. The emphasis lies in celebrating diversity – where talents, ideas, and cultures harmoniously converge. This fest aims to transcend the ordinary, fostering connections, nurturing creativity, and instilling a profound sense of community spirit.
          </h4>
          <h4 className="text-xl font-medium text-gray-500 my-10">
            It aspires to be more than a fleeting celebration, seeking to establish a lasting impact by appreciating individual uniqueness and promoting a collective sense of belonging. In essence, it is a formal yet vibrant platform where the richness of our collective identity takes centre stage.
          </h4>
        </div>
      </div>
      {/* right part */}
      <div className="w-full md:w-1/2">
        <Image
          src="/hero/doddles.png"
          alt="About us section"
          className="object-cover rounded-md pointer-events-none invert animate-glitch"
          width={800}
          height={1000}
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
