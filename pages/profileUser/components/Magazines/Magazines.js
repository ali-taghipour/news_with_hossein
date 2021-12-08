// import { useRouter } from 'next/router';
import React from "react";
// import CommentItem from "./CommentItem";
import { NewsItem, NewsBox } from '../../../../components/Theme/News';

import { Divider } from "@chakra-ui/react";
function Magazines(props) {
  return (
    <div className="w-full ">
      <div className="w-full">
        <div className="flex w-full">
          <h4 className="mr-2">88</h4>
          <h4 className="">Your Magazines</h4>
        </div>
        <Divider display={"flex"} />
      </div>
      <div className="w-full h-full">
      <NewsItem
        className="inline-block w-1/3 "

        justLabelColored
        icon="pharmacy"

      />
      <NewsItem
        className="inline-block w-1/3 "
        // image={'./img/athlete-ball-catching.png'}

        color="#B91C1C"
        justLabelColored
        icon="pharmacy"

      />
      <NewsItem
        className="inline-block w-1/3 "
        // image={'./img/athlete-ball-catching.png'}

    
        justLabelColored
      />
      <NewsItem
        className="inline-block w-1/3 "
        // image={'./img/athlete-ball-catching.png'}
        icon="pharmacy"

  
        color="#B91C1C"
        justLabelColored
      />{" "}
      <NewsItem
        className="inline-block w-1/3 "
        // image={'./img/athlete-ball-catching.png'}
        icon="pharmacy"


        justLabelColored
      />
      <NewsItem
        className="inline-block w-1/3 "
        // image={'./img/athlete-ball-catching.png'}
        icon="pharmacy"

        color="#B91C1C"
        justLabelColored
      />
      </div>
    </div>
  );
}
export default Magazines;
