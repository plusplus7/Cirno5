import * as React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

interface TopNavigationProps {
    TopNavigationButtonTexts: { [section: string]: string[] }
    section: string
    onSectionChange: (newSection: string) => void
}

interface TopNavigationState {
    currentSection: string
}

export class TopNavigation extends React.Component<TopNavigationProps, TopNavigationState> {

    constructor(props: TopNavigationProps){
        super(props);
        this.state ={
            currentSection: this.props.section
        }
    }

    componentWillReceiveProps(nextProps: TopNavigationProps) {
        if (this.state.currentSection != nextProps.section) {
            this.setState({
                currentSection: nextProps.section
            })
        }
    }

    sectionOnClick(section: string) {
        this.props.onSectionChange(section);
        this.setState({
            currentSection: section
        });
    }
    public render() {
        return (
            <Tabs value={this.state.currentSection}>
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Blog"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Blog"][0]}
                    onClick={() => this.sectionOnClick("blog")}
                    value={"blog"}
                />
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Game"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Game"][1]}
                    onClick={() => this.sectionOnClick("game")}
                    value={"game"}
                />
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Storage"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Storage"][1]}
                    onClick={() => this.sectionOnClick("storage")}
                    value={"storage"}
                />
                <Tab
                    icon={
                        <FontIcon className="material-icons">
                            {this.props.TopNavigationButtonTexts["Aboutme"][0]}
                        </FontIcon>
                    }
                    label={this.props.TopNavigationButtonTexts["Aboutme"][1]}
                    onClick={() => this.sectionOnClick("aboutme")}
                    value={"aboutme"}
                />
            </Tabs>
        )
    }
}