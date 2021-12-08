import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from '../../Theme/Link';
import classNames from '../../../utils/classNames';
import Icon from '../../Theme/Icon';
import Button from '../../Theme/Button';
import { useRouter } from 'next/router';
import traslate from '../../../utils/traslate';

function UserState(props) {
    const { locale } = useRouter();
    const t = traslate(locale);
    
    const [user, setUser] = React.useState('47vigen');

    return user ? (
        <>
            <Menu as="div" className="relative inline-block">
                <Menu.Button>
                    {({ open }) => (
                        <div className="flex items-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded text-secondary bg-line me-2">
                                <Icon name="user" />
                            </span>
                            <span className="me-1">{user}</span>
                            <Icon
                                name="angle-small-left"
                                className={classNames(
                                    'transition ease-in-out duration-200',
                                    open ? 'transform -rotate-90' : ''
                                )}
                            />
                        </div>
                    )}
                </Menu.Button>
                <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute w-40 mt-2 origin-top-right bg-white border divide-y rounded shadow-lg start-0 border-line text-content divide-line focus:outline-none">
                        <div className="px-1 py-1 ">
                            <MenuItem
                                href="/profileUser"
                                icon={<Icon name="user" className="text-line" />}
                                label={t.profile}
                            />
                            <MenuItem
                                href="/"
                                icon={<Icon name="heart" className="text-line" />}
                                label={t.favorites}
                            />
                            <MenuItem
                                href="/"
                                icon={<Icon name="document-signed" className="text-line" />}
                                label={t.orders}
                            />
                            <MenuItem
                                href="/"
                                icon={<Icon name="credit-card" className="text-line" />}
                                label={t.wallet}
                            />
                        </div>
                        <div className="px-1 py-1 ">
                            <MenuItem
                                href="/"
                                icon={<Icon name="sign-out" />}
                                label={t.log_out}
                                className="text-primary"
                            />
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    ) : (
        <>
            <Button className="px-4">ثبت نام</Button>
            <Button type="secondary" className="px-4">
                ورود
            </Button>
        </>
    );
}

const MenuItem = ({ href, icon, label, className }) => (
    <Menu.Item>
        <Link
            href={href}
            className={classNames(
                'group !flex rounded items-center justify-between w-full px-2 py-2',
                className
            )}
        >
            {label}
            {icon}
        </Link>
    </Menu.Item>
);

export default UserState;
