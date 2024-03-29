import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ['Hi, my name is Arsham', 'This is my protfolio'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col text-center space-y-8 items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <Image
        priority
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/WhatsApp Image 2022-09-09 at 10.24.57.jpeg"
        alt="Picture of the arsham"
        width={500}
        height={500}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          software Engineer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#About">
            <button className="heroButton">about</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
