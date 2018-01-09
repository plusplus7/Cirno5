import * as React from 'react';
import { NavbarComponent } from '../components/Navbar/NavbarComponent';
import { Switch, Route, Link } from 'react-router-dom';
import { ArticleListPage } from './ArticleListPage';
import { ArticlePage } from './ArticlePage';

export class AppPage extends React.Component {
    public render() {
        return (
            <div>
                <NavbarComponent />
                <Switch>
                    <Route exact path='/blog' render={() => <ArticleListPage />} />
                    <Route path='/blog/:key' render={(props) => <ArticlePage link={props.match.params.key} />} />
                    <Route path='/about'  render={() => <div>414124141412124</div>}/>
                </Switch>
            </div>

        );
    }
}