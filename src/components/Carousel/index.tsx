import * as React from "react";
import {
  DesktopImages,
  MobileImages,
  MobileStepperAndImgWrapper,
  DesktopWrapper,
  Wrapper,
} from "./styles";
import {useDetectMobile} from "hooks/useDetectMobile";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileStepper from "@mui/material/MobileStepper";

type Props = {
  imagesRoutes: string[];
  text?: string;
};
export const Carousel: React.FC<Props> = ({imagesRoutes, text}) => {
  const mobile = useDetectMobile(800);
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);

  const changeIndex = (currentIndex: number, step: number) => {
    if (currentIndex + step === -1) return imagesRoutes.length - 1;
    return (currentIndex + step) % imagesRoutes.length;
  };

  return (
    <Wrapper>
      <p>{text}</p>
      {mobile ? (
        <MobileImages>
          <ArrowBackIosNewIcon
            onClick={() => setCurrentImgIndex((state) => changeIndex(state, -1))}
          />
          <MobileStepperAndImgWrapper>
            <img src={imagesRoutes[currentImgIndex]} height={500} />
            <MobileStepper
              variant="dots"
              steps={imagesRoutes.length}
              position="static"
              activeStep={currentImgIndex}
              sx={{maxWidth: 400, flexGrow: 1}}
              nextButton={<span />}
              backButton={<span />}
            />
          </MobileStepperAndImgWrapper>
          <ArrowForwardIosIcon
            onClick={() => setCurrentImgIndex((state) => changeIndex(state, 1))}
          />
        </MobileImages>
      ) : (
        <DesktopWrapper>
          <DesktopImages>
            {imagesRoutes.map((img, index) => (
              <img height={500} src={img} key={index} />
            ))}
          </DesktopImages>
        </DesktopWrapper>
      )}
    </Wrapper>
  );
};
