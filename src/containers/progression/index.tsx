import React, {useCallback, useState} from 'react';
import Slider from "../../components/slider";
import Answer from "../../components/elements/answer";
import {validateNumber} from "../../util/validateNumber";
import {Progression} from "../../model/progressions";
import ProgressionControls from "../../components/solvers/progression-controls";
import ProgressionInput from "../../components/solvers/progression";

interface ProgressionState {
    first: number | null | "-",
    step: number | null | "-",
}

const ProgressionSolver = (props: {solver: Progression, title: string}) => {
    const [values, setValues] = useState<ProgressionState>({first: null, step: null})
    const [answer, setAnswer] = useState<number | undefined>()
    const callbacks = {
        onChange: useCallback((fieldName: string, fieldValue: string) => {
            const newValue = validateNumber(fieldValue)
            if(fieldName === "first") return setValues({...values, first: newValue})
            if(fieldName === "step") return setValues({...values, step: newValue})
        }, [values]),
        find: useCallback((n: number) => {
            if(typeof values.first !== "number" || typeof values.step !== "number") return
            props.solver.setStep(values.step)
            props.solver.setFirst(values.first)
            const answer = props.solver.find(n)
            setAnswer(answer)
        }, [props.solver, values.first, values.step]),
        sum: useCallback((n: number) => {
            if(typeof values.first !== "number" || typeof values.step !== "number") return
            props.solver.setStep(values.step)
            props.solver.setFirst(values.first)
            const answer = props.solver.sum(n)
            setAnswer(answer)
        }, [props.solver, values.first, values.step])
    }
    return (
        <Slider title={props.title}>
            <ProgressionInput startValue={String(values.first ?? "")} stepValue={String(values.step ?? "")} onChange={callbacks.onChange}/>
            <ProgressionControls onFind={callbacks.find} onSum={callbacks.sum}/>
            <Answer value={answer}/>
        </Slider>
    );
};

export default React.memo(ProgressionSolver);