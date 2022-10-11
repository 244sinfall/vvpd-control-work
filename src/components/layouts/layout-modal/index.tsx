import React, {useLayoutEffect, useState} from 'react';
import './style.css'
import {ReactComponent as Cross} from './close-icon.svg'

interface LayoutModalProps {
    children: React.ReactNode | React.ReactNode[],
    title: string,
    onClose: () => void
}

const LayoutModal = (props: LayoutModalProps) => {
    const [appearing, setAppearing] = useState<"hidden" | "shown">("hidden")
    useLayoutEffect(() => {
        setTimeout(() => setAppearing("shown"))
    }, [])
    const callbacks = {
        onClose: () => {
            setAppearing("hidden")
            setTimeout(() => {
                props.onClose()
            }, 300)
        }

    }
    return (
        <div className={"modal-container modal-container-"+appearing}>
            <div className={"modal-window modal-window-"+appearing}>
                <div className="modal-title">
                    <span className="modal-title-text">{props.title}</span>
                    <span className="modal-title-close-icon" onClick={callbacks.onClose}><Cross/></span>
                </div>
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default React.memo(LayoutModal);