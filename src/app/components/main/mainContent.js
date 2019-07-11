import React from "react";
import { MainContentTitle } from "../../components/main/mainContentTitle";
import { UserInfo } from "../../containers/userInfo";
import { SkillsBlock } from "../../containers/skillsBlock";
import { JSBlock } from "../../components/main/jsBlock";
import { AdditionalUserInfo } from "../../containers/additionalUserInfo";

export const MainContent = props => {
    return (
        <main className={"main-content"}>
            <MainContentTitle/>
            <UserInfo/>
            <SkillsBlock/>
            <JSBlock/>
            <AdditionalUserInfo/>
        </main>
    );
};