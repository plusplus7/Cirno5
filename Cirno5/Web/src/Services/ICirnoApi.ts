import { IndexPageInfo } from '../Models/IndexPageInfo';
import { ArticleInfo } from '../Models/ArticleInfo';

export interface ICirnoApi {
    GetIndexPageInfo: () => IndexPageInfo
    GetArticleInfos: (tag: string, maxCount: number) => ArticleInfo[]
}