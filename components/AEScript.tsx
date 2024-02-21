"use client";
import React, { useEffect } from "react";

type Props = {};

function AEScript({}: Props) {
  useEffect(() => {
    const jQ = document.createElement("script");
    jQ.src = "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js";
    document.body.appendChild(jQ);
    const AE = document.createElement("script");
    AE.src = "https://allevents.in/scripts/public/ae-plugin-lib-button.js";
    document.body.appendChild(AE);
    return () => {
      document.body.removeChild(jQ);
      document.body.removeChild(AE);
    };
  });
  return null;
}

export default AEScript;
