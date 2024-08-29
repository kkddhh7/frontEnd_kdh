import React, { useEffect, useState } from 'react';
import changhoji1 from './image/changhoji/changhoji1.png';
import changhoji2 from './image/changhoji/changhoji2.png';
import changhoji3 from './image/changhoji/changhoji3.png';
import changhoji4 from './image/changhoji/changhoji4.png';
import changhoji5 from './image/changhoji/changhoji5.png';

const changhojiImages = [
    changhoji1,
    changhoji2,
    changhoji3,
    changhoji4,
    changhoji5,
];

export default function Changhoji() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const newIndex = Math.floor(scrollPosition / 800);
        if (newIndex < changhojiImages.length) {
            setCurrentImageIndex(newIndex);
        } else {
            setCurrentImageIndex(changhojiImages.length - 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '5000px', position: 'relative', overflow: 'hidden' }}>
            <img
                src={changhojiImages[currentImageIndex]}
                alt="창호지"
                style={{
                    width: '100%',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            />
            <div style={{ height: '5000px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
               
            </div>
        </div>
    );
}
