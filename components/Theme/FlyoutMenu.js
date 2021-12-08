import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import classNames from '../../utils/classNames';
import Icon from './Icon';

function FlyoutMenu({ children, title, timeoutDuration = 100 }) {
    let timeout;

    const buttonRef = React.useRef(null);
    const [openState, setOpenState] = React.useState(false);

    const toggleMenu = (open) => {
        setOpenState((openState) => !openState);
        buttonRef?.current?.click();
    };

    const onHover = (open, action) => {
        if (
            (!open && !openState && action === 'onMouseEnter') ||
            (open && openState && action === 'onMouseLeave')
        ) {
            clearTimeout(timeout);
            timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
        }
    };

    const handleClick = (open) => {
        setOpenState(!open);
        clearTimeout(timeout);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            event.stopPropagation();
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
    return (
        <Popover as={React.Fragment}>
            {({ open }) => (
                <div
                    onMouseEnter={() => onHover(open, 'onMouseEnter')}
                    onMouseLeave={() => onHover(open, 'onMouseLeave')}
                    className="FlyoutMenu flex flex-col"
                >
                    <Popover.Button
                        ref={buttonRef}
                        onClick={() => handleClick(open)}
                        className={classNames(
                            'flex items-center transition ease-in-out duration-200 !outline-none z-10 capitalize',
                            open ? 'text-primary' : ''
                        )}
                    >
                        {title}
                        <Icon
                            name="angle-small-left"
                            className={classNames(
                                'ms-1 transition-transform duration-200 transform',
                                open ? '-rotate-90' : ''
                            )}
                        />
                    </Popover.Button>
                    <Transition
                        as={React.Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute container max-w-screen-sm mx-auto start-0 end-0">
                            <div className="relative bg-white overflow-hidden rounded shadow-lg mt-8 p-2 space-y-2">
                                {children}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </div>
            )}
        </Popover>
    );
}

export default FlyoutMenu;
