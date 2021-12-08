import React from "react";

function CommentItem(props) {
  return (
    <div className="w-full ">
      <div className="flex w-full my-4">
        <div className="w-1/12 ">
          <img src="./img/athlete-ball-catching.jpg " className="w-20 h-16 rounded" alt="" />
        </div>
        <div className="w-11/12 mt-6 ml-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
          reiciendis? 
        </div>
      </div>
      <div className="w-full p-2 rounded" style={{backgroundColor:"#ececec"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
        repellat numquam, sed quos explicabo sint maxime a. Neque fuga aperiam
        exercitationem, ducimus tempora hic beatae necessitatibus 
      </div>
    </div>
  );
}
export default CommentItem;
