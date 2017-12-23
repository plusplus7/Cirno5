import { article } from './Article';
import { combineReducers, createStore } from 'redux';
import { ArticleState, article as ArticleReducer } from './Article';

export type Status = 'Init' | 'Loading' | 'Done' | 'Error';

export interface StoreState {
    article: ArticleState;
}

export const CirnoApp = combineReducers<StoreState>({
    article: ArticleReducer
});

export const CirnoStore = createStore<StoreState>(CirnoApp);