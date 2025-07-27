import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

import http from "../utils/http";

import img from "../assets/images/bdjx1.png";
import FullPagePlay from "./full-page-play";
import RightPop from "./right-pop";
import { useMusicStore } from "../store/music";
function RightBar({
  changeRightPopState,
}: {
  changeRightPopState: () => void;
}) {
  return (
    <div className="flex gap-x-4 items-center ">
      <i className="iconfont icon-ci !text-3xl"></i>
      <i className="iconfont icon-MembershipCenter !text-3xl"></i>
      <i className="iconfont icon-guanzhong !text-3xl"></i>
      <i className="iconfont icon-24gl-volumeMiddle !text-3xl"></i>
      <i
        className="iconfont icon-24gf-playlist !text-3xl"
        onClick={(e) => {
          e.stopPropagation();
          changeRightPopState();
        }}
      ></i>
    </div>
  );
}
function LeftBar({ onPlayFull }: { onPlayFull: () => void }) {
  const { title, artist, imgUrl } = useMusicStore();
  return (
    <div className="flex">
      <img
        src={imgUrl.replace(/{size}/g, '100')}
        alt=""
        className="play-full w-20 h-20 rounded-full animate-spin-slow"
        onClick={onPlayFull}
      />
      <div className="ml-2 flex flex-col justify-between pt-[14px] pb-1">
        <div className="overflow-hidden w-52">
          <div className="cursor-pointer text-[22px] whitespace-nowrap animate-marquee">
            <span className="">{title}</span>
            <span className="text-[#A9ADB6]">-{artist}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <i className="iconfont icon-shoucangdaogedan !text-2xl"></i>
          <i className="iconfont icon-pinglun !text-2xl"></i>
          <i className="iconfont icon-fenxiang !text-2xl"></i>
          <i className="iconfont icon-xiazai !text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

function CenterBar({
  onPlayPause,
}: {
  isPlaying: boolean;
  onPlayPause: () => void;
}) {
  const { currentTime, duration, progress, isPlaying } = useMusicStore(); // Get state from store
  return (
    <div className="w-[600px] flex-1">
      <div className="flex justify-center items-center gap-x-4 px-5">
        <i className="iconfont icon-xiai !text-2xl"></i>

        <span className="rotate-180">
          <i className="iconfont icon-kuaijinxiao  !text-4xl "></i>
        </span>

        <div
          className="w-[50px] h-[50px] bg-[#EA3E3E] rounded-full flex justify-center items-center text-white hover:scale-110 transition-transform duration-300"
          onClick={onPlayPause}
        >
          <i
            className={`iconfont ${
              isPlaying ? "icon-zanting" : "icon-bofang"
            } !text-[28px]`}
          ></i>
        </div>
        <i className="iconfont icon-kuaijinxiao !text-4xl"></i>
        <i className="iconfont icon-inturn !text-2xl"></i>
      </div>
      <div className="flex items-center w-[400px] mx-auto mt-2">
        <span className="text-xs text-gray-500 mr-1">{currentTime}</span>
        <div className="flex-1 h-1 bg-gray-200 rounded-full relative mx-2">
          <div
            className="h-1 bg-[#EA3E3E] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-500 ml-1">{duration}</span>
      </div>
    </div>
  );
}
// Create a ref type for AudioPlay
type AudioPlayRef = {
  play: () => void;
  pause: () => void;
  audioElement: HTMLAudioElement | null;
} | null;

const AudioPlayWithRef = forwardRef<AudioPlayRef, { src: string }>(
  (props, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const setMusicInfo = useMusicStore((state) => state.setMusicInfo);
    useImperativeHandle(ref, () => ({
      play: () => {
        audioRef.current?.play();
      },
      pause: () => {
        audioRef.current?.pause();
      },
      audioElement: audioRef.current,
    }));

    const formatTime = (seconds: number): string => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    };
    const onCanPlay = () => {
      if (audioRef.current) {
        const duration = audioRef.current.duration;
        setMusicInfo({
          duration: formatTime(duration),
        });
      }
    };

    const onEnded = () => {
      setMusicInfo({
        isPlaying: false,
        currentTime: "00:00",
        progress: 0,
      });
    };

    const onTimeUpdate = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration || 1;
        const progress = (currentTime / duration) * 100;

        setMusicInfo({
          currentTime: formatTime(currentTime),
          progress: progress,
        });
      }
    };
    return (
      <audio
        ref={audioRef}
        id="myAudio"
        src={props.src}
        onCanPlay={onCanPlay}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
      />
    );
  }
);
function FooterBar() {
  const [show, setShow] = useState(false);
  const [showRightPop, setShowRightPop] = useState(false);
  const [songList, setSongList] = useState<any[]>([]); // New state for song list
  const { isPlaying, currentMusicUrl, setMusicInfo } = useMusicStore();
  const audioPlayRef = useRef<AudioPlayRef>(null); // Ref to control audio
  useEffect(() => {
    const handleClickOutside = () => {
      setShowRightPop(false);
    };

    if (showRightPop) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showRightPop]);

  useEffect(() => {
    http
      .get<{ songs: any }>("/rank/info/?rankid=6666&page=1&json=true")
      .then((response) => {
        setSongList(response.songs.list);
        setMusicInfo({
          currentMusicUrl:
            "https://sharefs.tx.kugou.com/202507262229/ee00b834d11727e6bbbe64fb68f68000/v3/45e07090bc4ba94bc3b91554d554bcc7/yp/full/ap1000_us0_pi409_s2629206770.mp3",
        });
      })
      .catch((error) => {
        console.error("请求失败:", error);
      });
  }, []);
  // Handle play/pause toggle
  const handlePlayPause = () => {
    if (isPlaying) {
      audioPlayRef.current?.pause();
      setMusicInfo({ isPlaying: false });
    } else {
      audioPlayRef.current?.play();
      setMusicInfo({ isPlaying: true });
    }
  };
  const handlePlay = (hash: string, index: number) => {
    // 通过hash请求http接口获取歌曲详情信息
    http
      .get(`/app/i/getSongInfo.php?cmd=playInfo&hash=${hash}`)
      .then((response) => {
        if (response.url) {
          setMusicInfo({
            title: response.songName,
            artist: response.choricSinger,
            currentMusicUrl: response.url,
            imgUrl: response.imgUrl,
            isPlaying: false,
          });
          setTimeout(() => {
            if (!isPlaying) {
              handlePlayPause();
            } else {
              // If already playing, restart the new song
              audioPlayRef.current?.play();
              setMusicInfo({ isPlaying: true });
            }
          }, 100);
        }
      });
  };
  return (
    <div className="footer-bar flex justify-between items-center w-full h-[100px] fixed px-10 bottom-0 z-10 bg-white shadow-[0_-1px_10px_0_rgba(0,0,0,0.1)]">
      <LeftBar onPlayFull={() => setShow(true)} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <CenterBar isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      </div>
      <RightBar
        changeRightPopState={() => {
          setShowRightPop(!showRightPop);
        }}
      />
      <FullPagePlay visible={show} onExited={() => setShow(false)} />
      <AudioPlayWithRef ref={audioPlayRef} src={currentMusicUrl} />
      <RightPop
        visible={showRightPop}
        onClose={() => setShowRightPop(false)}
        songList={songList}
        handlePlay={handlePlay}
      />
    </div>
  );
}
export default FooterBar;
