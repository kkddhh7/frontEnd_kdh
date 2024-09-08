import React from 'react';
import injungjunDay from './image/injungjun/injungjun_day.png';
import injungjunEvening from './image/injungjun/injungjun_evening.png';
import injungjunNight from './image/injungjun/injungjun_night.png';
import CloudAnimation from './cloudAnimation'; // CloudAnimation 컴포넌트 import
import book from './image/injungjun/book_injungjun.png'

export default function Injungjun() {
  const handleIconClick = () => {
  };

  const currentHour = new Date().getHours();
  let backgroundImage;

  if (currentHour >= 6 && currentHour < 17) {
      backgroundImage = injungjunDay;
  } else if (currentHour >= 17 && currentHour < 20) {
      backgroundImage = injungjunEvening;
  } else {
      backgroundImage = injungjunNight;
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <img src={backgroundImage} alt="배경" style={{ position: 'relative', height: '1069px', width: '1710px' }} />
      <div style={{ position: 'absolute', top: '75%', left: '5%' }} onClick={handleIconClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>
      <CloudAnimation currentHour={currentHour} />
    </div>
  );
}