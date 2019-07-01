import React from "react";
import { HeaderTopSecret } from "./HeaderTopSecretStamp";
import { HeaderLogo } from "./HeaderLogo";
export const HeaderContainer = props => {
    return (
        <div className="header">
            <HeaderLogo/>
            <HeaderTopSecret/>
        </div>
    );
};
