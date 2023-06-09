import React, { useEffect, useRef, useContext, useState } from "react";
import { IconCart, IconClose, IconMenu } from "./Icons";
import logo from "../assets/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import { handelHover } from "../helpers";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { openCart, closeCart } from "../helpers";

import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { CartContext } from "../App";
import Cart from "./Cart";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [click, setClick] = useState(false);
  const box = useRef(null);
  const contentBox = useRef(null);
  const avatarRef = useRef(null);
  const btnRef = React.useRef();
  const nav = useRef(null);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  const CartData = useContext(CartContext);
  useEffect(() => {
    handelHover(nav.current);
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        contentBox.current &&
        box.current &&
        click &&
        !box.current.contains(e.target)
      ) {
        closeCart(click, box, contentBox, setClick);
      }
    });
  }, [click]);
  return (
    <>
      <section className="flex items-center justify-between relative p-5 lg:p-0 lg:mx-5 lg:border-b-[1px] lg:border-grayishBlue">
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
        <div className=" flex items-center gap-7 lg:gap-12">
          <div className="1xl:relative flex justify-center" ref={box}>
            <button
              aria-label="cart button"
              className="group relative"
              onClick={(e) => {
                openCart(e, click, contentBox, setClick);
              }}
            >
              {CartData.cart.quantity > 0 ? (
                <span className="absolute bottom-[.8rem] right-[-9px] px-2 text-[.6rem] rounded-full text-white font-bold bg-orange">
                  {CartData.cart.quantity}
                </span>
              ) : null}
              <IconCart />
            </button>
            {click ? (
              <div
                className="absolute z-[999] w-full lg:w-[23rem] left-0  lg:right-0 1xl:right-auto lg:left-auto flex justify-center top-[6rem] h-64 lg:h-64 lg:top-[5.2rem] 1xl:top-10 animate-fadeIn "
                ref={contentBox}
              >
                <div className="rounded-[.5rem] lg:w-full w-[97%] bg-white shadow-4xl">
                  <Cart ref={avatarRef} />
                </div>
              </div>
            ) : null}
          </div>
          <button
            aria-label="avatar"
            className="rounded-full border-2 border-transparent hover:border-orange"
            ref={avatarRef}
            onFocus={() => {
              closeCart(click, box, contentBox, setClick);
            }}
          >
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
