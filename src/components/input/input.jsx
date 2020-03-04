import React from "react";
import "./input.scss";
import { connect } from "react-redux";

const Input = ({ inputItems, solution }) => {
  return (
    <div className="cal-display">
      <p className="valuation">{inputItems}</p>
      <p className="solution">{solution}</p>
    </div>
  );
};
const mapStateToProps = ({ inputReducer: { inputItems, solution } }) => ({
  inputItems,
  solution
});

export default connect(mapStateToProps)(Input);
