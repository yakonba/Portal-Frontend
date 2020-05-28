import React, { FC } from 'react';
import { Spin } from 'antd';

interface IOwnProps {
    delay?: number;
    size?: 'small' | 'default' | 'large';
    tip?: string;
}

type IProps = IOwnProps;

const MainLoader: FC<IProps> = ({ delay, size, tip }) => {
    return (
        <div className="main-loader">
            <Spin delay={delay} size={size} tip={tip} />
        </div>
    );
};

MainLoader.defaultProps = {
    delay: 500,
    size: 'large',
    tip: 'Cargando...',
};

export default MainLoader;
