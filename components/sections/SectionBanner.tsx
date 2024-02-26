import Image from "next/image";

const SectionBanner = () => {
  return (
    <section className="mb-30 overflow-hidden select-none" id="sponsors">
      <div className="relative h-[600px] w-screen">
        <Image
          src="https://res.cloudinary.com/earthian/image/upload/v1708971795/Triveni2K24/sectionBanner_fxcbo0.webp"
          alt="Section banner"
          className="object-cover absolute left-0"
          fill
        />
        {/* overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/70 flex items-center justify-center">
          <h1 className="text-white text-center text-[40px] md:text-[70px] font-bold font-actor">
            Embark on the Journey of <br /> Diversity and Creativity!
          </h1>
        </div>
        {/* TODO add sponsors section */}
      </div>
    </section>
  );
};

export default SectionBanner;
