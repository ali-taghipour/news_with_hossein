import React from 'react';
import Icon from '../Icon';
import Link from '../Link';
import colorInvert from '../../../utils/colorInvert';
import classNames from '../../../utils/classNames';
import { useRouter } from 'next/router';
import traslate from '../../../utils/traslate';

function Banner({
    title,
    image,
    color,
    time,
    more,
    label,
    className,
    wrapperClassName,
    justLabelColored,
}) {
    const { locale } = useRouter();
    const t = traslate(locale);

    return (
        <Link href="/" className={className}>
            <article
                className={classNames('group relative rounded overflow-hidden', wrapperClassName)}
            >
                <img
                    src={image}
                    className="object-cover w-full h-full transition-transform duration-200 transform news-banner group-hover:scale-110"
                />
                <span
                    style={{ '--tw-gradient-from': (!justLabelColored && color) || null }}
                    className="absolute top-0 bottom-0 flex items-center justify-center text-lg text-white transition-opacity duration-200 start-0 end-0 bg-gradient-to-t from-dark"
                />
                {label ? (
                    <span
                        style={{
                            backgroundColor: color || null,
                            color: color ? colorInvert(color, true) : null,
                        }}
                        className="absolute top-2 end-2 bg-primary text-white px-1 py-0.5 text-xs rounded-sm w-max"
                    >
                        {label}
                    </span>
                ) : (
                    label
                )}
                <div
                    className="absolute bottom-0 p-2 text-white group start-0 end-0"
                    style={{ color: !justLabelColored && color ? colorInvert(color, true) : null }}
                >
                    <h4 className="mb-2 text-base font-bold">{title}</h4>
                    <div className="flex items-center justify-between h-0 overflow-hidden text-xs transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:h-4">
                        {time ? (
                            <span className="flex items-center">
                                <Icon name="clock" className="me-1" />
                                {time}
                            </span>
                        ) : null}
                        {more ? (
                            <span className="flex items-center">
                                {t.continue}
                                <Icon name="angle-double-small-left" className="ms-1" />
                            </span>
                        ) : null}
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default Banner;
