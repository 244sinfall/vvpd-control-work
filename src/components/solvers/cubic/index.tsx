import React from 'react';
import NumberInput from "../../elements/number-input";
import './style.css'

interface CubicInputProps {
    aValue: string,
    bValue: string,
    cValue: string,
    dValue: string,
    onChange: (fieldName: string, fieldValue: string) => void
}

const CubicInput = (props: CubicInputProps) => {
    return (
        <div className="cubic-input">
            <span>
                <NumberInput value={props.aValue}
                             onChange={e => props.onChange("a", e.target.value)}/>x^3 + <NumberInput
                value={props.bValue} onChange={e => props.onChange("b", e.target.value)}/>x^2 + <NumberInput
                value={props.cValue} onChange={e => props.onChange("c", e.target.value)}/>x + <NumberInput
                value={props.dValue} onChange={e => props.onChange("d", e.target.value)}/> = 0
            </span>
        </div>
    );
};

export default React.memo(CubicInput);