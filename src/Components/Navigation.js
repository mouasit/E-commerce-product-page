import React, { useEffect } from "react";
import { IconCart, IconMenu } from "./Icons";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";

export default function Navigation() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const list = nav.querySelectorAll("li");
    const buttons = nav.querySelectorAll("button");

    buttons.forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.classList.add("text-veryDarkBlue");
        e.parentElement.classList.remove("border-transparent");
        e.parentElement.classList.add("border-orange");
      });
      e.addEventListener("focus", () => {
        list.forEach((element) => {
          element.querySelector("button").classList.remove("text-veryDarkBlue");
          element.classList.remove("border-orange");
          element.classList.add("border-transparent");
          element.classList.remove("click");
        });
        e.classList.add("text-veryDarkBlue");
        e.parentElement.classList.remove("border-transparent");
        e.parentElement.classList.add("border-orange");
        e.parentElement.classList.add("click");
      });
      e.addEventListener("mouseleave", () => {
        if (!e.parentElement.classList.contains("click")) {
          e.classList.remove("text-veryDarkBlue");
          e.parentElement.classList.remove("border-orange");
          e.parentElement.classList.add("border-transparent");
        }
      });
      e.addEventListener("blur", () => {
        if (!e.parentElement.classList.contains("click")) {
          e.classList.remove("text-veryDarkBlue");
          e.parentElement.classList.remove("border-orange");
          e.parentElement.classList.add("border-transparent");
        }
      });
    });
  }, []);
  return (
    <section className="flex items-center justify-between p-5 lg:p-0 border-b-[1px] border-grayishBlue">
      <div className="flex items-center gap-5 lg:gap-16">
        <button
          aria-label="icon menu"
          className="relative top-[.1rem] lg:hidden"
        >
          <IconMenu />
        </button>
        <button aria-label="logo">
          <img src={logo} alt="logo" />
        </button>
        <nav className="hidden lg:block">
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
        <button aria-label="avatar">
          <img src={avatar} alt="avatar" className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
}
