import { IAPIMiddleware } from '../../common/types';
import { logService } from '../../service';
import actionTypes from './actionTypes';
import { Dispatch } from 'redux';

export function getLog(): IAPIMiddleware {
    return {
        callAPI: () => logService.getAll(),
        types: [actionTypes.GET_LOG, actionTypes.GET_LOG_SUCCESS, actionTypes.GET_LOG_FAILURE],
    };
}

export function getLogOne(): IAPIMiddleware {
    return {
        callAPI: () => logService.getAll(),
        types: [actionTypes.GET_LOG, actionTypes.GET_LOG_SUCCESS, actionTypes.GET_LOG_FAILURE],
    };
}

export function resetLog() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: actionTypes.GET_LOG_RESET,
        });
    };
}
