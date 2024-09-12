import React from 'react';
import injungjun from './image/injungjun/injungjun.png';
import BackgroundAnimation from './backgroundAnimation';
import book from './image/injungjun/book_injungjun.png'

export default function Injungjun() {
  const handleIconClick = () => {
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <BackgroundAnimation/>
      <img src={injungjun} alt="인정전" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex:3}} onClick={handleIconClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>
      
    </div>
  );
}