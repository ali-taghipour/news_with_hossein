import React from "react";

const Loading = () => {

    return (
        <div class="flex justify-center items-center">
            <div
                class="
                    animate-spin
                    rounded-full
                    h-32
                    w-32
                    border-t-2 border-b-2 border-purple-500
                "
            ></div>
        </div>
    )
}

export {Loading};