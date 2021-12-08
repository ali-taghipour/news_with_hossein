// import { useRouter } from 'next/router';
import React from "react";
import CommentItem from "./CommentItem";
import {
    Divider,
  } from '@chakra-ui/react'
function Comments(props) {
  return (
    <div className="w-full ">
      <div className="w-full">
        <div className="flex w-full">
          <h4 className="mr-2">88</h4>
          <h4 className="">Your Comments</h4>
        </div>
        <Divider display={"flex"} />
      </div>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}
export default Comments;
