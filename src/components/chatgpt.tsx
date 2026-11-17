/*
import { useState } from 'react';

function Arithmetic() {
  const [digit1, setDigit1] = useState<number>(0);
  const [operationSign, setOperationSign] = useState<
    '+' | '-' | '*' | '/'
  >('+');
  const [digit2, setDigit2] = useState<number>(0);
  const [summation, setSummation] = useState<number>(0);

  function input1(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit1(Number(e.target.value));
  }

  function input2(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit2(Number(e.target.value));
  }

  function equalTo() {
    switch (operationSign) {
      case '+':
        setSummation(digit1 + digit2);
        break;
      case '-':
        setSummation(digit1 - digit2);
        break;
      case '*':
        setSummation(digit1 * digit2);
        break;
      case '/':
        setSummation(digit1 / digit2);
        break;
    }
  }

  return (
    <div>
      <h1>Arithmetic</h1>

      <input type="number" value={digit1} onChange={input1} />

      <select
        value={operationSign}
        onChange={(e) =>
          setOperationSign(
            e.target.value as '+' | '-' | '*' | '/'
          )
        }
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input type="number" value={digit2} onChange={input2} />

      <button onClick={equalTo}>=</button>

      <div>{summation}</div>
    </div>
  );
}

export default Arithmetic;
*/
