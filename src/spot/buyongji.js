import React, { useState, useEffect } from 'react';
import buyongji from './image/buyongji/buyongji.png';
import cat1 from './image/buyongji/buyongji_cat_icon1.png';
import cat2 from './image/buyongji/buyongji_cat_icon2.png';
import cat3 from './image/buyongji/buyongji_cat_icon3.png';
import king from './image/buyongji/buyongji_king.png';

export default function Buyongji() {
  const [currentCat, setCurrentCat] = useState(cat1);
  const [isKingVisible, setIsKingVisible] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(true);
  const cats = [cat1, cat2, cat3, cat2]; 
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cats.length; 
      setCurrentCat(cats[currentIndex]); 
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  const handleIconClick = () => {
    // 배경을 연하게 하고 king 이미지를 서서히 나타나게 함
    setIsKingVisible(true);
    setIsCatVisible(false);
  };

  // 각 고양이의 스타일 정의
  const catStyles = {
    cat1: { width: '133px', position: 'absolute', top: '35.8%', left: '55.34%' },
    cat2: { width: '190px', position: 'absolute', top: '35.5%', left: '53.1%' },
    cat3: { width: '180px', position: 'absolute', top: '34.1%', left: '53.75%' },
  };

  const getCurrentCatStyle = () => {
    if (currentCat === cat1) return catStyles.cat1;
    if (currentCat === cat2) return catStyles.cat2;
    if (currentCat === cat3) return catStyles.cat3;
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <img 
        src={buyongji} 
        alt="배경" 
        style={{ 
          width: '1710px', 
          height: '1069px', 
          objectFit: 'cover',
          filter: isKingVisible ? 'brightness(0.5)' : 'brightness(1)', 
          transition: 'filter 0.5s' 
        }} 
      />
  
      {isCatVisible && (
        <div onClick={handleIconClick}>
          <img src={currentCat} alt="고양이" style={getCurrentCatStyle()} />
        </div>
      )}
  
      {isKingVisible && (
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
            transition: 'opacity 10s', // 서서히 나타나는 효과
            animation: 'fadeIn 1s forwards' // 애니메이션 추가
          }} 
        />
      )}
    </div>
  );
}