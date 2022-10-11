import React, {useCallback, useMemo, useState} from 'react';
import Slider from "../../components/slider";
import CustomButton from "../../components/elements/custom-button";
import {CubicEquation} from "../../model/equations";
import Answer from "../../components/elements/answer";
import {validateNumber} from "../../util/validateNumber";
import CubicInput from "../../components/solvers/cubic";

interface CubicSolverState {
    a: number | null | "-",
    b: number | null | "-",
    c: number | null | "-",
    d: number | null | "-"
}

const QuadraticSolver = () => {
    const [values, setValues] = useState<CubicSolverState>({a: null, b: null, c: null, d: null})
    const [answer, setAnswer] = useState<number[] | undefined>()
    const callbacks = {
        onChange: useCallback((fieldName: string, fieldValue: string) => {
            const newValue = validateNumber(fieldValue)
            if(fieldName === "a") return setValues({...values, a: newValue})
            if(fieldName === "b") return setValues({...values, b: newValue})
            if(fieldName === "c") return setValues({...values, c: newValue})
            if(fieldName === "d") return setValues({...values, d: newValue})
        }, [values]),
        solve: useCallback(() => {
            if(typeof values.a !== "number" || typeof values.b !== "number" || typeof values.d !== "number" || typeof values.c !== "number") return
            const equation = new CubicEquation(values.a, values.b, values.c, values.d)
            const answer = equation.solve()
            setAnswer(answer)
        }, [values])
    }
    const disabled = useMemo(() => values.a === null || values.b === null || values.c === null || values.d === null, [values])
    return (
        <Slider title="Решение кубических уравнений">
            <CubicInput aValue={String(values.a ?? "")} bValue={String(values.b ?? "")}
                        cValue={String(values.c ?? "")} dValue={String(values.d ?? "")}
                        onChange={callbacks.onChange}/>
            <CustomButton onClick={callbacks.solve} title="Решить" disabled={disabled}/>
            <Answer value={answer}/>
        </Slider>
    );
};

export default React.memo(QuadraticSolver);