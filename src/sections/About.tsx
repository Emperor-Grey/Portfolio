"use client";

import CSSIcon from "@/assets/icons/css3.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import JavaIcon from "@/assets/icons/java.svg";
import NodeJsIcon from "@/assets/icons/node.svg";
import ReactIcon from "@/assets/icons/react.svg";
import RustIcon from '@/assets/icons/rust.svg';
import SQLIcon from "@/assets/icons/sql.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import MapImage from "@/assets/images/new_map_india.png";

import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import ToolboxItems from "@/components/ToolboxItems";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import "@/app/about.css";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: 'Rust',
    iconType: RustIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node Js",
    iconType: NodeJsIcon,
  },
  {
    title: "SQL",
    iconType: SQLIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "React Native",
    iconType: ReactIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
];

const hobbies = [
  {
    title: "Watching",
    emoji: "📺",
    left: "5%",
    top: "10%",
  },
  {
    title: "Phone",
    emoji: "📱",
    left: "70%",
    top: "15%",
  },
  {
    title: "Vim",
    emoji: "✌️",
    left: "20%",
    top: "40%",
  },
  {
    title: "Sleeping",
    emoji: "😴",
    left: "50%",
    top: "10%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "50%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "10%",
    top: "75%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "60%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about Who I am, What I do, and What inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="book mx-auto mt-2 w-40 md:mt-0">
                <Image
                  width={80}
                  height={80}
                  alt="The Outstanding Developer by Sebastien Castiel"
                  src="https://m.media-amazon.com/images/I/51E2055ZGUL._SY466_.jpg"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className="animate-move-left [animation-duration:20s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="col-span-3 flex h-[320px] flex-col p-0 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={constrainRef}
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative col-span-3 h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="My Location in Map"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                {/* Dot for animation to sit on the top */}
                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  src={SmileEmoji}
                  alt="My Smile Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
