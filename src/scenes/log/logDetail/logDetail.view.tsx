import React, { useEffect } from 'react';
import { Table as TableAntd, Button } from 'antd';
import { IProps } from './logDetail.types';
import { MainLoader } from '../../../components';
import { useHistory } from 'react-router-dom';

const LogDetail: React.FC<IProps> = props => {
    const id = props.match.params['id'];
    const history = useHistory();

    useEffect(() => {
        props.getLog();
    }, []);

    if (!props.logs) return <>No hay nada</>;
    else if (props.loading) return <MainLoader></MainLoader>;
    else {
        return <div style={{ marginTop: '18px', display: 'flex' }}>HOLA {id}</div>;
    }
};

export default LogDetail;
