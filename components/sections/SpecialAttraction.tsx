import React from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";

// TODO: Add href to SpecialAttractionCard when event page is done
function SpecialAttraction() {
  return (
    <section className="container" id="events">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl">Special Attraction</h1>
        <Link href="/events">
          <Button
            variant="link"
            className="text-gray-500 hover:text-gray-300 hidden md:flex items-center"
          >
            View All Events
            <ArrowRightIcon className="ml-1 w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 md:mt-7">
        <SpecialAttractionCard
          imageUrl="/images/standup.jpg"
          title="Standup Comedy"
        />
        <SpecialAttractionCard
          imageUrl="/images/dronerace.webp"
          title="Drone Race"
        />
        <SpecialAttractionCard
          imageUrl="/images/ldtalks.jpg"
          wFull
          title="LD Talks"
        />
      </div>
      <div className="flex justify-center mt-5 md:hidden">
        <Link href="/events">
          <Button variant="link" className="text-gray-500 hover:text-gray-300">
            View All Events
            <ArrowRightIcon className="ml-1 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

type SpecialAttractionCardProps = {
  wFull?: boolean;
  imageUrl: string;
  title: string;
  href?: string;
};

function SpecialAttractionCard({
  wFull,
  imageUrl,
  title,
  href,
}: SpecialAttractionCardProps) {
  return (
    <Link
      href={href ?? "/"}
      className={wFull ? "col-span-2 md:col-span-1" : ""}
    >
      <div
        className={twMerge([
          // for hover effect
          "border relative bg-gray-900 border-white  after:bg-white after:content-[' '] after:block after:h-full after:w-full after:translate-x-[3px] after:translate-y-[3px] after:transition-transform after:duration-[0.2s] after:ease-[ease-out] after:z-[-1] after:absolute after:top-0 after:left-0  hover:after:translate-x-0 hover:after:translate-y-0 active:translate-x-0 active:translate-y-0",

          wFull ? "h-48 md:h-[500px]" : "h-56 md:h-[500px]",
          "flex items-end justify-center",
        ])}
      >
        <Image
          src={imageUrl}
          alt="Special Attraction Image"
          fill
          className="object-cover pointer-events-none"
        />
        <h3 className="absolute text-center pb-7 text-lg font-semibold md:pb-20 md:text-3xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default SpecialAttraction;
