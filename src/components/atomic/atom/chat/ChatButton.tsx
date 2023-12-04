import React from "react";

type Props = {
  chat1: string;
  chat2?: string;
  chat3?: string;
  chat4?: string;
};

const ChatButton = (props: Props) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center justify-end">
      <button
        className={`bg-[#0066FF] text-white p-2 w-fit rounded-[5px] text-[14px] ${
          props.chat1 ? "flex" : "hidden"
        }`}
      >
        {props.chat1}
      </button>
      <button
        className={`bg-[#0066FF] text-white p-2 w-fit rounded-[5px] text-[14px] ${
          props.chat2 ? "flex" : "hidden"
        }`}
      >
        {props.chat2}
      </button>
      <button
        className={`bg-[#0066FF] text-white p-2 w-fit rounded-[5px] text-[14px] ${
          props.chat3 ? "flex" : "hidden"
        }`}
      >
        {props.chat3}
      </button>
      <button
        className={`bg-[#0066FF] text-white p-2 w-fit rounded-[5px] text-[14px] ${
          props.chat4 ? "flex" : "hidden"
        }`}
      >
        {props.chat4}
      </button>
    </div>
  );
};

export default ChatButton;
