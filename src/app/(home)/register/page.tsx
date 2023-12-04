import ChatBubble from "@/components/atomic/atom/chat/ChatBubble";
import ChatButton from "@/components/atomic/atom/chat/ChatButton";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 p-3">
      <div className="flex flex-col gap-5">
        <ChatBubble
          me={false}
          chat={"회원님의 오토바이 브랜드를 선택해주세요"}
        />
        <ChatButton
          chat1={"KTM"}
          chat2={"BMW"}
          chat3={"YAMAHA"}
          chat4={"그 외 브랜드 입력"}
        />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble me={false} chat={"회원님의 오토바이 차종을 선택해주세요"} />
        <ChatBubble me={true} chat={"BMW"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble me={false} chat={"회원님의 오토바이 연식을 입력해주세요"} />
        <ChatBubble me={true} chat={"2023년식"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble me={false} chat={"회원님의 오토바이 차명을 입력해주세요"} />
        <ChatBubble me={true} chat={"[혼다] 골드윙 1500 (CP450)"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble
          me={false}
          chat={"회원님의 오토바이 차대번호을 입력해주세요"}
        />
        <ChatBubble me={true} chat={"ADGBNASDUGNSJDGNJIS"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble
          me={false}
          chat={"회원님의 오토바이 등록번호을 입력해주세요"}
        />
        <ChatBubble me={true} chat={"SDSDJGNJSRNGRJKSRJNG"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble
          me={false}
          chat={"회원님의 오토바이 등록 년/월/일을 선택해주세요"}
        />
        <ChatBubble me={true} chat={"2023/01/01"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble
          me={false}
          chat={"회원님의 오토바이 배기량을 입력해주세요"}
        />
        <ChatBubble me={true} chat={"500cc"} />
      </div>
      <div className="flex flex-col gap-5">
        <ChatBubble
          me={false}
          chat={"회원님의 오토바이 보험사를 입력해주세요"}
        />
        <ChatBubble me={true} chat={"KB손해보험"} />
      </div>
      <button className="text-[#0066FF] text-semibold text-[14px] flex flex-row gap-2 items-center justify-center border border-[#0066FF] p-2 rounded-[5px]">
        <p>등록하기</p>
        <i className="fa-regular fa-arrow-right" />
      </button>
      <div className="sticky bottom-0 flex flex-row gap-3 itmes-center">
        <input
          className="w-full border border-gray-200 rounded-[5px] text-[14px] p-2"
          placeholder="내용을 입력하세요"
        />
        <button className="bg-[#0066FF] min-w-fit text-semibold text-[14px] text-white flex flex-row gap-2 items-center justify-center px-3 py-1 rounded-[5px]">
         입력
        </button>
      </div>
    </div>
  );
};

export default page;
