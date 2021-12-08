import React, { useState } from 'react';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { NewsTabs, NewsItem, NewsBox } from '../components/Theme/News';
import Avatar from '../components/Theme/Avatar';
import { Form, Formik } from 'formik';
import { Field } from '../components/Theme/Form';
import { useRouter } from 'next/router';
import traslate from '../utils/traslate';
import Button from '../components/Theme/Button';
import fakeImage from '../utils/fakeImage';
import Icon from '../components/Theme/Icon';


function NewsDetails(props) {
    const [image] = useState(fakeImage(900, 500, 5, true));
    const { locale } = useRouter();
    const t = traslate(locale);
    return (
        <>
            <Header />
            <div style={{ backgroundImage: `url('./img/w.jpg')` }}
                className="w-full overflow-hidden bg-center bg-cover h-96 ">

            </div>
            <div className="container flex flex-1 p-2 mx-auto space-y-4" >
                <div className="flex-1">
                    <div>
                        <h1 className="p-4 mb-4 text-xl font-bold capitalize border-b border-line">
                            {t.fake.title}
                        </h1>
                        <div className="p-4 mb-4 text-xl capitalize">
                            <p className="mb-4">{t.fake.description}</p>
                        </div>
                        <div className="p-4 mb-4 border-b border-line">
                            <h1 className="mb-4 text-xl font-bold capitalize ">
                                شروع متن اصلی خبر
                            </h1>
                            <p className="mb-4 text-base leading-8 text-justify rounded-md first-letter">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            <img
                                src={'./img/unnamed.jpg'}
                                className="w-full mb-4 rounded h-96"
                            />
                            <p className="mb-4 text-base leading-8 text-justify rounded-md first-letter">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از اوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                        <div className="flex justify-end w-full ">
                            <h6>
                                <span className="pl-2">تاریخ :</span>
                                1400/04/24
                            </h6>
                            <h6 className="px-4">
                            <span className="pl-2">نویسنده :</span>

                                علی رضا پهلوان </h6>
                            <h6 >
                            <span className="pl-2">پسندیده :</span>

                                <Icon name="like" className="me-2" />

                                365
                            </h6>
                        </div>
                    </div>
                    <NewsBox className="py-4 space-y-4" title='دید گاه ' full>
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
                                    <Form className="w-full pb-2 border-b border-line">
                                        <Field
                                            name="message"
                                            placeholder={t.enter_the_text_of_your_comment}
                                            className="p-2 my-2 rounded-md bg-body"
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
                            <div className="p-2 mt-2 rounded-md bg-body">
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
                            <div className="p-2 mt-2 rounded-md bg-body">
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
                            <div className="p-2 mt-2 rounded-md bg-body">
                                <p className="leading-6">{t.fake.description}</p>
                            </div>
                        </article>
                    </NewsBox>
                </div>
                <aside className="w-72">

                </aside>

            </div>
            <Footer />
        </>
    );
}
export default NewsDetails;