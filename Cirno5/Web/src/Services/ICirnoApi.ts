import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';
import { Article } from '../Models/Article';

export interface ICirnoApi {
    GetIndexPageInfo: (before: () => void, success: (data: IndexPageInfo) => void, failed: (error: any) => void) => void
    GetArticleInfos: (tag: string, maxCount: number, index: number, before: () => void, success: (data: ArticleInfo[]) => void, failed: (error: any) => void) => void
    GetArticle: (link: string, before: () => void, success: (data: Article) => void, failed: (error: any) => void) => void
}