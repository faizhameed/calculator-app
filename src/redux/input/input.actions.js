import { inputTypes } from "./input.types";

export const addToInput = item => ({
  type: inputTypes.ADD_TO_INPUT,
  payload: item
});
