import React from "react";

type Props = {
  me: boolean;
  chat: string;
};

const ChatBubble = (props: Props) => {
  return (
    <div className={`w-full flex items-center ${props.me ? "justify-end" : "justify-start" }`}>
      <div
        className={`p-2 w-fit rounded-[5px] text-[14px] ${
          props.me ? "bg-[#0066FF] text-white" : "bg-[#D0E3FF] text-black"
        }`}
      >
        {props.chat}
      </div>
    </div>
  );
};

export default ChatBubble;
