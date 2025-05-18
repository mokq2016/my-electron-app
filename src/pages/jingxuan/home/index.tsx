
import ItemContainer from "@/components/item-container";
import SwiperContainer from "@/components/swiper-conatiner";

import gfgdImg1 from "@/assets/images/gf-gd1.png";
import gfgdImg2 from "@/assets/images/gf-gd2.png";
import gfgdImg3 from "@/assets/images/gf-gd3.png";
import gfgdImg4 from "@/assets/images/gf-gd4.png";
import gfgdImg5 from "@/assets/images/gf-gd1.png";
import gfgdImg6 from "@/assets/images/gf-gd2.png";
import newMusicImg1 from "@/assets/images/new-music1.png";

const gfgdList =[gfgdImg1, gfgdImg2, gfgdImg3, gfgdImg4, gfgdImg5 , gfgdImg6];


const newMusicList = [newMusicImg1, newMusicImg1, newMusicImg1, newMusicImg1, newMusicImg1, newMusicImg1];
function Home() {
  return (
    <>
    <ItemContainer title='官方歌单' hasRefresh={false}>
      <SwiperContainer itemWidth={200} visibleCount={4}>
        <div className='flex gap-x-5 w-full'>
          {gfgdList.map((item, index) => (
            <div className='box-border basis-[calc(25%-16px)] grow-0 shrink-0 max-w-[calc(25%-16px)]' key={index}>
              <img src={item} alt="" style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      </SwiperContainer>
    </ItemContainer>
    <ItemContainer title='最新音乐' hasRefresh={false}>
       <div className='flex gap-x-5 w-full flex-wrap'>
          {newMusicList.map((item, index) => (
            <div className='basis-[calc(50%-16px)' key={index}>
              <img src={item} alt="" className="width-[81px] h-[81px]" />
            </div>
          ))}
        </div>
    </ItemContainer>
    </>
  );
}   
export default Home;