import React from "react";
import { UserInfo } from "../../containers/userInfo";

export const MainContent = props => {
    return (
        <main className={"main-content"}>
            <UserInfo/>
        </main>
    );
};