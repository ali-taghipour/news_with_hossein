import React from 'react';
import NextLink from 'next/link';
import classNames from '../../utils/classNames';

function Link({ children, href, className }) {
    return (
        <NextLink href={href}>
            <a
                className={classNames(
                    'inline-block relative cursor-pointer hover:text-primary transition ease-in-out duration-200',
                    className
                )}
            >
                {children}
            </a>
        </NextLink>
    );
}

export default Link;
