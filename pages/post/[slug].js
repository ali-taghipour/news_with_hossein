import React from 'react';
import Layout from '../../components/Layout';
import { NewsTabs, NewsItem, NewsBox, NewsBanner, Slider } from '../../components/Theme/News';
import Link from '../../components/Theme/Link';
import Icon from '../../components/Theme/Icon';
import colorInvert from '../../utils/colorInvert';
import classNames from '../../utils/classNames';
import { useRouter } from 'next/router';
import traslate from '../../utils/traslate';
import Avatar from '../../components/Theme/Avatar';
import Button from '../../components/Theme/Button';
import Share from '../../components/Theme/Share';
import { Form, Formik } from 'formik';
import { Field } from '../../components/Theme/Form';
import fakeImage from '../../utils/fakeImage';

function post(props) {
    const { locale } = useRouter();
    const t = traslate(locale);

    // FAKE DATA
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

    return (
        <Layout>
            <article className="flex flex-wrap h-[max-content] p-2 -m-2">
                <div className="group relative rounded overflow-hidden w-full m-2 max-h-[26rem]">
                    <img
                        src={t.fake.image}
                        className="news-banner w-full h-full object-cover transition-transform duration-200 transform group-hover:scale-110"
                    />
                    <span className="absolute top-0 bottom-0 start-0 end-0 flex justify-center items-center bg-gradient-to-t from-dark text-white text-lg transition-opacity duration-200" />
                    <div className="absolute top-4 end-4 flex space-s-2">
                        {t.fake.categories.map((category) => (
                            <span
                                style={{
                                    backgroundColor: category.color || null,
                                    color: category.color
                                        ? colorInvert(category.color, true)
                                        : null,
                                }}
                                className="bg-primary text-white px-1 py-0.5 text-xs rounded-sm w-max capitalize"
                            >
                                {category.name}
                            </span>
                        ))}
                    </div>
                    <div className="group absolute bottom-0 start-0 end-0 text-white p-4">
                        <h4 className="font-bold mb-4 text-3xl">{t.fake.title}</h4>
                        <div className="flex items-center overflow-hidden space-s-4">
                            <span className="flex items-center">
                                <Icon name="clock" className="me-1" />
                                {t.fake.time}
                            </span>

                            <span className="flex items-center capitalize">
                                <Icon name="user" className="me-1" />
                                {t.fake.author}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className="py-2 px-4 bg-white rounded-md leading-7 text-base flex-1 space-y-3 text-justify first-letter"
                    dangerouslySetInnerHTML={{
                        __html: t.fake.content,
                    }}
                />
                <div className="w-56 p-2 relative">
                    <div className="sticky top-2 space-y-2 ">
                        <h5 className="relative flex font-bold items-center after:block after:bg-line after:flex-1 after:h-[1px] after:ms-2 uppercase">
                            {t.share}
                        </h5>
                        <Share label={t.instagram} type="instagram" color="#831843" />
                        <Share label={t.instagram} type="instagram" color="#3B82F6" />
                        <Share label={t.instagram} type="instagram" color="#059669" />
                        <Share label={t.instagram} type="instagram" color="#DC2626" />
                    </div>
                </div>
                <NewsBox
                    wrapperClassName="w-full p-2"
                    title={t.most_viewed_contents}
                    color="#B91C1C"
                    full
                >
                    <Slider.Items items={itemss} col={4} arrows />
                </NewsBox>
                <NewsBox
                    wrapperClassName="w-full p-2"
                    className="space-y-4 py-4"
                    title={t.users_comment}
                    full
                >
                    <article className="comment">
                        <div className="flex items-center space-s-4">
                            <Avatar fullName={t.fake.author} className="w-12 h-12" />
                            <div className="flex flex-col">
                                <h6 className="mb-1">{t.submit_comment}</h6>
                                <span className="text-xs text-secondary">
                                    {t.discuss_this_with_your_friends_by_posting_your_opinion}
                                </span>
                            </div>
                        </div>
                        <Formik initialValues={{ message: '' }}>
                            {({ values, setFieldValue, isSubmitting }) => (
                                <Form className="w-full border-b border-line pb-2">
                                    <Field
                                        name="message"
                                        placeholder={t.enter_the_text_of_your_comment}
                                        className="bg-body p-2 rounded-md my-2"
                                        borderless
                                        textarea
                                    />
                                    <Button className="!block ms-auto">{t.submit_comment}</Button>
                                </Form>
                            )}
                        </Formik>
                    </article>
                    <article className="comment">
                        <div className="flex items-center space-s-4">
                            <Avatar fullName={t.fake.author} className="w-12 h-12" />
                            <div className="flex flex-col">
                                <h6 className="mb-1">{t.fake.author}</h6>
                                <span className="text-xs text-secondary">{t.fake.time}</span>
                            </div>
                        </div>
                        <div className="bg-body p-2 rounded-md mt-2">
                            <p className="leading-6">{t.fake.description}</p>
                        </div>
                    </article>
                    <article className="comment">
                        <div className="flex items-center space-s-4">
                            <Avatar fullName={t.fake.author} className="w-12 h-12" />
                            <div className="flex flex-col">
                                <h6 className="mb-1">{t.fake.author}</h6>
                                <span className="text-xs text-secondary">{t.fake.time}</span>
                            </div>
                        </div>
                        <div className="bg-body p-2 rounded-md mt-2">
                            <p className="leading-6">{t.fake.description}</p>
                        </div>
                    </article>
                    <article className="comment">
                        <div className="flex items-center space-s-4">
                            <Avatar fullName={t.fake.author} className="w-12 h-12" />
                            <div className="flex flex-col">
                                <h6 className="mb-1">{t.fake.author}</h6>
                                <span className="text-xs text-secondary">{t.fake.time}</span>
                            </div>
                        </div>
                        <div className="bg-body p-2 rounded-md mt-2">
                            <p className="leading-6">{t.fake.description}</p>
                        </div>
                    </article>
                </NewsBox>
            </article>
        </Layout>
    );
}

export default post;
