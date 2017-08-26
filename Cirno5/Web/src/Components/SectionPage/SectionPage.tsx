import * as React from 'react';
import { ArticleInfosList } from '../List/ArticleInfosList';
import { TopNavigation } from '../TopNavigation/TopNavigation';

interface SectionPageProps {
    TopNavigationButtonTexts:  { [section: string]: string[] }
    section: string
}

export class SectionPage extends React.Component<SectionPageProps> {
    public render() {
        return (
            <div>
                <TopNavigation TopNavigationButtonTexts={this.props.TopNavigationButtonTexts} section={this.props.section}/>
                {
                    function () {
                        if (this.props.section === "blog") {
                            return (<ArticleInfosList />)
                        }
                    }.call(this)
                }
            </div>
        )
    }
}