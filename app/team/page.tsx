"use client";

import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { teamData } from "./data";
import TeamProfile from "@/components/sections/TeamProfile";
import { flushSync } from "react-dom";

function Page() {
  const [teams, setTeams] = useState<string[]>([]);
  const [team, setTeam] = useState("founders");

  const [members, setMembers] = useState<typeof teamData>([]);

  useEffect(() => {
    const cacheTeam: string[] = [];
    teamData.forEach((p) =>
      !cacheTeam.includes(p.team) ? cacheTeam.push(p.team) : {}
    );
    setTeams(cacheTeam);

    setTeam(cacheTeam[0]);
  }, []);

  useEffect(() => {
    setMembers(teamData.filter((p) => p.team === team));
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
      <div className="grid grid-cols-1 md:grid-cols-4 container">
        {members && members.length === 0
          ? "No found"
          : members.map((m) => {
              return (
                <React.Fragment key={m.Timestamp}>
                  <TeamProfile
                    mail={m.email}
                    name={m.firstname + " " + m.lastname}
                    linkedin={m.linkedin}
                    role={m.position}
                    image={m.imageurl || "/images/placeholder-user.png"}
                  />
                </React.Fragment>
              );
            })}
      </div>
    </>
  );
}

export default Page;
