import { RouteComponentProps } from 'react-router';
import { ILog } from '../../../common/types/entities';

export interface IDispatchProps {
    getLog: () => void;
    resetLog: () => void;
}

export interface IStoreState {
    logs: ILog[];
    loading: boolean;
    error?: string;
}

export type IProps = IDispatchProps & IStoreState & RouteComponentProps;
