import { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react';
import Layout from '../../components/Layout';
import Icon from '../../components/Theme/Icon';
import Link from '../../components/Theme/Link';
import classNames from '../../utils/classNames';
import fakeImage from '../../utils/fakeImage';
import traslate from '../../utils/traslate';
import colorInvert from '../../utils/colorInvert';
import Button from '../../components/Theme/Button';
import { NewsBox } from '../../components/Theme/News';
import { Form, Formik } from 'formik';
import { Field } from '../../components/Theme/Form';
import Avatar from '../../components/Theme/Avatar';
import { getMagazine } from "../../api/api_magazine";

import {Loading} from "../../components/Common/Loading/Loading";


function Magazine(props) {
    const [image] = useState(fakeImage(400, 400, 10, true));
    const { locale,query } = useRouter();
    const t = traslate(locale);

    const [magazine, setMagazine] = useState([]);
    const [apiStatus, setApiStatus] = useState("isLoading");

    useEffect(() => {
        const { id } = query;
        if(id){
            getMagazine(id,(isOk, data) => {
                if (!isOk) return setApiStatus("isError");
                else {
                    setApiStatus("")
                    setMagazine(data)
                };
            });
        }
    }, [query.id])


    if(apiStatus === "isLoading"){
        return<Layout className="p-2">
            <Loading />
        </Layout> 
    }

    if(apiStatus === "isError"){
        return <Layout className="p-2">
            <img src={"img/error500.gif"} alt="error 500" />
      </Layout>
    }

    const data = magazine.data ? magazine.data : undefined;

    if(!data){
        return (
            <Layout className="p-2 space-y-4">
                <div
                    style={{ backgroundImage: `url('${image}')` }}
                    className="overflow-hidden bg-center bg-cover rounded h-96"
                >
                    <div className="flex w-full h-full p-10 text-white bg-opacity-50 backdrop-filter backdrop-blur-md bg-dark">
                        <img src={image} className="w-auto h-full rounded-sm shadow-md" />
                        <div className="flex flex-col ms-4">
                            <span className="flex-1 capitalize">
                                <Icon name="angle-small-left" className="me-1" />
                                {t.fake.part}
                            </span>
                            <h1 className="pb-2 mb-4 text-xl font-bold capitalize border-b border-line">
                                {t.fake.title}
                            </h1>
                            <p className="mb-4">{t.fake.description}</p>
                            <div className="space-s-2">
                                <span className="bg-primary text-white px-1 py-0.5 text-xs rounded-sm w-max">
                                    {t.politics}
                                </span>
                                <span className="bg-primary text-white px-1 py-0.5 text-xs rounded-sm w-max">
                                    {t.sport}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div
                        className="flex-1 p-2 space-y-3 text-base leading-7 text-justify rounded-md first-letter"
                        dangerouslySetInnerHTML={{
                            __html: t.fake.content.substr(0, 835),
                        }}
                    />
                    <div className="relative w-64 p-2">
                        <div className="sticky space-y-2 top-2 ">
                            <h5 className="relative flex font-bold items-center after:block after:bg-line after:flex-1 after:h-[1px] after:ms-2 uppercase">
                                {t.get_now}
                            </h5>
                            <div className="flex space-s-1">
                                <del className="text-4xl font-bold text-secondary ">{t.fake.price}</del>
                                <span className="text-4xl font-bold text-secondary "> - </span>
                                <h3 className="text-4xl font-bold text-primary">{t.fake.discount}</h3>
                                <span>{t.currency}</span>
                            </div>
                            <div className="flex items-center">
                                <Icon name="download" className="me-2" />
                                {t.download_after_pay}
                            </div>
                            <Button className="w-full capitalize">{t.add_to_cart}</Button>
                        </div>
                    </div>
                </div>
                <NewsBox className="grid grid-cols-3 gap-4 py-4" title={t.other_parts} full>
                    <Link href="/" className="!block rounded shadow-md overflow-hidden group">
                        <img
                            src={fakeImage(400, 400, 10, true)}
                            className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                        />
                    </Link>
                    <Link href="/" className="!block rounded shadow-md overflow-hidden group">
                        <img
                            src={fakeImage(400, 400, 10, true)}
                            className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                        />
                    </Link>
                    <Link href="/" className="!block rounded shadow-md overflow-hidden group">
                        <img
                            src={fakeImage(400, 400, 10, true)}
                            className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                        />
                    </Link>
                    <Link href="/" className="!block rounded shadow-md overflow-hidden group">
                        <img
                            src={fakeImage(400, 400, 10, true)}
                            className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                        />
                    </Link>
                    <Link href="/" className="!block rounded shadow-md overflow-hidden group">
                        <img
                            src={fakeImage(400, 400, 10, true)}
                            className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                        />
                    </Link>
                    <Link href="/" className="!block rounded shadow-md overflow-hidden group">
                        <img
                            src={fakeImage(400, 400, 10, true)}
                            className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                        />
                    </Link>
                </NewsBox>
                <NewsBox className="py-4 space-y-4" title={t.users_comment} full>
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
                        <ReplyComment t={t} />
                        <div className="p-2 mt-2 rounded-md bg-body">
                            <div className="mb-2 text-secondary">Reply to {t.fake.author} :</div>
                            <article class="mt-2 container mx-auto px-4">
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
                                <div className="container p-2 flex gap-2 rounded-md bg-body">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            </span>
                           <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                </svg>
                            </span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            </span>
                        </div>
                            </article>
                            <article class="mt-2 container mx-auto px-4">
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
            </Layout>
        );
    }else{
        return <Layout>
            ! nothing to share
        </Layout>
    }
    
}


const ReplyComment = ({t}) => {
    const [openReplyBox,setOpenReplayBox] = useState(false);

    return(
        <>
        <div className="container p-2 flex gap-2 rounded-md bg-body">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            </span>
                           <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                                </svg>
                            </span>
                            <span onClick={() => setOpenReplayBox(!openReplyBox)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            </span>
                        </div>
                        {openReplyBox ? (
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
                        ) : undefined}
        </>
    )
}

export default Magazine;
