import React from "react";
import SponsorCard, { TitleSponsorCard } from "@/components/sponsors_Card";
import Image from "next/image";
import "@/styles/sponsors.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triveni 2K24 | Sponsors - Embark On The Journey of Inno-Culture ✨",
  description:
    "Discover our esteemed sponsors and partners for Triveni 2K24 Annual Fest 2024! We extend our heartfelt gratitude to these organizations for their support and contribution to our event. Explore our sponsors and join us in celebrating innovation and culture!",
};

export default function page() {
  return (
    <>
      <div className="text-center mt-1">
        <h1
          className="font-clourso text-[4rem] mt-[2rem] md:text-[4rem] lg:text-[5rem]"
          style={{ lineHeight: "5rem" }}
        >
          Our <span className="text-teal-500">Sponsors</span>
        </h1>
        <div className="flex justify-center m-auto md:.seven">
          <h1 className="w-[60%] m-auto" style={{ fontFamily: "system-ui;" }}>
            Sincere thanks to sponsors for elevating our event!
          </h1>
        </div>
      </div>
      <div className="flex justify-center md:mt-[1rem] flex-col">
        <div className="mt-5">
          <TitleSponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451456/Triveni2K24/sposors/udzbmznto2s3hhzm1epa.png"
            title="Title Sponsor"
            name="D VIVID Cunsultant"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between md:w-1/2 mx-auto">
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/fhiaqfj8bhvpg7bepqtp"
            title="Co-Powered By"
            name="ZCAD Group"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/w4cpgbouo2yuqwifqtli"
            title="In Association With"
            name="Renaissance Educare PVT LTD"
          />
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-[5rem] md:m-[10rem] md:mt-[3rem] md:mb-[5rem] items-center place-items-center p-[1rem]">
          {/* Dont convert this component to SponsorCard */}
          <TitleSponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto,w_1.5,h_1.5/cdt2sjrrhb0xajhrkupx"
            title="Event Partner"
            name="Ami Polymer"
          />

          <SponsorCard
            imageUrl="https://cdn2.allevents.in/media-kit/png/ae-logo-portrait-white-vector.png"
            title="Ticketing Partner"
            name="All Events"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451460/Triveni2K24/sposors/cay6hpk6henyulzlfnnp.jpg"
            title="Workshop | Technology Partner"
            name="Demmisto Technology Pvt Ltd"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451464/Triveni2K24/sposors/diwpw41oa2lmihtvxx8f.jpg"
            title="Workshop Partner"
            name="EV Robotics Skill Coach India Pvt Ltd"
          />
          {/* <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451461/Triveni2K24/sposors/agrocpkmw8chyeyfimy7.png"
            title="Stall Partner"
            name="Canam"
          /> */}

          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/ovopu7oqevddmvblftzp"
            title="Education Partner"
            name="Edugate"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/av1ly50crpoejmsywijq"
            title="Stall Partner"
            name="Aspire Square"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451463/Triveni2K24/sposors/bybopbkfglznxtteqau0.png"
            title="Stall Partner"
            name="Level Up"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451460/Triveni2K24/sposors/tawrtlw4tolbgjwt4kjg.png"
            title="Event Partner"
            name="My Global Connect"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/ba3xyshztj1vy4anwnmg"
            title="Energy drinks Partner"
            name="Monster Energy"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451462/Triveni2K24/sposors/htowue5wweilsfvfl5ll.jpg"
            title="Learning Partner"
            name="Priyesh Sir Vidyapeeth"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1709451477/Triveni2K24/sposors/ednlwbuapbfwy9hvz043.png"
            title="Goodies Partner"
            name="Nutsweet"
          />

          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/qdp1m62n2w7erssr4l1n"
            title="Gromming Partner"
            name="No Scars"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/u34futrkzlkogqx8v2tx"
            title="Food Partner"
            name="Masala Maarke"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/gt6zqyqiea7rodefl3lz"
            title="Goodies Partner"
            name="Puff.com"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/nl3qnugb9oijtvdpfvvx"
            title="Supporting Partner"
            name="eChai"
          />

          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/cenm6d8zx7npdt9hnqn9"
            title="Outdoor Media Partner"
            name="Chitra"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/dk6oyez3u/image/upload/f_auto,q_auto/gxcw8iztyuv09ciogqgd"
            title="Beatboxing Partner"
            name="Vadodara Beatbox Community"
          />
          <SponsorCard
            imageUrl="https://res.cloudinary.com/earthian/image/upload/v1710527574/Triveni2K24/png_20230619_191606_0000_qnmphi.png"
            title="Food Partner"
            name="Burger Mania"
          />
        </div>
      </div>
    </>
  );
}
