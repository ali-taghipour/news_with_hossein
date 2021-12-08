import React from 'react';
import Button from '../../Button';
import classNames from '../../../../utils/classNames';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useRouter } from 'next/router';
import isRtl from '../../../../utils/isRtl';

function Items({ items, row = 1, col = 1, arrows, dots, className, renderItems }) {
    const { locale } = useRouter();

    const renderSlides = React.useMemo(() => {
        const slides = [];
        items.map((item, idx) => {
            const slideIdx = Math.floor(idx / row);
            if (slides[slideIdx]?.length) {
                slides[slideIdx].push(item);
            } else slides.push([item]);
        });
        return slides;
    });

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: col,
        spacing: 16,
        rtl: isRtl(locale),
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
    });

    return (
        <div className={classNames('flex flex-wrap items-center', className)}>
            {arrows ? (
                <Button
                    circle
                    type="ghost"
                    icon="angle-right"
                    className="text-base me-2"
                    onClick={() => slider.prev()}
                />
            ) : null}
            <div ref={sliderRef} className="keen-slider flex-1 w-full h-[max-content]" dir="ltr">
                {renderSlides.map((slide, index) => (
                    <div
                        className="grid w-full gap-4 keen-slider__slide"
                        key={index}
                        dir={isRtl(locale) ? 'rtl' : 'ltr'}
                        style={{
                            gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
                        }}
                    >
                        {slide.map((item) => item)}
                    </div>
                ))}
            </div>
            {arrows ? (
                <Button
                    circle
                    type="ghost"
                    icon="angle-left"
                    className="text-base ms-2"
                    onClick={() => slider.next()}
                />
            ) : null}
            {dots ? (
                <div className="flex justify-center w-full mt-2 dots space-s-1">
                    {[...Array(slider?.details()?.size).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx);
                                }}
                                className={classNames(
                                    'w-2 h-2 rounded-full',
                                    currentSlide === idx ? 'bg-dark' : 'bg-line'
                                )}
                            />
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default Items;
