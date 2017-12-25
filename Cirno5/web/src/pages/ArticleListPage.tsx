import * as React from 'react';
import { ArticleListContainer } from '../containers/ArticleListContainer';

export class ArticleListPage extends React.Component {
    public render() {
        return (
            <ArticleListContainer tag={'Index'} />
        );
    }
}