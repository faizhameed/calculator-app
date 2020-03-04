import React from "react";
import "./button.scss";
import { connect } from "react-redux";
import { addToInput } from "../../redux/input/input.actions";

const Button = ({ children, end, addToInput, operator }) => {
  const handleClick = () => {
    if (operator) {
      addToInput(operator);
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
  addToInput: item => dispatch(addToInput(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
