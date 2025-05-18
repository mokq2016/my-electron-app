import React from 'react';
import ItemContainer from '../../components/item-container';
import SwiperContainer from '../../components/swiper-conatiner';
import styles from './Tuijian.module.css';
import img1 from '../../assets/images/jx-tj1.png';
import img2 from '../../assets/images/jx-tj2.png';
import img3 from '../../assets/images/jx-tj3.png';
import img4 from '../../assets/images/jx-tj4.png';
import img5 from '../../assets/images/jx-tj5.png';
import img6 from '../../assets/images/jx-tj1.png';
import img7 from '../../assets/images/jx-tj2.png';
import img8 from '../../assets/images/jx-tj3.png';

import img9 from '../../assets/images/bd-tj1.png';
import img10 from '../../assets/images/bd-tj2.png';
import img11 from '../../assets/images/bd-tj3.png';
import img12 from '../../assets/images/bdjx1.png';
const jxtjList = [img1, img2, img3, img4, img5, img6, img7, img8];
const bdjtList = [img9, img10, img11];
const Tuijian: React.FC = () => (
  <div>
    <ItemContainer title='精选推荐' class='mt-2'>
      <SwiperContainer itemWidth={200} visibleCount={5}>
        <div className={styles.imageContainer}>
          {jxtjList.map((item, index) => (
            <div className={styles.imageItem} key={index}>
              <img src={item} alt="" style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </SwiperContainer>
    </ItemContainer>
    <ItemContainer title='推荐歌单' hasRefresh={false} class='mt-2'>
      <SwiperContainer itemWidth={200} visibleCount={5}>
        <div className={styles.imageContainer}>
          {bdjtList.map((item, index) => (
            <div className={styles.imageItem} key={index}>
              <img src={item} alt="" style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </SwiperContainer>
    </ItemContainer>
    <ItemContainer title='榜单精选' hasRefresh={false} class='mt-2'>
      <div className="flex flex-wrap gap-6 px-[50px]">
        {['热歌榜', '飙升榜', '新歌榜', '原创榜'].map((text, idx) => (
          <div
            key={idx}
            className="w-[calc(50%-12px)] bg-white h-[194px] rounded-[10px] shadow-0md p-6"
          >
            <div className='flex justify-between items-center'>
              <span className='text-[#333] font-semibold text-2xl'>{text}</span>
              <span className='text-[#999] text-sm	'>更新15篇</span>
            </div>
            <main className='flex items-center mt-3'>
              <img src={img12} alt="" className='w-[98px] h-[98px] cursor-pointer'/>
              <div className='flex-1 flex flex-col gap-y-4 ml-3'>
                {[{ name: '四点的海棠花未眠', author: '小王' }, { name: '唯一', author: '小王' }, { name: '于是', author: '邓紫棋' }].map((item, index) => (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='cursor-pointer'>
                      {index + 1}
                      <span className='ml-3'>{item.name}</span>
                      <span className='text-[#A9ADB6]'>-{item.author}</span>
                    </div>
                    <span>新</span>
                  </div>))}
              </div>
            </main>
          </div>
        ))}
      </div>
    </ItemContainer>
  </div>
);

export default Tuijian;