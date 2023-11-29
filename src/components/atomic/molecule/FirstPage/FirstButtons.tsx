import React from "react";
import FirstpageButton from "../../atom/firstPageButton/FirstPageButton";

type Props = {};

const FirstButtons = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <FirstpageButton
        title={"수리하기"}
        subtitle={"최저가 수리비 알아보기"}
        img={"/assets/img/repair-tool.svg"}
        alt={"string"}
        height={true}
        subtitle2={""}
        link={"/repair"}
      />
      <div className="flex flex-row  gap-5 w-full">
        <FirstpageButton
          title={"판매하기"}
          subtitle={"쉽고 빠르게 진행되는"}
          img={"/assets/img/coin2.svg"}
          alt={"string"}
          height={true}
          subtitle2={"오토바이 판매!"}
          link={""}
        />
        <FirstpageButton
          title={"구매하기"}
          subtitle={"구매부터 탁송까지"}
          img={"/assets/img/fast-delivery.svg"}
          alt={"string"}
          height={true}
          subtitle2={"한번에!"}
          link={""}
        />
      </div>
      <FirstpageButton
        title={"홈으로"}
        subtitle={"배추딜러의 다양한 서비스를 만나보세요!"}
        img={""}
        alt={""}
        height={false}
        subtitle2={""}
        link={"/home"}
      />
    </div>
  );
};

export default FirstButtons;
