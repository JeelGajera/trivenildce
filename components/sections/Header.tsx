"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import Drawer from "../Drawer";

import useDrawer from "@/hooks/useDrawer";
import { NAV_ITEMS } from "@/lib/constants";

const Header = () => {
  const { open } = useDrawer();
  return (
    <header className="absolute top-0 w-full left-0 right-0 container py-6 flex justify-between items-center">
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
          <Link
            key={item.href + item.label + index + "NAV_ITEMS_DESKTOP"}
            className="text-gray-100 text-base font-bold hover:opacity-70 transition duration-200 hover:underline hover:underline-offset-4"
            href={item.href}
          >
            {item.label}
          </Link>
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
      <Drawer />
    </header>
  );
};

export default Header;
