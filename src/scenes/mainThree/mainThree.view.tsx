import React from 'react';
import { Carousel } from 'antd';
import { RouteComponentProps } from 'react-router-dom';
import './styles-mainThree.css';

type IProps = RouteComponentProps;

const MainThree: React.FC<IProps> = ({ history }) => {
    // const goToHome = () => {
    //     history.push('/s');
    // };

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
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
            <div style={{ marginTop: '40px' }}>
                <div className="boxes">
                    <li>
                        <div className="boxes__text-wrapper">
                            <h2>Titulo del portafolio</h2>
                            <p>Aquí la descripción del portafolio</p>
                        </div>
                    </li>
                    <li>
                        <div className="boxes__text-wrapper">
                            <h2>Titulo del portafolio</h2>
                            <p>Aquí la descripción del portafolio</p>
                        </div>
                    </li>
                    <li>
                        <div className="boxes__text-wrapper">
                            <h2>Titulo del portafolio</h2>
                            <p>Aquí la descripción del portafolio</p>
                        </div>
                    </li>
                    <li>
                        <div className="boxes__text-wrapper">
                            <h2>Titulo del portafolio</h2>
                            <p>Aquí la descripción del portafolio</p>
                        </div>
                    </li>
                    <li>
                        <div className="boxes__text-wrapper">
                            <h2>Titulo del portafolio</h2>
                            <p>Aquí la descripción del portafolio</p>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default MainThree;
