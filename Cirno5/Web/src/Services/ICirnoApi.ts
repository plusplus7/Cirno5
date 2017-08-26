import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';
import { Article } from '../Models/Article';

export interface ICirnoApi {
    GetIndexPageInfo: () => IndexPageInfo
    GetArticleInfos: (tag: string, maxCount: number, index: number) => ArticleInfo[]
    GetArticle: (link: string) => Article
}