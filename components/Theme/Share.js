import React from 'react';
import Icon from './Icon';
import Link from './Link';

const Share = ({ type, color, label }) => (
    <Link
        href="/"
        className="w-full border border-line rounded p-2 !flex items-center hover:border-primary capitalize"
    >
        <Icon
            style={{ backgroundColor: color || null }}
            className="inline-block rounded-full bg-primary text-white p-2 me-2"
            name={type}
        />
        {label}
    </Link>
);

export default Share;
