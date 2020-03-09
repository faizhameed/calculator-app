import { inputTypes } from "./input.types";

const INITIAL_STATE = {
  inputItems: "",
  solution: 0
};

const inputReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case inputTypes.ADD_TO_INPUT:
      if (isNaN(payload) && payload !== ".") {
        switch (
          payload // user enters + or - as the first input
        ) {
          case "-":
            if (!state.inputItems)
              return {
                ...state,
                inputItems: ["0", "-"]
              };
            break;
          case "+":
            if (!state.inputItems)
              return {
                ...state,
                inputItems: ["0", "+"]
              };
            break;
          default:
            break;
        }
        return {
          ...state,
          inputItems: [...state.inputItems, payload]
        };
      } else {
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
        inputItems: "",
        solution: payload
      };
    case inputTypes.CLEAR_OUTPUT:
      return {
        ...state,
        inputItems: "",
        solution: 0
      };
    case inputTypes.PLUS_MINUS_CLICKED:
      const temp = -1 * state.solution;
      return {
        ...state,
        inputItems: [...[temp]]
      };
    default:
      return state;
  }
};

export default inputReducer;
