"use client";

import React from "react";
import { SiApplemusic, SiNeteasecloudmusic, SiYoutube, SiSpotify } from "react-icons/si";
import { QQMusicIcon } from "./svgs";
import { HoverEffect } from "./ui/card-hover-effect";


export default function Links(){

  const links = [
    {
      text: "Spotify",
      icon: SiSpotify,
      link: "https://open.spotify.com/artist/3zlAL9I7MVY2IcFKqmQWR6?si=zhFHmGvRSc2iUtAVp--ZBw",
    },
    {
      text: "Netease",
      icon: SiNeteasecloudmusic,
      link: "http://163cn.tv/wkWB5rX",
    },
    {
      text: "QQ Music",
      icon: QQMusicIcon,
      link: "https://c6.y.qq.com/base/fcgi-bin/u?__=O8dzhJqJewQd ",
    },
    {
      text: "Apple Music",
      icon: SiApplemusic,
      link: "https://music.apple.com/ca/artist/lil-feng/1678908141",
    },
    {
      text: "YouTube",
      icon: SiYoutube,
      link: "https://youtube.com/@lilfeng5733?si=JZryPlq3pVojsdMn",
    },
  ]

  return (
    <nav className=" flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold underline underline-offset-8 decoration-purple-300">My Links</h1>
      <div className="">
        <HoverEffect items={links} />
      </div>
    </nav>
  );
}