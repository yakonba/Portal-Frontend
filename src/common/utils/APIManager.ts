import axios, { ResponseType } from 'axios';
import { getAuthorizationToken } from '../helpers/authorization';

interface IRequestConfig {
    params?: any;
    data?: any;
    responseType?: ResponseType;
}

// createFormData is a recursive func, that detect any File object in our long struct and attach that file on 'files'(that will be catch by filepond, nest(using interceptors)), at the same time our object with data mantain the same struct.
function createFormData(object: any, form?: FormData, namespace?: string): FormData {
    const formData = form || new FormData();

    for (let property in object) {
        if (!object.hasOwnProperty(property)) continue;

        const formKey = namespace ? `${namespace}[${property}]` : property;

        if (object[property] instanceof Date) formData.append(formKey, object[property].toString());
        else if (typeof object[property] === 'object' && !(object[property] instanceof File))
            createFormData(object[property], formData, formKey);
        else if (object[property] instanceof File) formData.append('files', object[property]);
        else formData.append(formKey, object[property]);
    }

    return formData;
}

export const APIManager = {
    async get<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, responseType } = config;
        const headers = await getHeaders();
        return axios.get<T>(url, { params, headers, responseType });
    },

    async post<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, data, responseType } = config;
        const headers = await getHeaders();
        return axios.post<T>(url, data, { params, headers, responseType });
    },

    async put<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, data, responseType } = config;
        const headers = await getHeaders();
        return axios.put<T>(url, data, { params, headers, responseType });
    },

    async delete<T = any>(url: string, config: IRequestConfig = {}) {
        const { params, responseType } = config;
        const headers = await getHeaders();
        return axios.delete<T>(url, { params, headers, responseType });
    },

    async postWithFiles<T = any>(url: string, config: IRequestConfig) {
        const { params, data } = config,
            headers = await getHeaders();

        return axios.post<T>(url, createFormData(data), { params, headers });
    },

    async putWithFiles<T = any>(url: string, config: IRequestConfig) {
        const { params, data } = config,
            headers = await getHeaders();

        return axios.put<T>(url, createFormData(data), { params, headers });
    },
};

async function getHeaders(): Promise<any> {
    const token = await getAuthorizationToken();
    const headers = { Authorization: token };
    return headers;
}
