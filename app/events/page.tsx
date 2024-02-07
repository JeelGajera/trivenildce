import EventCard from "@/components/sections/EventCard";
import { Badge } from "@/components/ui/badge";
import { reader } from "@/lib/reader";

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
async function AllEvents({}: Props) {
  const eventsPromise = reader.collections.events.all();
  const domainsPromise = reader.collections.domains.all();

  const [events, domains] = await Promise.all([eventsPromise, domainsPromise]);
  if (events.length < 1) {
    // TODO: Add a better message
    return <>No Events</>;
  }

  return (
    <div className="container">
      <h1 className="text-4xl text-center hidden md:block">
        Experience the Extraordinary: Triveni <br />
        2k24 Events that Transcend Imagination!
      </h1>
      <div className="flex overflow-x-auto flex-shrink-0 gap-2 my-5">
        {domains.map((domain, i) => {
          return (
            <Badge
              key={domain.slug}
              variant={i === 0 ? "default" : "outline"}
              className="text-white whitespace-nowrap my-2"
            >
              {domain.entry.name}
            </Badge>
          );
        })}
      </div>
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
    </div>
  );
}

export default AllEvents;
