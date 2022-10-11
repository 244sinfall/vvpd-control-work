import React, {useMemo} from 'react';
import './style.css'

interface AnswerProps {
    value: number | number[] | undefined
}

const Answer = (props: AnswerProps) => {
    const answer = useMemo(() => {
        if(Array.isArray(props.value)) {
            if(props.value.length === 0) return "Корней нет"
            if(props.value.length > 1) return `(${props.value.join(", ")})`
            return props.value[0]
        }
        if(isNaN(props.value as number)) return "Корней нет"
        return props.value ?? "Неизвестен"
    }, [props.value])
    return (
        <span className="answer-container">
            {props.value !== undefined ? <p className="answer-text">Ответ: {answer}</p> : <p className="answer-text">Здесь будет ответ</p>}
        </span>
    );
};

export default React.memo(Answer);