import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Icon from "../../components/Theme/Icon";
import Link from "../../components/Theme/Link";
import classNames from "../../utils/classNames";
import fakeImage from "../../utils/fakeImage";
import traslate from "../../utils/traslate";
import colorInvert from "../../utils/colorInvert";
import { listAllMagazines } from "../../api/api_magazine";

import { Slider } from "../../components/Common/Slider/Slider";

const ItemMessage = ({ text, size = "md" }) => {
  return (
    <span
      style={{
        position: "relative",
        top: size === "sm" ? "-75px" : "-150px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: "1.4rem",
          color: "#fff",
          borderBottom: "2px solid #fff",
          paddingBottom: "10px",
        }}
      >
        {text}
      </span>
    </span>
  );
};

function Magazines(props) {
  const { locale } = useRouter();
  const t = traslate(locale);
  const [listMagazines, setListMagazines] = useState([]);
  useEffect(() => {
    listAllMagazines((isOk, data) => {
      if (!isOk) return alert(data.message);
      else setListMagazines(data);
    });
  }, []);

  return (
    <Layout className="p-2">
      <Slider />

      <div
        class="grid grid-cols-12 gap-0"
        style={{ background: "red", height: "300px" }}
      >
        <Item
          imgSrc="https://picsum.photos/id/870/400/300?grayscale&blur=2"
          text="simple test"
          col={3}
        />
        <Item
          imgSrc="https://picsum.photos/seed/picsum/200/300"
          text="simple test"
          col={3}
        />
        <Item
          imgSrc="https://picsum.photos/600/300"
          text="simple test"
          col={6}
        />
      </div>

      <div
        class="grid grid-cols-12 gap-0"
        style={{ background: "red", height: "300px" }}
      >
        <div className="col-span-6" style={{ background: "yellow" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <div style={{ background: "red", height: "50%" }}>
              <Link href="/" className="h-full w-full">
                <img
                  src={"https://picsum.photos/200/300/?blur"}
                  style={{ height: "100%", width: "100%" }}
                />
                <ItemMessage text={"simple text"} size="sm" />
              </Link>
            </div>
            <div style={{ background: "red", height: "50%" }}>
              <Link href="/" className="h-full w-full">
                <img
                  src={"https://picsum.photos/600/300"}
                  style={{ height: "100%", width: "100%" }}
                />
                <ItemMessage text={"simple text"} size="sm" />
              </Link>
            </div>
          </div>
        </div>
        <Item
          imgSrc="https://picsum.photos/id/870/400/300?grayscale&blur=2"
          text="simple test"
          col={3}
        />
        <div className="col-span-3" style={{ background: "yellow" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <div style={{ background: "red", height: "50%" }}>
              <Link href="/" className="h-full w-full">
                <img
                  src={"https://picsum.photos/600/300"}
                  style={{ height: "100%", width: "100%" }}
                />
                <ItemMessage text={"simple text"} size="sm" />
              </Link>
            </div>
            <div style={{ background: "red", height: "50%" }}>
              <Link href="/" className="h-full w-full">
                <img
                  src={"https://picsum.photos/200/300?grayscale"}
                  style={{ height: "100%", width: "100%" }}
                />
                <ItemMessage text={"simple text"} size="sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-12 gap-0"
        style={{ background: "red", height: "300px" }}
      >
        <Item
          imgSrc="https://picsum.photos/200/300/?blur"
          text="simple test"
          col={3}
        />
        <Item
          imgSrc="https://picsum.photos/400/300?grayscale"
          text="simple test"
          col={6}
        />
        <Item
          imgSrc="https://picsum.photos/600/300"
          text="simple test"
          col={3}
        />
      </div>
    </Layout>
  );
}

const Item = ({ big, imgSrc, text, size = "md", col }) => {
  const { locale } = useRouter();
  const t = traslate(locale);
  console.log("t is a ", t);

  const [imageLight, setImageLight] = useState(false);

  return (
    <div
      className={`w-full overflow-hidden filter ${
        imageLight ? "" : "contrast-50"
      }`}
      onMouseEnter={() => setImageLight(true)}
      onMouseLeave={() => setImageLight(false)}
      className={"col-span-" + col}
    >
      <Link
        href="/"
        className={classNames(
          "!block group relative h-[min-content] full-h",
          big ? "col-span-2" : "col-span-1"
        )}
      >
        <div style={{ height: "300px", width: "100%" }}>
          <img src={imgSrc} style={{ height: "100%", width: "100%" }} />
          <ItemMessage text={text} size={size} />
        </div>
      </Link>
    </div>
  );
};

export default Magazines;
