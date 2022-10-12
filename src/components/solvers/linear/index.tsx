import React from 'react';
import NumberInput from "../../elements/number-input";
import './style.css'

interface LinearInputProps {
    aValue: string,
    bValue: string,
    onChange: (fieldName: string, fieldValue: string) => void
}

const LinearInput = (props: LinearInputProps) => {
    return (
        <div className="linear-input">
            <span>
                <NumberInput value={props.aValue}
                             onChange={e => props.onChange("a", e.target.value)}/>x + <NumberInput
                value={props.bValue} onChange={e => props.onChange("b", e.target.value)}/> = 0
            </span>
        </div>
    );
};

export default LinearInput;