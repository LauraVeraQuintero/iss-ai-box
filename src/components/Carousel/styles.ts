import styled from "styled-components";
import {PHONE_WIDTH} from "../../styles/constants";

export const DesktopWrapper = styled.div`
  position: relative;
`;
export const DesktopImages = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;

  @media all and (max-width: 1500px) {
    gap: 5%;
  }

  @media all and (max-width: 1200px) {
    > img {
      height: 450px;
    }
  }

  @media all and (max-width: 1100px) {
    > img {
      height: 380px;
    }
  }

  @media all and (max-width: 900px) {
    > img {
      height: 320px;
    }
  }
`;

export const MobileImages = styled.div`
  display: flex;
  gap: 7%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MobileStepperAndImgWrapper = styled.div`
  position: relative;

  @media all and (max-width: ${PHONE_WIDTH}px) {
    > img {
      height: 450px;
    }
  }

  @media all and (max-width: 440px) {
    > img {
      height: 370px;
    }
  }
`;

export const RightImageDesktop = styled.img`
  position: absolute;
  height: 350px;
  right: -50%;
  bottom: -120px;

  @media all and (max-width: 1100px) {
    height: 300px;
    right: -45%;
  }

  @media all and (max-width: 1000px) {
    height: 280px;
    right: -50%;
  }

  @media all and (max-width: 900px) {
    right: -55%;
  }
`;

export const LeftImageDesktop = styled.img`
  position: absolute;
  height: 350px;
  left: -50%;
  top: -10px;

  @media all and (max-width: 1600px) {
    left: -45%;
  }

  @media all and (max-width: 1400px) {
    left: -40%;
  }

  @media all and (max-width: 1300px) {
    left: -30%;
  }

  @media all and (max-width: 1200px) {
    left: -35%;
  }

  @media all and (max-width: 1100px) {
    left: -35%;
  }

  @media all and (max-width: 1050px) {
    left: -35%;
    height: 300px;
  }

  @media all and (max-width: 900px) {
    height: 280px;
    left: -40%;
  }
`;

export const RightImage = styled.img`
  position: absolute;
  height: 300px;
  right: -300px;
  bottom: -120px;

  @media all and (max-width: ${PHONE_WIDTH}px) {
    height: 290px;
    right: -350px;
    bottom: -100px;
  }

  @media all and (max-width: 400px) {
    height: 280px;
    right: -350px;
    bottom: -100px;
  }
`;

export const LeftImage = styled.img`
  position: absolute;
  height: 300px;
  left: -250px;
  top: 0;

  @media all and (max-width: 400px) {
    height: 280px;
    left: -260px;
    top: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 12%;
`;
