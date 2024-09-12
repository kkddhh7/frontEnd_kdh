import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nakseonjae from './image/nakseonjae/nakseonjae.png';
import king from './image/nakseonjae/nakseonjae_king.png';
import maid from './image/nakseonjae/nakseonjae_maid.png';
import book from './image/nakseonjae/book_nakseonjae.png';
import changhoji from './image/nakseonjae/nakseonjae_changhoji.png';
import BackgroundAnimation from './backgroundAnimation';

export default function Nakseonjae() {
    const [showImages, setShowImages] = useState(false);
    const [shifted, setShifted] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const navigate = useNavigate();

    const handleIconClick = (path) => {
        navigate(path);
    };

    const handleChanghojiClick = (path) => {
        setShifted(false);
        setShifted(true);
        setTimeout(() => {
            navigate(path);
        }, 800);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImages(true);
            let fadeEffect = setInterval(() => {
                setOpacity(prev => {
                    if (prev >= 1) {
                        clearInterval(fadeEffect);
                        return 1;
                    }
                    return prev + 0.1;
                });
            }, 100);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShifted(prev => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
            <BackgroundAnimation/>
            <img src={nakseonjae} alt="낙선재" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '80%', left: '5%', zIndex:3}} onClick={() => handleIconClick('/nakseonjae/book')}>
                <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '50.5%', left: '20.7%', zIndex:3 }} onClick={() => handleChanghojiClick('/nakseonjae/changhoji')}>
                <img 
                    src={changhoji} 
                    alt="창호지" 
                    style={{ 
                        width: '195px', 
                        cursor: 'pointer', 
                        transform: shifted ? 'translateX(40px)' : 'translateX(0)',
                        transition: 'transform 0.7s'
                    }} 
                />
            </div>
            <div style={{ position: 'absolute', top: '50.5%', left: '17.5%', zIndex:3 }} onClick={() => handleChanghojiClick('/nakseonjae/changhoji')}>
                <img 
                    src={changhoji} 
                    alt="창호지" 
                    style={{ 
                        width: '195px', 
                        cursor: 'pointer', 
                        transform: shifted ? 'translateX(-33px)' : 'translateX(0)',
                        transition: 'transform 0.7s'
                    }} 
                />
            </div>

            {showImages && (
                <>
                    <img 
                        src={king} 
                        alt="왕" 
                        style={{ 
                            position: 'absolute', 
                            top: '65%', 
                            left: '65%', 
                            width: '170px', 
                            opacity: opacity, 
                            transition: 'opacity 0.5s'
                        }} 
                    />
                    <img 
                        src={maid} 
                        alt="궁녀" 
                        style={{ 
                            position: 'absolute', 
                            top: '65%', 
                            left: '60%', 
                            width: '127px', 
                            opacity: opacity, 
                            transition: 'opacity 0.5s'
                        }} 
                    />
                </>
            )}
        </div>
    );
}