"use client";

import { useState } from "react";
import Image from "next/image";
import { games } from "@/app/lib/data";
import { formatDate } from "@/app/lib/utils";

export default function CutdownMain() {
  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = (index: number) => {
    console.log("index", index);

    setCurrentTab(index);
  };
  return (
    // <div>
    //   <div className="">
    //     <Image src={"/cs.png"} width={1000} height={500} alt="game image"></Image>
    //   </div>
    // </div>
    <>
      <div className="flex flex-col col-span-9">
        <Image src={"/cs.jpeg"} width={1000} height={500} alt="game image"></Image>
        <div className="flex">
          {games.map((game, i) => {
            return (
              <div
                key={game.id}
                className="h-40 p-2 w-full flex flex-col gap-1 border cursor-pointer"
                onClick={() => toggleTab(i)}
              >
                {/* <Image
                  className="absolute w-full z-0"
                  src={game.image_path}
                  width={100}
                  height={100}
                  alt="game image"
                ></Image> */}
                <span className="text-sm">{game.name_tournament}</span>
                <span className="text-sm text-gray-500">{formatDate(game.date)}</span>
                <div className="flex gap-2">
                  <Image
                    className="absolute w-full z-0"
                    src={game.logo_team_1}
                    width={50}
                    height={50}
                    alt="game image"
                  ></Image>
                  <span className="text-gray-500">{game.name_team_1}</span>
                </div>
                <div className="flex gap-2">
                  <Image
                    className="absolute z-0"
                    src={game.logo_team_2}
                    width={50}
                    height={50}
                    alt="game image"
                  ></Image>
                  <span className="text-gray-500">{game.name_team_2}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
