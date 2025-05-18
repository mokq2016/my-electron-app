import { NavLink, Outlet, useLocation } from 'react-router-dom';

const tabs = [
  { name: '精选', path: 'home' },
  { name: '歌单广场', path: 'song-square' },
  { name: '排行榜', path: 'ranking-list' },
  { name: '歌手', path: 'singer' },
  { name: 'VIP', path: 'vip' },
];

function JingxuanHome() {
  return (
    <div>
      <div className="flex gap-4 border-b px-[42px] py-7">
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `relative px-2 py-2 group font-medium text-gray-600
              after:content-[''] after:block after:h-1 after:rounded after:mt-[5px] after:absolute after:left-1/2 after:-translate-x-1/2
              ${isActive
                ? 'text-black/75 after:bg-red-500 after:w-5 font-bold' 
                : 'after:bg-transparent after:w-0'}`
            }
            end
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default JingxuanHome;