import React, { useEffect, useState } from 'react';
import cloudDay1 from './image/cloud/day/cloud_day1.png';
import cloudDay2 from './image/cloud/day/cloud_day2.png';
import cloudDay3 from './image/cloud/day/cloud_day3.png';
import cloudDay4 from './image/cloud/day/cloud_day4.png';
import cloudDay5 from './image/cloud/day/cloud_day5.png';
import cloudEvening1 from './image/cloud/evening/cloud_evening1.png';
import cloudEvening2 from './image/cloud/evening/cloud_evening2.png';
import cloudEvening3 from './image/cloud/evening/cloud_evening3.png';
import cloudEvening4 from './image/cloud/evening/cloud_evening4.png';
import cloudEvening5 from './image/cloud/evening/cloud_evening5.png';
import cloudNight1 from './image/cloud/night/cloud_night1.png';
import cloudNight2 from './image/cloud/night/cloud_night2.png';
import cloudNight3 from './image/cloud/night/cloud_night3.png';
import cloudNight4 from './image/cloud/night/cloud_night4.png';
import cloudNight5 from './image/cloud/night/cloud_night5.png';

const CloudAnimation = ({ currentHour }) => {
    const cloudStyles = [
        { width: '400px', top: '-5%' },
        { width: '400px', top: '16%' },
        { width: '500px', top: '12%' },
        { width: '800px', top: '-10%' },
        { width: '400px', top: '14%' },
    ];

    let cloudImages;
    if (currentHour >= 6 && currentHour < 17) {
        cloudImages = [cloudDay1, cloudDay2, cloudDay3, cloudDay4, cloudDay5];
    } else if (currentHour >= 17 && currentHour < 20) {
        cloudImages = [cloudEvening1, cloudEvening2, cloudEvening3, cloudEvening4, cloudEvening5];
    } else {
        cloudImages = [cloudNight1, cloudNight2, cloudNight3, cloudNight4, cloudNight5];
    }

    const [cloudPositions, setCloudPositions] = useState([200, 200, 1000, 800, 0]);
    const [cloudVisible, setCloudVisible] = useState([true, true, true, true, true]);

    useEffect(() => {
        const moveClouds = () => {
            setCloudPositions(prev => prev.map((pos, index) => {
                const speed = index + 1;
                if (pos >= window.innerWidth) {
                    setCloudVisible(prev => {
                        const newVisibility = [...prev];
                        newVisibility[index] = false;
                        return newVisibility;
                    });
                    setTimeout(() => {
                        setCloudVisible(prev => {
                            const newVisibility = [...prev];
                            newVisibility[index] = true;
                            return newVisibility;
                        });
                    }, 100);
                    return -400;
                }
                return pos + speed;
            }));
        };

        const cloudInterval = setInterval(moveClouds, 100);
        return () => clearInterval(cloudInterval);
    }, []);

    return (
        <>
            {cloudPositions.map((position, index) => (
                <img 
                    key={index} 
                    src={cloudImages[index]} 
                    alt={`구름 ${index + 1}`} 
                    style={{ 
                        position: 'absolute', 
                        top: cloudStyles[index].top, 
                        left: `${position}px`, 
                        width: cloudStyles[index].width, 
                        transition: 'left 0.1s linear', 
                        visibility: cloudVisible[index] ? 'visible' : 'hidden'
                    }} 
                />
            ))}
        </>
    );
};

export default CloudAnimation;