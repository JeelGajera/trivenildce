"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {};

function AEScript({}: Props) {
  const pathName = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/ae.js";
    document.body.appendChild(script);
    script.onload = () => {
      console.log("Script loaded");
    };

    return () => {
      script.remove();
    };
  }, [pathName]);
  return null;
}

export default AEScript;
