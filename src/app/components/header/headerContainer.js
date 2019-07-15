import React from "react";
import { HeaderTopSecret } from "./HeaderTopSecretStamp";
import { HeaderLogo } from "./HeaderLogo";
export const HeaderComponent = props => {
    return (
        <header className={"header"}>
            <HeaderLogo/>
            <HeaderTopSecret/>
        </header>
    );
};
