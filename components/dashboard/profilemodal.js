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
    <div className="mx-2 relative mx-auto inline-block uppercase block bg-truePurple-700 rounded-md">
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
      >
        <Modal.Header>
          <Text
            h2
            id="modal-title"
            size={18}
            transform="uppercase"
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Wallet Profile
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            id="modal-description"
            className="mx-auto align-center text-center"
          >
            Update Your Profile
          </Text>
          <Profile address={address} />
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
    </div>
  );
}
