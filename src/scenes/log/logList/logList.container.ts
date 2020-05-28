import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IStoreState } from './logList.types';
import log from './logList.view';
import { IRootState } from '../../../common/types';
import { getLog, resetLog } from '../../../store/log/actions';

function mapStateToProps(state: IRootState): IStoreState {
    const { logList } = state.log;

    return {
        logs: logList.data,
        loading: logList.loading,
        error: logList.error,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
        {
            getLog,
            resetLog,
        },
        dispatch,
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(log);
