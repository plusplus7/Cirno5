import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Avatar from 'material-ui/Avatar';
import { IndexPageModel } from '../Models/IndexPageModel';
import CirnoApi from '../Services/CirnoServiceFactory';

export class Nav extends React.Component<undefined> {
    render() {
        let indexPage : IndexPageModel = CirnoApi.GetIndexPageInfo();
        return (
            <List>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar src={indexPage.avatarUrl} size={50}/>
                    }
                >
                {indexPage.personalInfomation}
                </ListItem>
                <ListItem
                    disabled={true}
                >
                {
                    indexPage.description.map((value)=> {
                        return (<p>{value}</p>)
                    })
                }
                </ListItem>
                <ListItem primaryText={indexPage.navbarButtonTexts.Home} leftIcon={<ContentInbox />} />
                <ListItem primaryText={indexPage.navbarButtonTexts.Blog} leftIcon={<ActionGrade />} />
                <ListItem primaryText={indexPage.navbarButtonTexts.Storage} leftIcon={<ContentDrafts />} />
                <ListItem primaryText={indexPage.navbarButtonTexts.Aboutme} leftIcon={<ContentSend />} />
            </List>
        );
    }
};

export default Nav;