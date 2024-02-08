import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  title: string;
  href: string;
  imageUrl: string;
  badges: readonly ("solo" | "team")[];
};

function EventCard({ imageUrl, title, href, badges }: Props) {
  return (
    <Link href={href} className="mb-4">
      <div className="relative h-[200px]">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover rounded-lg w-full h-full"
        />
        <div className="z-50 absolute bottom-0 left-0 pb-2 pl-4 w-full bg-gradient-to-t from-black/80">
          <div className="flex gap-2 mb-1">
            {badges.map((badge) => (
              <Badge key={badge}>{badge === "solo" ? "Solo" : "Team"}</Badge>
            ))}
          </div>
          <p className="md:hidden text-lg font-bold">{title}</p>
        </div>
      </div>

      <p className="mt-2 hidden md:block text-xl">{title}</p>
    </Link>
  );
}

export default EventCard;
