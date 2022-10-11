import React, {useState} from 'react';
import {ReactComponent as Arrow} from './arrow.svg'
import './style.css'

interface SliderProps {
    title: string
    children: React.ReactNode | React.ReactNode[]
}


const Slider = (props: SliderProps) => {
    const [opened, setOpened] = useState<"closed" | "closing" | "opened" | "opening">("closed")
    const callbacks = {
        open: () => {
            const newVal = (opened === "closed" || opened === "closing") ? "opening" : "closing"
            setOpened(newVal)
            if(newVal === "opening") setTimeout(() => setOpened("opened"), 5)
        },
    }
    return (
        <div className="slider-container">
            <span className="slider-title" onClick={callbacks.open}>
                {props.title}
                <Arrow className={"arrow-" + (opened === "opened" ? "opened" : "closed")}/>
            </span>
            <div className={"slider-content slider-content-"+opened} onTransitionEnd={() => {
                if(opened === "closing") {
                    setOpened("closed")
                }
            }}>
                {props.children}
            </div>
        </div>
    );
};

export default React.memo(Slider);