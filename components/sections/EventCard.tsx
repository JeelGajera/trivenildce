import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  title: string;
  href: string;
  imageUrl: string;
};

function EventCard({ imageUrl, title, href }: Props) {
  return (
    <Link href={href} className="mb-4">
      <div className="relative h-[200px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
        <div className="z-50 absolute bottom-0 left-0 pb-2 pl-4 w-full bg-gradient-to-t from-black/80">
          <div className="flex gap-2 mb-1">
            <Badge>Team</Badge>
            {Math.random() > 0.5 && <Badge>Solo</Badge>}
          </div>
          <p className="md:hidden text-lg font-bold">{title}</p>
        </div>
      </div>

      <p className="mt-2 hidden md:block text-xl">{title}</p>
    </Link>
  );
}

export default EventCard;
