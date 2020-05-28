import { IAction, IProcessState, IObjectState, IListState, IListStatePaginated } from '../types';

export function createReducer<T>(initialState: T, handlers: any) {
    return function reducer(state = initialState, action: IAction): T {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

export const processStateLoading = (): IProcessState => {
    return { success: false, loading: true, error: undefined };
};

export const processStateSuccess = (): IProcessState => {
    return { success: true, loading: false, error: undefined };
};

export const processStateFailure = (error: string): IProcessState => {
    return { success: false, loading: false, error };
};

export const objectStateLoading = (): IObjectState<any> => {
    return {
        value: undefined,
        loading: true,
        error: undefined,
    };
};

export const objectStateSuccess = <T>(value: any): IObjectState<T> => {
    return {
        value: value,
        loading: false,
        error: undefined,
    };
};

export const objectStateFailure = (error: string): IObjectState<any> => {
    return {
        value: undefined,
        loading: false,
        error,
    };
};

export const listStateLoading = (): IListState<any> => {
    return { data: [], loading: true, error: undefined };
};

export const listStateSuccess = <T>(data: any): IListState<T> => {
    return {
        data,
        loading: false,
        error: undefined,
    };
};

export const listStateFailure = (error: string): IListState<any> => {
    return {
        data: [],
        loading: false,
        error,
    };
};

export const listStatePaginatedLoading = <T>(
    list: IListStatePaginated<T>,
): IListStatePaginated<T> => {
    return {
        ...list,
        loading: true,
        error: undefined,
    };
};

export const listStatePaginatedSuccess = <T>(payload: any): IListStatePaginated<T> => {
    return {
        data: payload.data,
        total: payload.total,
        pageSize: payload.pageSize,
        loading: false,
        error: undefined,
    };
};

export const listStatePaginatedFailure = <T>(
    initList: IListStatePaginated<T>,
    error: string,
): IListStatePaginated<T> => {
    return {
        ...initList,
        error,
    };
};
