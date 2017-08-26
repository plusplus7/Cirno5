import * as React from "react"

interface ArticleComponentProps {
    articleLink: string
}

interface ArticleComponentState {
}

export class ArticleComponent extends React.Component<ArticleComponentProps, ArticleComponentState> {
    render() {
        return (<div>!</div>)
    }
}