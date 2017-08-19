import * as React from "react"
import { Route } from "react-router-dom"
import { FrontPage } from "./FrontPage/FrontPage"
import { HomePage } from "./HomePage/HomePage"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

interface AppRouteProps {

}

let Chinese = {
    WelcomeMessage: [
        "我是plusplus7",
        "这里是我的个人主页"
    ],
    ArrowMessage: "开启新的世界"
}

export class AppRoute extends React.Component<AppRouteProps> {
    render() {
        return (
                <MuiThemeProvider>
                    <div className="pageBody" style={{background: "linear-gradient(to bottom right, rgba(77,77,77,0), rgba(77,77,77,1))" }}>
                        <Route exact={true} path="/" render={() => <FrontPage welcomeMessages={Chinese.WelcomeMessage} arrowMessage={Chinese.ArrowMessage} />} />
                        <Route path="/home" render={() => <HomePage />} />
                    </div>
            </MuiThemeProvider>
        )
    }
}