import React, { useState } from 'react';
import './Calculator.css'; 

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    setCurrentNumber((prevNumber) => prevNumber + num);
  };

  const handleOperatorClick = (op) => {
    if (currentNumber !== '') {
      setResult(Number(currentNumber));
      setCurrentNumber('');
      setOperator(op);
    }
  };

  const handleEqualClick = () => {
    if (operator && currentNumber !== '') {
      switch (operator) {
        case '+':
          setResult((prevResult) => prevResult + Number(currentNumber));
          break;
        case '-':
          setResult((prevResult) => prevResult - Number(currentNumber));
          break;
        case '*':
          setResult((prevResult) => prevResult * Number(currentNumber));
          break;
        case '/':
          setResult((prevResult) => prevResult / Number(currentNumber));
          break;
        default:
          break;
      }
      setCurrentNumber('');
      setOperator(null);
    }
  };

  const handleClear = () => {
    setResult('0');
    setCurrentNumber('');
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{result !== null ? result : currentNumber}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button className="clear" onClick={handleClear}>C</button>

        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button className="equal" onClick={handleEqualClick}>=</button>

        </div>
        <div className="row">
          <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
          <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
          <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>
          <button className="operator" onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;