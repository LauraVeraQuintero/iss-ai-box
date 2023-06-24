import * as React from "react";

import {PHONE_WIDTH} from "../styles/constants";

export const mobileScreen = (size?: number) => {
  let currentScreenWidth;

  if (typeof window === "undefined" || typeof document === "undefined") {
    currentScreenWidth = undefined;
  } else {
    currentScreenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      window.screen.width;
  }

  if (!currentScreenWidth) return false;
  return currentScreenWidth <= (size || PHONE_WIDTH);
};

export const useDetectMobile = (size?: number) => {
  const [mobile, setMobile] = React.useState(mobileScreen(size));

  const updateMobile = () => setMobile(mobileScreen(size));

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, [updateMobile]);

  return mobile;
};
