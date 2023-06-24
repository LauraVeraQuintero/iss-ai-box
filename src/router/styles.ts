import styled from "styled-components";
import {PHONE_WIDTH, TABLET_WIDTH} from "../styles/constants";

export const LeftImage = styled.img`
  position: absolute;
  height: 400px;
  left: 0;
  bottom: 0;

  @media all and (max-width: 890px) {
    height: 350px;
    bottom: 20px;
  }

  @media all and (max-width: 775px) {
    visibility: hidden;
  }
`;

export const RightImage = styled.img`
  position: absolute;
  height: 460px;
  right: 0;
  bottom: 0;

  @media all and (max-width: 890px) {
    height: 400px;
    bottom: 10px;
  }

  @media all and (max-width: 775px) {
    bottom: 200px;
  }

  @media all and (max-width: ${PHONE_WIDTH}px) {
    height: 350px;
    bottom: 250px;
  }
`;
