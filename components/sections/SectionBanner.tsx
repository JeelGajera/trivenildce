"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SectionBanner = () => {

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
    setMuted(prevMuted => !prevMuted);
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
    <section className="mb-30 overflow-hidden select-none" id="sponsors">
      <div className="relative h-[600px] w-screen">
        {/* <Image
          src="https://res.cloudinary.com/earthian/image/upload/v1708971795/Triveni2K24/sectionBanner_fxcbo0.webp"
          alt="Section banner"
          className="object-cover absolute left-0"
          fill
        /> */}
        <video
          preload="auto"
          id="homeGuitarVideo"
          ref={videoRef}
          src="https://res.cloudinary.com/earthian/video/upload/v1710064371/Triveni2K24/guitar_gif_doqkik.mp4"
          autoPlay
          loop
          muted={muted}
          className="object-contain h-full w-full"
          onPlay={() => inView && playVideo()}
          onPause={() => pauseVideo()}
        />
        {/* Mute/Unmute button */}
        <button
          className="absolute top-4 left-4 z-10 text-primary bg-white bg-opacity-10 p-2 rounded-full animate-pulse"
          onClick={toggleMute}
        >
          {/* Display different icons based on the muted state */}
          {muted ? (
            // Mute icon when the video is muted
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="22" x2="16" y1="9" y2="15" /><line x1="16" x2="22" y1="9" y2="15" /></svg>
          ) : (
            // Unmute icon when the video is not muted
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          )}
        </button>

        {/* overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-center text-[40px] md:text-[70px] font-bold font-actor">
            Embark on the Journey of <br /> Diversity and Creativity!
          </h1>
        </div>
        {/* TODO add sponsors section */}
      </div>
      {/* Intersection observer */}
      <div ref={ref}></div>
    </section>
  );
};

export default SectionBanner;
