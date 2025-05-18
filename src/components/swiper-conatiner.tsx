import React, { useRef, useState, useEffect } from 'react';
import styles from './swiper-container.module.css';

interface SwiperContainerProps {
  children: React.ReactNode;
  itemWidth?: number;
  visibleCount?: number;
}

const SwiperContainer: React.FC<SwiperContainerProps> = ({ children, itemWidth = 200, visibleCount = 5 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // 检查是否可以左右滚动
  const checkScroll = () => {
    const el = containerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  useEffect(() => {
    checkScroll();
  }, [children]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = itemWidth * visibleCount;
      if (direction === 'left') {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
      // 等待滚动动画结束后再检测
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <div className={styles.swiperWrapper}>
      <button
        className={styles.arrowBtn}
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        style={{ color: canScrollLeft ? '#888' : '#ccc' }}
      >
        <svg width="20" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="24,0 8,30 24,60" stroke={canScrollLeft ? "#888" : "#ccc"} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={styles.swiperContainer} ref={containerRef}>
        {children}
      </div>
      <button
        className={styles.arrowBtn}
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        style={{ color: canScrollRight ? '#888' : '#ccc' }}
      >
        <svg width="20" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="8,0 24,30 8,60" stroke={canScrollRight ? "#888" : "#ccc"} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default SwiperContainer;

