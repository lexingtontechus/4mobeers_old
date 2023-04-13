import Script from "next/script";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Lottie() {
  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <lottie-player
        src="/img/cheers.json"
        background="transparent"
        speed="1"
        hover
        loop
        autoplay
      ></lottie-player>
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_PBgNop.json"
        background="transparent"
        speed="1"
        hover
        loop
        autoplay
      ></lottie-player>

      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </>
  );
}
