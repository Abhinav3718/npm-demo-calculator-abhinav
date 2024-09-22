import React, {useCallback, useState} from "react";

const useCalculator = () => {

    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);

    const sum = useCallback((num1: number, num2: number) => {
       return num1 + num2;
    }, []);

    const difference = useCallback((num1: number, num2: number) => {
        return Math.abs(num1 - num2);
    }, []);

    const multiply = useCallback((num1: number, num2: number) => {
        return num1 * num2;
    }, []);

    const eventTypes = {
        add: {type: "add", title: "Add"},
        difference: {type: "difference", title: "Difference"},
        multiply: {type: "multiply", title: "Multiply"},
    }

    const [output, setOutput] = useState(0);

    const handleMathEvent = (eventType: string) => {
        switch(eventType) {
            case eventTypes.add.type: {
                setOutput(prev => sum(...[firstNumber, secondNumber]));
                break;
            }
            case eventTypes.multiply.type: {
                setOutput(prev => multiply(...[firstNumber, secondNumber]));
                break;
            }
            case eventTypes.difference.type: {
                setOutput(prev => difference(firstNumber, secondNumber));
                break;
            }
        }
    }

    const handleFirstNumberChange = (e: any) => {
        setFirstNumber(prev => e.target.value);
    }

    const handleSecondNumberChange = (e: any) => {
        setSecondNumber(prev => e.target.value);
    }

    const CalculatorComponent = (
        <div>
            <input type="number" value={firstNumber || ""} onChange={handleFirstNumberChange}/>
            <input type="number" value={secondNumber || ""} onChange={handleSecondNumberChange}/>

            <button onClick={() => handleMathEvent(eventTypes.add.type)}>{eventTypes.add.title}</button>
            <button onClick={() => handleMathEvent(eventTypes.difference.type)}>{eventTypes.difference.title}</button>
            <button onClick={() => handleMathEvent(eventTypes.multiply.type)}>{eventTypes.multiply.title}</button>

            <label>Calculated value is: {output}</label>
        </div>
    )

    return { CalculatorComponent };

}

export default useCalculator;