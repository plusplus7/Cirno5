import * as React from 'react';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import  * as style from './ArticleInfosList.css';

import { Link } from 'react-router-dom';
import { ArticleInfo } from '../../Models/ArticleInfo';
import CirnoApi from '../../Services/CirnoServiceFactory';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';

export interface ArticleInfosListProps {
    tag: string
}

export interface ArticleInfosListState {
    status: 'init' | 'loading' | 'loaded' | 'error'
    tag: string
    articleInfos : ArticleInfo[]
    message: string
}

export class ArticleInfosList extends React.Component<ArticleInfosListProps, ArticleInfosListState> {
    constructor(props: ArticleInfosListProps) {
        super(props);
        this.state = {
            status: 'init',
            tag: this.props.tag,
            articleInfos: [] as ArticleInfo[],
            message: ""
        };
    }

    componentWillReceiveProps(nextProps: ArticleInfosListProps) {
        this.setState({
            status: 'init',
            tag: nextProps.tag,
            articleInfos: [] as ArticleInfo[],
            message: ""
        });
    }

    componentDidMount() {
        console.log(this.state);
        if (this.state.status == 'init') {
            this.GetArticleInfos();
        }
    }

    GetArticleInfos() {
        CirnoApi.GetArticleInfos("2333", 10, 0,
            () => {
                this.setState({
                    status: 'loading',
                })
            },
            (data: any) => {
                this.setState({
                    status: 'loaded',
                    articleInfos: data
                })
            }, (error: any) => {
                this.setState({
                    status: 'error',
                    message: error
                })
            }
        );
    }

    public render() {
        console.log(this.state);
        return (
            <div className={style.ArticleInfosListContent}>
                <AutoComplete
                    hintText="Search article"
                    dataSource={[]}
                    onUpdateInput={(value: string) => { return "Not implemented yet {" + value + "}"; }}
                />
                {
                    function() {
                        if (this.state.status === "loading" || this.state.status === "init") {
                            return (
                                <CircularProgress size={80} thickness={5} />
                            )
                        }
                    }.call(this)
                }
                {
                    this.state.articleInfos.map((articleInfo, index) => {
                        if (articleInfo.content.type === 'A') {
                            return (
                                <div key={index}>
                                    <br />
                                    <Paper zDepth={2}>
                                        <Card>
                                            <CardTitle title={articleInfo.content.properties["title"]} subtitle={articleInfo.content.properties["author"]} />
                                            <CardText>
                                                {articleInfo.content.properties["outline"]}
                                            </CardText>
                                            <CardActions>
                                                <Link to={'/blog/' + articleInfo.link} ><FlatButton label="More" /></Link>
                                            </CardActions>
                                        </Card>
                                    </Paper>
                                </div>
                            )
                        } else {
                            return (<div key={index}></div>);
                        }
                    })
                }
            </div>
        );
    }
}