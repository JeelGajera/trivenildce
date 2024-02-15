import { PageProps } from "@/.next/types/app/events/page";
import EventCard from "@/components/EventCard";
import DomainsFilter from "@/components/sections/events/DomainsFilter";

import { reader } from "@/lib/reader";
import { DocumentElement } from "@keystatic/core";
import { Suspense } from "react";

type Props = {};

const fakeEvents = [
  {
    title: "Battle of musicians",
    href: "slug-1",
    imageUrl: "https://source.unsplash.com/random?music",
  },
  {
    title: "Gym Freaks",
    href: "slug-2",
    imageUrl: "https://source.unsplash.com/random?gym",
  },
  {
    title: "CodeSters",
    href: "slug-3",
    imageUrl: "https://source.unsplash.com/random?code",
  },
  {
    title: "Electrolustion",
    href: "slug-4",
    imageUrl: "https://source.unsplash.com/random?electricity",
  },
  {
    title: "ChemStorm",
    href: "slug-5",
    imageUrl: "https://source.unsplash.com/random?chemicals",
  },
  {
    title: "Mechanova",
    href: "slug-6",
    imageUrl: "https://source.unsplash.com/random?mechanics",
  },
  {
    title: "Civilution",
    href: "slug-7",
    imageUrl: "https://source.unsplash.com/random?civil",
  },
  {
    title: "MindSpark",
    href: "slug-8",
    imageUrl: "https://source.unsplash.com/random?mind",
  },
  {
    title: "RoboRace",
    href: "slug-9",
    imageUrl: "https://source.unsplash.com/random?robot",
  },
];

// TODO: Implement filters and pagination
async function AllEvents({ searchParams: sp }: PageProps) {
  const eventsPromise = reader.collections.events.all();
  const domainsPromise = reader.collections.domains.all();

  const [events, domains] = await Promise.all([eventsPromise, domainsPromise]);

  const searchParams = new URLSearchParams(sp);

  return (
    <div className="container">
      <h1 className="text-4xl text-center hidden md:block">
        Experience the Extraordinary: Triveni <br />
        2k24 Events that Transcend Imagination!
      </h1>
      <DomainsFilter domains={domains} />
      <Suspense key={searchParams.get("q")} fallback="Loading...">
        <Events query={searchParams.get("q")} events={events} />
      </Suspense>
    </div>
  );
}

export default AllEvents;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Events({
  query,
  events,
}: {
  query: string | null;
  events: {
    slug: string;
    entry: {
      name: string;
      description: () => Promise<DocumentElement[]>;
      eventImg: string | null;
      entryFee: string;
      eventDateAndTime: {
        readonly date: string | null;
        readonly time: string;
      };
      entryType: readonly ("solo" | "team")[];
      prize: string;
      domain: string | null;
    };
  }[];
}) {
  if (query) events = events.filter((event) => event.entry.domain === query);

  if (events.length < 1)
    return (
      <div className="text-center text-2xl">
        No events found. Try Changing the Event domain.
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {events.map((event) => {
        return (
          <EventCard
            href={"/events/" + event.slug}
            imageUrl={
              `https://wsrv.nl/?url=raw.githubusercontent.com/mdhruvil/triveni/main/content/events/${event.slug}/${event.entry.eventImg}&h=300` ??
              ""
            }
            title={event.entry.name}
            key={event.slug}
            badges={event.entry.entryType}
          />
        );
      })}
    </div>
  );
}
