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
import backgroundDay from './image/background/background_day.png';
import backgroundEvening from './image/background/background_evening.png';
import backgroundNight from './image/background/background_night.png';

const BackgroundAnimation = ({ background }) => {
    const cloudStyles = [
        { width: '400px', top: '-5%' },
        { width: '400px', top: '16%' },
        { width: '500px', top: '12%' },
        { width: '800px', top: '-10%' },
        { width: '400px', top: '14%' },
    ];

    const [cloudImages, setCloudImages] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        switch (background) {
            case 'day':
                setCloudImages([cloudDay1, cloudDay2, cloudDay3, cloudDay4, cloudDay5]);
                setBackgroundImage(backgroundDay);
                break;
            case 'evening':
                setCloudImages([cloudEvening1, cloudEvening2, cloudEvening3, cloudEvening4, cloudEvening5]);
                setBackgroundImage(backgroundEvening);
                break;
            case 'night':
                setCloudImages([cloudNight1, cloudNight2, cloudNight3, cloudNight4, cloudNight5]);
                setBackgroundImage(backgroundNight);
                break;
            default:
                setCloudImages([]);
                setBackgroundImage('');
                break;
        }
    }, [background]);

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
            <img src={backgroundImage} alt="배경" style={{ position: 'relative', height: '1069px', width: '1710px' }} />
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
                        visibility: cloudVisible[index] ? 'visible' : 'hidden',
                        zIndex: 1
                    }} 
                />
            ))}
        </>
    );
};

export default BackgroundAnimation;
