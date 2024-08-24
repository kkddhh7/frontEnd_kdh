import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import buyongji from './image/buyongji.png';
import cat1 from './image/buyongji_cat_icon1.png';
import cat2 from './image/buyongji_cat_icon2.png';
import cat3 from './image/buyongji_cat_icon3.png';

export default function Buyongji() {
  const navigate = useNavigate();
  const [currentCat, setCurrentCat] = useState(cat1); // 초기 상태로 cat1을 설정
  const cats = [cat1, cat2, cat3, cat2]; // 사용할 고양이 이미지 배열
  let currentIndex = 0; // 현재 인덱스

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cats.length; // 인덱스 증가, 배열 길이로 나눈 나머지
      setCurrentCat(cats[currentIndex]); // 현재 고양이 이미지 변경
    }, 800); // 0.8초마다 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  const handleIconClick = (path) => {
    navigate(path);
  };

  // 각 고양이의 스타일 정의
  const catStyles = {
    cat1: { width: '150px', position: 'absolute', top: '35%', left: '55%' },
    cat2: { width: '190px', position: 'absolute', top: '35.5%', left: '53.1%' },
    cat3: { width: '180px', position: 'absolute', top: '34.2%', left: '53.8%' },
  };

  // 현재 고양이에 맞는 스타일 선택
  const getCurrentCatStyle = () => {
    if (currentCat === cat1) return catStyles.cat1;
    if (currentCat === cat2) return catStyles.cat2;
    if (currentCat === cat3) return catStyles.cat3;
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <img src={buyongji} alt="배경" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

      <div onClick={() => handleIconClick('/buyongji/cat')}>
        <img src={currentCat} alt="고양이" style={getCurrentCatStyle()} />
      </div>
    </div>
  );
}