"use client";

import { usePathname } from "next/navigation";

import {
  FOOTER_SOCIALS,
  MAIN_PAGE_REFLECTIVE_NAV_LINKS,
} from "@/lib/constants";
import GradientText from "./GradientText";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.startsWith("/keystatic")) {
    return;
  }
  return (
    <>
      <hr className="text-teal-500 border-teal-500" />
      <footer
        id="contact"
        className="text-white overflow-x-hidden pt-20 pb-5 px-2 texture_bg"
      >
        <div className="flex flex-col sm:flex-row md:gap-y-0 gap-y-[40px]">
          {/* left side */}
          <div className="w-full h-full flex items-center justify-center flex-col">
            <div className="flex">
              <GradientText />
            </div>
          </div>
          {/* right side */}
          <div className="w-full h-full flex items-center flex-wrap justify-center text-white">
            <div className="w-full md:w-[70%]">
              {/* row 1 */}
              <div className="flex flex-col sm:flex-row justify-between">
                {/* col 1 */}
                <div className="flex flex-col items-start">
                  <h1 className="text-xl mb-3 font-bold">Sitemap</h1>
                  {MAIN_PAGE_REFLECTIVE_NAV_LINKS.map((item, index) => (
                    <a
                      href={item.href}
                      key={item.href + index + "NAV_ITEMS_FOOTER"}
                      className="hover:opacity-70 transition duration-300 hover:underline underline-offset-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                {/* col 2 */}
                <div className="flex flex-col items-start sm:w-[40%]  mt-5 sm:mt-0">
                  <h1 className="text-xl mb-3 font-bold">Address</h1>
                  <a
                    className="hover:opacity-70 transition duration-300 hover:underline underline-offset-2"
                    href="https://maps.app.goo.gl/G4RwmB7escd9Smnn8"
                  >
                    Lalbhai Dalpatbhai College of Engineering, 120, Circular Road,
                    University Area, Ahmedabad, Gujarat - 380015
                  </a>
                </div>
              </div>
              {/* row 2 */}
              <div className="flex flex-wrap justify-between mt-5">
                {/* col 1 */}
                <div className="flex flex-col mt-5 sm:mt-0">
                  <h1 className="text-xl mb-3 font-bold">Follow us on</h1>
                  <div className="flex flex-wrap gap-x-8">
                    {FOOTER_SOCIALS.map((item, index) => (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        key={item.href + index + "FOOTER_SOCIALS"}
                      >
                        <item.icon
                          color="white"
                          className=" transition duration-300 hover:scale-110"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                {/* col 2 */}
                <div className="flex flex-col w-[40%] mt-5 sm:mt-0">
                  <h1 className="text-xl mb-3 font-bold">Contact</h1>
                  <a
                    href="mailto:triveni@ldce.ac.in"
                    className="hover:opacity-70 transition duration-300 hover:underline underline-offset-2"
                  >
                    triveni@ldce.ac.in
                  </a>
                  <a
                    href="tel:+919475218642"
                    className="hover:opacity-70 transition duration-300 hover:underline underline-offset-2"
                  >
                    +919475218642
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center className="text-gray-500 -mb-5">
          &copy; 2024 Triveni LDCE. All rights reserved
        </center>
      </footer>
    </>
  );
};

export default Footer;
