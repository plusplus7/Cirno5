import * as React from "react"
import { Route } from "react-router-dom"
import { Hello } from "./Hello"

interface AppRouteProps {

}
export class AppRoute extends React.Component<AppRouteProps> {
    render() {
        return (
            <div className="pageBody">
                <div data-grid="container" className="context-control">
                    <Route exact={true} path="/" render={() => <Hello compiler="Typescript" framework="React"/>} />
                </div>
            </div>
        )
    }
}