import React from 'react';
import Icon from '../Icon';
import Link from '../Link';
import classNames from '../../../utils/classNames';
import { useRouter } from 'next/router';
import traslate from '../../../utils/traslate';

function Item({
    vertical,
    color,
    image,
    title,
    time,
    more,
    icon,
    description,
    className,
    imageClassName,
    justImage,
}) {
    const { locale } = useRouter();
    const t = traslate(locale);

    return (
        <Link href="/" className={classNames('!block', className)}>
            <article
                className={classNames(
                    'news ',
                    vertical || justImage ? 'space-y-2' : 'flex space-s-2 '
                )}
            >
                <div
                    className={classNames(
                        'news-banner group relative rounded overflow-hidden',
                        imageClassName ? imageClassName : vertical || justImage ? 'w-full' : 'w-60'
                    )}
                >
                    <img
                        src={'./img/avatar.jpg'}
                        className="object-cover w-full h-full transition-transform duration-200 transform news-banner group-hover:scale-110"
                    />
                    <Icon
                        name={icon || 'eye'}
                        style={{ '--tw-gradient-from': color || null }}
                        className="absolute top-0 bottom-0 flex items-center justify-center text-lg text-white transition-opacity duration-200 opacity-0 start-0 end-0 bg-gradient-to-t from-primary group-hover:opacity-100"
                    />
                </div>
                {!justImage ? (
                    <div className="news-content">
                        <h5 className="mb-1">{title}</h5>
                        {description ? (
                            <p className="mb-2 text-xs text-justify text-secondary">
                                {description}
                            </p>
                        ) : null}
                        <div className="flex flex-wrap items-center justify-between text-xs">
                            {time ? (
                                <span className="flex items-center text-secondary ">
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
                ) : null}
            </article>
        </Link>
    );
}

export default Item;
