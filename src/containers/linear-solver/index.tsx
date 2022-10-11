import React, {useCallback, useMemo, useState} from 'react';
import Slider from "../../components/slider";
import LinearInput from "../../components/solvers/linear";
import CustomButton from "../../components/elements/custom-button";
import {SimpleEquation} from "../../model/equations";
import Answer from "../../components/elements/answer";
import {validateNumber} from "../../util/validateNumber";

interface LinearSolverState {
    a: number | null | "-",
    b: number | null | "-"
}

const LinearSolver = () => {
    const [values, setValues] = useState<LinearSolverState>({a: null, b: null})
    const [answer, setAnswer] = useState<number | undefined>()
    const callbacks = {
        onChange: useCallback((fieldName: string, fieldValue: string) => {
            const newValue = validateNumber(fieldValue)
            if(fieldName === "a") return setValues({...values, a: newValue})
            if(fieldName === "b") return setValues({...values, b: newValue})
        }, [values]),
        solve: useCallback(() => {
            if(typeof values.a !== "number" || typeof values.b !== "number") return
            const equation = new SimpleEquation(values.a, values.b)
            const answer = equation.solve()
            setAnswer(answer)
        }, [values])
    }
    const disabled = useMemo(() => values.a === null || values.b === null, [values])
    return (
        <Slider title="Решение линейных уравнений">
            <LinearInput aValue={String(values.a ?? "")} bValue={String(values.b ?? "")} onChange={callbacks.onChange}/>
            <CustomButton onClick={callbacks.solve} title="Решить" disabled={disabled}/>
            <Answer value={answer}/>
        </Slider>
    );
};

export default React.memo(LinearSolver);