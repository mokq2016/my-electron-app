import React from "react";

interface RightPopProps {
  visible: boolean;
  songList: any[];
  onClose: () => void;
  handlePlay: (hash: string, index: number) => void;
}
function RightPop({ visible, songList = [], onClose,handlePlay }: RightPopProps) {
  console.log("RightPop visible:", songList);
  return (
    <div
      className="fixed inset-y-0 right-0 w-[480px] bg-white rounded-l-lg transition-transform duration-300 ease-in-out z-50"
      style={{
        transform: visible ? "translateX(0)" : "translateX(100%)",
        boxShadow:
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 10px 15px -3px rgb(0 0 0 / 0.1)",
        top: "120px", // 假设顶部导航栏高度为60px
        bottom: "120px", // 底部播放栏高度为100px
        height: "auto", // 自动计算高度以填充中间区域
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="right-pop-content p-4 h-full flex flex-col">
        <div className="right-pop-title text-lg font-bold mb-4 flex justify-between items-center">
          播放列表
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <i className="iconfont icon-close"></i>
          </button>
        </div>
        <div className="right-pop-body flex-1 overflow-y-auto">
          {songList.length > 0 ? (
            songList.map((item, index) => (
              <div key={index} className="flex items-center">
                <div>
                  <img
                    src={item.album_sizable_cover}
                    alt={item.album_sizable_cover}
                    className="w-12 h-12 rounded mr-2 cursor-pointer"
                    onClick={() => handlePlay(item.hash, index)}
                  />
                  <div>
                    <p>{item.songname}</p>
                  </div>
                </div>
                <span className="ml-2">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">播放列表为空</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightPop;
