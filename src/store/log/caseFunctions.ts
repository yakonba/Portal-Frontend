import { IState, initialState } from './reducer';
import { IAction } from '../../common/types';
import { listStateFailure, listStateLoading, listStateSuccess } from '../../common/helpers/reducer';

export const logListCF = {
    request: (state: IState, action: IAction): IState => {
        return {
            ...state,
            logList: listStateLoading(),
        };
    },

    success: (state: IState, action: IAction): IState => {
        return {
            ...state,
            logList: listStateSuccess(action.payload.data),
        };
    },

    failure: (state: IState, action: IAction): IState => {
        return {
            ...state,
            logList: listStateFailure(action.payload.error),
        };
    },

    reset: (state: IState): IState => {
        return {
            ...state,
            logList: initialState.logList,
        };
    },
};
