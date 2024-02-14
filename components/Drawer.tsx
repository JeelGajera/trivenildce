"use client";

import { AnimatePresence, motion } from "framer-motion";

import useDrawer from "@/hooks/useDrawer";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";

const Drawer = () => {
  const { isOpen, close } = useDrawer();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ translateY: "-100%", rotate: "0deg" }}
            animate={{
              translateY: "-27%",
              rotate: "-10deg",
            }}
            exit={{
              rotate: "0deg",
              translateY: "-100%",
            }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed top-0 left-0 right-0 h-[500px] bg-yellow-500 w-screen z-[100] rounded-b-[60px] origin-top-right"
          >
            <div className="flex flex-col gap-10 p-[70px] h-full justify-end">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  href={item.href}
                  key={index + item.label + item.href + "MOBILE_DRAWER"}
                  className="text-4xl font-bold underline underline-offset-4"
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="h-screen w-screen bg-black/50 fixed top-0 left-0 right-0 z-20"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
