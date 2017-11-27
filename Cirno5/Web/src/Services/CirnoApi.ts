import { ICirnoApi } from './ICirnoApi';
import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';
import { Article } from '../Models/Article';
import { AxiosResponse, default as axios } from 'axios';

export class CirnoApi implements ICirnoApi {

    private getApiEndpoint(): string {
        return "http://localhost:57743"
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
    }

    GetArticle(link: string, before: () => void, success: (data: Article) => void, failed: (error: any) => void): void {
        if (before !== null) {
            before();
        }

        this.invokeMethod(
            'get',
            '/api/article/' + link,
            {},
            (response: AxiosResponse) => {
                success(response.data);
            },
            (error: any) => {
                failed(error);
            }
        )
    }

    GetArticleInfos(tag: string, maxCount: number, index: number, before: () => void, success: (data: ArticleInfo[]) => void, failed: (error: any) => void): void {
        if (before !== null) {
            before();
        }

        this.invokeMethod(
            'get',
            '/api/articleInfos?' + 'tag=' + tag + '&' + 'maxCount=' + maxCount + '&' + 'index' + index,
            {},
            (response: AxiosResponse) => {
                success(response.data);
            },
            (error: any) => {
                failed(error);
            }
        )
    }
}