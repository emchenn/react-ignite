import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const detailsData = await axios.get(gameDetailsURL(id), {
    params: {
      key: process.env.REACT_APP_RAWG_API,
    },
  });
  const screenshotData = await axios.get(gameScreenshotURL(id), {
    params: {
      key: process.env.REACT_APP_RAWG_API,
    },
  });
  console.log(screenshotData);
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailsData.data,
      screen: screenshotData.data,
    },
  });
};
