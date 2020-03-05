import React from "react";
import EqualSvgComponent from "../../assets/equal.svg";
import "./equalButton.scss";
import { connect } from "react-redux";
import { calculatedSolution } from "../../redux/input/input.actions";

const EqualButton = ({ inputItems, calculatedSolution }) => {
  function math_it_up(op, x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    switch (op) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      default:
        return null;
    }
  }

  function calculate(arr) {
    var operators = ["*", "/", "+", "-"];
    let tempArr = [...arr];
    let k = 0;
    while (k < operators.length) {
      for (let i = 0; i < tempArr.length; i++) {
        let tempCalc = 0;
        if (tempArr[i] === operators[k]) {
          let leftItem = tempArr[i - 1],
            rightItem = tempArr[i + 1];
          tempCalc = math_it_up(operators[k], leftItem, rightItem);
          let index = tempArr.indexOf(leftItem);
          if (index > -1) {
            tempArr.splice(index, 1);
          }
          index = tempArr.indexOf(rightItem);
          if (index > -1) {
            tempArr.splice(index, 1);
          }
          index = tempArr.indexOf(operators[k]);
          if (index > -1) {
            tempArr[index] = tempCalc;
            i--;
          }
        }
      }
      k++;
    }
    return tempArr[0];
  }

  const handleCalculation = () => {
    calculatedSolution(calculate(inputItems));
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
