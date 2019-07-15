import React from "react";
import { MainContentTitle } from "../../components/main/mainContentTitle";
import { UserInfo } from "../../containers/userInfo";
import { SkillsBlock } from "../../containers/skillsBlock";
import { JSBlock } from "../../components/main/jsBlock";
import { AdditionalUserInfo } from "../../containers/additionalUserInfo";
import { FuturePlans } from "../../containers/futurePlans";

export const MainContent = props => {
    return (
        <main className={"main-content"}>
            <MainContentTitle/>
            <UserInfo/>
            <SkillsBlock/>
            <JSBlock title={'Уровень владения JavaScript'}/>
            <AdditionalUserInfo title={'Расскажите о себе словами'} description={'Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы в CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.'}/>
            <FuturePlans title={'Какие у вас планы на будущее?'} description={'Этот ответ ни на что не повлияет. Не беда, если в будущем ваши планы поменяются.'}/>
        </main>
    );
};