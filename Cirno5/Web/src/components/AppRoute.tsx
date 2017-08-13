import * as React from "react"
import { Route } from "react-router-dom"
import { Layout } from "./Layout"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

interface AppRouteProps {

}
export class AppRoute extends React.Component<AppRouteProps> {
    render() {
        return (
            <MuiThemeProvider>
            <div className="pageBody">
                <div data-grid="container" className="context-control">
                    <Route exact={true} path="/" render={() => <Layout />} />
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
}