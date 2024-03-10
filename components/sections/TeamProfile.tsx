/* eslint-disable @next/next/no-img-element */
import { MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  mail: string;
  phone: string;
  role: string;
  image: string;
};

const photo =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZmVzc2luYWwgaGVhZHNob3R8fHx8fHwxNzA5ODA1NjMx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";

function TeamProfile({ name, role, mail, phone, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <img
        src={image}
        alt=""
        className="object-contain h-[15rem] rounded-lg w-full"
      />
      <p className="font-bold text-xl mt-2">{name}</p>
      <p className="text-sm">{role}</p>
      <div className="flex gap-3 mt-2">
        <Link href={`mailto:${mail}`}>
          <MailIcon className="size-6" />
        </Link>
      </div>
    </div>
  );
}

export default TeamProfile;
