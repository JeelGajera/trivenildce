import { reader } from "@/lib/reader";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

async function Page({ params }: Props) {
  const event = await reader.collections.events.read(params.slug);
  return <div>{JSON.stringify(event, null, 2)}</div>;
}

export default Page;
