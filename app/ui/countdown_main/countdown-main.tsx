"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { games } from "@/app/lib/data";
import { formatDate } from "@/app/lib/utils";
import clsx from "clsx";
import Countdown from "react-countdown";
import { Counter } from "./counter";

export default function CountdownMain() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTab = (index: number) => {
    setCurrentTab(index);
  };

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <Counter days={0} hours={0} minutes={0} seconds={0} />;
    } else {
      return <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
    }
  };

  return (
    <div className="relative flex flex-col col-span-12">
      {games.map((game, i) => {
        return (
          <div key={game.id} className={clsx(i !== currentTab && "hidden")}>
            <Image
              key={game.id}
              className={clsx("absolute z-0 w-full h-full", i !== currentTab && "hidden")}
              src={game.image_path}
              width={3000}
              height={1500}
              alt="game image"
              priority={true}
            ></Image>
            <div className="relative py-12 flex flex-col items-center justify-center gap-8">
              <h2 className="text-xl">{game.name_tournament}</h2>
              <h2 className="text-3xl uppercase">
                {game.name_team_1} vs {game.name_team_2}
              </h2>
              <div className="flex gap-12 justify-center items-center">
                <Image className="" src={game.logo_team_1} width={50} height={50} alt="game image"></Image>
                <span className="text-gray-500">vs</span>
                <Image className="" src={game.logo_team_2} width={50} height={50} alt="game image"></Image>
              </div>
              <div>
                {isClient ? (
                  <Countdown date={game.date} renderer={renderer} />
                ) : (
                  <Counter days={0} hours={0} minutes={0} seconds={0} hidden={"invisible"} />
                )}
              </div>
              <button className="py-2 px-4 text-black bg-white rounded-lg hover:bg-gray-400 transition-colors duration-200">
                Join The Chat
              </button>
            </div>
          </div>
        );
      })}
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
