import prettier from "prettier";
import { Modal, useModal, Button, Text, css } from "@nextui-org/react";
import React from "react";
import Profile from "./profile";
import { useAccount } from "wagmi";

export default function ProfileModal() {
  // const [visible, setVisible] = React.useState(false);
  const { address } = useAccount();

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const { setVisible, bindings } = useModal();
  return (
    <div className="relative mx-2 mx-auto block inline-block rounded-md bg-trueFushia-700 uppercase">
      <Button
        css={{ color: "#f4f4f5", background: "#18181b" }}
        auto
        ripple
        animated
        onPress={handler}
      >
        <Text color="#f4f4f5" size="$md" weight="semibold">
          PROFILE
        </Text>
      </Button>
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
        className="bg-gradient-to-r from-trueBlue-400 to-trueBlue-600"
      >
        <Modal.Header>
          <Text
            h2
            id="modal-title"
            size={18}
            transform="uppercase font-black"
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Wallet Profile
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Profile address={address} />
        </Modal.Body>
        <Modal.Footer justify="center">
          <div className="rounded-md bg-trueFushia-700">
            <Button
              auto
              ripple
              animated
              shadow
              bordered
              color="gradient"
              css={{ color: "#f4f4f5", background: "#581c87" }}
              onPress={closeHandler}
            >
              CLOSE
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
