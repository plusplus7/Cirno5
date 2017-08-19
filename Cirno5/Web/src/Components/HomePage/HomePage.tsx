import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import { ArticleInfosList } from '../List/ArticleInfosList';

interface HomePageProps {

}

export class HomePage extends React.Component<HomePageProps> {
    public render() {
        return (
            <div>
                <Tabs>
                    <Tab
                        icon={<FontIcon className="material-icons">phone</FontIcon>}
                        label="RECENTS"
                    />
                    <Tab
                        icon={<FontIcon className="material-icons">favorite</FontIcon>}
                        label="FAVORITES"
                    />
                    <Tab
                        icon={<MapsPersonPin />}
                        label="NEARBY"
                    />
                </Tabs>
                <ArticleInfosList />
            </div>
        )
    }
}