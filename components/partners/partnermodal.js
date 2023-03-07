"use client";
import { Modal, useModal, Button, Text, css } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import PartnerSignup from "./partnersignup";

export default function PartnerModal({ address }) {
  // const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const { setVisible, bindings } = useModal();
  return (
    <>
      <div className="relative mx-auto inline-block uppercase block bg-truePurple-700 rounded-md w-full text-trueZinc-100 font-black">
        <Button
          auto
          shadow
          ripple
          animated   
          onPress={handler}
        >
          <Text color="#f4f4f5" size="$md" weight="semibold">
            REGISTER
          </Text>
        </Button>
      </div>
      <Modal
        animated={false}
        //scroll
        //fullScreen
        preventClose
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeButton
        blur
        //open={visible}
        onClose={closeHandler}
        {...bindings}
      >
        <Modal.Header>
          <Text
            h2
            id="modal-title"
            size={18}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
            transform="uppercase"
          >
            Partners NIL Program
          </Text>
        </Modal.Header>
        <Modal.Body>
          <PartnerSignup />
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            css={{ color: "#f4f4f5", background: "#581c87" }}
            onPress={closeHandler}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
