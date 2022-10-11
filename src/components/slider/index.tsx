import React, {useState} from 'react';
import {ReactComponent as Arrow} from './arrow.svg'
import './style.css'

interface SliderProps {
    title: string
    children: React.ReactNode | React.ReactNode[]
}


const Slider = (props: SliderProps) => {
    const [opened, setOpened] = useState(false)
    const callbacks = {
        open: () => setOpened(!opened),
    }
    return (
        <div className="slider-container">
            <span className="slider-title" onClick={callbacks.open}>
                {props.title}
                <Arrow className={"arrow-" + (opened ? "opened" : "closed")}/>
            </span>
            <div className="slider-content">
                {opened && props.children}
            </div>
        </div>
    );
};

export default React.memo(Slider);