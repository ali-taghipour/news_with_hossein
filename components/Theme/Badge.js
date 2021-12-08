import React from 'react';
import { Transition } from '@headlessui/react';
import classNames from '../../utils/classNames';

function Badge({ amount, className }) {
    const [lastAmount, setLastAmount] = React.useState(0);
    const [show, setShow] = React.useState(true);

    React.useEffect(() => {
        setShow(false);
        setTimeout(() => {
            setLastAmount(amount);
            setShow(true);
        }, 400);
    }, [amount]);

    return (
        <Transition
            show={amount ? true : false}
            as="span"
            className={classNames(
                'block absolute h-4 bg-primary px-1.5 rounded-full overflow-hidden',
                className
            )}
            enter="transition-all transform duration-400"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="transition-all transform duration-400"
            leaveFrom="scale-100"
            leaveTo="scale-0"
        >
            <Transition
                show={show}
                as="span"
                className="block text-xs text-center text-white absolute top-0.5 start-0 end-0 bottom-0"
                enter="transition-all transform duration-400"
                enterFrom="translate-y-4"
                enterTo="translate-y-0"
                leave="transition-all transform duration-400"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-4"
            >
                {lastAmount || ''}
            </Transition>
            <span className="opacity-0">{amount}</span>
        </Transition>
    );
}

export default Badge;
