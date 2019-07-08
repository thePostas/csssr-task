import React from "react";

export const HeaderLogo = props => {
    return (
        <div className={"header__logo"}>
            <a className={'header__logo-link'} href={'http://csssr.ru'} target={"_blank"}>
                <img src={'../src/app/img/header_logo.png'} alt={'csssr'} width={143} height={35}/>
            </a>
        </div>
    );
};
