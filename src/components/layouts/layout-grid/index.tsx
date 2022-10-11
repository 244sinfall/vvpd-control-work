import React from 'react';
import './style.css'

const LayoutGrid = (props: { children: React.ReactNode | React.ReactNode[] }) => {
    return (
        <div className="layout-grid">
            {props.children}
        </div>
    );
};

export default React.memo(LayoutGrid);