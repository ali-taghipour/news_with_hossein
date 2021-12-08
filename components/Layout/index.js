import React from 'react';
import Header from './Header';
import Footer from './Footer';
import classNames from '../../utils/classNames';

import { TokenContextProvider } from "../../context/AuthContext/AuthContext";

import { NewsTabs, NewsItem, NewsBox } from '../Theme/News';
import Link from '../Theme/Link';
import { useRouter } from 'next/router';
import traslate from '../../utils/traslate';
import fakeImage from '../../utils/fakeImage';


function index({ children, className }) {
    const { locale } = useRouter();
    const t = traslate(locale);

    //FAKE DATA
    const tabs = [
        {
            title: t.newest,
            content: () => (
                <>
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        icon="pharmacy"
                    />
                </>
            ),
        },
        { title: t.most_visited },
    ];

    return (
        <TokenContextProvider>
            <Header />
            <div className="px-4">
                <div className="container flex flex-1 py-4 mx-auto">
                    <main className={classNames('flex-1 !ps-0', className)}>{children}</main>
                    <aside className="w-72">
                        <NewsTabs data={tabs} className="space-y-2" wrapperClassName="p-2 pe-0" />
                        <NewsBox
                            wrapperClassName="p-2"
                            title={t.follow_us}
                            color="#B91C1C"
                            full
                        ></NewsBox>
                        <NewsBox
                            wrapperClassName="p-2"
                            className="grid grid-cols-2 gap-2"
                            title={t.visual_news}
                            color="#B91C1C"
                            full
                        >
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                        </NewsBox>
                        <NewsBox
                            wrapperClassName="p-2"
                            title={t.most_viewed_contents}
                            color="#B91C1C"
                            full
                        >
                            <ul className="-my-2 list-disc ms-3">
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                            </ul>
                        </NewsBox>
                        <NewsBox
                            wrapperClassName="p-2"
                            title={t.international_news}
                            color="#B91C1C"
                            full
                        >
                            <ul className="-my-2 list-disc ms-3">
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                                <li className="transition duration-200 border-b border-dashed border-line hover:border-primary">
                                    <Link href="/" className="py-2">
                                        {t.fake.title}
                                    </Link>
                                </li>
                            </ul>
                        </NewsBox>
                        <NewsBox
                            wrapperClassName="p-2"
                            className="grid grid-cols-2 gap-2"
                            title={t.visual_news}
                            color="#B91C1C"
                            full
                        >
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                            <NewsItem image={fakeImage(550, 365, 5)} color="#B91C1C" justImage />
                        </NewsBox>
                    </aside>
                </div>
            </div>
            <Footer />
        </TokenContextProvider>
    );
}

export default index;
