import {ICirnoApi} from './ICirnoApi';
import {IndexPageModel} from '../Models/IndexPageModel';

export class MockCirnoApi implements ICirnoApi {

    GetIndexPageInfo(): IndexPageModel {
        return {
            personalInfomation: "plusplus7's blog",
            avatarUrl: "http://7xlt42.com1.z0.glb.clouddn.com/blog_avatar.png-fullpercent",
            description: [
                "Hi, 欢迎来到我的个人博客",
                "Life is tough, take it easy:)",
            ],
            navbarButtonTexts: {
                "Home": "主页",
                "Aboutme": "关于我",
                "Blog": "博客",
                "Storage": "储物间",
            }
        }
    }
}