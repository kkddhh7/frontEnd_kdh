import React, { useEffect, useState } from 'react';
import injungjun from './image/injungjun/injungjun.png';
import BackgroundAnimation from './backgroundAnimation';
import book from './image/injungjun/book_injungjun.png';
import detail from './image/injungjun/injungjun_detail.png';
import bookDetail1 from './image/injungjun/injungjun_book_detail1.png';
import bookDetail2 from './image/injungjun/injungjun_book_detail2.png';
import goToMap from './image/injungjun/goToMap.png';
import nextPage from './image/injungjun/next_page.png';
import { useNavigate } from 'react-router-dom';

export default function Injungjun() {
  const navigate = useNavigate();
  const [showImages, setShowImages] = useState(false);
  const [commentOpacity, setCommentOpacity] = useState(0);
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [showSecondBookDetail, setShowSecondBookDetail] = useState(false); // 두 번째 책 세부 정보 상태 추가

  const handleBookClick = () => {
    setShowBookDetail(true); // 첫 번째 책 세부 정보 표시
  };

  const handleBackToMapClick = () => {
    navigate('/map'); // /map으로 이동
  };

  const handleNextPageClick = () => {
    setShowSecondBookDetail(true); // 두 번째 책 세부 정보 표시
    setShowBookDetail(false); // 첫 번째 책 세부 정보 숨기기
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
      <BackgroundAnimation />
      <img src={injungjun} alt="인정전" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex: 3 }} onClick={handleBookClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>
      {showImages && (
        <img src={detail} alt="인정전 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3, opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
      )}
      {showBookDetail && (
        <>
          <img 
            src={bookDetail1} 
            alt="책 세부 정보" 
            style={{ 
              position: 'absolute', 
              top: '500px', 
              left: '850px', 
              transform: 'translate(-50%, -50%)', 
              width: '1400px', 
              zIndex: 3 
            }} 
          />
          <img 
            src={goToMap} 
            alt="지도 가기" 
            style={{ 
              position: 'absolute', 
              top: '800px', 
              left: '350px', 
              cursor: 'pointer', 
              zIndex: 4 
            }} 
            onClick={handleBackToMapClick} 
          />
          <img 
            src={nextPage} 
            alt="책장 넘기기" 
            style={{ 
              position: 'absolute', 
              top: '800px', 
              left: '1200px', 
              cursor: 'pointer', 
              zIndex: 4 
            }} 
            onClick={handleNextPageClick} 
          />
        </>
      )}
      {showSecondBookDetail && (
        <>
        <img 
          src={bookDetail2} 
          alt="두 번째 책 세부 정보" 
          style={{ 
            position: 'absolute', 
            top: '500px', 
            left: '850px', 
            transform: 'translate(-50%, -50%)', 
            width: '1400px', 
            zIndex: 3 
          }} 
        />
        <img 
            src={goToMap} 
            alt="지도 가기" 
            style={{ 
              position: 'absolute', 
              top: '800px', 
              left: '350px', 
              cursor: 'pointer', 
              zIndex: 4 
            }} 
            onClick={handleBackToMapClick} 
          />
          </>
      )}
    </div>
  );
}
