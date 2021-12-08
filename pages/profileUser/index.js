// import { useRouter } from 'next/router';
import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import HeaderProfile from "./components/headerProfile";
import SideBar from "./components/Sidebar";
import Comments from "./components/Comments/Comments";
import Magazines from "./components/Magazines/Magazines";
function Profile(props) {
  return (
    <>
      <Header />
      <div className="flex w-full h-auto">
        <SideBar />
        <div className="w-11/12 my-6 ml-1 mr-6 h-1/4">
          <HeaderProfile />
          <div className="flex m-4 "> 
          <div className="flex w-3/5 m-4">
              <Comments />
            </div>
            <div className="flex w-2/5 m-4">
                <Magazines/>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
