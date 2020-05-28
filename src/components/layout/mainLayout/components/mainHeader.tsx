import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout, Icon, Avatar, Dropdown, Menu, Divider, Affix } from 'antd';
import { connect } from 'react-redux';
import TopHeader from './topHeader';
import './styles.css';

const { Header } = Layout;

interface IOwnProps {
    onClickMenu: () => void;
    collapsed?: boolean;
}

type IProps = IOwnProps & RouteComponentProps<any>;

const MainHeader: React.FC<IProps> = ({ collapsed, onClickMenu, history }) => {
    const renderUserMenu = () => (
        <Menu>
            <Menu.Item disabled style={{ cursor: 'default', color: 'rgba(0, 0, 0, 1)' }}>
                <div className="text-center">
                    <span className="p-3 font-w-600">Hola</span>
                    <br />
                    <span className="p-3">Hola@gmail</span>
                </div>
                <Divider className="my-1" />
            </Menu.Item>
            <Menu.Item>
                <Icon type="user" />
                Mi Perfil
            </Menu.Item>
            <Menu.Item>
                <Icon type="logout" />
                Cerrar Sesión
            </Menu.Item>
        </Menu>
    );
    const toogleSidebar = () => {};
    return (
        <div>
            <Header style={{ padding: 0, height: 260 }}>
                <TopHeader onClickMenu={toogleSidebar} collapsed={false} />
                <Affix>
                    <div>
                        <div style={{ background: '#00AEFF', height: 84 }}>
                            <div>
                                <ul id="menu">
                                    <li>
                                        <a href="/">Tecnologia de la Información</a>
                                    </li>
                                    <li>
                                        <a href="/">Infraestructura</a>
                                    </li>
                                    <li>
                                        <a href="/">Operaciones</a>
                                    </li>
                                    <li>
                                        <a href="/">Sistemas de Información</a>
                                    </li>
                                    <li>
                                        <a href="/">Seguridad de la información</a>
                                    </li>
                                    <li
                                        style={{
                                            float: 'right',
                                        }}
                                    >
                                        <div
                                            style={{
                                                float: 'right',
                                                display: 'flex',
                                                marginTop: 8,
                                                marginRight: 25,
                                            }}
                                        >
                                            <Dropdown trigger={['click']} overlay={renderUserMenu}>
                                                <Avatar
                                                    icon="user"
                                                    style={{ cursor: 'pointer' }}
                                                ></Avatar>
                                            </Dropdown>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Affix>
            </Header>
        </div>
    );
};

export default connect()(withRouter(MainHeader));
