"use client";

import { useState } from "react";
import Image from "next/image";
import { games } from "@/app/lib/data";
import { formatDate } from "@/app/lib/utils";
import clsx from "clsx";

export default function CutdownMain() {
  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = (index: number) => {
    setCurrentTab(index);
  };
  return (
    <div className="relative flex flex-col col-span-9">
      {games.map((game, i) => (
        <Image
          key={game.id}
          className={clsx("absolute z-0 w-full h-full", i !== currentTab && "hidden")}
          src={game.image_path}
          width={3000}
          height={1500}
          alt="game image"
        ></Image>
      ))}
      {games.map((game, i) => (
        <Image
          key={game.id}
          className={clsx("relative", i !== currentTab && "hidden")}
          src={game.image_path}
          width={3000}
          height={1500}
          alt="game image"
        ></Image>
      ))}
      <div className="relative flex backdrop-blur-xl border-t border-white border-opacity-5 bg-grey-800/20">
        {games.map((game, i) => {
          return (
            <div
              key={game.id}
              className={clsx(
                "h-40 p-2 w-full flex flex-col gap-1 cursor-pointer",
                i !== 2 && "border-r border-white border-opacity-5 bg-grey-800/20",
                i === currentTab && "bg-black"
              )}
              onClick={() => toggleTab(i)}
            >
              <span className="text-sm">{game.name_tournament}</span>
              <span className="text-sm text-gray-500">{formatDate(game.date)}</span>
              <div className="flex gap-4 items-center">
                <Image className="" src={game.logo_team_1} width={50} height={50} alt="game image"></Image>
                <span className="text-gray-500">{game.name_team_1}</span>
              </div>
              <div className="flex gap-4 items-center">
                <Image className="" src={game.logo_team_2} width={50} height={50} alt="game image"></Image>
                <span className="text-gray-500">{game.name_team_2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
