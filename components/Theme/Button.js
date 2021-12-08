import React from 'react';
import Link from 'next/link';
import classNames from '../../utils/classNames';
import Icon from './Icon';

function Button({
    children,
    type,
    bordered,
    circle,
    onClick,
    htmlType,
    link,
    loading,
    className,
    autoLoading,
    roundless,
    icon,
    end,
}) {
    const [currentLoading, setCurrentLoading] = React.useState(false);

    const roundedClass = React.useMemo(
        () => (circle ? 'rounded-full' : roundless ? 'rounded-sm' : 'rounded'),
        [circle, roundless]
    );

    const defaultClasses = React.useMemo(
        () =>
            'px-2 min-h-8 inline-flex items-center justify-center transition ease-in-out duration-200',
        []
    );

    const typeClasses = React.useMemo(() => {
        switch (type) {
            case 'secondary':
                return `bg-line hover:bg-opacity-80 text-content`;
            case 'ghost':
                return `bg-white hover:bg-opacity-80 text-content`;
            default:
                return `bg-primary hover:bg-opacity-80 text-white`;
        }
    }, [type]);

    const borderedClasses = React.useMemo(() => {
        switch (type) {
            case 'secondary':
                return `bg-transparent text-content border border-line hover:opacity-70`;
            case 'ghost':
                return `bg-transparent text-content border border-white hover:opacity-70`;
            default:
                return `bg-transparent text-primary border border-primary hover:opacity-70`;
        }
    }, [type]);

    if (link) {
        return (
            <Link href={link}>
                <a
                    className={classNames(
                        bordered ? borderedClasses : typeClasses,
                        roundedClass,
                        defaultClasses,
                        className
                    )}
                >
                    {icon ? (
                        <Icon
                            name={icon}
                            className={classNames(end ? 'order-1 ms-2' : children ? 'me-2' : '')}
                        />
                    ) : null}
                    {children}
                </a>
            </Link>
        );
    } else {
        return (
            <button
                className={classNames(
                    bordered ? borderedClasses : typeClasses,
                    roundedClass,
                    defaultClasses,
                    className
                )}
                onClick={
                    !loading && !currentLoading
                        ? autoLoading
                            ? async () => {
                                  setCurrentLoading(true);
                                  await onClick();
                                  setCurrentLoading(false);
                              }
                            : onClick
                        : null
                }
                type={htmlType || 'button'}
            >
                {loading || currentLoading ? (
                    <Icon
                        name="spinner"
                        className={classNames('animate-spin ', end ? 'order-1 ms-2' : 'me-2')}
                    />
                ) : icon ? (
                    <Icon
                        name={icon}
                        className={classNames(end ? 'order-1 ms-2' : children ? 'me-2' : '')}
                    />
                ) : null}
                {children}
            </button>
        );
    }
}

export default Button;
