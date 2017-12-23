import * as React from 'react';
import {ArticleContainer} from '../containers/ArticleContainer';

interface ArticlePageProps {
    link: string;
}

export class ArticlePage extends React.Component<ArticlePageProps> {
    public render() {
        return (
            <ArticleContainer link={this.props.link} />
        );
    }
}