import React from 'react';
import juniper from './image/juniper/juniper.png';
import book from './image/juniper/book_juniper.png';
import BackgroundAnimation from './backgroundAnimation';

export default function Juniper() {
  const handleIconClick = () => {
    // 아이콘 클릭 시 동작
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <BackgroundAnimation/>
      <img src={juniper} alt="향나무" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex: 3 }} onClick={handleIconClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>
    </div>
  );
}
