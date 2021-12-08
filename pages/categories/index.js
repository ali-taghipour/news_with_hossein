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

import {Slider} from "../../components/Common/Slider/Slider";

function Magazines(props) {

    const { locale } = useRouter();
    const t = traslate(locale);
    const [listMagazines, setListMagazines] = useState([])
    useEffect(() => {
        listAllMagazines((isOk, data) => {
            if (!isOk) return alert(data.message);
            else setListMagazines(data);
        });
    }, []);
    
    return (
        <Layout className="p-2">
            <Slider />
            <div className="grid grid-cols-4 gap-0 h-[min-content] rounded overflow-hidden text-white">
                {Array(21)
                    .fill({ fake: true })
                    .map((_, idx) => (
                        <Item key={idx} big={idx % 6 === 0 || idx % 6 === 5} />
                    ))}
            </div>
        </Layout>
    );
}

const Item = ({ big }) => {
    const { locale } = useRouter();
    const t = traslate(locale);
    console.log("t is a ", t);

    const [imageLight,setImageLight] = useState(false)

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
                onMouseLeave={() => setImageLight(false)}
             >
                <img
                    src="img/bg-auth.jpg"
                    className="w-full h-auto transition-transform duration-200 transform group-hover:scale-110"
                />
            </div>
        </Link>
    );
};

export default Magazines;
