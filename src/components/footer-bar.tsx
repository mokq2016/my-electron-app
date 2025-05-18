import img from '../assets/images/bdjx1.png';
function RightBar() {
    return (
        <div className="flex gap-x-4 items-center ">
            <i className="iconfont icon-ci !text-3xl"></i>
            <i className="iconfont icon-MembershipCenter !text-3xl"></i>
            <i className="iconfont icon-guanzhong !text-3xl"></i>
            <i className="iconfont icon-24gl-volumeMiddle !text-3xl"></i>
            <i className="iconfont icon-24gf-playlist !text-3xl"></i>
        </div>
    );
}
function LeftBar() {
    return (
        <div className="flex">
            <img src={img} alt="" className='w-20 h-20 rounded-full animate-spin-slow' />
            <div className='ml-2 flex flex-col justify-between pt-[14px] pb-1'>
                 <div className="overflow-hidden w-52">
                <div className='cursor-pointer text-[22px] whitespace-nowrap animate-marquee'>
                    <span className=''>{'歌曲的名字双方的身份的'}</span>
                    <span className='text-[#A9ADB6]'>-{'作者'}</span>
                </div>
                </div>
                <div className='flex items-center gap-x-5'>
                    <i className="iconfont icon-shoucangdaogedan !text-2xl"></i>
                    <i className="iconfont icon-pinglun !text-2xl"></i>
                    <i className="iconfont icon-fenxiang !text-2xl"></i>
                    <i className="iconfont icon-xiazai !text-2xl"></i>
                </div>
            </div>
        </div>
    );
}

function CenterBar() {
    // 示例数据，可根据实际播放进度动态设置
    const currentTime = "01:23";
    const duration = "03:45";
    const progressPercent = 40; // 进度百分比

    return (
        <div className="w-[600px] flex-1">
            <div className="flex justify-center items-center gap-x-4 px-5">
                <i className="iconfont icon-24gf-playlist !text-4xl"></i>

                <span className="rotate-180">
                    <i className="iconfont icon-kuaijinxiao  !text-4xl "></i>
                </span>

                <div className="w-[50px] h-[50px] bg-[#EA3E3E] rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform duration-300">
                    <i className="iconfont icon-zanting !text-[28px]"></i>
                </div>
                <i className="iconfont icon-kuaijinxiao !text-4xl"></i>
                <i className="iconfont icon-24gf-playlist !text-4xl"></i>
            </div>
            <div className="flex items-center w-[400px] mx-auto mt-2">
                <span className="text-xs text-gray-500 mr-1" >{currentTime}</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full relative mx-2">
                    <div
                        className="h-1 bg-[#EA3E3E] rounded-full"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                <span className="text-xs text-gray-500 ml-1">{duration}</span>
            </div>

        </div>

    );
}

function FooterBar() {
    return (
        <div className="footer-bar flex justify-between items-center w-full h-[100px] fixed px-10 bottom-0 z-10 bg-white shadow-[0_-1px_10px_0_rgba(0,0,0,0.1)]">
            <LeftBar />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CenterBar />
            </div>
            <RightBar />
        </div>
    );
}
export default FooterBar;