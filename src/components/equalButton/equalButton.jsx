import React from "react";
import EqualSvgComponent from "../../assets/equal.svg";
import "./equalButton.scss";
import { connect } from "react-redux";
import { calculatedSolution } from "../../redux/input/input.actions";

const EqualButton = ({ inputItems, calculatedSolution }) => {
  function calculate(arr) {
    var operators = ["*", "/", "+", "-"];
    let tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i++) {
      let tempCalc = 0;
      if (tempArr[i] === "*") {
        let leftItem = tempArr[i - 1],
          rightItem = tempArr[i + 1];
        tempCalc = leftItem * rightItem;
        let index = tempArr.indexOf(leftItem);
        if (index > -1) {
          tempArr.splice(index, 1);
        }
        index = tempArr.indexOf(rightItem);
        if (index > -1) {
          tempArr.splice(index, 1);
        }
        index = tempArr.indexOf("*");
        if (index > -1) {
          tempArr[index] = tempCalc;
        }
      }
    }
    console.log("multiplied array", tempArr);
  }

  const handleCalculation = () => {
    let solution = calculate(inputItems);
    console.log("inpit", inputItems);
    console.log("sol:", solution);
  };

  return (
    <div className="equal-btn btn" onClick={handleCalculation}>
      <EqualSvgComponent />
    </div>
  );
};

const mapStateToProps = ({ inputReducer: { inputItems } }) => ({
  inputItems
});

const mapDispatchToProps = dispatch => ({
  calculatedSolution: val => dispatch(calculatedSolution(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(EqualButton);
