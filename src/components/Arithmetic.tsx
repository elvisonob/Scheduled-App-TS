import { useState } from 'react';

function Arithmetic() {
  const [digit1, setDigit1] = useState();
  const [operationSign, setOperationSign] = useState();
  const [digit2, setDigit2] = useState();
  return (
    <div>
      <h1>Arithmetic</h1>
      <div>{digit1}</div>
      <div>{operationSign}</div>
      <div>{digit2}</div>
      <div>20</div>
    </div>
  );
}

export default Arithmetic;
