import React from 'react';
import { Carousel } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import './styles-main.css';

type IProps = RouteComponentProps;

const Main: React.FC<IProps> = ({ history }) => {
    const goToHome = () => {
        history.push('/s');
    };

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h1>1</h1>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            <div className="divito">
                <div className="grids" style={{ marginTop: '40px' }}>
                    <div onClick={goToHome} className="circle">
                        <p className="circle-content">Sistemas de Información</p>
                    </div>
                    <div onClick={goToHome} className="circle">
                        <p className="circle-content"> Operaciones </p>
                    </div>
                    <div onClick={goToHome} className="circle">
                        <p className="circle-content"> TI </p>
                    </div>
                    <div onClick={goToHome} className="circle">
                        <p className="circle-content"> Infraestructura </p>
                    </div>
                    <div onClick={goToHome} className="circle">
                        <p className="circle-content"> Seguridad de la Información </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
