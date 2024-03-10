"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; 


const HeroSection = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null); 
  const [videoIntersecting, setVideoIntersecting] = useState(false);

  // Use useInView hook to detect when the video is in the viewport
  const { ref, inView } = useInView({
    threshold: 0,
    onChange(inView, entry) {
      if (inView) {
        setVideoIntersecting(true);
        playVideo();
      } else {
        setVideoIntersecting(false);
        pauseVideo();
      }
    },
  });

  // Function to toggle the muted state of the video
  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  // Function to play the video
  const playVideo = () => {
    videoRef.current?.play();
  };

  // Function to pause the video
  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <section className="hero min-h-screen mb-10 relative">
      <video
        preload="auto"
        id="homeCampusVideo"
        ref={videoRef}
        src="https://res.cloudinary.com/earthian/video/upload/v1710059894/Triveni2K24/LDCE_Campus_sukcok.mp4"
        autoPlay
        loop
        muted={muted}
        className="object-cover h-full w-full"
        onPlay={() => inView && playVideo()}
        onPause={() => pauseVideo()}
      />
      <div className="hero-overlay bg-opacity-50 bg-gray-950"></div>
      <div className="container flex flex-col sm:flex-row items-center flex-wrap justify-center md:justify-between lg:justify-between w-[98%]">
        <div className="text w-[100%] md:w-[50%] lg:w-[60%] p-3">
          <h2 className="font-actor text-lg md:text-2xl mt-[8rem] sm:mt-0">
            L.D. College of Engineering, Ahmedabad presents
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl mt-5 font-clourso shadow-md animate-glitch">
            <span className=" text-teal-500">Triveni 2k24</span> - Embark on
            the journey of{" "}
            <span className="text-red-500"> InnoCulture </span>
          </h1>
          <div className="buttons mt-10 w-full">
            <Link href="/events">
              <Button size="lg">
                ✨Unlock the Excitement!
                <ArrowRight className="ml-2 w-4 h-4 animate-pulse" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="side-image mt-12 lg:mb-24 lg:mt-0 mb-0 justify-center items-center">
          {/* animated triveni logo */}
          <div className="relative w-56 sm:w-auto sm:mt-52">
            <Image
              src="/hero/logo.png"
              alt="Triveni Logo"
              width={180}
              height={80}
              className="w-28 sm:w-[200px] absolute invert top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="w-56 sm:w-auto sm:mt-52">
              <Image
                src="/hero/Mna.png"
                alt="Triveni Logo"
                width={420}
                height={420}
                className="animate-spinSlow"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mute/Unmute button */}
      <button
        className="absolute bottom-4 right-4 z-10 text-primary bg-white bg-opacity-10 p-2 rounded-full animate-pulse"
        onClick={toggleMute}
      >
        {muted ? (
            // Mute icon when the video is muted
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="22" x2="16" y1="9" y2="15" /><line x1="16" x2="22" y1="9" y2="15" /></svg>
          ) : (
            // Unmute icon when the video is not muted
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          )}
      </button>
      {/* Intersection observer */}
      <div ref={ref}></div>
    </section>
  );
};

export default HeroSection;