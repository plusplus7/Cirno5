import { ICirnoApi } from './ICirnoApi';
import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';
import { Article } from '../Models/Article';
import { ArticleInfoContent } from '../Models/ArticleInfoContent';
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."+
      "Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque." +
    "Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.233322333"
let markdown = "# +7的购机指南问题\n\n各位同学买电脑之前，不妨先确定一下自己买电脑的目的～\n这里总结了买电脑的同学需要关注的几个问题。"
    + "\n先回答前4个必答题，后面的问题可以选答。记得先想好自己的答案，然后再来qq私信+7哟～谢谢～\n\n1. 预算是多少？\n2. 要小巧一点的还是普通"
    + "的？\n3. 打不打游戏？\n4. 追求性价比还是希望要大品牌？\n\n5. 抵不抵制日货，对国产是否有偏见？\n6. 有没有使用经常使用CAD等制图软件的" + "工作学习需求？\n7. 会经常用笔记本看电影吗？"

export class MockCirnoApi implements ICirnoApi {

    GetIndexPageInfo(before: () => void, success: (data: IndexPageInfo) => void, failed: (error: any) => void): void {
        console.log("Getting index page info from mock storage");

        before();

        var data = {
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
        } as IndexPageInfo;

        success(data);

        if (failed == null) {
            failed("Failed");
        }
    }

    GetArticle(link: string, before: () => void, success: (data: Article) => void, failed: (error: any) => void): void {
        console.log("Get article from mock storage with " + link + ".");

        before();

        var data = {
            id: "12345671-1234-1234-1234-123456781234",
            link: "Zelda",
            contentType: "markdown",
            content: markdown

        } as Article;

        success(data);

        if (failed == null) {
            failed("Failed")
        }
    }

    GetArticleInfos(tag: string, maxCount: number, index: number, before: () => void, success: (data: ArticleInfo[]) => void, failed: (error: any) => void): void {
        console.log("Get article infos from mock storage with tag " + tag + ", maxCount: " + maxCount + ", index: " + index);

        before();

        var data = [
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
        ] as ArticleInfo[];

        success(data);

        if (failed == null) {
            failed("Failed");
        }
    }
}