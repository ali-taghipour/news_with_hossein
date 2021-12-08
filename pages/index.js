import React from 'react';
import Layout from '../components/Layout';
import { NewsTabs, NewsItem, NewsBox, NewsBanner, Slider } from '../components/Theme/News';
import Link from '../components/Theme/Link';

import { useRouter } from 'next/router';
import traslate from '../utils/traslate';
import fakeImage from '../utils/fakeImage';

function index(props) {
    const { locale } = useRouter();
    const t = traslate(locale);

    //FAKE DATA
    const tabs2 = [
        {
            title: t.important_news,
            content: () => (
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        description={t.fake.description}
                        time="1400/04/24"
                        icon="pharmacy"
                        className="row-span-3"
                        imageClassName="w-full max-h-72"
                        vertical
                        more
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        description={t.fake.description}
                        time="1400/04/24"
                        icon="pharmacy"
                        imageClassName="w-96"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        description={t.fake.description}
                        time="1400/04/24"
                        icon="pharmacy"
                        imageClassName="w-96"
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        description={t.fake.description}
                        time="1400/04/24"
                        icon="pharmacy"
                        imageClassName="w-96"
                    />
                </div>
            ),
        },
        { title: t.economy },
        { title: t.politics },
        { title: t.sport },
    ];

    const items = [
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
        <NewsBanner
            className="block w-full"
            wrapperClassName="h-full"
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            label={t.newest}
            color="#B91C1C"
            justLabelColored
        />,
    ];

    const itemss = [
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
    ];

    const itemsss = [
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            description={t.fake.description}
            imageClassName="h-72"
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            description={t.fake.description}
            imageClassName="h-72"
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            description={t.fake.description}
            imageClassName="h-72"
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            description={t.fake.description}
            imageClassName="h-72"
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
        <NewsItem
            image={fakeImage(550, 365, 5)}
            title={t.fake.title}
            description={t.fake.description}
            imageClassName="h-72"
            time="1400/04/24"
            icon="play"
            vertical
            more
        />,
    ];

    const data = [
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
        { src: fakeImage(550, 365, 5) },
    ];

    return (
        <Layout className="flex flex-wrap h-[max-content]">
            <div className="w-1/2 p-2">
                <Slider.WithThumbnail items={data} className="h-full" />
            </div>
            <div className="w-1/2 p-2">
                <NewsBanner
                    className="block w-full mb-4"
                    wrapperClassName="max-h-52"
                    image={fakeImage(550, 365, 5)}
                    title={t.fake.title}
                    time="1400/04/24"
                    label={t.newest}
                    color="#B91C1C"
                    justLabelColored
                />
                <div className="flex flex-wrap -m-2">
                    <NewsBanner
                        className="block w-1/2 p-2"
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        label={t.newest}
                        justLabelColored
                    />
                    <NewsBanner
                        className="block w-1/2 p-2"
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        label={t.newest}
                        color="#B91C1C"
                        justLabelColored
                    />
                </div>
            </div>
            <NewsTabs data={tabs2} className="w-full" wrapperClassName="w-full p-2" />
            <div className="flex p-2 -m-2 ">
                <div className="flex-1 p-2 -m-2">
                    <Slider.Items className="py-2" items={items} col={3} row={2} arrows />
                    <NewsBox
                        wrapperClassName="p-2"
                        className="space-y-2"
                        title={t.hottest}
                        color="#B91C1C"
                        full
                    >
                        <NewsItem
                            image={fakeImage(550, 365, 5)}
                            title={t.fake.title}
                            description={t.fake.description}
                            time="1400/04/5555"
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
                    <Slider.Items className="py-2" items={itemsss} arrows dots />
                    <div className="flex p-2 -m-2">
                        <NewsBox
                            wrapperClassName="w-1/2 p-2"
                            title={t.hottest}
                            full
                            color="#B91C1C"
                        >
                            <NewsItem
                                image={fakeImage(550, 365, 5)}
                                title={t.fake.title}
                                description={t.fake.description}
                                time="1400/04/24"
                                color="#B91C1C"
                                vertical
                            />
                        </NewsBox>
                        <NewsBox
                            wrapperClassName="w-1/2 p-2"
                            title={t.hottest}
                            full
                            color="#B91C1C"
                        >
                            <NewsItem
                                image={fakeImage(550, 365, 5)}
                                title={t.fake.title}
                                description={t.fake.description}
                                time="1400/54/664"
                                color="#B91C1C"
                                vertical
                            />
                        </NewsBox>
                    </div>
                    <NewsBox title={t.most_viewed_videos} color="#B91C1C" full>
                        <Slider.Items items={itemss} col={3} arrows />
                    </NewsBox>
                </div>
                <NewsBox
                    wrapperClassName="w-64 p-2"
                    className="space-y-2"
                    title={t.hottest}
                    full
                    color="#B91C1C"
                >
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        description={t.fake.description}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                    <NewsItem
                        image={fakeImage(550, 365, 5)}
                        title={t.fake.title}
                        time="1400/04/24"
                        color="#B91C1C"
                        vertical
                    />
                </NewsBox>
            </div>
        </Layout>
    );
}

export default index;
