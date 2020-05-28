export type IMenuItem = {
    icon?: string;
    label?: string;
    path?: string;
    key?: string;
    basepath?: string;
    items?: IMenuItem[];
    permissions?: string[];
    permission?: string;
};

export interface IRucInfo {
    ruc: string;
    businessName: string;
    fullAddress: string;
    taxPayerStatus: string;
}

export interface IFileResult {
    blob: Blob;
    filename?: string;
}
