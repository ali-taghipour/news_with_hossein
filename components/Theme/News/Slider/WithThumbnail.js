import React from 'react';
import classNames from '../../../../utils/classNames';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useRouter } from 'next/router';
import isRtl from '../../../../utils/isRtl';

function WithThumbnail({ className, items }) {
    const { locale } = useRouter();

    // SLIDERS
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 1,
        spacing: 16,
        rtl: isRtl(locale),
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
    });

    const [thumbSliderRef, thumbSlider] = useKeenSlider({
        slidesPerView: 6,
        spacing: 8,
        rtl: isRtl(locale),
    });

    // const refreshSliders = React.useCallback(() => {
    //     slider?.refresh();
    //     thumbSlider?.refresh();
    // }, [slider, thumbSlider]);
    // Router.events.on('routeChangeComplete', refreshSliders);
    // Router.events.on('routeChangeError', refreshSliders);

    return (
        <div className={classNames('relative rounded overflow-hidden', className)}>
            <div ref={sliderRef} className="keen-slider" dir="ltr">
                {items.map((image) => (
                    <img
                        src={image.src}
                        dir={isRtl(locale) ? 'rtl' : 'ltr'}
                        className="keen-slider__slide mix-blend-darken w-full h-auto"
                    />
                ))}
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 bg-dark shadow-lg">
                <div ref={thumbSliderRef} className="keen-slider" dir="ltr">
                    {items.map((image, idx) => (
                        <button
                            dir={isRtl(locale) ? 'rtl' : 'ltr'}
                            onClick={() => slider?.moveToSlideRelative(idx)}
                            className={classNames(
                                'keen-slider__slide block w-full h-auto overflow-hidden rounded-sm',
                                'after:w-full after:h-1 after:bg-primary after:absolute after:bottom-0 after:block after:transition after:duration-200',
                                idx === currentSlide ? 'after:opacity-100' : 'after:opacity-0'
                            )}
                        >
                            <img src={image.src} className="w-full h-auto object-fill" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WithThumbnail;
