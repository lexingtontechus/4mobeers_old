'use client';
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "4mobeers/15min",
        buttonText: "🍻",
        buttonColor: "#a21caf",
        buttonTextColor: "#f4f4f5",
        buttonPosition: "bottom-left",
        hideButtonIcon: true,
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#a21caf" },
        },
      });
    })();
  }, []);
}
