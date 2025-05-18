


const OperationArea = () => {
    return (
        <div className="operation-area no-drag" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '12px' }}>
            <div className="operation-area-item">
                <i className="iconfont icon-zuojiantou"></i>
            </div>
            <div className="operation-area-item operation-area-search" style={{ display: 'flex', alignItems: 'center' }}>
                <i className="iconfont icon-sousuo" style={{ margin: '0 14px' }}></i>
                <input type="text" placeholder="分享给朋友" className="operation-area-input"></input>
            </div>
            <div className="operation-area-item" style={{ width: '44px', textAlign: 'center' }}>
                <i className="iconfont icon-huatong" style={{ fontSize: '22px' }}></i>
            </div>
        </div>
    )
}

const RightArea = () => {
    return (
        <div className="right-area" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '16px' }}>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-mian"></i>
            </div>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-youjian"></i>
            </div>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-shezhi"></i>
            </div>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-huanfu"></i>
            </div>
            <div style={{width:'1px',height:'20px',background:'#F9C5C5',opacity:'0.6'}}></div>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-zuixiaohua"></i>
            </div>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-zoom-out"></i>
            </div>
            <div className="right-area-item no-drag">
                <i className="iconfont icon-guanbi"></i>
            </div>
        </div>
    )

}
function Header() {

    return (
        <header className="app-header draggable">
            <div className="header-title" style={{ marginRight: '40px', color: '#fff', display: 'flex', fontSize: '50px', alignItems: 'center' }}>

                <div style={{ background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', marginRight: '10px', justifyContent: 'center', width: '40px', height: '40px' }}>
                    <i className="icon-CN_NetEasemusic iconfont" style={{ fontSize: '24px', color: '#EA3E3E' }}></i>
                </div>
                <span style={{ fontSize: '24px', letterSpacing: '2px' }}>网易云音乐</span>
            </div>
            <div style={{ display: 'flex',flex:1, alignItems: 'center',justifyContent: 'space-between'}}>
                <OperationArea />
                <RightArea />
            </div>

        </header>
    );
}
export default Header;