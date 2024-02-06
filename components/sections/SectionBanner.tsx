import Image from "next/image";

import { actor } from "@/lib/fonts";

const SectionBanner = () => {
  return (
    <section className="mb-30 overflow-hidden select-none">
      <div className="relative h-[600px] w-screen">
        <Image
          src="/images/sectionBanner.png"
          alt="Section banner"
          className="object-cover absolute left-0"
          fill
        />
        {/* overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/70 flex items-center justify-center">
          <h1
            className={`text-white text-center text-[40px] md:text-[70px] font-bold ${actor.className}`}
          >
            Embark on the Journey of <br /> Diversity and Creativity!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
