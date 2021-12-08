import React from "react";
// import Img from "./img/aboziar.png"
function HeaderProfile(props) {
  return (
    <div className="flex justify-between w-full h-24 pt-2 m-4 rounded bg-body">
      <div className="flex h-full pt-2 pl-8">
        <img src={"./img/avatar.jpg"} alt="" className="w-16 h-16 mb-6 rounded-full"/>
        <div className="flex pt-6 pl-6">
          <h3 className="text-lg">Alireza</h3>
          <h3 className="pl-2 text-lg">Pahlavan</h3>
        </div>
      </div>
      <div className="flex ">
        <div className='h-full p-4 text-center'>
          <h3 className="text-xl">0</h3>
          <h3 className="text-base">Comments</h3>
        </div>
        <div className='h-full p-4 text-center'>
          <h3 className="text-xl">0</h3>
          <h3 className="text-base">Orders</h3>
        </div>
        <div className='h-full p-4 text-center'>
          <h3 className="text-xl">0</h3>
          <h3 className="text-base">Favorites</h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
