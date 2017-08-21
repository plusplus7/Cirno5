import * as React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import { Redirect } from 'react-router-dom'

interface TopNavigationProps {
    TopNavigationButtonTexts: { [section: string]: string[] }
    section: string
}

interface TopNavigationState {
    clickedSection: string
}

export class TopNavigation extends React.Component<TopNavigationProps, TopNavigationState> {

    constructor(){
        super();
        this.state ={
            clickedSection: ""
        }
    }

    componentWillReceiveProps() {
        this.setState({
            clickedSection: ""
        })
    }
    public render() {
        if (this.state.clickedSection !== "") {
            return (
                <Redirect to={"/" + this.state.clickedSection}/>
            )
        }
        return (
            <Tabs value={this.props.section}>
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Blog"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Blog"][0]}
                    onClick={() => this.setState({clickedSection: "blog"})}
                    value={"blog"}
                />
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Game"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Game"][1]}
                    onClick={() => this.setState({clickedSection: "game"})}
                    value={"game"}
                />
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Storage"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Storage"][1]}
                    onClick={() => this.setState({clickedSection: "storage"})}
                    value={"storage"}
                />
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Aboutme"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Aboutme"][1]}
                    onClick={() => this.setState({clickedSection: "aboutme"})}
                    value={"aboutme"}
                />
            </Tabs>
        )
    }
}