import * as React from "react"
import { Article } from '../../Models/Article';
import CirnoApi from '../../Services/CirnoServiceFactory';
import * as Showdown from "showdown";
import * as Style from './ArticleComponent.css';

interface ArticleComponentProps {
    articleLink: string
}

interface ArticleComponentState {
    status: 'init' | 'loading' | 'loaded' | 'error'
    articleLink: string
    article: Article
    message: any
}

export class ArticleComponent extends React.Component<ArticleComponentProps, ArticleComponentState> {

    constructor(props: ArticleComponentProps) {
        super(props);
        this.state = {
            status: 'init',
            articleLink: this.props.articleLink,
            article: null,
            message: ""
        };
    }

    componentWillReceiveProps(nextProps: ArticleComponentProps) {
        this.setState({
            status: 'init',
            articleLink: nextProps.articleLink,
            article: null,
            message: ""
        });
    }

    componentDidMount() {
        if (this.state.status == 'init') {
            this.GetArticle();
        }
    }

    GetArticle() {
        CirnoApi.GetArticle(this.state.articleLink,
            () => {
                this.setState({
                    status: 'loading',
                });
            }, (data: any) => {
                this.setState({
                    status: 'loaded',
                    article: data,
                })
            }, (error: any) => {
                this.setState({
                    status: 'error',
                    message: error,
                })
            }
        );
    }

    render() {
        console.log(this.state);
        if (this.state.status === "loaded"){
            var con = new Showdown.Converter()
            var html =con.makeHtml(this.state.article.content);
            return (
                <div className={Style.ArticleComponentContent} dangerouslySetInnerHTML={{ __html: html }}>
                </div>
            )
        }
        return (
            <div>!</div>
        )
    }
}