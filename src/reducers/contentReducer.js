import { CONTENTS } from "../actions/actionTypes";

const INITIAL_STATE = {
  content: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTENTS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
