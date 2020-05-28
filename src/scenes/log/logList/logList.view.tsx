import React, { useEffect } from 'react';
import { Table as TableAntd, Button } from 'antd';
import { IProps } from './logList.types';
import { MainLoader } from '../../../components';
import { ILog } from '../../../common/types/entities';
import { useHistory } from 'react-router-dom';

const LogList: React.FC<IProps> = props => {
    const history = useHistory();

    useEffect(() => {
        props.getLog();
    }, []);

    const Modify = id => {
        history.push(`/log/${id}/detalle`);
    };

    if (!props.logs) return <>No hay nada</>;
    else if (props.loading) return <MainLoader></MainLoader>;
    else {
        return (
            <div style={{ marginTop: '18px', display: 'flex' }}>
                <TableAntd
                    rowKey="id"
                    bordered
                    style={{
                        width: '90%',
                        textAlign: 'center',
                        alignSelf: 'center',
                        margin: '0 auto',
                    }}
                    dataSource={props.logs}
                    columns={[
                        {
                            title: 'Nombre Documento',
                            dataIndex: 'documentNumber',
                            key: 'documentNumber',
                        },
                        {
                            title: 'Título',
                            dataIndex: 'title',
                            key: 'title',
                        },
                        {
                            title: 'Fecha Emisión',
                            dataIndex: 'broadcastDate',
                            key: 'broadcastDate',
                        },
                        {
                            title: 'Descripción',
                            dataIndex: 'description',
                            key: 'description',
                        },
                        {
                            title: 'Acción',
                            dataIndex: '',
                            key: 'option',
                            render: (Item: ILog) => (
                                <Button onClick={() => Modify(Item.id)}>Modificar</Button>
                            ),
                        },
                    ]}
                ></TableAntd>
            </div>
        );
    }
};

export default LogList;
