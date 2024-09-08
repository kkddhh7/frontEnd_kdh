import React, {} from 'react';
import juniper from './image/juniper/juniper.png';
import book from './image/juniper/book_juniper.png'


export default function Juniper() {
  const handleIconClick = () => {
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <img src={juniper} alt="향나무 배경" style={{ width: '100%' }} />
      <div style={{ position: 'absolute', top: '75%', left: '5%' }} onClick={() => handleIconClick}>
                <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
            </div>
    </div>
  );
}