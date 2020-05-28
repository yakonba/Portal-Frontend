import actionTypes from './actionTypes';
import { IListState } from '../../common/types';
import { ILog } from '../../common/types/entities';
import { logListCF } from './caseFunctions';
import { createReducer } from '../../common/helpers/reducer';

export interface IState {
    logList: IListState<ILog>;
}

export const initialState: IState = {
    logList: { data: [], loading: false, error: undefined },
};

export default createReducer<IState>(initialState, {
    [actionTypes.GET_LOG]: logListCF.request,
    [actionTypes.GET_LOG_SUCCESS]: logListCF.success,
    [actionTypes.GET_LOG_FAILURE]: logListCF.failure,
    [actionTypes.GET_LOG_FAILURE]: logListCF.reset,
});
