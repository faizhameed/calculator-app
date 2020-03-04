import { inputTypes } from "./input.types";

const INITIAL_STATE = {
  inputItems: ""
};

const inputReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case inputTypes.ADD_TO_INPUT:
      return {
        ...state,
        inputItems: [...state.inputItems, payload]
      };

    default:
      return state;
  }
};

export default inputReducer;
