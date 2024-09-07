import React, { useEffect, useState } from 'react';
import changhoji1 from './image/changhoji/changhoji1.png';
import changhoji2 from './image/changhoji/changhoji2.png';
import changhoji3 from './image/changhoji/changhoji3.png';
import changhoji4 from './image/changhoji/changhoji4.png';
import changhoji5 from './image/changhoji/changhoji5.png';
import changhoji6 from './image/changhoji/changhoji6.png';
import changhoji7 from './image/changhoji/changhoji7.png';

const changhojiImages = [
    changhoji1,
    changhoji2,
    changhoji3,
    changhoji4,
    changhoji5,
    changhoji6,
    changhoji7,
];

export default function Changhoji() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const newIndex = Math.floor(scrollPosition / 600);
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
        <div style={{ height: '5000px', position: 'relative', overflow: 'hidden', width: '1710px', margin: '0 auto' }}>
            <img
                src={changhojiImages[currentImageIndex]}
                alt="창호지"
                style={{
                    width: '1710px',
                    height: '1069px',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: -1,
                }}
            />
        </div>
    );
}
