import * as React from "react"
import { Route } from "react-router-dom"
import { FrontPage } from "./FrontPage/FrontPage"
import { SectionPage } from "./SectionPage/SectionPage"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

interface AppRouteProps {

}

let Chinese = {
    WelcomeMessage: [
        "我是plusplus7",
        "这里是我的个人主页"
    ],
    ArrowMessage: "开启新的世界",
    TopNavigationButtonTexts: { 
        "Blog": ["图书馆", "博客，程序员的日常"],
        "Game": ["放映室", "娱乐向非专业游戏解说的视频空间"],
        "Storage": ["储物间", "+7和朋友们存放东西的地方"],
        "Aboutme": ["关于我", "个人简介"],
    } as { [section: string]: string[] }
}

export class AppRoute extends React.Component<AppRouteProps> {
    render() {
        return (
                <MuiThemeProvider>
                    <div className="pageBody" style={{background: "linear-gradient(to bottom right, rgba(77,77,77,0), rgba(77,77,77,1))" }}>
                        <Route exact={true} path="/" render={() => <FrontPage welcomeMessages={Chinese.WelcomeMessage} arrowMessage={Chinese.ArrowMessage} />} />
                        <Route path="/:section" render={(props: any) =>
                            <SectionPage
                                TopNavigationButtonTexts={Chinese.TopNavigationButtonTexts} section={props.match.params.section} />
                        } />
                    </div>
            </MuiThemeProvider>
        )
    }
}