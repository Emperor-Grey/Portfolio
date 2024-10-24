import Image from 'next/image';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer.png';

import HeroOrbit from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* Ringa Ringa Rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[830px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Stars orbiting my hero section */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-48 text-emerald-300" />
        </HeroOrbit>

        {/* Stars orbiting my hero section */}
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        {/* Stars orbiting my hero section */}
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        {/* Sparkle */}
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>

        {/* Circle */}
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
      </div>

      <div className="container">
        {/* Container for the Image */}
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="Person Looking at the laptop"
          />
          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-4 rounded-lg">
            {/* FOR DOT, AVAILABILITY DOT */}
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new project</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 md:text-5xl gap-4">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
