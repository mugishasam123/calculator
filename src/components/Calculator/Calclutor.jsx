import { useState } from "react";
import { FaLaughBeam } from "react-icons/fa";
import Row from "../common/Row";
import calculate from "../../logic/calculate";
import Output from "../common/Output";

const Calculator = () => {
  const [data, setData] = useState({ total: "0", next: null, operation: null });

  const handleBtnClick = (sym) => setData(calculate(data, sym));
  const { total, next, operation } = data;

  return (
    <div className="flex flex-col items-center gap-7 mt-12 justify-center">
      <div className="text-center flex justify-center">
        <h2 className="text-xl">Try Out Some Maths</h2>
        <FaLaughBeam className="mt-[5px] ml-[10px] text-[20px] text-brick" />
      </div>
      <div className="flex flex-col">
        <Output total={total} operation={operation} next={next} />
        <Row
          types={["AC", "+/-", "%"]}
          operand="÷"
          handleClick={handleBtnClick}
        />
        <Row types={["7", "8", "9"]} operand="x" handleClick={handleBtnClick} />
        <Row types={["4", "5", "6"]} operand="-" handleClick={handleBtnClick} />
        <Row types={["1", "2", "3"]} operand="+" handleClick={handleBtnClick} />
        <Row types={["0", ".", "="]} operand="" handleClick={handleBtnClick} />
      </div>
    </div>
  );
};

export default Calculator;
