import React from 'react';
import { Carousel } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import MainCarousel from '../../components/mainCarousel';
import './styles.css';

type IProps = RouteComponentProps;

const MainNow: React.FC<IProps> = ({ history }) => {
    const goToHome = () => {
        history.push('/');
    };

    var carousel: Array<string>;
    carousel = ['Hola', 'Como', 'Estan'];

    return (
        <div>
            <MainCarousel carousel={carousel} />
            <div className="Services" style={{ marginTop: '40px' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Nuestros Servicios</h1>
                <div className="grid" style={{ marginTop: '40px', marginBottom: 40 }}>
                    <div onClick={goToHome}>
                        <p style={{ color: 'green' }}>Sistemas de Información</p>
                    </div>
                    <div onClick={goToHome}>
                        <p style={{ color: 'green' }}> Operaciones </p>
                    </div>
                    <div onClick={goToHome}>
                        <p style={{ color: 'green' }}> TI </p>
                    </div>
                    <div onClick={goToHome}>
                        <p style={{ color: 'green' }}> Infraestructura </p>
                    </div>
                    <div onClick={goToHome}>
                        <p style={{ color: 'green' }}> Seguridad de la Información </p>
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            float: 'left',
                            width: '25%',
                            height: '300px',
                            textAlign: 'center',
                            background: '#00AEFF',
                        }}
                    >
                        DIV1
                    </div>
                    <div
                        style={{
                            float: 'left',
                            width: '25%',
                            height: '300px',
                            textAlign: 'center',
                            background: '#00F',
                        }}
                    >
                        DIV2
                    </div>
                    <div
                        style={{
                            float: 'left',
                            width: '25%',
                            height: '300px',
                            textAlign: 'center',
                            background: '#000',
                        }}
                    >
                        DIV3
                    </div>
                    <div
                        style={{
                            float: 'left',
                            width: '25%',
                            height: '300px',
                            textAlign: 'center',
                            background: '#FAD',
                        }}
                    >
                        DIV4
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNow;
