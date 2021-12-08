import React from "react";

import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
    return (
        <Carousel autoPlay={true} showThumbs={false} showArrows={false} infiniteLoop={true}>
            <div className="relative flex justify-center place-items-center">
                <img src="img/bg-auth.jpg" />
                <div class="absolute font-bold text-lg text-body">
                    <p>Ali Taghipour</p>
                </div>
            </div>
            <div className="relative flex justify-center place-items-center">
                <img src="img/bg-auth.jpg" />
                <div class="absolute font-bold text-lg text-body">
                    <p>Ali Taghipour</p>
                </div>
            </div>
            <div className="relative flex justify-center place-items-center">
                <img src="img/bg-auth.jpg" />
                <div class="absolute font-bold text-lg text-body">
                    <p>Ali Taghipour</p>
                </div>
            </div>
            <div className="relative flex justify-center place-items-center">
                <img src="img/bg-auth.jpg" />
                <div class="absolute font-bold text-lg text-body">
                    <p>Ali Taghipour</p>
                </div>
            </div>
            <div className="relative flex justify-center place-items-center">
                <img src="img/bg-auth.jpg" />
                <div class="absolute font-bold text-lg text-body">
                    <p>Ali Taghipour</p>
                </div>
            </div>
            <div className="relative flex justify-center place-items-center">
                <img src="img/bg-auth.jpg" />
                <div class="absolute font-bold text-lg text-body">
                    <p>Ali Taghipour</p>
                </div>
            </div>
    </Carousel>
)
}

export {Slider};