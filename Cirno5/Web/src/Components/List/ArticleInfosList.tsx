import * as React from 'react';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import  * as style from './ArticleInfosList.css';

import { ArticleInfo } from '../../Models/ArticleInfo';
import CirnoApi from '../../Services/CirnoServiceFactory';

export interface ArticleInfosListProps {
}

export interface ArticleInfosListState {
    articleInfos : ArticleInfo[]
}

export class ArticleInfosList extends React.Component<ArticleInfosListProps, ArticleInfosListState> {
    constructor() {
        super();
        this.state = {
            articleInfos: CirnoApi.GetArticleInfos("2333", 10),
        };
    }

    public render() {

        return (
            <div className={style.ArticleInfosListContent}>
            {
                this.state.articleInfos.map((articleInfo, index) => {
                    if (articleInfo.content.type === 'A') {
                        return (
                            <div key={index}>
                            <br/>
                            <Paper zDepth={2}>
                                <Card>
                                    <CardTitle title={articleInfo.content.properties["title"]} subtitle={articleInfo.content.properties["author"]} />
                                    <CardText>
                                        {articleInfo.content.properties["outline"]}
                                    </CardText>
                                    <CardActions>
                                        <FlatButton label="More" />
                                    </CardActions>
                                </Card>
                            </Paper>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })
            }
            </div>
        );
    }
}