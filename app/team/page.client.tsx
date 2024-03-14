"use client";

import TeamProfile from "@/components/sections/TeamProfile";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { team as teamData } from "./data";
import { cn } from "@/lib/utils";

const teams = Object.keys(teamData);

function Page() {
  const [team, setTeam] = useState(teams[0]);

  const [members, setMembers] = useState(teamData["Founding Members"]);

  useEffect(() => {
    // @ts-ignore
    setMembers(teamData[team]);
  }, [team]);

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
          {teams.map((t) => {
            return (
              <Badge
                key={t}
                variant={team === t ? "default" : "outline"}
                className="text-white mr-1 cursor-pointer my-2"
                onClick={() => {
                  setTeam(t);
                }}
              >
                {t}
              </Badge>
            );
          })}
        </div>
      </div>
      <div
        className={cn([
          "grid grid-cols-1 md:grid-cols-4 container",
          team === "Founding Members" && "md:grid-cols-3",
        ])}
      >
        {members && members.length === 0
          ? "No found"
          : members.map((m) => {
              return (
                <React.Fragment key={m.email}>
                  <TeamProfile
                    mail={m.email}
                    name={m.name}
                    role={m.role}
                    image={m.image || "/images/placeholder-user.png"}
                    linkedin={m.linkedin}
                  />
                </React.Fragment>
              );
            })}
      </div>
    </>
  );
}

export default Page;
