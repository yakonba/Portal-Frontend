import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';

interface IOwnProps {
    onClickMenu: () => void;
    collapsed?: boolean;
}

type IProps = IOwnProps & RouteComponentProps<any>;

const TopHeader: React.FC<IProps> = ({ collapsed, onClickMenu, history }) => {
    return (
        <div className="Top" style={{ background: '#fff' }}>
            <div className="subTop">
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <img
                            src="logoTi.png"
                            alt=""
                            style={{ display: 'inline', cursor: 'pointer' }}
                            height="90"
                            width="240"
                            onClick={() => history.push('/MainThree')}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default connect()(withRouter(TopHeader));
