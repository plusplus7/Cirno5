import { ICirnoApi } from './ICirnoApi';
import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';
import { Article } from '../Models/Article';
import { ArticleInfoContent } from '../Models/ArticleInfoContent';
import { AxiosResponse, default as axios } from 'axios';

export class CirnoApi implements ICirnoApi {

    private getApiEndpoint(): string {
        return "http://localhost:57721"
    }

    private invokeMethod(method: string, api: string, data: any, onSuccess: (response: AxiosResponse) => void, onFailed: (error: any) => void) {
        axios(
            {
                method: method,
                url: this.getApiEndpoint().concat(api),
                data: data
            }
        ).then(function (response: AxiosResponse) {
            onSuccess(response)
        })
        .catch(function (error: any) {
            onFailed(error)
        });

    }
    GetIndexPageInfo(before: () => void, success: (data: IndexPageInfo) => void, failed: (error: any) => void): void {
        if (before !== null) {
            before();
        }


        this.invokeMethod(
            'get',
            '/api/indexPageInfo',
            {},
            (response: AxiosResponse) => {
                success(response.data);
            },
            (error: any) => {
                failed(error);
            }
        )
        // var data = {
        //     personalInfomation: "plusplus7's blog",
        //     avatarUrl: "http://7xlt42.com1.z0.glb.clouddn.com/blog_avatar.png-fullpercent",
        //     description: [
        //         "Hi, 欢迎来到我的个人博客abasdfasdfasdfasdfasdf",
        //         "Life is tough",
        //         "Take it easy:)",
        //     ],
        //     navbarButtonTexts: {
        //         "Home": "主页",
        //         "Aboutme": "关于我",
        //         "Blog": "博客",
        //         "Storage": "储物间",
        //     }
        // } as IndexPageInfo;
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