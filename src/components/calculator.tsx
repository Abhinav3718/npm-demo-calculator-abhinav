import useCalculator from "../hooks/useCalculator";

const Calculator = () => {
    const {CalculatorComponent} = useCalculator();
    
    return <div>
        {CalculatorComponent}
    </div>
}

export default Calculator;