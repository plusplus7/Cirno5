import * as React from 'react';
import { ArticleInfosList } from '../List/ArticleInfosList';
import { ArticleComponent } from '../Article/ArticleComponent';
import { TopNavigation } from '../TopNavigation/TopNavigation';
import { Route, Redirect } from "react-router-dom"

interface SectionPageProps {
    TopNavigationButtonTexts:  { [section: string]: string[] }
}
interface SectionPageState {
    nextSection: string
}

export class SectionPage extends React.Component<SectionPageProps, SectionPageState> {

    constructor() {
        super();
        this.state = {
            nextSection: ""
        }
    }

    componentWillReceiveProps() {
        this.setState({
            nextSection: ""
        })
    }

    public render() {
        if (this.state.nextSection !== "") {
            return (
                <Redirect to={"/" + this.state.nextSection} />
            )
        }
        return (
            <div>
                <Route 
                    path="/:section"
                    render={
                        (props) =>
                            <TopNavigation 
                                TopNavigationButtonTexts={this.props.TopNavigationButtonTexts}
                                section={props.match.params.section}
                                onSectionChange={(newSection: string) => this.setState({ nextSection: newSection })}
                            />
                    }
                />
                <Route exact path="/blog" render={() => {
                    return (
                        <div>
                            <ArticleInfosList tag={"233"} />
                        </div>
                    )
                }} />
                <Route path="/blog/:articleLink" render={(props) => {
                    return (
                        <div>
                            <ArticleComponent articleLink={props.match.params.articleLink} />
                        </div>
                    )
                }} />
                <Route path="/game" render={() => {
                    return (
                        <div>
                            <ArticleComponent articleLink={"game"} />
                        </div>
                    )
                }} />

                <Route path="/storage" render={() => {
                    return (
                        <div>
                            <ArticleComponent articleLink={"storage"} />
                        </div>
                    )
                }} />

                <Route path="/aboutme" render={() => {
                    return (
                        <div>
                            <ArticleComponent articleLink={"aboutme"} />
                        </div>
                    )
                }} />
            </div>
        )
    }
}