import { useState } from 'react';

function Arithmetic() {
const [digit1, setDigit1] = useState<number | ''>('');
const [operationSign, setOperationSign] = useState<'\*' | '+' | '-' | '/'>(
'+',
);
const [digit2, setDigit2] = useState<number | ''>('');
const [summation, setSummation] = useState<number | undefined>();

//Users add a number

function input1(e: React.ChangeEvent<HTMLInputElement>) {
const value = e.target.value;
setDigit1(value === '' ? '' : Number(e.target.value));
}

// Users add a second number
function input2(e: React.ChangeEvent<HTMLInputElement>) {
const value = e.target.value;
setDigit2(value === '' ? '' : Number(e.target.value));
}

// Users click equalTo sign
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
case '_':
setSummation(Number(digit1) _ Number(digit2));
break;
case '/':
setSummation(Number(digit1) / Number(digit2));
break;
}
}

// Finally a calculation takes place and the result is displayed.
return (
<div>
<h1>Arithmetic</h1>
<input type="number" onChange={input1} value={digit1} />
<select
onChange={(e) =>
setOperationSign(e.target.value as '+' | '-' | '_' | '/')
} >
<option value="+">+</option>
<option value="-">-</option>
<option value="_">\*</option>
<option value="/">/</option>
</select>
<input type="number" onChange={input2} value={digit2} />

      <div onClick={equalTo}>=</div>
      <div>{summation}</div>
    </div>

);
}

export default Arithmetic;
