import { apiUrls } from '../common/constants';
import { APIManager } from '../common/utils';

const { DOCUMENT_ADAD } = apiUrls;

export function getAll() {
    return APIManager.get(DOCUMENT_ADAD);
}
