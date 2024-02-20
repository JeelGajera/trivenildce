import {
  FOOTER_SOCIALS,
  MAIN_PAGE_REFLECTIVE_NAV_LINKS,
} from "@/lib/constants";
import { Button } from "./ui/button";
import { actor, bellefair } from "@/lib/fonts";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[0c0c0c] text-white py-[100px] flex flex-col md:flex-row  md:gap-y-0 gap-y-[40px] container overflow-hidden"
    >
      {/* left side */}
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div>
          <h1 className="gradient_text">Step on the journey</h1>
          <div className={`flex gap-x-8 mt-8 w-full ${actor.className}`}>
            <Button
              variant="outline"
              className="bg-transparent text-white px-8 py-6"
            >
              Login
            </Button>
            <Button
              variant="secondary"
              className="bg-[var(--primary-blue)] text-white px-8 py-6 hover:bg-[var(--primary-blue-hovered)]"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
      {/* right side */}
      <div
        className={`w-full h-full flex items-center flex-wrap justify-center  ${bellefair.className} text-white `}
      >
        <div className="w-full md:w-[70%]">
          {/* row 1 */}
          <div className="flex flex-wrap justify-between">
            {/* col 1 */}
            <div className="flex flex-col items-start">
              <h1 className="text-xl my-6">Sitemap</h1>
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
            <div className="flex flex-col items-start w-[40%]">
              <h1 className="text-xl my-6">Address</h1>
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
          <div className="flex flex-wrap justify-between mt-10">
            {/* col 1 */}
            <div className="flex flex-col">
              <h1 className="text-xl my-6">Follow us on</h1>
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
            <div className="flex flex-col w-[40%]">
              <h1 className="text-xl my-6">Contact</h1>
              <a
                href="mailto:help@gmail.com"
                className="hover:opacity-70 transition duration-300 hover:underline underline-offset-2"
              >
                help@gmail.com
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
    </footer>
  );
};

export default Footer;
