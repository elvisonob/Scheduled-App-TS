import { useState } from 'react';

function Arithmetic() {
  const [digit1, setDigit1] = useState<number>(0);
  const [operationSign, setOperationSign] = useState<'*' | '+' | '-' | '/'>(
    '+',
  );
  const [digit2, setDigit2] = useState<number>(0);
  const [summation, setSummation] = useState<number>(0);

  //Users add a number

  function input1(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit1(Number(e.target.value));
  }

  function operationSign(e:React.ChangeEvent<HTMLInputElement>){

  }

  // Users add a second number
  function input2(e: React.ChangeEvent<HTMLInputElement>) {
    setDigit2(Number(e.target.value));
  }

  // Users click equalTo sign
  function equalTo(){
    switch(operationSign){
      case: "+"
      setSummation(digit1 + digit2)
      break;
      case: "-"
      setSummation(digit1 - digit2)
      break;
      case: "*"
      setSummation(digit1 * digit2)
      break;
      case: "/"
      setSummation(digit1 / digit2 )
      break;

    }

  }

  // Finally a calculation takes place and the result is displayed.
  return (
    <div>
      <h1>Arithmetic</h1>
      <input onChange={input1} value={digit1} />
      <input onChange={operationInput} value={operationSign} />
      <input onChange={input2} value={digit2} />

      <div
        onClick={() => {
          equalTo(digit1, operationSign, digit2);
        }}
      >
        =
      </div>
      <div>{summation}</div>
    </div>
  );
}

export default Arithmetic;
