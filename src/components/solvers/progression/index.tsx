import React from 'react';
import NumberInput from "../../elements/number-input";
import './style.css'

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
                <NumberInput value={props.startValue} onChange={e => props.onChange("first", e.target.value)}/>
            </div>
            <div className="arithmetic-progression-choice">
                Разность прогрессии:
                <NumberInput value={props.stepValue} onChange={e => props.onChange('step', e.target.value)}/>
            </div>
        </div>
    );
};

export default React.memo(ProgressionInput);