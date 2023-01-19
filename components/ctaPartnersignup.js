import React from "react";
import Link from "next/link";
import Container from "./container";
import { Modal, Button, Text, css } from "@nextui-org/react";
import RegisterPartner from "./registerPartner";

export default function CtaPartnersignup() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:truePink-400 bg-trueZinc-100 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-truePink-400 uppercase">
            Become a 4MoBeers Partner!!!
          </h2>
        </div>
        <div className="flex-shrink-0 w-full mx-auto w-auto">
          <Button
            auto
            shadow
            onPress={handler}
            css={{ background: "#581c87", color: "#f4f4f5" }}
          >
            Register
          </Button>
          <Modal
            width="600px"
            blur
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            css={{ background: "#18181b", color: "#f4f4f5" }}
          >
            <Modal.Header>
              <div
                className="font-bold text-3xl text-trueZinc-100"
                id="modal-title"
              >
                Partner Registration
              </div>
            </Modal.Header>
            <Modal.Body>
              <RegisterPartner />
            </Modal.Body>
            <Modal.Footer>
              <Button
                auto
                flat
                color="error"
                onPress={closeHandler}
                css={{ background: "#581c87", color: "#f4f4f5" }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Container>
  );
}
