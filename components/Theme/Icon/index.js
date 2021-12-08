import React from 'react';
import classNames from '../../../utils/classNames';
import styles from './icon.module.css';
import { useRouter } from 'next/router';
import isRtl from '../../../utils/isRtl';

function Icon({ name, className, style }) {
    const { locale } = useRouter();
    const renderedName = isRtl(locale)
        ? name
        : name.replace('right', 'left') === name
        ? name.replace('left', 'right')
        : name.replace('right', 'left');

    return (
        <span
            style={style}
            className={classNames(
                styles.base,
                styles[renderedName],
                isRtl(locale) ? className : className?.replace('-rotate-90', 'rotate-90')
            )}
        />
    );
}

export default Icon;
