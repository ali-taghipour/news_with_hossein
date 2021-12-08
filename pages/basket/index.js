// import { useRouter } from 'next/router';
import React from "react";
import Header from "../../components/Layout/Header";
import { NewsBox } from '../../components/Theme/News';
import Footer from "../../components/Layout/Footer";
function Profile(props) {
  return (
    <>
      <Header />
      <div className="flex w-full h-auto px-3 py-4">
        <div className="w-9/12 h-auto px-4 py-2">
          <NewsBox
            wrapperClassName="p-2"
            className="space-y-2"
            title="BASKET ITEMS"
            full>
            <div className="flex flex-wrap w-full">
              <div style={{ backgroundColor: "rgb(156, 163, 175)" }} className="mx-3 mt-6 rounded shadow-xl w-80 h-96">
                <div className="flex justify-center w-full h-2/4">
                  <img src="./img/w.jpg" alt="" className="w-full h-full rounded-t " />
                </div>
                <div className="w-full h-2/4">
                  <div className="w-full px-3 pt-5 h-3/4">
                    <h2 className="p-1 text-lg border-b">name : news mag</h2>
                    <h2 className="p-1 text-lg ">price : 35000 t</h2>
                  </div>
                  <div className="flex flex-wrap justify-end w-full px-5 content-centet h-1/4">
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">+</div>
                    <div className="w-8 text-lg text-center ">1</div>
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">-</div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "rgb(156, 163, 175)" }} className="mx-3 mt-6 rounded shadow-xl w-80 h-96">
                <div className="flex justify-center w-full h-2/4">
                  <img src="./img/bg.jpg" alt="" className="w-full h-full rounded-t" />
                </div>
                <div className="w-full h-2/4">
                  <div className="w-full px-3 pt-5 h-3/4">
                    <h2 className="p-1 text-lg border-b">name : news mag</h2>
                    <h2 className="p-1 text-lg ">price : 35000 t</h2>
                  </div>
                  <div className="flex flex-wrap justify-end w-full px-5 content-centet h-1/4">
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">+</div>
                    <div className="w-8 text-lg text-center ">1</div>
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">-</div>
                  </div>
                </div>
              </div>
              <div style={{ backgroundColor: "rgb(156, 163, 175)" }} className="mx-3 mt-6 rounded shadow-xl w-80 h-96">
                <div className="flex justify-center w-full h-2/4">
                  <img src="./img/ctiybg.jpg" alt="" className="w-full h-full rounded-t" />
                </div>
                <div className="w-full h-2/4">
                  <div className="w-full px-3 pt-5 h-3/4">
                    <h2 className="p-1 text-lg border-b">name : news mag</h2>
                    <h2 className="p-1 text-lg ">price : 35000 t</h2>
                  </div>
                  <div className="flex flex-wrap justify-end w-full px-5 content-centet h-1/4">
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">+</div>
                    <div className="w-8 text-lg text-center ">1</div>
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">-</div>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: "rgb(156, 163, 175)" }} className="mx-3 mt-6 rounded shadow-lg w-80 h-96">
                <div className="flex justify-center w-full h-2/4">
                  <img src="./img/city.webp" alt="" className="w-full h-full rounded-t" />
                </div>
                <div className="w-full h-2/4">
                  <div className="w-full px-3 pt-5 h-3/4">
                    <h2 className="p-1 text-lg border-b">name : news mag</h2>
                    <h2 className="p-1 text-lg ">price : 35000 t</h2>
                  </div>
                  <div className="flex flex-wrap justify-end w-full px-5 content-centet h-1/4">
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">+</div>
                    <div className="w-8 text-lg text-center ">1</div>
                    <div className="w-8 h-8 pt-1 text-xl text-center bg-white rounded-full">-</div>
                  </div>
                </div>
              </div>
            </div>
          </NewsBox>
        </div>
        <div className="w-3/12 h-auto p-2">
          <div className="w-full mt-6 border rounded h-96 border-line-dark">
            <div className="flex justify-center w-full px-3 h-1/6">
              <h1 className="py-3 text-3xl ">Shopping Cart</h1>
            </div>
            <div className="w-full p-4 h-4/6">
              <div className="flex justify-between w-full py-2">
                <div className="text-lg">
                  Price
                </div>
                <div className="text-lg">
                  40000
                </div>
              </div>
              <div className="flex justify-between w-full py-2">
                <div className="text-lg">
                  Count
                </div>
                <div className="text-lg">
                  3
                </div>
              </div>
              <div className="flex justify-between w-full py-2">
                <div className="text-lg">
                  Shipping cost
                </div>
                <div className="text-lg">
                  10000
                </div>
              </div>
              <div className="flex justify-between w-full py-2">
                <div className="text-2xl">
                  Total
                </div>
                <div className="text-2xl">
                  50000
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full py-2 h-1/6">
              <button className="w-3/4 px-4 text-white rounded bg-line-dark">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
