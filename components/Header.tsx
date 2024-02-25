"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Drawer from "./Drawer";

import useDrawer from "@/hooks/useDrawer";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Header = () => {
  const { open } = useDrawer();
  const pathName = usePathname();

  const [scrollFlg, setScrollFlg] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrollFlg(true);
      } else {
        setScrollFlg(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathName.startsWith("/keystatic")) {
    return;
  }

  return (
    <header
      className={cn(
        "top-0 w-screen left-0 right-0 py-6 transition duration-300 z-10",
        scrollFlg &&
          pathName !== "/" &&
          "shadow-lg static",
        // without this line the static position is not working
        pathName === "/" && "absolute"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/hero/logo.png"
            alt="Header logo"
            height={80}
            width={240}
            className="w-52 sm:w-auto pointer-events-none invert"
          />
        </Link>
        {/* nav items */}
        <div className="gap-x-10 hidden md:flex">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href + item.label + index + "NAV_ITEMS_DESKTOP"}
              className="text-white text-base font-bold opacity-70 transition duration-200 hover:underline hover:underline-offset-4 hover:opacity-80 bg-white bg-opacity-25 backdrop-blur-md px-2 py-1 rounded-full border-[1px] border-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* hamburger menu */}
        <button
          type="button"
          onClick={open}
          className="btn btn-circle btn-ghost md:hidden btn-lg"
        >
          <Menu size={40} />
        </button>
      </div>
      <Drawer />
    </header>
  );
};

export default Header;
