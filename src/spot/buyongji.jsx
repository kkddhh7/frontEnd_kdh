import React, { useState, useEffect, useRef, useMemo } from 'react';
import buyongji from './image/buyongji/buyongji.png';
import cat1 from './image/buyongji/buyongji_cat_icon1.png';
import cat2 from './image/buyongji/buyongji_cat_icon2.png';
import cat3 from './image/buyongji/buyongji_cat_icon3.png';
import king from './image/buyongji/buyongji_king.png';
import BackgroundAnimation from './backgroundAnimation1';
import book from './image/buyongji/book_buyongji.png';
import detail from './image/buyongji/buyongji_detail.png';
import CatBook from './image/buyongji/buyongji_cat_book.png';
import BookDetail from './image/buyongji/buyongji_book_detail.png';
import closeBook from './image/buyongji/buyongji_close_book.png';
import CaptureComponent from './capture1';

export default function Buyongji() {
  const [currentCat, setCurrentCat] = useState(cat1);
  const [isKingVisible, setIsKingVisible] = useState(false);
  const [isCatVisible, setIsCatVisible] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showImages, setShowImages] = useState(false);
  const [commentOpacity, setCommentOpacity] = useState(0);
  const [showCatBook, setShowCatBook] = useState(false);
  const [showBookDetail, setShowBookDetail] = useState(false); // BookDetail 상태 추가
  const [background, setBackground] = useState('day');

  const cats = useMemo(() => [cat1, cat2, cat3, cat2], []);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % cats.length; 
      setCurrentCat(cats[currentIndex.current]); 
    }, 500); 

    return () => clearInterval(interval);
  }, [cats]);

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
  

  const handleIconClick = () => {
    setIsKingVisible(true);
    setIsCatVisible(false);
    setShowBook(false);
    setShowCatBook(true); // CatBook 표시
  };

  const handleBookClick = () => {
    setShowBook(false);
    setShowBookDetail(true); // BookDetail 표시
  };

  const handleCloseBookClick = () => {
    setShowBookDetail(false); // 책 세부 정보 숨기기
    setShowCatBook(false);
    setIsKingVisible(false);
    setIsCatVisible(true);
    setShowBook(true); // 책 아이콘 다시 보이기
  };

  const handleBackgroundChange = (time) => {
    setBackground(time);
  };

  const catStyles = {
    cat1: { width: '133px', position: 'absolute', top: '359px', left: '958px', zIndex: 3, cursor: 'pointer'},
    cat2: { width: '190px', position: 'absolute', top: '355px', left: '900px', zIndex: 3, cursor: 'pointer' },
    cat3: { width: '180px', position: 'absolute', top: '337px', left: '917px', zIndex: 3, cursor: 'pointer' },
  };

  const getCurrentCatStyle = () => {
    if (currentCat === cat1) return catStyles.cat1;
    if (currentCat === cat2) return catStyles.cat2;
    if (currentCat === cat3) return catStyles.cat3;
  };    

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
      <BackgroundAnimation background={background} />
      <CaptureComponent handleBackgroundChange={handleBackgroundChange} />
      <img src={buyongji} alt="부용지" style={{ position: 'absolute', top: 0, left: 0, width: '1710px', height: '1069px', zIndex: 1, objectFit: 'cover', transition: 'filter 0.5s' }} />

      {showImages && (
        <img src={detail} alt="부용지 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3, opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
      )}

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
              top: '750px', 
              left: '1450px', 
              transform: 'translate(-50%, -50%)', 
              width: '700px', 
              opacity: 1, 
              transition: 'opacity 10s',
              animation: 'fadeIn 1s forwards',
              zIndex: 4 
            }} 
          />

          {/* CatBook 이미지 추가 */}
          {showCatBook && (
            <>
              <img 
                src={CatBook} 
                alt="고양이 책" 
                style={{ 
                  position: 'absolute', 
                  top: '500px', 
                  left: '850px', 
                  transform: 'translate(-50%, -50%)', 
                  width: '1500px', 
                  zIndex: 3 
                }} 
              />
              <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '270px', left: '1280px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
            </>
          )}
        </>
      )}

      {showBookDetail && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 2,
            transition: 'opacity 0.5s',
          }} />
          <img 
            src={BookDetail} 
            alt="책 세부 정보" 
            style={{ 
              position: 'absolute', 
              top: '500px', 
              left: '850px', 
              transform: 'translate(-50%, -50%)', 
              width: '1500px', 
              zIndex: 3 
            }} 
          />
           <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '210px', left: '1300px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
        </>
      )}
    </div>
  );
}
