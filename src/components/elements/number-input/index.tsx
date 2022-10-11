import React, {ChangeEvent} from 'react';
import './styles.css'

interface NumberInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string
}

const NumberInput = (props: NumberInputProps) => {
    return (
        <input className={"number-input" + (isNaN(parseInt(props.value)) ? " number-input-empty": "")} type="tel" onChange={props.onChange} value={props.value || ""}/>
    );
};

export default React.memo(NumberInput);