interface IBaseState {
    loading: boolean;
    error?: string;
}

export interface IListState<T> extends IBaseState {
    data: T[];
}

export interface IListStatePaginated<T> extends IListState<T> {
    total: number;
    pageSize: number;
}

export interface IObjectState<T> extends IBaseState {
    value?: T;
}

export interface IProcessState extends IBaseState {
    success: boolean;
}
