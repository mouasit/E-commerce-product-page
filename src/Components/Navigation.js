import React, { useEffect, useRef } from "react";
import { IconCart, IconClose, IconMenu } from "./Icons";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import { handelHover } from "../helpers";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import { useDisclosure, useMediaQuery } from "@chakra-ui/react";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const nav = useRef(null);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    handelHover(nav.current);
  }, []);
  return (
    <>
      <section className="flex items-center justify-between p-5 lg:p-0 lg:mx-5 lg:border-b-[1px] lg:border-grayishBlue">
        <div className="flex items-center gap-5 lg:gap-16">
          <button aria-label="icon menu" className="lg:hidden" onClick={onOpen}>
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
      {!isLargerThan1024 ? (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody paddingTop={6}>
              <button className="rounded-full" onClick={onClose}>
                <IconClose edit="w-[14px] h-[15px] fill-[#69707D]" />
              </button>
              <nav className="mt-10">
                <ul className="flex flex-col gap-5 font-bold text-md text-veryDarkBlue">
                  <li>
                    <button>Collections</button>
                  </li>
                  <li>
                    <button>Men</button>
                  </li>
                  <li>
                    <button>Women</button>
                  </li>
                  <li>
                    <button>About</button>
                  </li>
                  <li>
                    <button>Contact</button>
                  </li>
                </ul>
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : null}
    </>
  );
}
