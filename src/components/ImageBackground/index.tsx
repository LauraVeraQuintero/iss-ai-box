import * as React from "react";
import {Image, Overlay} from "./styles";

type Props = {
  imageRoute: string;
  widthInPx?: number;
  overlay?: boolean;
};
export const ImageBackground: React.FC<Props> = ({imageRoute, widthInPx, overlay}) => {
  return (
    <>
      {overlay && <Overlay />}
      <Image src={imageRoute} width={widthInPx} />
    </>
  );
};
