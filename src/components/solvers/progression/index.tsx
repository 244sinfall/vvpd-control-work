import React from 'react';
import NumberInput from "../../elements/number-input";
import './style.css'
import CustomButton from "../../elements/custom-button";

interface ProgressionInputProps {
    startValue: string,
    stepValue: string,
    onChange: (fieldName: string, fieldValue: string) => void
}

const ProgressionInput = (props: ProgressionInputProps) => {
    return (
        <div className="arithmetic-progression">
            <div className="arithmetic-progression-choice">
                Первый член прогрессии:
                <CustomButton title="Случайный" onClick={() => props.onChange("first", String(Math.ceil(Math.random() * 100)))}/>
                <NumberInput value={props.startValue} onChange={e => props.onChange("first", e.target.value)}/>
            </div>
            <div className="arithmetic-progression-choice">
                Разность прогрессии:
                <CustomButton title="Случайный"
                              onClick={() => props.onChange("step", String(Math.ceil(Math.random() * 100)))}/>
                <NumberInput value={props.stepValue} onChange={e => props.onChange('step', e.target.value)}/>
            </div>
        </div>
    );
};

export default React.memo(ProgressionInput);