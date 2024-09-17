"use client";

import { Icons } from "./icons";
import { HeaderLink, HeaderLinkProps } from "./header-link";
import { useState } from "react";
import { motion } from "framer-motion";

const listVariant = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const links: HeaderLinkProps[] = [
  {
    label: "Developers",
    url: "",
  },
  {
    label: "Cross-chain dApps",
    url: "",
    target: "_blank",
  },
  {
    label: "EVM dApps",
    url: "",
  },
  {
    label: "FAQ",
    url: "#faq",
  },
];

export function Header(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  };

  return (
    <header className="w-full bg-foreground">
      <nav className="flex gap-20 items-center py-6 px-10">
        <Icons.XRPLEVMBlack />

        <ul className="md:flex gap-20 items-center hidden">
          {links.map((link) => (
            <HeaderLink key={link.label} {...link} />
          ))}
        </ul>

        <button type="button" className="ml-auto md:hidden" onClick={() => handleToggleMenu()}>
          <Icons.Hamburguer />
        </button>
      </nav>

      {isOpen && (
        <motion.div className="fixed bg-foreground right-0 left-0 bottom-0 h-screen z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex justify-between px-10 py-6">
            <button type="button" onClick={handleToggleMenu}>
              <Icons.XRPLEVMBlack />
            </button>

            <button type="button" className="ml-auto md:hidden" onClick={handleToggleMenu}>
              <Icons.Cross />
            </button>
          </div>

          <div className="h-screen overflow-auto px-10">
            <motion.ul
              initial="hidden"
              animate="show"
              className="font-semibold text-black overflow-auto items-end flex flex-col gap-6"
              variants={listVariant}
            >
              {links.map((link) => {
                return (
                  <motion.li variants={itemVariant} key={link.label}>
                    <HeaderLink {...link} onClick={handleToggleMenu} />
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </header>
  );
}
