export function setPathParams(path: string, params: any): string {
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            path = path.replace(`:${key}`, value);
        }
    }

    return path;
}

export function onlyNumbers(input: string): boolean {
    if (/^\d+(\.\d+)*$/.test(input)) return true;
    else return false;
}

export function onlyNumbersWithDecimals(input: string): boolean {
    return /^\d*\.?\d*$/.test(input);
}

export function onlyNumbersWithTwoDecimals(input: string): boolean {
    return /^\d*\.?\d{0,2}$/.test(input);
}
