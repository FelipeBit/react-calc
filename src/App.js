import React, {useState} from 'react'

import CalculateService from './App.service'

function App() {

    const [calculate, concatNumbers] = CalculateService()
    const [numbers, setNumbers] = useState('0')
    const [number1, setNumber1] = useState('0')
    const [number2, setNumber2] = useState(null)
    const [operation, setOperation] = useState(null)


    function handleConcatNumber(number) {
        let result

        if (operation === null){
            result = concatNumbers(number1, number)
            setNumber1(result)
        } else {
            result = concatNumbers(number2, number)
            setNumber2(result)
        }

        setNumbers(result)
    }

    function handleOperation(op){

        if (operation === null){
            setOperation(op)
            return
        }

        if (number2 !== null){
            const result = calculate(parseFloat(number1), parseFloat(number2), operation)
            setOperation(op)
            setNumber1(result.toString())
            setNumber2(null)
            setNumbers(result.toString())

        }
    }

    function handleEqual() {
        if (number2 === null) {
            return
        }

        const result = calculate(parseFloat(number1), parseFloat(number2), operation)
        setNumbers(result)
    }


    function handleReset() {
        setNumbers('0')
        setNumber1('0')
        setNumber2(null)
        setOperation(null)
    }

  return (
      <section>
        <h1 className="text-center mx-auto w-80 m-14">A regular calculator made with React.js</h1>
        <div className="container mx-auto w-80 shadow-lg m-14">
            <div>
                <input aria-label="result" data-testid='screenInput' readOnly value={numbers} type="text" />
            </div>
            <div className="grid grid-cols-4">
                <div><button aria-label="Number one" onClick={()=> handleConcatNumber('1')}>1</button></div>
                <div><button aria-label="Number two" onClick={()=> handleConcatNumber('2')}>2</button></div>
                <div><button aria-label="Number three" onClick={()=> handleConcatNumber('3')}>3</button></div>
                <div><button aria-label="Clean" onClick={handleReset}>C</button></div>
            </div>
            <div className="grid grid-cols-4">
                <div><button aria-label="Number four" onClick={()=> handleConcatNumber('4')}>4</button></div>
                <div><button aria-label="Number five" onClick={()=> handleConcatNumber('5')}>5</button></div>
                <div><button aria-label="Number six" onClick={()=> handleConcatNumber('6')}>6</button></div>
                <div><button aria-label="Multiplication sign" onClick={()=> handleOperation('*')}>*</button></div>
            </div>
            <div className="grid grid-cols-4">
                <div><button aria-label="Number seven" onClick={()=> handleConcatNumber('7')}>7</button></div>
                <div><button aria-label="Number eigth" onClick={()=> handleConcatNumber('8')}>8</button></div>
                <div><button aria-label="Number nine" onClick={()=> handleConcatNumber('9')}>9</button></div>
                <div><button aria-label="minus sign" onClick={()=> handleOperation('-')}>-</button></div>
            </div>
            <div className="grid grid-cols-4">
                <div><button aria-label="Number zero" onClick={()=> handleConcatNumber('0')}>0</button></div>
                <div><button aria-label="dot" onClick={()=> handleConcatNumber('.')}>.</button></div>
                <div><button aria-label="division sign" onClick={()=> handleOperation('/')}>/</button></div>
                <div><button aria-label="plus sign" onClick={()=> handleOperation('+')}>+</button></div>
            </div>
            <div>
                <div><button aria-label="equal sign" onClick={handleEqual}>=</button></div>
            </div>
        </div>
    </section>
  );
}

export default App;
