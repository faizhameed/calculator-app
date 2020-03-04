import React from "react";
import "./input.scss";
import { connect } from "react-redux";

const Input = ({ inputItems }) => {
  return (
    <div className="cal-display">
      <p className="valuation">{inputItems}</p>
      <p className="solution">123</p>
    </div>
  );
};
const mapStateToProps = ({ inputReducer: { inputItems } }) => ({
  inputItems
});

export default connect(mapStateToProps)(Input);
