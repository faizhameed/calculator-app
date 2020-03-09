import { inputTypes } from "./input.types";

export const addToInput = item => ({
  type: inputTypes.ADD_TO_INPUT,
  payload: item
});

export const calculatedSolution = value => ({
  type: inputTypes.SOLUTION_OUTPUT,
  payload: value
});

export const clearOutput = () => ({
  type: inputTypes.CLEAR_OUTPUT
});

export const plusMinusClick = () => ({
  type: inputTypes.PLUS_MINUS_CLICKED
});
