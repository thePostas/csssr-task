import React from "react";
import { UserInfo } from "../../containers/userInfo";

export const MainContent = props => {
    return (
        <main className={"main-content"}>
            <img className={'main-content__logo'} src={'../src/app/img/main_content_logo.png'} width={219} height={110} />
            <UserInfo/>
        </main>
    );
};