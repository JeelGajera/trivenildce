"use client";

import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { team } from "./data";
import TeamProfile from "@/components/sections/TeamProfile";

const sections = [
  "founders",
  "advisors",
  "conveners",
  "heads",
  "members",
] as const;

type Section = (typeof sections)[number];

function Page() {
  const [section, setSection] = useState<Section>("founders");
  const [members, setMembers] = useState(team[section]);

  useEffect(() => {
    setMembers(team[section]);
  }, [section]);

  return (
    <>
      <div className="text-center mt-1">
        <h1
          className="font-clourso text-[4rem] mt-[2rem] md:text-[4rem] lg:text-[5rem]"
          style={{ lineHeight: "5rem" }}
        >
          Our <span className="text-teal-500">Team</span>
        </h1>
      </div>
      <div className="my-5 container">
        <div className="flex overflow-x-auto flex-shrink-0 gap-2 my-5">
          {sections.map((s) => {
            return (
              <Badge
                key={s}
                variant={section === s ? "default" : "outline"}
                className="text-white mr-1 cursor-pointer my-2"
                onClick={() => {
                  setSection(s);
                }}
              >
                {s}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 container">
        {members.length === 0
          ? "No found"
          : members.map((m) => {
              return (
                <React.Fragment key={m.Timestamp}>
                  <TeamProfile
                    mail={m.Username}
                    name={m.Name}
                    phone={m["Phone Number"].toString()}
                    role={m["Position/ Role in Triveni"]}
                    image={m.Photo}
                  />
                </React.Fragment>
              );
            })}
      </div>
    </>
  );
}

export default Page;
