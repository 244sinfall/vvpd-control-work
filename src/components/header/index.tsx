import React from 'react';
import githubLogo from './github.png'
import './style.css'

interface HeaderProps {
    onAboutClick: () => void
}

const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <span className="header-left">
                <div className="header-title">© Филин Д.А.</div>
                <div className="header-about" onClick={props.onAboutClick}>О задании</div>
            </span>
            <span className="header-right">
                <a rel="noreferrer" href="https://github.com/244sinfall/vvpd-control-work" target="_blank">
                    <img className="header-github" src={githubLogo} alt="GitHub logo"/></a>
            </span>
        </header>
    );
};

export default React.memo(Header);