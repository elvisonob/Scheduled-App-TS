import { useState } from 'react';

function Arithmetic() {
  const [digit1, setDigit1] = useState<number | string>('');
  const [digit2, setDigit2] = useState<number | string>('');
  const [operationSign, setOperationSign] = useState<'+' | '-' | '*' | '/'>(
    '+',
  );

  function input1(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit1(e.target.value);
  }

  function input2(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit2(e.target.value);
  }

  let summation;
  function equalTo() {
    switch (operationSign) {
      case '+':
        summation = Number(digit1) + Number(digit2);
        break;
      case '-':
        summation = Number(digit1) - Number(digit2);
        break;
      case '*':
        summation = Number(digit1) * Number(digit2);
        break;
      case '/':
        summation = Number(digit1) / Number(digit2);
        break;
    }
    return summation;
  }

  return (
    <div>
      <h1>Calcuation App</h1>
      <input type="number" onChange={input1} value={digit1} />
      <select>
        <option>{operationSign}</option>
        <option>{operationSign}</option>
        <option>{operationSign}</option>
        <option>{operationSign}</option>
      </select>
      <input type="number" onChange={input2} value={digit2} />
      <div onClick={equalTo}>=</div>
      <div>{summation}</div>
    </div>
  );
}

export default Arithmetic;
