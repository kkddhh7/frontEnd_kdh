import React, { useEffect, useState } from 'react';
import yunghwadang from './image/yunghwadang/yunghwadang.png';
import ennuch from './image/yunghwadang/yunghwadang_ennuch.png';
import book from './image/yunghwadang/book_yunghwadang.png';
import BackgroundAnimation from './backgroundAnimation';
import bookDetail1 from './image/yunghwadang/yunghwadang_book_detail1.png';
import bookDetail2 from './image/yunghwadang/yunghwadang_book_detail2.png';
import goToMap from './image/yunghwadang/goToMap.png';
import nextPage from './image/yunghwadang/next_page.png';
import closeBook from './image/yunghwadang/yunghwadang_close_book.png';
import detail from './image/yunghwadang/yunghwadang_detail.png';
import CaptureComponent from './capture';
import { useNavigate } from 'react-router-dom';

export default function Yunghwadang() {
    const navigate = useNavigate();
    const [showImages, setShowImages] = useState(false);
    const [ennuchPosition, setEnnuchPosition] = useState({ left: '32%' });
    const [showBook, setShowBook] = useState(true);
    const [ennuchOpacity, setEnnuchOpacity] = useState(0); 
    const [showBookDetail, setShowBookDetail] = useState(false);
    const [showSecondBookDetail, setShowSecondBookDetail] = useState(false); 

    const handleIconClick = () => {
        setEnnuchPosition({ left: '68%' });
        setShowBook(false); // 책 아이콘 숨기기
        setShowBookDetail(true); // 책 세부 정보 표시
    };

    const handleBackToMapClick = () => {
        navigate('/map'); // /map으로 이동
    };

    const handleNextPageClick = () => {
        setShowSecondBookDetail(true); // 두 번째 책 세부 정보 표시
        setShowBookDetail(false); // 첫 번째 책 세부 정보 숨기기
    };

    const handleCloseBookClick = () => {
        setShowBookDetail(false); // 책 세부 정보 숨기기
        setShowSecondBookDetail(false);
        setShowBook(true); // 책 아이콘 다시 보이기
        setEnnuchPosition({ left: '32%' });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImages(true);
            const opacityTimer = setInterval(() => {
                setEnnuchOpacity(prev => {
                    if (prev < 1) {
                        return prev + 0.08; 
                    } else {
                        clearInterval(opacityTimer); 
                        return prev; 
                    }
                });
            }, 100); 

            return () => clearInterval(opacityTimer); 
        }, 800); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '1069px', width: '1710px' }}>
            <BackgroundAnimation />
            <CaptureComponent/>
            <img src={yunghwadang} alt="영화당" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
            
            {showBook && (
                <div style={{ position: 'absolute', top: '75%', left: '5%', zIndex: 3 }} onClick={handleIconClick}>
                    <img src={book} alt="서책" style={{ width: '200px', cursor: 'pointer' }} />
                </div>
            )}
            
            {showImages && (
                <>
                <img src={ennuch} alt="내시" style={{ position: 'absolute', top: '40%', left: ennuchPosition.left, width: '600px', opacity: ennuchOpacity,transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out',zIndex: 4}} />
                <img src={detail} alt="영화당 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3, opacity: ennuchOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
                </>
            )}
            
            {showBookDetail && (
                <>
                    <img src={bookDetail1} alt="책 세부 정보" style={{ position: 'absolute', top: '500px', left: '800px', transform: 'translate(-50%, -50%)', width: '1400px', zIndex: 3 }} />
                    <img src={goToMap} alt="지도 가기" style={{ position: 'absolute', top: '800px', left: '300px', cursor: 'pointer', zIndex: 3 }} onClick={handleBackToMapClick} />
                    <img src={nextPage} alt="책장 넘기기" style={{ position: 'absolute', top: '800px', left: '1150px', cursor: 'pointer', zIndex: 3 }} onClick={handleNextPageClick} />
                    <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '230px', left: '1220px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
                </>
            )}
            
            {showSecondBookDetail && (
                <>
                    <img src={bookDetail2} alt="두 번째 책 세부 정보" style={{ position: 'absolute', top: '500px', left: '800px', transform: 'translate(-50%, -50%)', width: '1400px', zIndex: 3 }} />
                    <img src={goToMap} alt="지도 가기" style={{ position: 'absolute', top: '800px', left: '300px', cursor: 'pointer', zIndex: 4 }} onClick={handleBackToMapClick} />
                    <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '230px', left: '1220px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
                </>
            )}
        </div>
    );
}
