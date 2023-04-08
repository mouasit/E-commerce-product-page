import React from "react";
import { IconCart, IconMenu } from "./Icons";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png"

export default function Navigation() {
  return (
    <section>
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-5">
          <button aria-label="icon menu" className="relative top-[.1rem]">
            <IconMenu />
          </button>
          <button aria-label="logo">
            <img src={logo} alt="logo" />
          </button>
        </div>
        <div className="flex items-center gap-7">
          <button>
            <IconCart />
          </button>
          <button aria-label="avatar">
            <img src={avatar} alt="avatar" className="w-10 h-10"/>
          </button>
        </div>
      </div>
    </section>
  );
}
