import React from 'react';
import injungjunDay from './image/injungjun/injungjun_day.png';
import injungjunEvening from './image/injungjun/injungjun_evening.png';
import injungjunNight from './image/injungjun/injungjun_night.png';
import CloudAnimation from './cloudAnimation'; // CloudAnimation 컴포넌트 import

export default function Injungjun() {
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
            <img src={backgroundImage} alt="배경" style={{ width: '100%' }} />
            <CloudAnimation currentHour={currentHour} />
        </div>
    );
}