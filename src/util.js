// Media resize
import forestImg from "./img/forest.png";
export const smallImage = (imagePath, size) => {
  if (!imagePath) return forestImg;
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
