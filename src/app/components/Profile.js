import React from "react";
import { HeaderContainer } from "./header/HeaderContainer";
import { MainContent } from "./main/mainContent"
export const Profile = props => {
    return (
        <div className={"profile"}>
            <HeaderContainer/>
            <MainContent />
        </div>);
};
