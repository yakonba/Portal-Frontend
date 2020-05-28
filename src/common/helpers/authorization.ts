import { Dispatch } from 'redux';
import { httpStatus } from '../constants';

export function getAccessToken(): string | null {
    return '';
}

export function saveAuthorizationToken(token: string): void {}

export function removeAuthorizationToken(): void {}

export function getAuthorizationToken(): string {
    return '';
}

export function isUnauthorizedCall(dispatch: Dispatch, response: Response): boolean {
    if (!response) return false;
    if (response.status === httpStatus.UNAUTHORIZED) {
        return true;
    }
    return false;
}
