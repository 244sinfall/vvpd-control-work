import React, {ChangeEvent, useCallback, useState} from 'react';
import NumberInput from "../../elements/number-input";
import CustomButton from "../../elements/custom-button";
import './style.css'

interface ProgressionProps {
    onFind: (n: number) => void,
    onSum: (n: number) => void
}

const ProgressionControls = (props: ProgressionProps) => {
    const [findValue, setFindValue] = useState("")
    const [sumValue, setSumValue] = useState("")
    const callbacks = {
        onChangeFindValue: useCallback((e: ChangeEvent<HTMLInputElement>) => setFindValue(e.target.value), []),
        onChangeSumValue: useCallback((e: ChangeEvent<HTMLInputElement>) => setSumValue(e.target.value), []),
        onFind: useCallback(() => {
            const numberValue = parseInt(findValue)
            if(isNaN(numberValue)) return
            props.onFind(numberValue)
        }, [findValue, props]),
        onSum: useCallback(() => {
            const numberValue = parseInt(sumValue)
            if(isNaN(numberValue)) return
            props.onSum(numberValue)
        }, [props, sumValue]),
    }
    return (
        <div className="arithmetic-progression-controls">
            <span className="arithmetic-progression-controls-inner">
                <span className="arithmetic-progression-controls-find-input">Найти <NumberInput value={findValue} onChange={callbacks.onChangeFindValue}/> член прогрессии</span>
                <CustomButton disabled={isNaN(parseInt(findValue))} onClick={callbacks.onFind} title="Решить"/>
            </span>
            <span className="arithmetic-progression-controls-inner">
                <span className="arithmetic-progression-controls-sum-input">Найти сумму <NumberInput value={sumValue} onChange={callbacks.onChangeSumValue}/> членов прогрессии</span>
                <CustomButton disabled={isNaN(parseInt(sumValue))} onClick={callbacks.onSum} title="Решить"/>
            </span>
        </div>
    );
};

export default React.memo(ProgressionControls);