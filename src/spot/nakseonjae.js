import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nakseonjae from './image/nakseonjae/nakseonjae.png';
import king from './image/nakseonjae/nakseonjae_king.png';
import maid from './image/nakseonjae/nakseonjae_maid.png';
import book from './image/nakseonjae/book_nakseonjae.png';
import changhoji from './image/nakseonjae/nakseonjae_changhoji.png';
import BackgroundAnimation from './backgroundAnimation';
import detail from './image/nakseonjae/nakseonjae_detail.png';
import bookDetail from './image/nakseonjae/nakseonjae_book_detail.png';
import backToMap from './image/nakseonjae/goToMap.png';
import closeBook from './image/nakseonjae/nakseonjae_close_book.png';

export default function Nakseonjae() {
    const [showImages, setShowImages] = useState(false);
    const [shifted, setShifted] = useState(false);
    const [commentOpacity, setCommentOpacity] = useState(0);
    const [showBook, setShowBook] = useState(true);
    const [showBookDetail, setShowBookDetail] = useState(false);
    const navigate = useNavigate();

    const handleChanghojiClick = (path) => {
        setShifted(false);
        setShifted(true);
        setTimeout(() => {
            navigate(path);
        }, 800);
    };

    const handleBookClick = () => {
        setShowBook(false); // 책 아이콘 숨기기
        setShowBookDetail(true); // 책 세부 정보 표시
    };

    const handleBackToMapClick = () => {
        navigate('/map'); // /map으로 이동
    };

    const handleCloseBookClick = () => {
        setShowBookDetail(false); // 책 세부 정보 숨기기
        setShowBook(true); // 책 아이콘 다시 보이기
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShifted(prev => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

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
            <img src={nakseonjae} alt="낙선재" style={{ position: 'absolute', top: 0, left: 0, height: '1069px', width: '1710px', zIndex: 1 }} />
            {showImages && (
                <>
                    <img src={detail} alt="향나무 태그" style={{ position: 'absolute', top: '50px', left: '1500px', width: '100px', zIndex: 3, opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' }} />
                    <img src={king} alt="왕" style={{ position: 'absolute', top: '680px', left: '1350px', width: '170px', opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out', zIndex: 3 }} />
                    <img src={maid} alt="궁녀" style={{ position: 'absolute', top: '680px', left: '1250px', width: '127px', opacity: commentOpacity, transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out', zIndex: 3 }} />
                </>
            )}
            {showBook && (
                <div style={{ position: 'absolute', top: '80%', left: '5%', zIndex: 3 }} onClick={handleBookClick}>
                    <img src={book} alt="서책" style={{ width: '150px', cursor: 'pointer' }} />
                </div>
            )}
            <div style={{ position: 'absolute', top: '617px', left: '388px', zIndex: 3 }} onClick={() => handleChanghojiClick('/nakseonjae/changhoji')}>
                <img src={changhoji} alt="창호지" style={{ width: '169px', cursor: 'pointer', transform: shifted ? 'translateX(45px)' : 'translateX(0)', transition: 'transform 0.7s' }} />
            </div>
            <div style={{ position: 'absolute', top: '617px', left: '334px', zIndex: 3 }} onClick={() => handleChanghojiClick('/nakseonjae/changhoji')}>
                <img src={changhoji} alt="창호지" style={{ width: '169px', cursor: 'pointer', transform: shifted ? 'translateX(-44px)' : 'translateX(0)', transition: 'transform 0.7s' }} />
            </div>
            {showBookDetail && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, height: '1069px', width: '1710px', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }} />
                    <img src={bookDetail} alt="책 세부 정보" style={{ position: 'absolute', top: '520px',  left: '850px', transform: 'translate(-50%, -50%)', width: '1800px', zIndex: 3}}  />
                    <img src={backToMap} alt="지도 돌아가기" style={{ position: 'absolute', top: '810px', left: '350px', cursor: 'pointer', zIndex: 4 }} onClick={handleBackToMapClick} />
                    <img src={closeBook} alt="책 닫기" style={{ position: 'absolute', top: '230px', left: '1270px', cursor: 'pointer', zIndex: 4 }} onClick={handleCloseBookClick} />
                </>
            )}
        </div>
    );
}
