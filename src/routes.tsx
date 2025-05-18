import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Tuijian = lazy(() => import('./pages/TuiJian/Tuijian'));
const Jingxuan = lazy(() => import('./pages/jingxuan/JingxuanHome'));
const JingxuanHome = lazy(() => import('./pages/jingxuan/home/index'));
const JingxuanRankList = lazy(() => import('./pages/jingxuan/ranking-list/index'));
const JingxuanSinger = lazy(() => import('./pages/jingxuan/singer/index'));
const JingxuanSongSquare = lazy(() => import('./pages/jingxuan/song-square/index'));
const JingxuanVip = lazy(() => import('./pages/jingxuan/vip/index'));
const Boke = lazy(() => import('./pages/Boke'));
const Manyou = lazy(() => import('./pages/Manyou'));
const Guanzhu = lazy(() => import('./pages/Guanzhu'));
const Favorite = lazy(() => import('./pages/my/Favorite'));
const Recent = lazy(() => import('./pages/my/Recent'));
const Podcast = lazy(() => import('./pages/my/Podcast'));
const Collection = lazy(() => import('./pages/my/Collection'));
const Download = lazy(() => import('./pages/my/Download'));
const Local = lazy(() => import('./pages/my/Local'));
const Cloud = lazy(() => import('./pages/my/Cloud'));

const routes = [
  { path: '/', element: <Navigate to="/tuijian" replace /> },
  { path: '/tuijian', element: <Tuijian /> },
  {
    path: '/jingxuan',
    element: <Jingxuan />,
    children: [
      { path: '', element: <Navigate to="home" replace /> },
      { path: 'home', element: <JingxuanHome /> },
      { path: 'song-square', element: <JingxuanSongSquare /> },
      { path: 'ranking-list', element: <JingxuanRankList /> },
      { path: 'singer', element: <JingxuanSinger /> },
      { path: 'vip', element: <JingxuanVip /> },
    ],
  },
  { path: '/boke', element: <Boke /> },
  { path: '/manyou', element: <Manyou /> },
  { path: '/guanzhu', element: <Guanzhu /> },
  { path: '/my/favorite', element: <Favorite /> },
  { path: '/my/recent', element: <Recent /> },
  { path: '/my/podcast', element: <Podcast /> },
  { path: '/my/collection', element: <Collection /> },
  { path: '/my/download', element: <Download /> },
  { path: '/my/local', element: <Local /> },
  { path: '/my/cloud', element: <Cloud /> },
];

export default routes;