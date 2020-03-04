import React from "react";
import "./button.scss";
import { connect } from "react-redux";
import { addToInput, clearOutput } from "../../redux/input/input.actions";

const Button = ({ children, end, addToInput, operator, clearOutput }) => {
  const handleClick = () => {
    if (operator) {
      if (operator !== "C") {
        addToInput(operator);
      } else {
        clearOutput();
      }
    } else {
      addToInput(children);
    }
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
  clearOutput: () => dispatch(clearOutput())
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
