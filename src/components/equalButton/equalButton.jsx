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
    let tempArr = [...arr];
    let per = tempArr.indexOf("%");
    while (per > -1) {
      // funtion for % operator
      if (tempArr[per - 1]) {
        tempArr[per - 1] /= 100;
        tempArr.splice(per, 1);
      } else return NaN;
      per = tempArr.indexOf("%");
    }

    var operators = ["*", "/", "+", "-"];
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

    //fixing decimal float
    if (inputItems) return Number(parseFloat(tempArr[0]).toFixed(8));
    else return 0;
    //return tempArr[0];
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

const mapStateToProps = ({ inputReducer: { inputItems, solution } }) => ({
  inputItems
});

const mapDispatchToProps = dispatch => ({
  calculatedSolution: val => dispatch(calculatedSolution(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(EqualButton);
