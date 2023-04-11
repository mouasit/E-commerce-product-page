import React, { useState } from "react";
import { IconClose, IconLeftArrow, IconRightArrow } from "./Icons";
import { thumbnails, imgProducts } from "../data";
import ListImg from "./ListImg";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import ModalImg from "./ModalImg";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
export default function BoxImg() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(0);
  const [stateModal, setStateModal] = useState(0);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  let count = 0;
  let countModal = 0;

  return (
    <>
      <section className="lg:flex lg:flex-col lg:gap-8">
        <div className="relative flex items-center lg:hidden">
          <img src={imgProducts[state]} alt="product" className="w-full" />
          <button
            aria-label="previous arrow"
            className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 ml-5 group"
          >
            <IconLeftArrow />
          </button>
          <button
            aria-label="next arrow"
            className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 mr-5 right-0 group"
          >
            <IconRightArrow />
          </button>
        </div>
        <button
          className="hidden lg:block rounded-2xl overflow-hidden"
          onClick={() => {
            onOpen();
            setStateModal(0);
          }}
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
      {isLargerThan1024 ? (
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
          <ModalOverlay />
          <ModalContent background={"none"} shadow={"none"}>
            <button
              className="absolute top-[-2.5rem] right-1 rounded-full group"
              onClick={onClose}
            >
              <IconClose />
            </button>
            <ModalBody padding={0} margin={0}>
              <ModalImg
                state={{
                  state: stateModal,
                  setState: setStateModal,
                  count: countModal,
                }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
