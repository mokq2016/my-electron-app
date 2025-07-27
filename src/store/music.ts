import { create } from 'zustand';

interface MusicState {
  currentTime: string;
  duration: string;
  progress: number;
  isPlaying: boolean;
  title: string;
  artist: string;
  imgUrl: string;
  currentMusicUrl: string;
  setMusicInfo: (info: Partial<MusicState>) => void;
  reset: () => void;
}

export const useMusicStore = create<MusicState>()((set) => ({
  currentTime: '00:00',
  duration: '00:00',
  progress: 0,
  isPlaying: false,
  title: '歌曲标题',
  artist: '作者',
  imgUrl: '',
  currentMusicUrl:'',
  setMusicInfo: (info) => set((state) => ({ ...state, ...info })),
  reset: () => set({
    currentTime: '00:00',
    duration: '00:00',
    progress: 0,
    isPlaying: false
  })
}));