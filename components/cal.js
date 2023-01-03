import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "4mobeers/30min",
        buttonText: "Beer Me",
        buttonColor: "#7e22ce",
        buttonTextColor: "#f4f4f5",
        buttonPosition: "bottom-left",
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#ea580c" },
        },
      });
    })();
  }, []);
}
