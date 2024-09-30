import React, { useEffect, useState } from 'react';
import injungjun from './image/injungjun/injungjun.png';
import BackgroundAnimation from './backgroundAnimation1';
import book from './image/injungjun/book_injungjun.png';
import detail from './image/injungjun/injungjun_detail.png';
import bookDetail1 from './image/injungjun/injungjun_book_detail1.png';
import bookDetail2 from './image/injungjun/injungjun_book_detail2.png';
import nextPage from './image/injungjun/next_page.png';
import prevPage from './image/injungjun/previous_page.png';
import closeBook from './image/injungjun/injungjun_close_book.png';
import CaptureComponent from './capture1';

export default function Injungjun() {
  const [showImages, setShowImages] = useState(false);
  const [commentOpacity, setCommentOpacity] = useState(0);
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [showBook, setShowBook] = useState(true);
  const [showSecondBookDetail, setShowSecondBookDetail] = useState(false);
  const [background, setBackground] = useState('day');

  const handleBookClick = () => {
    setShowBookDetail(true);
    setShowBook(false);
  };

  const handleNextPageClick = () => {
    setShowSecondBookDetail(true);
    setShowBookDetail(false);
  };

  const handlePrevPageClick = () => {
    setShowSecondBookDetail(false);
    setShowBookDetail(true);
  };

  const handleCloseBookClick = () => {
    setShowBookDetail(false);
    setShowSecondBookDetail(false);
    setShowBook(true);
  };

  const handleBackgroundChange = (time) => {
    setBackground(time);
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
      
      <BackgroundAnimation background={background} />
      <CaptureComponent handleBackgroundChange={handleBackgroundChange} />
      {/* 배경 */}
      <img src={injungjun} alt="인정전" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />

      {/* 서책 아이콘 */}
      {showBook && (
                <div style={{ position: 'absolute', top: '80%', left: '5%', zIndex: 3 }} onClick={handleBookClick}>
                    <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
                </div>
      )}
      {/* 인정전 태그 */}
      {showImages && (
        <img src={detail} alt="인정전 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3, opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
      )}
      {/* 책 내용 1 */}
      {showBookDetail && (
        <>
          <img src={bookDetail1} alt="책 세부 정보" style={{ position: 'absolute', top: '500px', left: '850px', transform: 'translate(-50%, -50%)', width: '1400px', zIndex: 3 }} />
          <img src={nextPage} alt="책장 넘기기" style={{ position: 'absolute', top: '800px', left: '1200px', cursor: 'pointer', zIndex: 4 }} onClick={handleNextPageClick} />
          <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '230px', left: '1270px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
        </>
      )}
      {/* 책 내용 2 */}
      {showSecondBookDetail && (
        <>
        <img src={bookDetail2} alt="두 번째 책 세부 정보" style={{ position: 'absolute', top: '500px', left: '850px', transform: 'translate(-50%, -50%)', width: '1400px', zIndex: 3 }} />
          <img src={prevPage} alt="이전 페이지" style={{ position: 'absolute', top: '800px', left: '350px', cursor: 'pointer', zIndex: 3 }} onClick={handlePrevPageClick}  />
          <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '230px', left: '1270px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
        </>
      )}
    </div>
  );
}
