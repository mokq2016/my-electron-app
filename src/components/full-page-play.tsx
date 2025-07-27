import React, { useEffect, useRef } from "react";
import img from "../assets/images/bdjx1.png";
function FullPagePlay({
  visible = true,
  onExited,
}: {
  visible?: boolean;
  onExited?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // 控制离场动画
  const handleClose = () => {
    if (ref.current) {
      setTimeout(() => {
        onExited && onExited();
      }, 0);
    }
  };

  return (
    <div
      ref={ref}
      className="full-page-play fixed z-999 w-full h-screen left-0"
      style={{
        top: visible ? 0 : "100vh",
        background: "linear-gradient(to top, rgb(25,30,25), rgb(47,47,47))",
        transition: "top 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <header className="no-drag h-[108px] flex items-center justify-between px-[40px] text-[rgba(255,255,255,0.7)]">
        <div className="flex gap-x-[24px]">
          <div
            className=" border border-solid border-[rgb(81,81,81)] w-[46px] h-[46px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[rgba(255,255,255,0.04)]"
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          >
            <i className="iconfont icon-xiajiantou !text-2xl"></i>
          </div>
          <div className="border border-solid border-[rgb(81,81,81)] w-[46px] h-[46px] rounded-md flex justify-center items-center cursor-pointer hover:bg-[rgba(255,255,255,0.04)]">
            <i className="iconfont icon--zuidahua !text-2xl"></i>
          </div>
        </div>
        <div className="flex gap-x-[24px] items-center">
            <div className="border border-solid border-[rgb(81,81,81)] px-[20px] py-[8px] rounded-[40px] flex items-center gap-x-[8px] text-xl cursor-pointer hover:bg-[rgba(255,255,255,0.04)]">
                 <i className="iconfont icon-xiajiantou"></i>
                 播放器模式
            </div>
             <i className="iconfont icon-zuixiaohua !text-2xl"></i>
             <i className="iconfont icon-zuidahua !text-2xl"></i>
             <i className="iconfont icon-guanbi !text-2xl"></i>
        </div>
      </header>
      <main></main>
      <footer className="footer-bar text-[rgb(187,187,186)] flex justify-between items-center w-full h-[100px] px-10 bottom-0 shadow-[0_-1px_10px_0_rgba(0,0,0,0.1)] absolute left-0">
        {/* LeftBar */}
        <div className="flex">
          <div className="ml-2 flex flex-col justify-between pt-[14px] pb-1">
            <div className="flex items-center gap-x-6">
              <i className="iconfont icon-shoucangdaogedan !text-2xl"></i>
              <i className="iconfont icon-pinglun !text-2xl"></i>
              <i className="iconfont icon-fenxiang !text-2xl"></i>
              <i className="iconfont icon-xiazai !text-2xl"></i>
            </div>
          </div>
        </div>
        {/* CenterBar */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] flex-1">
            <div className="flex justify-center items-center gap-x-4 px-5">
              <i className="iconfont icon-xiai !text-2xl"></i>
              <span className="rotate-180">
                <i className="iconfont icon-kuaijinxiao  !text-4xl "></i>
              </span>
              <div className="w-[50px] h-[50px] bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform duration-300">
                <i className="iconfont icon-zanting !text-[28px]"></i>
              </div>
              <i className="iconfont icon-kuaijinxiao !text-4xl"></i>
              <i className="iconfont icon-inturn !text-2xl"></i>
            </div>
          </div>
        </div>
        {/* RightBar */}
        <div className="flex gap-x-4 items-center ">
          <i className="iconfont icon-ci !text-3xl"></i>
          <i className="iconfont icon-MembershipCenter !text-3xl"></i>
          <i className="iconfont icon-guanzhong !text-3xl"></i>
          <i className="iconfont icon-24gl-volumeMiddle !text-3xl"></i>
          <i className="iconfont icon-24gf-playlist !text-3xl"></i>
        </div>
      </footer>
    </div>
  );
}

export default FullPagePlay;
