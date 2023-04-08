import React, { useEffect, useRef } from "react";
import { IconCart, IconMenu } from "./Icons";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import { handelHover } from "../helpers";

export default function Navigation() {
  const nav = useRef(null);
  useEffect(() => {
    handelHover(nav.current);
  }, []);
  return (
    <section className="flex items-center justify-between p-5 lg:p-0 lg:mx-5 lg:border-b-[1px] lg:border-grayishBlue">
      <div className="flex items-center gap-5 lg:gap-16">
        <button aria-label="icon menu" className="lg:hidden">
          <IconMenu />
        </button>
        <button aria-label="logo" className="relative bottom-[1px]">
          <img src={logo} alt="logo" />
        </button>
        <nav className="hidden lg:block" ref={nav}>
          <ul className="flex items-center gap-8 font-normal text-md text-darkGrayishBlue">
            <li className="pt-10 border-b-[4px] pb-[2.25rem] border-transparent ">
              <button>Collections</button>
            </li>
            <li className="pt-10 border-b-[4px] pb-[2.25rem] border-transparent">
              <button>Men</button>
            </li>
            <li className="pt-10 border-b-[4px] pb-[2.25rem] border-transparent">
              <button>Women</button>
            </li>
            <li className="pt-10 border-b-[4px] pb-[2.25rem] border-transparent">
              <button>About</button>
            </li>
            <li className="pt-10 border-b-[4px] pb-[2.25rem] border-transparent">
              <button>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-7 lg:gap-12">
        <button>
          <IconCart />
        </button>
        <button aria-label="avatar" className="rounded-full">
          <img src={avatar} alt="avatar" className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
}
