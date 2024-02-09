"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Drawer from "../Drawer";

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

  return (
    <header
      className={cn(
        "top-0 w-screen left-0 right-0 py-6 sticky transition duration-300 z-10",
        pathName === "/" && "fixed",
        scrollFlg && "bg-[var(--primary-dark)] shadow-lg"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/header_logo.png"
            alt="Header logo"
            height={80}
            width={270}
            className="pointer-events-none"
          />
        </Link>
        {/* nav items */}
        <div className="gap-x-10 hidden md:flex">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.href + item.label + index + "NAV_ITEMS_DESKTOP"}
              className="text-gray-100 text-base font-bold opacity-70 transition duration-200 hover:underline hover:underline-offset-4 hover:opacity-80"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="bg-[var(--primary-blue)] btn-md btn hover:bg-[var(--primary-blue-hovered)] text-gray-100 hidden md:block">
          Sign in
        </button>

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
