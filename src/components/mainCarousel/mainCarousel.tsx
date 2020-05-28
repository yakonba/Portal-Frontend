import React, { FC } from 'react';
import { Carousel } from 'antd';

interface IOwnProps {
    carousel?: Array<string>;
}

type IProps = IOwnProps;

const MainCarousel: FC<IProps> = ({ carousel }) => {
    const carouselMulti = () => {
        return carousel.map((caro) => (
            <div>
                <h1>{caro}</h1>
            </div>
        ));
    };

    return <Carousel autoplay>{carouselMulti()}</Carousel>;
};

MainCarousel.defaultProps = {
    carousel: [''],
};

export default MainCarousel;
