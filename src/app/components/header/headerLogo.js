import React from "react";

export const HeaderLogo = props => {
    return (
        <div className={"header__logo"}>
            <a className={'header__logo-link'} href={'http://csssr.ru'}>
                <img src={'../src/app/img/header_logo.png'} width={143} height={35}/>
            </a>
        </div>
    );
};
