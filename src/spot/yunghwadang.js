import React, { useEffect, useState } from 'react';
import yunghwadang from './image/yunghwadang.png';
import ennuch from './image/yunghwadang_ennuch.png';
import book from './image/book.png';

export default function Yunghwadang() {
    const [showImages, setShowImages] = useState(false);
    const [ennuchPosition, setEnnuchPosition] = useState({ left: '32%' });
    const [showBook, setShowBook] = useState(true);
    const [ennuchOpacity, setEnnuchOpacity] = useState(0); // 내시의 불투명도 상태 추가

    const handleIconClick = () => {
        setEnnuchPosition({ left: '15%' }); // 서책 클릭 시 내시의 위치 변경
        setShowBook(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImages(true);
            // 불투명도를 점진적으로 증가시키기 위한 타이머 설정
            const opacityTimer = setInterval(() => {
                setEnnuchOpacity(prev => {
                    if (prev < 1) {
                        return prev + 0.05; // 0.1씩 증가
                    } else {
                        clearInterval(opacityTimer); // 최대 불투명도 도달 시 타이머 종료
                        return prev; // 현재 값 반환
                    }
                });
            }, 100); // 0.5초마다 불투명도 증가

            return () => clearInterval(opacityTimer); // 컴포넌트 언마운트 시 타이머 정리
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw' }}>
            <img src={yunghwadang} alt="배경" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
            {showBook && (
                <div style={{ position: 'absolute', top: '40%', left: '70%' }} onClick={handleIconClick}>
                    <img src={book} alt="서책" style={{ width: '350px', cursor: 'pointer' }} />
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
