import React from "react";
import { HeaderComponent } from "./header/HeaderContainer";
import { MainContent } from "./main/mainContent"
import { FooterComponent } from "./footer/footer"
export const Profile = props => {
    return (
        <div className={"profile"}>
            <HeaderComponent/>
            <MainContent/>
            <FooterComponent/>
        </div>);
};
