import React, { useEffect, useState } from 'react';
import injungjun from './image/injungjun/injungjun.png';
import BackgroundAnimation from './backgroundAnimation';
import book from './image/injungjun/book_injungjun.png'
import detail from './image/injungjun/injungjun_detail.png'

export default function Injungjun() {
  const [showImages, setShowImages] = useState(false);
  const [commentOpacity, setCommentOpacity] = useState(0);

  const handleIconClick = () => {
  };
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowImages(true);
        const opacityTimer = setInterval(() => {
            setCommentOpacity(prev => {
                if (prev < 0.8) {
                    return prev + 0.08;
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
      <img src={injungjun} alt="인정전" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex:3}} onClick={handleIconClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>
      {showImages && (
                    <img src={detail} alt="인정전 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3,opacity: commentOpacity,
                      transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
                )}
      
    </div>
  );
}