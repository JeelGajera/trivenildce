/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

function SponserPopup({ }: Props) {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (
      sessionStorage.getItem("sponserPopupOpened") !== "" &&
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
            <a href="https://www.dvividconsultant.com/"  className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/earthian/image/upload/v1709451456/Triveni2K24/sposors/udzbmznto2s3hhzm1epa.png"
                alt=""
              />
              <h2 className="text-lg">Title Sponsor</h2>
              <h3 className="font-bold text-xl">D VIVID Consultant</h3>
              <h3 className="text-md">Enroll for Sep 2024 Intake and get 30% off✨</h3>
            </a>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SponserPopup;
