import React from 'react';
import Icon from './Icon';
import classNames from '../../utils/classNames';
import fakeImage from '../../utils/fakeImage';
const AVATAR_COLORS = ['#B2BEC3', '#273C75', '#FFD32A', '#DFBCF9', '#Eb2F06', '#75E08F'];

function Avatar({ type = 128, fullName, loading, className }) {
    const [backgroundColor] = React.useState(
        AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
    );

    const url = Math.random() < 0.5 ? fakeImage(128, 128, 10, true, true) : false;

    return (
        <div
            key={url}
            className={classNames(
                'relative flex justify-center items-center rounded-full text-white font-bold transition',
                backgroundColor.length > 7 ? 'delay-200 duration-200' : '',
                className
            )}
            style={{ backgroundColor }}
        >
            {loading ? (
                <Icon name="spinner" className="animate-spin" />
            ) : (
                <span>{fullName?.toString().substring(0, 1) || 'م'}</span>
            )}
            {url ? (
                <div className="absolute top-[-0.5px] left-[-0.5px] right-[-0.5px] bottom-[-0.5px]">
                    <img className="rounded-full w-full h-full" key={url} src={url} />
                </div>
            ) : null}
        </div>
    );
}

export default React.memo(Avatar);
