import { Dispatch } from 'redux';
import { authorizationHelper } from '.';
import { httpStatus, messages } from '../constants';

export async function handle(error: any, dispatch: Dispatch, actionType: string) {
    const response = error.response;

    if (!response) dispatch({ type: actionType, payload: { error: messages.GENERAL_ERROR } });
    else if (await authorizationHelper.isUnauthorizedCall(dispatch, response)) return;
    // eslint-disable-next-line
    else if (response.status == httpStatus.BAD_REQUEST || response.status == httpStatus.NOT_FOUND)
        if (response.data.message)
            dispatch({ type: actionType, payload: { error: response.data.message } });
        else dispatch({ type: actionType, payload: { error: messages.GENERAL_ERROR } });
    else dispatch({ type: actionType, payload: { error: messages.GENERAL_ERROR } });
}
