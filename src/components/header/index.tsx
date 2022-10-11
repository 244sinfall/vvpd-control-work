import React from 'react';
import githubLogo from './github.png'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <span className="header-left">
                <div className="header-title">(с) Филин Д.А.</div>
                <div className="header-about">О задании</div>
            </span>
            <span className="header-right">
                <img className="header-github" src={githubLogo} alt="GitHub logo"/>
            </span>


        </header>
    );
};

export default React.memo(Header);