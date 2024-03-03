/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import SponsorCard from "./sponsors_Card";

type Props = {};

function SponserPopup({}: Props) {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (
      sessionStorage.getItem("sponserPopupOpened") !== "true" &&
      pathName.startsWith("/events")
    ) {
      setOpen(true);
      sessionStorage.setItem("sponserPopupOpened", "true");
    }
  }, [pathName]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="dark">
        <DialogHeader>
          <DialogTitle>Triveni 2024 presented by</DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/earthian/image/upload/v1709451456/Triveni2K24/sposors/udzbmznto2s3hhzm1epa.png"
              alt=""
            />
            <h3>Title Sponsor</h3>
            <h2 className="font-bold text-xl">D VIVID Consultant</h2>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SponserPopup;
