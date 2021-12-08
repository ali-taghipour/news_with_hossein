import React from 'react';
import Link from '../../Theme/Link';
import Icon from '../../Theme/Icon';
import FlyoutMenu from '../../Theme/FlyoutMenu';
import Badge from '../../Theme/Badge';
import Image from 'next/image';
import { Field } from '../../Theme/Form';
import { Form, Formik } from 'formik';
import UserState from './UserState';
import { useRouter } from 'next/router';
import traslate from '../../../utils/traslate';

function Header() {
    const { locale } = useRouter();
    const t = traslate(locale);

    const menu = [{title:t.categories,link:"#",subMenu:[{title:t.news,link:"/",subMenu:[]},
        {title:t.magazines,link:"/",subMenu:[]},
        {title:t.categories,link:"/",subMenu:[]},
        {title:t.ads,link:"/",subMenu:[]}]},
        {title:t.news,link:"#",subMenu:[]},
        {title:t.magazines,link:"#",subMenu:[
            {title:t.news,link:"/",subMenu:[
            {title:t.magazines,link:"/",subMenu:[]},
            {title:t.categories,link:"/",subMenu:[]},
            {title:t.ads,link:"/",subMenu:[]}
        ]},
        {title:t.magazines,link:"/",subMenu:[]},
        {title:t.categories,link:"/",subMenu:[]},
        {title:t.ads,link:"/",subMenu:[]},
        {title:t.news,link:"/",subMenu:[]},
        {title:t.magazines,link:"/",subMenu:[]},
        {title:t.categories,link:"/",subMenu:[]},
        {title:t.ads,link:"/",subMenu:[]}
        ]},
        {title:t.categories,link:"#",subMenu:[]},
        {title:t.ads,link:"#",subMenu:[]},
    ]

    return (
        <header className="z-20 px-4 pt-2 space-y-2 shadow-lg bg-body">
            <div className="container flex items-center justify-between mx-auto">
                <Link href="/" className="flex-1 !flex">
                    <Image
                        className=""
                        width={126}
                        height={36}
                        src="/img/aboziar.png"
                        alt="aboziar"
                    />
                </Link>
                <Formik initialValues={{ title: '' }}>
                    {({ values, setFieldValue, isSubmitting }) => (
                        <Form className="w-2/5">
                            <Field
                                name="title"
                                placeholder={t.search}
                                className="pe-8 focus:text-content"
                            >
                                <Icon name="search" className="absolute top-2.5 end-2.5" />
                            </Field>
                        </Form>
                    )}
                </Formik>
                <div className="flex items-center justify-end flex-1 space-s-2 divide-s divide-line">
                    <UserState />
                    <Link href="/basket" className="relative !flex items-center px-4">
                        <Icon name="shopping-cart" className="text-xl" />
                        <Badge amount={5} className="right-2 -bottom-2" />
                    </Link>
                </div>
            </div>
            <nav className="container flex items-center justify-center mx-auto border-t border-line space-s-6 ">
                {menu.map(item => {
                    if(item.subMenu.length > 0){
                        return <MenuWithSubMenu item={item} />
                    }else{
                        return (
                            <Link href={item.link} className="py-2 capitalize underline-link">
                                {item.title}
                            </Link>
                        )
                    }
                })}
            </nav>
        </header>
    );
}


const MenuWithSubMenu = ({item}) => {

    return (
        <FlyoutMenu title={item.title}>
            <div class="grid grid-cols-4 divide-x">
            {item.subMenu.map((subMenu,index) => {
                return(
                    <div className={`capitalize py px-4 ${subMenu.subMenu.length > 0 ? 'row-span-' +  subMenu.subMenu.length : ''}`}>
                        <Link href={subMenu.link} className="capitalize py-2 px-4">
                             {subMenu.title}
                        </Link>
                            
                        {subMenu.subMenu.map((item2) => (
                        <Link href={item2.link} className="capitalize py-1 px-4 text-xs text-secondary">
                            {item2.title}
                        </Link>
                    ))}
                           
                           
                       
                        
                    </div>
                )
            })}
            </div>
        </FlyoutMenu>
    )
}

export default Header;
