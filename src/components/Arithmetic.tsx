import { useState } from 'react';

function Arithmetic() {
  const [digit1, setDigit1] = useState<number | string>('');
  const [digit2, setDigit2] = useState<number | string>('');
  const [operationSign, setOperationSign] = useState<'+' | '-' | '*' | '/'>(
    '+',
  );
  const [summation, setSummation] = useState<number | null>(0);

  function input1(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit1(e.target.value);
  }

  function input2(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit2(e.target.value);
  }

  function equalTo() {
    if (digit1 === '' || digit2 === '') {
      return;
    }
    switch (operationSign) {
      case '+':
        setSummation(Number(digit1) + Number(digit2));
        break;
      case '-':
        setSummation(Number(digit1) - Number(digit2));
        break;
      case '*':
        setSummation(Number(digit1) * Number(digit2));
        break;
      case '/':
        setSummation(Number(digit1) / Number(digit2));
        break;
    }
    return summation;
  }
  return (
    <div>
      <input type="number" value={digit1} onChange={input1} />
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setOperationSign(e.target.value as '+' | '-' | '*' | '/')
        }
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={digit2} onChange={input2} />
      <div onClick={equalTo}>=</div>
      <div>{summation}</div>
    </div>
  );
}

export default Arithmetic;
