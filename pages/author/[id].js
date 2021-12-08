import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import Avatar from '../../components/Theme/Avatar';
import Icon from '../../components/Theme/Icon';
import { NewsBox, NewsItem } from '../../components/Theme/News';
import Share from '../../components/Theme/Share';
import fakeImage from '../../utils/fakeImage';
import traslate from '../../utils/traslate';

function Author(props) {
    const { locale } = useRouter();
    const t = traslate(locale);

    return (
        <Layout>
            <section className="-m-2 p-2 flex flex-wrap">
                <div className="p-2 flex-1">
                    <NewsBox
                        className="flex flex-wrap h-full items-center space-s-4 py-4"
                        title={t.biography}
                    >
                        <Avatar fullName={t.fake.author} className="w-24 h-24 text-base" />
                        <div className="space-y-1 text-base">
                            <h1>{t.fake.author}</h1>
                            <h3>{t.fake.username}</h3>
                        </div>
                        <div className="w-full !mx-0 pt-4">
                            <p>{t.fake.description}</p>
                        </div>
                    </NewsBox>
                </div>
                <div className="w-56 p-2 space-y-2 ">
                    <h5 className="relative flex font-bold items-center after:block after:bg-line after:flex-1 after:h-[1px] after:ms-2 uppercase">
                        {t.social}
                    </h5>
                    <Share label={t.instagram} type="instagram" color="#831843" />
                    <Share label={t.instagram} type="instagram" color="#3B82F6" />
                    <Share label={t.instagram} type="instagram" color="#059669" />
                    <Share label={t.instagram} type="instagram" color="#DC2626" />
                </div>
                <div className="w-full p-2">
                    <NewsBox
                        extra={<NewsList />}
                        className="space-y-2"
                        title={t.author_news}
                        color="#B91C1C"
                        full
                    >
                        <NewsItem
                            image={fakeImage(550, 365, 5)}
                            title={t.fake.title}
                            description={t.fake.description}
                            time="1400/04/24"
                            icon="pharmacy"
                            className="row-span-3"
                            more
                        />
                        <NewsItem
                            image={fakeImage(550, 365, 5)}
                            title={t.fake.title}
                            description={t.fake.description}
                            time="1400/04/24"
                            icon="pharmacy"
                            className="row-span-3"
                            more
                        />
                        <NewsItem
                            image={fakeImage(550, 365, 5)}
                            title={t.fake.title}
                            description={t.fake.description}
                            time="1400/04/24"
                            icon="pharmacy"
                            className="row-span-3"
                            more
                        />
                        <NewsItem
                            image={fakeImage(550, 365, 5)}
                            title={t.fake.title}
                            description={t.fake.description}
                            time="1400/04/24"
                            icon="pharmacy"
                            className="row-span-3"
                            more
                        />
                    </NewsBox>
                </div>
            </section>
        </Layout>
    );
}
const NewsList = () => {
    const { locale } = useRouter();
    const t = traslate(locale);

    const [selected, setSelected] = React.useState(t.select_news[0]);
    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <Listbox.Button className="relative flex items-center w-full py-1 px-2 mb-1 text-left bg-white rounded border border-line cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
                    <Icon name="angle-small-down" className="ms-2" />
                </Listbox.Button>
                <Transition
                    as={React.Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute start-0 w-38 py-1 mt-1 overflow-auto text-base bg-white rounded shadow-md max-h-60 border border-line focus:outline-none sm:text-sm z-10">
                        {t.select_news.map((mode, modeIdx) => (
                            <Listbox.Option
                                key={modeIdx}
                                className={({ active }) =>
                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 px-4 hover:bg-primary hover:bg-opacity-10`
                                }
                                value={mode}
                            >
                                {({ selected, active }) => (
                                    <>
                                        <span
                                            className={`${
                                                selected ? 'font-medium' : 'font-normal'
                                            } block truncate`}
                                        >
                                            {mode.name}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};
export default Author;
