import { useRef, useState } from "react"

const termSplit = (string: string) => {

    let terms;
    let stringWihtoutSign;

    if (string.startsWith("-") || string.startsWith("+")) {
        stringWihtoutSign = string.slice(1);
        terms = stringWihtoutSign.split(/[\+\-\*\/]/);
    } else {
        terms = string.split(/[\+\-\*\/]/);
    }

    return terms
}

const comaValidation = (terms: string[]) => {
    //chequeamos que halla no mas de un punto por expresion a evaluar
    const lastTerm = terms[terms.length - 1];

    for (const element of lastTerm) {
        const comas = (element.match(/\./g) || []).length;
        if (comas >= 1) return true;
    }

    return false;
}

const regex = /[\d)]$/;

export const useCalculator = () => {

    const [formula, setFormula] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const terms = useRef([""]);

    console.log(terms.current);


    const handleCalculator = (input: string) => {
        //chequeamos que el primer caracter no sea un punto
        if (!formula && input === ".") return;
        //que no se puedan acumular ceros al principio
        if (formula === "0" && input === "0") return;
        //que haya una coma por expresion
        if (input === "." && comaValidation(terms.current)) return;
        //que no se pueda escribir un cero a la izquierda al principio
        if (formula === "0" && input != ".") {
            setFormula(input);
            return;
        }

        const newFormula = formula + input;
        terms.current = termSplit(newFormula);
        terms.current.length > 1 && handleSubResult(newFormula);

        setFormula(prev => prev + input);
    }

    const handleSubResult = (formula: string) => {

        try {
            if (regex.test(formula)) {
                const res = eval(formula);
                setResult(res);
            }
        } catch (error) {
            setResult("Error");
        }

    }

    const changeSign = () => {
        if (formula.startsWith("-")) {
            setFormula(formula.slice(1));
        } else {
            formula && setFormula("-" + formula);
        }
    }

    const handleResult = () => {
        setFormula(result);
        setResult("");
    }

    const deleteLastInput = () => {
        formula && setFormula(prevState => prevState.slice(0, -1));
    }

    const deleteAll = () => {
        setFormula("")
        setResult("");
    };

    return {
        formula,
        result,
        handleCalculator,
        deleteLastInput,
        deleteAll,
        handleResult,
        changeSign
    }
}
