import { inputTypes } from "./input.types";

const INITIAL_STATE = {
  inputItems: "",
  solution: 0
};

const inputReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case inputTypes.ADD_TO_INPUT:
      if (isNaN(payload) && payload !== ".")
        return {
          ...state,
          inputItems: [...state.inputItems, payload]
        };
      else {
        if (payload === "." && !state.inputItems) {
          //CHECK if there is no other item
          return {
            ...state,
            inputItems: ["0."]
          };
        }
        if (payload === "." && isNaN(state.inputItems.slice(-1)[0])) {
          //CHECK if there is no other item
          // state.inputItems.push("0.");
          return {
            ...state,
            inputItems: [...state.inputItems, "0."]
          };
        }

        if (
          state.inputItems.length >= 1 &&
          !isNaN(state.inputItems.slice(-1)[0])
        ) {
          let tempArr = [...state.inputItems];
          let temp = tempArr.pop();
          temp += payload;
          return {
            ...state,
            inputItems: [...tempArr, temp]
          };
        }
        return {
          ...state,
          inputItems: [...state.inputItems, payload]
        };
      }
    case inputTypes.SOLUTION_OUTPUT:
      return {
        ...state,
        solution: payload
      };
    case inputTypes.CLEAR_OUTPUT:
      return {
        ...state,
        inputItems: "",
        solution: 0
      };
    default:
      return state;
  }
};

export default inputReducer;
