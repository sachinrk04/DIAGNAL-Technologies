import { CONTENTS } from "./actionTypes";
import data from "../assets/API/CONTENTLISTINGPAGE-PAGE1.json";

export const setContentData = (payload) => {
  return {
    type: CONTENTS,
    payload: {
      title: payload.title,
      "total-content-items": payload["total-content-items"],
      "page-num-requested": payload["page-num-requested"],
      "page-size-requested": payload["page-size-requested"],
      "page-size-returned": payload["page-size-returned"],
      "content-items": payload["content-items"].content,
    },
  };
};

export const getContent = () => {
  return (dispatch) => {
    dispatch(setContentData(data.page));
  };
};
