import { ICirnoApi } from './ICirnoApi';
import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';
import { ArticleInfoContent } from '../Models/ArticleInfoContent';
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."+
      "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
      "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.233322333"
export class MockCirnoApi implements ICirnoApi {

    GetIndexPageInfo(): IndexPageInfo {
        return {
            personalInfomation: "plusplus7's blog",
            avatarUrl: "http://7xlt42.com1.z0.glb.clouddn.com/blog_avatar.png-fullpercent",
            description: [
                "Hi, 欢迎来到我的个人博客abasdfasdfasdfasdfasdf",
                "Life is tough",
                "Take it easy:)",
            ],
            navbarButtonTexts: {
                "Home": "主页",
                "Aboutme": "关于我",
                "Blog": "博客",
                "Storage": "储物间",
            }
        }
    }

    GetArticleInfos(tag: string, maxCount: number, index: number): ArticleInfo[] {
        console.log("Get article infos from mock storage with tag " + tag + ", maxCount: " + maxCount + ", index: " + index);
        return [
            {
                id: "12345678-1234-1234-1234-123456781234",
                link: "Zelda",
                contentType: "markdown",
                createDate: new Date("2018-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "456"]
            } as ArticleInfo,
            {
                id: "12345678-1234-1234-1234-123456781235",
                link: "Zeld4",
                contentType: "markdown",
                createDate: new Date("2318-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "457"]
            } as ArticleInfo,
            {
                id: "12345678-1234-1234-1234-123456781236",
                link: "Ze1de",
                contentType: "markdown",
                createDate: new Date("2318-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "457"]
            } as ArticleInfo,
            {
                id: "12345678-1234-1234-1234-123456781237",
                link: "Zeldw",
                contentType: "markdown",
                createDate: new Date("2318-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "457"]
            } as ArticleInfo,
            {
                id: "12345678-1234-1234-1234-123456781238",
                link: "Zeldu",
                contentType: "markdown",
                createDate: new Date("2318-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "457"]
            } as ArticleInfo,
            {
                id: "12345678-1234-1234-1234-123456781239",
                link: "Zeld3",
                contentType: "markdown",
                createDate: new Date("2318-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "457"]
            } as ArticleInfo,
            {
                id: "12345678-1234-1234-1234-123456781240",
                link: "Zeldo",
                contentType: "markdown",
                createDate: new Date("2318-12-31T08:44:29+0100"),
                content: {
                    type: 'A',
                    properties: {
                        "author": "plusplus7",
                        "title": "Everything but you",
                        "outline": loremIpsum,
                    }
                } as ArticleInfoContent,
                tags: ["123", "457"]
            } as ArticleInfo,
        ];
    }
}