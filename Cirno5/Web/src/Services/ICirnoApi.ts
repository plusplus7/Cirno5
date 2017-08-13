import { IndexPageModel}  from '../Models/IndexPageModel';

export interface ICirnoApi
{
    GetIndexPageInfo: ()=> IndexPageModel
}