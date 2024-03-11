import { PageProps } from "@/.next/types/app/events/page";
import { Metadata } from "next";
import EventCard from "@/components/EventCard";
import DepFilter from "@/components/sections/events/DepFilter";
import DomainsFilter from "@/components/sections/events/DomainsFilter";

import { reader } from "@/lib/reader";
import { DocumentElement } from "@keystatic/core";
import { Suspense } from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Triveni 2K24 | Events - Embark On The Journey of Inno-Culture ✨",
  description: "Discover a diverse range of events at Triveni 2K24 Annual Fest 2024! From technical competitions to cultural performances, there's something for everyone. Explore our event listings and join in the excitement!",
};


// TODO: Implement filters and pagination
async function AllEvents({ searchParams: sp }: PageProps) {
  const eventsPromise = reader.collections.events.all();
  const domainsPromise = reader.collections.domains.all();
  const departmentsPromise = reader.collections.departments.all();

  const [events, domains, departments] = await Promise.all([
    eventsPromise,
    domainsPromise,
    departmentsPromise,
  ]);

  const searchParams = new URLSearchParams(sp);

  return (
    <>
      <div className="container">
        <h1 className="text-4xl text-center hidden md:block font-clourso">
          Experience the Extraordinary: <span className="text-teal-500">Triveni <br />
            2k24</span> Events that Transcend Imagination!
        </h1>

        <div className="flex justify-between items-center overflow-scroll gap-2">
          <DomainsFilter domains={domains} />
          <DepFilter departments={departments} />
        </div>

        <Suspense key={searchParams.get("q")} fallback="Loading...">
          <Events
            query={searchParams.get("q")}
            departmentQuery={searchParams.get("d")}
            departments={departments}
            events={events}
          />
        </Suspense>
      </div>
    </>
  );
}

export default AllEvents;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Events({
  query,
  events,
  departmentQuery,
  departments,
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
      department: string | null;
    };
  }[];
  departmentQuery: string | null;
  departments: {
    slug: string;
    entry: {
      name: string;
    };
  }[];
}) {
  if (query) events = events.filter((event) => event.entry.domain === query);

  if (departmentQuery) {
    events = events.filter((event) =>
      departmentQuery.split(",").includes(event.entry.department || "")
    );
  }

  if (events.length < 1)
    return (
      <div className="text-center text-2xl">
        No events found. Try Changing the filters.
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
