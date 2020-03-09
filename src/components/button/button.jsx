import React from "react";
import "./button.scss";
import { connect } from "react-redux";
import {
  addToInput,
  clearOutput,
  plusMinusClick
} from "../../redux/input/input.actions";

const Button = ({
  children,
  end,
  addToInput,
  operator,
  clearOutput,
  plusMinusClick
}) => {
  const handleClick = () => {
    if (operator) {
      /*  if (operator !== "C") {
        addToInput(operator);
      } else {
        clearOutput();
      }
    } else {
      addToInput(children);
    } */

      switch (operator) {
        case "C":
          clearOutput();
          break;
        case "pl-mi":
          plusMinusClick();
          break;
        default:
          addToInput(operator);
          break;
      }
    } else addToInput(children);
  };
  return (
    <div
      className={`btn ${end ? "btn-2" : null}`}
      onClick={() => handleClick()}
    >
      {children}
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToInput: item => dispatch(addToInput(item)),
  clearOutput: () => dispatch(clearOutput()),
  plusMinusClick: () => dispatch(plusMinusClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
