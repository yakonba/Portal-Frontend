import { AxiosResponse } from 'axios';
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { errorHelper } from '../helpers';
import { getContentDispositionFilename } from '../utils';
import { IFileResult } from '../types';

const callAPIMiddleware: Middleware = ({ dispatch, getState }: MiddlewareAPI) => {
    return (next: Dispatch) => action => {
        const {
            types,
            callAPI,
            shouldCallAPI = (state: any) => true,
            payload = {},
            successFunction = null,
            failureFunction = null,
        } = action;

        if (!Array.isArray(types)) return next(action);

        if (types.length !== 3 || !types.every(typ => typeof typ === 'string'))
            throw new Error('Expected an array of three string types.');

        if (typeof callAPI !== 'function') throw new Error('Expected callAPI to be a function.');

        if (!shouldCallAPI(getState())) return;

        const [requestType, successType, failureType] = types;

        dispatch({ payload: { ...payload }, type: requestType });

        return callAPI()
            .then(async (response: AxiosResponse) => {
                const responseData = response.data ? response.data : {};

                let combinedPayload = {};

                if (responseData instanceof Blob) {
                    const contentDisposition = response.headers['content-disposition'];
                    let filename = '';
                    if (contentDisposition)
                        filename = getContentDispositionFilename(contentDisposition);

                    const fileResult: IFileResult = {
                        blob: responseData,
                        filename,
                    };

                    combinedPayload = {
                        ...payload,
                        fileResult,
                    };
                } else
                    combinedPayload = {
                        ...payload,
                        ...responseData,
                    };

                if (successFunction) successFunction(combinedPayload);

                dispatch({
                    payload: combinedPayload,
                    type: successType,
                });
            })
            .catch((error: any) => {
                if (failureFunction) failureFunction(error);
                else if (error.response && error.response.data instanceof Blob) {
                    const fr = new FileReader();

                    fr.onload = (e: any) => {
                        if (e.currentTarget && e.currentTarget.readyState === 2)
                            error.response.data = JSON.parse(e.target.result as string);

                        errorHelper.handle(error, dispatch, failureType);
                    };

                    fr.readAsText(error.response.data);
                } else errorHelper.handle(error, dispatch, failureType);
            });
    };
};

export default callAPIMiddleware;
