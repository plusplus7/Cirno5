import * as React from 'react';
import { Welcome } from '../components/Welcome';
import { Switch, Route, Link } from 'react-router-dom';
import { ArticleListPage } from './ArticleListPage';
import { ArticlePage } from './ArticlePage';

export class AppPage extends React.Component {
    public render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/storage'>Storage</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/blog' render={() => <ArticleListPage />} />
                    <Route path='/blog/:key' render={(props) => <ArticlePage link={props.match.params.key} />} />
                    <Route path='/about'  render={() => <div>414124141412124</div>}/>
                </Switch>
            </div>

        );
    }
}