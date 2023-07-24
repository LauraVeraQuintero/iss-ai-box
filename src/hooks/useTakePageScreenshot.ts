import {HOME_PAGE_ID} from "../pages/Home/config";

export const useTakePageScreenshot = () => {
  const content = document.getElementById(HOME_PAGE_ID);
  const width = content?.offsetWidth;
  const height = content?.offsetHeight;
};
