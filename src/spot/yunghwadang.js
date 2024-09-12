import React, { useEffect, useState } from 'react';
import yunghwadang from './image/yunghwadang/yunghwadang.png';
import ennuch from './image/yunghwadang/yunghwadang_ennuch.png';
import book from './image/yunghwadang/book_yunghwadang.png';
import BackgroundAnimation from './backgroundAnimation';

export default function Yunghwadang() {
    const [showImages, setShowImages] = useState(false);
    const [ennuchPosition, setEnnuchPosition] = useState({ left: '32%' });
    const [showBook, setShowBook] = useState(true);
    const [ennuchOpacity, setEnnuchOpacity] = useState(0); 


    const handleIconClick = () => {
        setEnnuchPosition({ left: '15%' });
        setShowBook(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImages(true);
            const opacityTimer = setInterval(() => {
                setEnnuchOpacity(prev => {
                    if (prev < 1) {
                        return prev + 0.05; 
                    } else {
                        clearInterval(opacityTimer); 
                        return prev; 
                    }
                });
            }, 100); 

            return () => clearInterval(opacityTimer); 
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
            <BackgroundAnimation/>
            <img src={yunghwadang} alt="영화당" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
            
            {showBook && (
                <div style={{ position: 'absolute', top: '75%', left: '5%' ,zIndex:3}} onClick={handleIconClick}>
                    <img src={book} alt="서책" style={{ width: '200px', cursor: 'pointer' }} />
                </div>
            )}
            {showImages && (
                <img 
                    src={ennuch} 
                    alt="내시" 
                    style={{ 
                        position: 'absolute', 
                        top: '40%', 
                        left: ennuchPosition.left, 
                        width: '700px', 
                        opacity: ennuchOpacity, // 불투명도 상태 사용
                        transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' // 서서히 선명해지는 효과와 위치 이동
                    }} 
                />
            )}
        </div>
    );
}
