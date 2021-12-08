import React from 'react';
import Link from '../../Theme/Link';
import Image from 'next/image';
import { Form, Formik } from 'formik';
import { Field } from '../../Theme/Form';
import Icon from '../../Theme/Icon';
import Button from '../../Theme/Button';
import { useRouter } from 'next/router';
import traslate from '../../../utils/traslate';

function index(props) {
    const { locale } = useRouter();
    const t = traslate(locale);

    return (
        <footer className="bg-body shadow-lg p-4 pb-2 space-y-2">
            <div className="container mx-auto flex space-s-4 ">
                <div className="w-3/6 flex space-s-4  me-auto">
                    <ul className="flex-1">
                        <h6 className="font-bold mb-1 uppercase">{t.products}</h6>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.magazines}
                            </Link>
                        </li>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.article_order}
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex-1">
                        <h6 className="font-bold mb-1 uppercase">{t.support}</h6>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.support_chat}
                            </Link>
                        </li>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.send_a_ticket}
                            </Link>
                        </li>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.contact_us}
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex-1">
                        <h6 className="font-bold mb-1 uppercase">{t.about_us}</h6>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.company}
                            </Link>
                        </li>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.jobs}
                            </Link>
                        </li>
                        <li className="text-secondary">
                            <Link className="capitalize" href="/">
                                {t.terms_and_conditions}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-2/6">
                    <h6 className="font-bold mb-1 uppercase">{t.register_email_subscription}</h6>
                    <span className="text-xs">
                        {t.enter_your_email_in_the_field_below_to_be_informed_of_the_latest_news}
                    </span>
                    <Formik initialValues={{ email: '' }}>
                        {({ values, setFieldValue, isSubmitting }) => (
                            <Form className="mt-2">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder={t.type_your_email}
                                    className="pe-8"
                                >
                                    <Icon name="envelope" className="absolute top-2.5 end-2.5" />
                                </Field>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center space-s-4  text-secondary border-b border-line py-2">
                <span className="copy-right w-1/3">{t.copyright}</span>
                <div className="social-medias space-s-4 ">
                    <Button
                        circle
                        link="/"
                        type="secondary"
                        icon="instagram"
                        className="min-h-none h-7 w-7"
                    />
                    <Button
                        circle
                        link="/"
                        type="secondary"
                        icon="instagram"
                        className="min-h-none h-7 w-7"
                    />
                    <Button
                        circle
                        link="/"
                        type="secondary"
                        icon="instagram"
                        className="min-h-none h-7 w-7"
                    />
                </div>
                <span className="address w-1/3 text-end">{t.address}</span>
            </div>
            <div className="container mx-auto flex justify-between items-center space-s-4  text-secondary">
                <div className="payments">
                    <Image
                        width={94}
                        height={25}
                        src="/img/paypal.png"
                        alt="paypal"
                        className="filter grayscale transition-all duration-200 hover:grayscale-0"
                    />
                </div>
                <nav className="footer-nav-links space-s-4">
                    <Link className="capitalize" href="/">
                        {t.advertising_system}
                    </Link>
                    <Link className="capitalize" href="/">
                        {t.transportation_system}
                    </Link>
                    <Link className="capitalize" href="/">
                        {t.multi_market_place}
                    </Link>
                    <Link className="capitalize" href="/">
                        {t.club}
                    </Link>
                </nav>
                <Link href="/">
                    <Image
                        width={96}
                        height={25}
                        src="/img/aboziar.png"
                        alt="aboziar"
                        className="filter grayscale transition-all duration-200 hover:grayscale-0"
                    />
                </Link>
            </div>
        </footer>
    );
}

export default index;
