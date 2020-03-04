import React from "react";
import "./layout.scss";
import Button from "../button/button";
import Input from "../input/input";
import EqualButton from "../equalButton/equalButton";
import PosNegSvgComponent from "../../assets/positive-negative.svg";
import PercentageSvgComponent from "../../assets/percentage.svg";
import DivideSvgComponent from "../../assets/divide.svg";
import AddSvgComponent from "../../assets/add.svg";
import SubtractSvgComponent from "../../assets/subtract.svg";
import MultiplySvgComponent from "../../assets/multiply.svg";

const Layout = props => {
  return (
    <div>
      <div className="calc-wrapper">
        <div className="row">
          <Input />
        </div>
        <div className="row">
          <Button>C</Button>
          <Button>
            <PosNegSvgComponent />
          </Button>
          <Button>
            <PercentageSvgComponent />
          </Button>
          <Button>
            <DivideSvgComponent />
          </Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>
            <MultiplySvgComponent />
          </Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>
            <SubtractSvgComponent />
          </Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>
            <AddSvgComponent />
          </Button>
        </div>
        <div className="row">
          <Button>0</Button>
          <Button>.</Button>
          <EqualButton />
        </div>
      </div>
    </div>
  );
};

export default Layout;
