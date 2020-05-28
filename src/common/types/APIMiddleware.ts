import { AxiosPromise } from 'axios';

export interface IAPIMiddleware {
    callAPI: () => AxiosPromise<any>;
    types: string[];
    payload?: {};
    shouldCallAPI?: (state: any) => boolean;
    successFunction?: (res: { [id: string]: string }) => void;
    failureFunction?: (res: { [id: string]: string }) => void;
}
