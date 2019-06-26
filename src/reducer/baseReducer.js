import { GET_DATA_DEMO } from "../constants";

const BaseReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA_DEMO:
      return {
        ...state,
        things: action.payload
      };
    default:
      return state;
  }
};

export default BaseReducer;
