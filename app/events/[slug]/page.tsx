/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import EventCard from "@/components/EventCard";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { reader } from "@/lib/reader";
import { cn, getDepartmentFromSlug, getDomainFromSlug } from "@/lib/utils";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const title = ({ slug }: { slug: string }) => {
    const words = slug.split('-');
    return words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  return {
    title: `Triveni 2K24 | ${title(params)} - Embark On The Journey of Inno-Culture ✨`,
  };
}


async function Page({ params }: Props) {
  const eventPromise = reader.collections.events.read(params.slug, {
    resolveLinkedFiles: true,
  });

  const allEventsPromise = reader.collections.events.all();

  const [event, allEvents] = await Promise.all([
    eventPromise,
    allEventsPromise,
  ]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <div className="container mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="h-[200px] md:h-[300px]">
            <img
              src={`https://wsrv.nl/?url=raw.githubusercontent.com/mdhruvil/triveni/main/content/events/${params.slug}/${event.eventImg}&h=400`}
              alt={event?.name || "Triveni Event"}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 md:gap-4">
            <h1 className="font-actor text-3xl md:text-4xl mb-2">{event.name}</h1>
            <div className="flex items-center gap-2">
              Mode :
              {event.entryType.map((badge) => (
                <Badge key={badge} variant="outline" className="text-white">
                  {badge === "solo" ? "Solo" : "Team"}
                </Badge>
              ))}
            </div>
            <div>Domain : {getDomainFromSlug(event.domain || "")}</div>
            {/* <div>Department: {getDepartmentFromSlug(event.department || "")}</div> */}
            <div className="mt-2">
              <button
                data-event-id="80001361265782"
                data-ticket-id={event.AE_id}
                className={buttonVariants({ className: "ae-ticket-book-button" })}
              >
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <div className="p-3 bg-white bg-opacity-15 backdrop-blur-md rounded-lg">
            <span className="font-bold text-lg">Entry Fee:</span>
            <br />

            {event.entryFee.split("\n").map((line) => {
              return (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              );
            })}
          </div>
          {/* Temporary Disable */}
          {/* <div className="p-3 bg-white bg-opacity-15 backdrop-blur-mdrounded-lg space-y-3">
          <div>
            <span className="font-bold text-lg">Date:</span>
            <br />
            <span>{event.eventDateAndTime.date}</span>
          </div>
          <div>
            <span className="font-bold text-lg">Time:</span>
            <br />
            <span>{event.eventDateAndTime.time}</span>
          </div>
        </div> */}
          <div className="p-3 bg-white bg-opacity-15 backdrop-blur-md rounded-lg flex justify-between">
            <div>
              <span className="font-bold text-lg">Prize:</span>
              <br />
              {event.prize.split("\n").map((line) => {
                return (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
            <div className="">
              <Image src="/images/prize.png" alt="prize" width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="mt-5 bg-white bg-opacity-15 backdrop-blur-md p-3 rounded-lg">
          <DocumentRenderer
            document={event.description}
            renderers={{
              block: {
                heading({ level, children, textAlign }) {
                  switch (level) {
                    case 1:
                      return (
                        <h1
                          className="text-2xl mt-5 font-bold"
                          style={{ textAlign }}
                        >
                          {children}
                        </h1>
                      );
                    case 2:
                      return (
                        <h2
                          className="text-xl mt-3 font-bold"
                          style={{ textAlign }}
                        >
                          {children}
                        </h2>
                      );
                    case 3:
                      return (
                        <h3
                          className="text-lg mt-1 font-bold"
                          style={{ textAlign }}
                        >
                          {children}
                        </h3>
                      );
                    case 4:
                      return (
                        <h4
                          className="text-base mt-3 font-bold"
                          style={{ textAlign }}
                        >
                          {children}
                        </h4>
                      );
                    case 5:
                      return (
                        <h5
                          className="text-sm mt-3 font-bold"
                          style={{ textAlign }}
                        >
                          {children}
                        </h5>
                      );
                    default:
                      return (
                        <h6
                          className="text-xs mt-3 font-bold"
                          style={{ textAlign }}
                        >
                          {children}
                        </h6>
                      );
                  }
                },
                list({ children }) {
                  return (
                    <li className="list-none">
                      {children.map((child) => {
                        return <ul key={child.key}>- {child}</ul>;
                      })}
                    </li>
                  );
                },
              },
            }}
          ></DocumentRenderer>
        </div>


        <div className="mt-12 space-y-3">
          <h1 className="text-3xl font-bold my-10 md:my-0 font-actor text_shadow_red animate-glitch_wave">
            More Events:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {allEvents
              .filter((allEvent) => {
                return (
                  allEvent.entry.department === event.department &&
                  allEvent.slug !== params.slug
                );
              })
              .slice(0, 3)
              .map((allEvent) => {
                return (
                  <EventCard
                    badges={allEvent.entry.entryType}
                    href={`/events/${allEvent.slug}`}
                    imageUrl={
                      `https://wsrv.nl/?url=raw.githubusercontent.com/mdhruvil/triveni/main/content/events/${allEvent.slug}/${allEvent.entry.eventImg}&h=300` ??
                      ""
                    }
                    title={allEvent.entry.name}
                    key={allEvent.slug}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
