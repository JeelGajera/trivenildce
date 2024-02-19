"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { MAIN_PAGE_REFLECTIVE_NAV_LINKS } from "@/lib/constants";

const ReflectiveNavigator = () => {
  const [scrollObs, setScrollObs] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 50;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          setActiveNavItem(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setScrollObs(true);
      } else {
        setScrollObs(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathName = usePathname();
  if (pathName !== "/") return null;
  if (pathName.startsWith("/keystatic")) return;
  return (
    <div
      className={cn(
        "w-screen fixed top-[15%] z-[9] flex justify-center transition-all duration-300",
        scrollObs && "top-[3%]"
      )}
    >
      <div
        className={cn(
          "bg-yellow-400 rounded-full p-1 transition-all duration-300 ease-in-out overflow-hidden h-[10px] w-[10px]",
          scrollObs &&
            "w-[400px] h-auto p-4 shadow-md border-[3px] border-yellow-500"
        )}
      >
        {scrollObs ? (
          <div className="flex items-center justify-evenly text-[var(--primary-blue)] transition-all duration-300 ease-in-out">
            {MAIN_PAGE_REFLECTIVE_NAV_LINKS.map((item, index) => (
              <a
                href={item.href}
                key={item.href + index + item.label + "REFLECTIVE_NAV"}
                className={`home__reflective_anchor ${
                  activeNavItem === item.href.split("#")[1] && "active_a"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : (
          // for dummy placeholder
          <span className="p-[1px]" />
        )}
      </div>
    </div>
  );
};

export default ReflectiveNavigator;
