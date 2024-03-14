import React from "react";

// https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg
type Props = {
  title: string;
  imageUrl: string;
  name: string;
};

export default function sponsors_Card({ imageUrl, title, name }: Props) {
  return (
    <>
      <div className="card mt-[5rem] md:mt-[0rem] flex flex-col justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-[15rem] rounded-lg m-auto"
        />
        <h1 className="text-[1.25rem] text-center mt-[2.5rem] bebas-neue-regular">
          {title}
        </h1>
        <h2 className="text-[0.75rem] text-gray-500 text-center mb-[3rem] bebas-neue-regular">
          {name}
        </h2>
      </div>
    </>
  );
}

export function TitleSponsorCard({ imageUrl, title, name }: Props) {
  return (
    <>
      <div className="card mt-[5rem] md:mt-[0rem] flex flex-col justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-[25rem] rounded-3xl m-auto"
        />
        <h1 className="text-[1.25rem] text-center mt-[2.5rem] bebas-neue-regular">
          {title}
        </h1>
        <h2 className="text-[0.75rem] text-gray-500 text-center mb-[3rem] bebas-neue-regular">
          {name}
        </h2>
      </div>
    </>
  );
}
