import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Icon from '../../components/Theme/Icon';
import Link from '../../components/Theme/Link';
import classNames from '../../utils/classNames';
import fakeImage from '../../utils/fakeImage';
import traslate from '../../utils/traslate';
import colorInvert from '../../utils/colorInvert';
import { listAllMagazines } from "../../api/api_magazine";

import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";

import {Loading} from "../../components/Common/Loading/Loading";

function Magazines(props) {

    const { locale } = useRouter();
    const t = traslate(locale);
    const [listMagazines, setListMagazines] = useState([]);
    const [apiStatus, setApiStatus] = useState("isLoading");

    const [page,setPage] = useState(1);

    useEffect(() => {
        listAllMagazines((isOk, data) => {
            if (!isOk) return setApiStatus("isError");
            else {
                setApiStatus("")
                setListMagazines(data)
            };
        });
    }, []);

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

    return (
        <Layout className="p-2">
            <div className="grid grid-cols-4 gap-0 h-[min-content] rounded overflow-hidden text-white">
                {/* {listAllMagazines.data && listAllMagazines.data.map((item,idx) => {
                    return <Item key={idx} data={item} big={idx % 6 === 0 || idx % 6 === 5} />
                })} */}
                {Array(21)
                    .fill({ fake: true })
                    .map((_, idx) => (
                        <FakeItem key={idx} big={idx % 6 === 0 || idx % 6 === 5} />
                    ))}
            </div>
            <div className={"mt-5 flex justify-center"}>
               <Pagination 
               pageSize={4}
               onChange={(e) => setPage(e)}
               current={page}
               total={10}
               />
            </div>
            
        </Layout>
    );
}

const Item = ({ data,big }) => {
    const { locale } = useRouter();
    const t = traslate(locale);

    const [imageOpacity,setImageOpacity] = useState(0.8)

    const color = React.useMemo(() => {
        switch (Math.floor(Math.random() * (2 - 0 + 1) + 0)) {
            case 0:
                return '#B91C1C';
            case 1:
                return '#18181B';
            case 2:
                return '#F3F4F6';
        }
    }, []);

    const imageStyle = {
        opacity:imageOpacity
    }

    return (
        <Link
            href="/"
            className={classNames(
                '!block group relative h-[min-content]',
                big ? 'col-span-2' : 'col-span-1'
            )}
        >
            <div className="w-full overflow-hidden">
                <img
                    style={imageStyle}
                    onMouseEnter={() => setImageOpacity(1)}
                    onMouseLeave={() => setImageOpacity(0.8)}
                    src={fakeImage(400, 400, 10, true)}
                    className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                />
            </div>
            <div
                className={classNames(
                    'absolute inset-0',
                    big ? 'flex items-end justify-end' : 'bottom-[unset] top-full h-full'
                )}
            >
                <div
                    style={{ backgroundColor: color, color: colorInvert(color, true) }}
                    className={classNames(
                        'relative flex flex-col p-4',
                        'w-full h-full'
                    )}
                >
                    <div
                        style={{ backgroundColor: color }}
                        className="absolute w-4 h-4 transform rotate-45 -top-2 -ms-2 start-1/2"
                    />
                    <h4 className="flex-1 mb-2 text-xl font-bold">{data.title}</h4>
                    <span className="flex items-center">
                        <Icon name="clock" className="me-1" />
                        {t.fake.time}
                    </span>
                </div>
            </div>
        </Link>
    );
};

const FakeItem = ({ big }) => {
    const { locale } = useRouter();
    const t = traslate(locale);

    const [imageLight,setImageLight] = useState(false)

    const color = React.useMemo(() => {
        switch (Math.floor(Math.random() * (2 - 0 + 1) + 0)) {
            case 0:
                return '#B91C1C';
            case 1:
                return '#18181B';
            case 2:
                return '#F3F4F6';
        }
    }, []);

    return (
        <Link
            href="/"
            className={classNames(
                '!block group relative h-[min-content]',
                big ? 'col-span-2' : 'col-span-1'
            )}
        >
            <div className={`w-full overflow-hidden filter ${imageLight ? "" : "contrast-50"}`}
                    onMouseEnter={() => setImageLight(true)}
                    onMouseLeave={() => setImageLight(false)}>
                <img
                    src={fakeImage(400, 400, 10, true)}
                    className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                />
            </div>
            <div
             onMouseEnter={() => setImageLight(true)}
             onMouseLeave={() => setImageLight(false)}
                className={classNames(
                    'absolute inset-0',
                    big ? 'flex items-end justify-end' : 'bottom-[unset] top-full h-full'
                )}
            >
                <div
                    style={{ backgroundColor: color, color: colorInvert(color, true) }}
                    className={classNames(
                        'relative flex flex-col p-4',
                        big ? 'w-1/2 h-1/2' : 'w-full h-full'
                    )}
                >
                    <div
                        style={{ backgroundColor: color }}
                        className="absolute w-4 h-4 transform rotate-45 -top-2 -ms-2 start-1/2"
                    />
                    <h4 className="flex-1 mb-2 text-xl font-bold">{t.fake.title}</h4>
                    <span className="flex items-center">
                        <Icon name="clock" className="me-1" />
                        {t.fake.time}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default Magazines;
