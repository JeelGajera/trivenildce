import React from "react";

type Props = {};

function GradientText({}: Props) {
  return (
    <div className="text-5xl md:text-7xl font-actor text-center leading-none select-none tracking-tightest font-extrabold md:flex space-y-3 justify-center items-center">
      <p
        data-content="Step "
        className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-1"
      >
        <p className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
          Step
        </p>
      </p>
      <p
        data-content="On the"
        className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-2"
      >
        <p className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
          On the
        </p>
      </p>
      <p
        data-content="Journey"
        className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-white before:animate-gradient-background-3"
      >
        <p className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
          Journey
        </p>
      </p>
    </div>
  );
}

export default GradientText;
