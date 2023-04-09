import React, { useState } from "react";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import { thumbnails, imgProducts } from "../data";
import ListImg from "./ListImg";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
export default function BoxImg() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(0);
  let count = 0;
  return (
    <>
      <section className="lg:flex lg:flex-col lg:gap-8">
        <div className="relative flex items-center lg:hidden">
          <img src={imgProducts[state]} alt="product" className="w-full" />
          <button
            aria-label="previous arrow"
            className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 ml-5"
          >
            <IconLeftArrow />
          </button>
          <button
            aria-label="next arrow"
            className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 mr-5 right-0"
          >
            <IconRightArrow />
          </button>
        </div>
        <button
          className="hidden lg:block rounded-2xl overflow-hidden"
          onClick={onOpen}
        >
          <img src={imgProducts[state]} alt="product" className="w-full" />
        </button>
        <div className="hidden lg:flex items-center gap-8">
          {thumbnails.map((e, index) => {
            return (
              <ListImg
                thumbnail={e}
                key={index}
                state={{
                  state: state,
                  setState: setState,
                  count: count++,
                }}
              />
            );
          })}
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <button
            className="bg-green-900 absolute top-[-2rem] right-0"
            onClick={onClose}
          >
            hello
          </button>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              voluptatum dolor veniam sunt, quis repudiandae illo ipsa labore
              consequatur voluptas eligendi reiciendis aperiam fuga sed illum
              iste quod ullam velit?
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
