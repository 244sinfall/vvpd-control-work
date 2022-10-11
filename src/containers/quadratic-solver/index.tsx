import React, {useCallback, useMemo, useState} from 'react';
import Slider from "../../components/slider";
import CustomButton from "../../components/elements/custom-button";
import {QuadraticEquation} from "../../model/equations";
import Answer from "../../components/elements/answer";
import {validateNumber} from "../../util/validateNumber";
import QuadraticInput from "../../components/solvers/quadratic";

interface QuadraticSolverState {
    a: number | null | "-",
    b: number | null | "-",
    d: number | null | "-"
}

const QuadraticSolver = () => {
    const [values, setValues] = useState<QuadraticSolverState>({a: null, b: null, d: null})
    const [answer, setAnswer] = useState<number | number[] | undefined>()
    const callbacks = {
        onChange: useCallback((fieldName: string, fieldValue: string) => {
            const newValue = validateNumber(fieldValue)
            if(fieldName === "a") return setValues({...values, a: newValue})
            if(fieldName === "b") return setValues({...values, b: newValue})
            if(fieldName === "d") return setValues({...values, d: newValue})
        }, [values]),
        solve: useCallback(() => {
            if(typeof values.a !== "number" || typeof values.b !== "number" || typeof values.d !== "number") return
            const equation = new QuadraticEquation(values.a, values.b, values.d)
            const answer = equation.solve()
            setAnswer(answer)
        }, [values])
    }
    const disabled = useMemo(() => values.a === null || values.b === null || values.d == null, [values])
    return (
        <Slider title="Решение квадратных уравнений">
            <QuadraticInput aValue={String(values.a ?? "")} bValue={String(values.b ?? "")} onChange={callbacks.onChange} dValue={String(values.d ?? "")}/>
            <CustomButton onClick={callbacks.solve} title="Решить" disabled={disabled}/>
            <Answer value={answer}/>
        </Slider>
    );
};

export default React.memo(QuadraticSolver);