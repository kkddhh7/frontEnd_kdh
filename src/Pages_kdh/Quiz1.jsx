import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz1.css';

function Quiz1() {
    const [answer, setAnswer] = useState(''); // 정답 상태 관리
    const [isCorrect, setIsCorrect] = useState(null); // 정답 여부 관리
    const [showModal, setShowModal] = useState(false); // 모달 표시 여부

    // 정답 확인 함수
    const checkAnswer = () => {
        const correctAnswers = ['화재', '불']; // 복수 정답
        if (correctAnswers.includes(answer.trim())) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setShowModal(true); // 답을 제출하면 모달 표시
    };

    const closeModal = () => {
        setShowModal(false); // 모달 닫기
    };

    // // x 버튼 클릭 시 페이지 이동
    // const handleCloseClick = () => {
    //     window.location.href = 'http://localhost:3000/scrolldownpage#quiz'; // 직접 해시 링크로 이동
    // };

    return (
        <div className="quiz1">
            <div className='quiz-nav'>
                <img src={process.env.PUBLIC_URL + '/logo-horizontal.png'} alt="logo-h" className="logo-h" />

                <div className='nbutton-container'>
                    <a href="#event-info">행사정보</a>
                    <a href="#palace-tour" className="now-link">궁궐 여행 정보</a>
                    <div className="link-with-check">
                        <img src={process.env.PUBLIC_URL + '/nav-check.png'} alt="quiz-check" className="quiz-check" />
                        <a href="#quiz" className="now-link">퀴즈 풀기</a>
                    </div>
                    <a href="#photo-album">스팟 사진첩</a>
                </div>
            </div>

            <img src={process.env.PUBLIC_URL + '/cloud.png'} alt="qcloud1" className="qcloud1" />
            <img src={process.env.PUBLIC_URL + '/cloud2.png'} alt="qcloud2" className="qcloud2" />
            <img src={process.env.PUBLIC_URL + '/cloud2.png'} alt="qcloud3" className="qcloud3" />

            <img src={process.env.PUBLIC_URL + '/quiz1-group.png'} alt="duru" className="duru" />
            <div className='paper'>
                <Link to="/scrolldownpage#quiz">
                    <button className="close-paper-btn">X</button>
                </Link>
                {/* <button className="close-paper-btn" onClick={handleCloseClick}>X</button> */}
                <div className='quiz-container'>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="적어주세요"
                        className="answer-input"
                    />
                    <button onClick={checkAnswer} className="check-answer-btn"></button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <button onClick={closeModal} className="close-btn">&times;</button>
                        {isCorrect ? (
                            <img src={process.env.PUBLIC_URL + '/correct1.png'} alt="정답" />
                        ) : (
                            <img src={process.env.PUBLIC_URL + '/wrong1.png'} alt="오답" />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz1;