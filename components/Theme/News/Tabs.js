import React from 'react';
import classNames from '../../../utils/classNames';

import dynamic from 'next/dynamic';
const ScrollArea = dynamic(() => import('react-scrollbar'), {
    ssr: false,
});

function Tabs({ data, className, wrapperClassName, withScroll }) {
    const [active, setActive] = React.useState(0);

    return (
        <div className={classNames('tabs-of-news', wrapperClassName)}>
            <div className="flex space-s-1  border-b-2 border-dark mb-2">
                {data.map((tab, idx) => (
                    <button
                        className={classNames(
                            'py-1 px-2 rounded-t h-[min-content] transition duration-200 font-bold uppercase',
                            idx === active
                                ? 'bg-dark text-white'
                                : 'bg-line text-secondary hover:text-primary hover:bg-opacity-70'
                        )}
                        onClick={() => setActive(idx)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {withScroll ? (
                <ScrollArea
                    speed={0.5}
                    className={classNames('pb-2', className)}
                    contentClassName="space-y-2"
                    horizontal={false}
                    smoothScrolling
                >
                    {data[active].content ? data[active].content(active) : null}
                </ScrollArea>
            ) : (
                <div className={classNames('pb-2', className)}>
                    {data[active].content ? data[active].content(active) : null}
                </div>
            )}
        </div>
    );
}

export default Tabs;
