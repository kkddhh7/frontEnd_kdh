import React, { useState, useEffect, useRef, useMemo } from 'react';
import buyongji from './image/buyongji/buyongji.png';
import cat1 from './image/buyongji/buyongji_cat_icon1.png';
import cat2 from './image/buyongji/buyongji_cat_icon2.png';
import cat3 from './image/buyongji/buyongji_cat_icon3.png';
import king from './image/buyongji/buyongji_king.png';
import BackgroundAnimation from './backgroundAnimation';
import book from './image/buyongji/book_buyongji.png';

export default function Buyongji() {
  const [currentCat, setCurrentCat] = useState(cat1);
  const [isKingVisible, setIsKingVisible] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(true);
  const [showBook, setShowBook] = useState(true);
  
  const cats = useMemo(() => [cat1, cat2, cat3, cat2], []);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % cats.length; 
      setCurrentCat(cats[currentIndex.current]); 
    }, 500); 

    return () => clearInterval(interval);
  }, [cats]);

  const handleIconClick = () => {
    setIsKingVisible(true);
    setIsCatVisible(false);
  };

  const handleBookClick = () => {
    setShowBook(false);
  };

  const catStyles = {
    cat1: { width: '133px', position: 'absolute', top: '359px', left: '958px', zIndex: 3 },
    cat2: { width: '190px', position: 'absolute', top: '355px', left: '900px', zIndex: 3 },
    cat3: { width: '180px', position: 'absolute', top: '337px', left: '917px', zIndex: 3 },
  };

  const getCurrentCatStyle = () => {
    if (currentCat === cat1) return catStyles.cat1;
    if (currentCat === cat2) return catStyles.cat2;
    if (currentCat === cat3) return catStyles.cat3;
  };    

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <BackgroundAnimation />
      <img src={buyongji} alt="부용지" style={{ position: 'absolute', top: 0, left: 0, width: '1710px', height: '1069px', zIndex: 1, objectFit: 'cover', transition: 'filter 0.5s' }} />

      {isCatVisible && (
        <div onClick={handleIconClick}>
          <img src={currentCat} alt="고양이" style={getCurrentCatStyle()} />
        </div>
      )}

      {showBook && (
        <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex: 3 }} onClick={handleBookClick}>
          <img src={book} alt="서책" style={{ width: '180px', cursor: 'pointer' }} />
        </div>
      )}

      {isKingVisible && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 검정색
            zIndex: 2,
            transition: 'opacity 0.5s',
          }} />
          <img 
            src={king} 
            alt="왕" 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '30%', 
              transform: 'translate(-50%, -50%)', 
              width: '1000px', 
              opacity: 1, 
              transition: 'opacity 10s',
              animation: 'fadeIn 1s forwards',
              zIndex: 3 
            }} 
          />
        </>
      )}
    </div>
  );
}
