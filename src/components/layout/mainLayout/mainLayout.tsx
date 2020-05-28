import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MainHeader from './components/mainHeader';

const { Content, Footer } = Layout;

type IProps = RouteComponentProps;

const MainLayout: React.FC<IProps> = (props) => {
    const toogleSidebar = () => {};

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout>
                <MainHeader onClickMenu={toogleSidebar} collapsed={false} />
                <Content>{props.children}</Content>
                <Footer style={{ textAlign: 'center' }}>
                    Powered by{' '}
                    <a target="_blank" href="https://www.cosapi.com.pe/site/index.aspx">
                        Cosapi S.A
                    </a>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default connect()(withRouter(MainLayout));
