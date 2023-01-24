import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "About me", href: "/#aboutme" },
  { text: "Tech stack", href: "/#techstack" },
  { text: "Projects", href: "/#projects" },
];

const divCss = "w-[40px] h-[4px] bg-black rounded-sm transition-all duration-[0.3s]";

export default function Nav() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
return (
  <header className="sticky z-30 top-0">
    <nav className={`flex p-[16px] md:px-8 md:py-0 justify-between items-center bg-gray-100 shadow-md`}>
      <Link href="/">
        <Image className="hover:cursor-pointer" src={"/logo.svg"} alt="logo" height={50} width={50} />
      </Link>
      <div onClick={() => setNavActive(!navActive)} className={`flex flex-col gap-y-[6px] cursor-pointer md:hidden`}>
        <div className={` ${divCss} ${navActive ? "translate-y-[12px] rotate-[45deg]" : ""}`}></div>
        <div className={`${divCss} ${navActive ? "scale-0 opacity-0" : ""}`}></div>
        <div className={`${divCss} ${navActive ? "translate-y-[-8px] rotate-[-45deg]" : ""}`}></div>
      </div>
      <div className={`${navActive ? "active" : ""} nav__menu-list`}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  </header>
);
}
