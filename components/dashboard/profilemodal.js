import { Modal, useModal, Button, Text, css } from "@nextui-org/react";
import React from "react";
import Profile from "./profile";

export default function ProfileModal({ address }) {
  // const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button
        className="uppercase button primary block bg-truePurple-900 rounded-md p-2 w-full text-trueZinc-100 mx-auto w-full"
        auto
        shadow
        css={{ color: "#f4f4f5", background: "#581c87" }}
        onPress={handler}
      >
        Profile
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
          <Text h2 id="modal-title" size={18} css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold">
            Partner NIL Profile
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">Update Your Profile</Text>
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
