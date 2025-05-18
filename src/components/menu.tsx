import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const menuList = [
    { name: '推荐', iconName: 'icon-shouye', path: '/tuijian' },
    { name: '精选', iconName: 'icon-huiyuantequan-quanminKge-zhengbanquku', path: '/jingxuan' },
    { name: '播客', iconName: 'icon-ercichuanbo', path: '/boke' },
    { name: '漫游', iconName: 'icon-luyinji', path: '/manyou' },
    { name: '关注', iconName: 'icon-xiaoxi', path: '/guanzhu' },
];
const myMenuList = [
    { name: '我喜欢的音乐', iconName: 'icon-xiai', rightIconName:'icon-xihuan',path: '/my/favorite' },
    { name: '最近播放', iconName: 'icon-a-smlsicon_zuijinwenjian', path: '/my/recent' },
    { name: '我的播客', iconName: 'icon-MusicList', path: '/my/podcast' },
    { name: '我的收藏', iconName: 'icon-wodeshoucang', path: '/my/collection' },
    { name: '下载管理', iconName: 'icon-icon_xiazaiguanli_', path: '/my/download' },
    { name: '本地音乐', iconName: 'icon-yinlewenjianjia', path: '/my/local' },
    { name: '我的音乐网盘', iconName: 'icon-yunshangchuan', path: '/my/cloud' }
]

const Menu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isFoldMenu, setIsFoldMenu] = useState(false);
    return (
        <div className="app-menu">
            {menuList.map((item, index) => (
                <div
                    key={index}
                    className={`menu-item${location.pathname.startsWith(item.path) ? ' active-menu' : ''}`}
                    onClick={() => navigate(item.path)}
                >
                    <div className="menu-item-icon">
                        <i className={`${item.iconName} iconfont`} style={{ fontSize: '24px' }}></i>
                    </div>
                    <div className="menu-item-text">{item.name}</div>
                </div>
            ))}
            <div className='split-line'></div>
            <div>
                <div style={{ padding: '10px 0 20px', fontSize: '16px', color: '#999' }}>
                    <i className="iconfont icon-wode" style={{ fontSize: '24px', marginRight: '8px' }}></i>
                    <span>我的</span>
                </div>
                {myMenuList.slice(0, !isFoldMenu ? 3 : 7).map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item${location.pathname === item.path ? ' active-menu' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <div className="menu-item-icon">
                            <i className={`${item.iconName} iconfont`} style={{ fontSize: '24px' }}></i>
                        </div>
                        <div className="menu-item-text">{item.name}</div>
                       
                        {item.rightIconName && ( <div className="menu-item-icon" style={{ marginLeft: '6px' }}>
                            <i className={`${item.rightIconName} iconfont`} style={{ fontSize: '24px' }}></i>
                        </div>)}
                    </div>
                ))}
                <div className={`more-btn ${isFoldMenu ? 'fold-btn' : ''}`} onClick={() => {
                    setIsFoldMenu(!isFoldMenu);
                }}>
                    <i className="iconfont icon-xiajiantou" style={{ fontSize: '16px', marginRight: '8px' }}></i>
                    <span>{!isFoldMenu ? '更多' : '收起'}</span>
                </div>
            </div>
            <div className='split-line'></div>
        </div>
    );
};

export default Menu;