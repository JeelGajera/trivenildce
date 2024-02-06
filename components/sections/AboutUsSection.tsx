import Image from "next/image";

import { actor } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const AboutUsSection = () => {
  return (
    <section className="container my-[100px] flex flex-col-reverse md:flex-row w-full gap-8 select-none">
      {/* left part */}
      <div className="w-full md:w-1/2">
        <h1 className={cn("text-6xl font-bold my-10 md:my-0", actor.className)}>
          About Us
        </h1>
        <div className="my-[30px]">
          <h4 className="text-xl font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            ratione vero laborum laboriosam a amet iste. Officia minima
            aspernatur itaque, velit quam sapiente id deserunt officiis beatae
            natus dolore nemo. Fuga ratione id ab obcaecati nobis ex illum, modi
            dolore.
          </h4>
          <h4 className="text-xl font-medium text-gray-500 my-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A esse
            deleniti eveniet aut, quia id laborum sapiente dolore commodi minus
            sequi molestiae exercitationem dolorem, debitis unde, nam at libero
            culpa?
          </h4>
        </div>
      </div>
      {/* right part */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/about_us_sec.png"
          alt="About us section"
          className="object-cover rounded-md pointer-events-none"
          width={800}
          height={1000}
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
