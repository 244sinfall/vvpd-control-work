import React from 'react';
import './style.css'

interface CustomButtonProps {
    title: string,
    onClick: () => void,
    disabled: boolean | undefined
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button disabled={props.disabled} className="custom-button" onClick={props.onClick}>{props.title}</button>
    );
};

export default React.memo(CustomButton);