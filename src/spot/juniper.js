import React, { useEffect, useState } from 'react';
import juniper from './image/juniper/juniper.png';
import book from './image/juniper/book_juniper.png';
import BackgroundAnimation from './backgroundAnimation';
import detail from './image/juniper/juniper_detail.png';
import bookDetail from './image/juniper/juniper_book_detail.png';
import BackToMap from './image/juniper/backToMap.png';
import CloseBook from './image/juniper/closeBook.png';
import { useNavigate } from 'react-router-dom';

export default function Juniper() {
  const [showImages, setShowImages] = useState(false);
  const [commentOpacity, setCommentOpacity] = useState(0);
  const [showBookDetail, setShowBookDetail] = useState(false); // 책 세부 정보 상태 추가
  const navigate = useNavigate();

  const handleIconClick = () => {
    setShowBookDetail(true); // 책 클릭 시 세부 정보 표시
  };

  const handleBackToMapClick = () => {
    navigate('/map'); // /map으로 이동
  };

  const handleCloseBookClick = () => {
    setShowBookDetail(false); // 책 세부 정보 숨기기
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
      <img src={juniper} alt="향나무" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
      
      {showImages && (
        <img src={detail} alt="향나무 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3, opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
      )}

      <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex: 3 }} onClick={handleIconClick}>
        <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
      </div>

      {/* 책 세부 정보 표시 및 주변 희미하게 처리 */}
      {showBookDetail && (
        <>
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 2 
          }} />
          <img 
            src={bookDetail} 
            alt="책 세부 정보" 
            style={{ 
              position: 'absolute', 
              top: '600px', 
              left: '830px', 
              transform: 'translate(-50%, -50%)', 
              zIndex: 3 
            }} 
          />
          
          {/* BackToMap 이미지 */}
          <img 
            src={BackToMap} 
            alt="지도 돌아가기" 
            style={{ 
              position: 'absolute', 
              top: '838px', 
              left: '312px', 
              cursor: 'pointer', 
              zIndex: 4 
            }} 
            onClick={handleBackToMapClick} 
          />
          
          {/* CloseBook 이미지 */}
          <img 
            src={CloseBook} 
            alt="책 닫기" 
            style={{ 
              position: 'absolute', 
              top: '838px', 
              left: '1120px', 
              cursor: 'pointer', 
              zIndex: 4 
            }} 
            onClick={handleCloseBookClick} 
          />
        </>
      )}
    </div>
  );
}
