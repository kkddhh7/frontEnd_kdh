import React, { useState } from 'react';
import '../song/101/101_img.css';
import '../song/101/101_base.css';

export default function SelectAppeal() {

  const [images, setImages] = useState([
    '/images/101/appeal1.png',
    '/images/101/appeal2.png',
    '/images/101/appeal3.png',
    '/images/101/appeal4.png',
    '/images/101/appeal5.png',
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(2); // 중앙 이미지의 인덱스 (처음에는 세 번째 이미지)
  const [isRotating, setIsRotating] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(''); // 추가: 회전 방향 상태
  const [rotationAngle, setRotationAngle] = useState(0); // 현재 회전 값을 저장


  // 오른쪽으로 회전하는 함수
  const rotateLeft = () => {
    if (isRotating) return; // 회전 중일 때 클릭 방지
    setIsRotating(true);
    setRotationDirection('left'); // 왼쪽으로 회전하는 방향 설정

    // 배열을 먼저 갱신하여 이미지가 자연스럽게 회전하도록 함
    

    // 회전각을 -72도 추가하고 상태 갱신
    setRotationAngle((prevAngle) => prevAngle + 72);

    // 애니메이션이 완료된 후 중앙 인덱스를 갱신
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 중앙 인덱스 갱신
      setIsRotating(false); // 애니메이션 종료 후 다시 클릭 허용
    }, 1200); // 애니메이션 속도와 일치하는 시간 (1.2초)
  };

  // 오른쪽으로 회전하는 함수
  const rotateRight = () => {
    if (isRotating) return; // 회전 중일 때 클릭 방지
    setIsRotating(true);
    setRotationDirection('left'); // 왼쪽으로 회전하는 방향 설정

    // 배열을 먼저 갱신하여 이미지가 자연스럽게 회전하도록 함
    

    // 회전각을 +72도 추가하고 상태 갱신
    setRotationAngle((prevAngle) => prevAngle - 72);

    // 애니메이션이 완료된 후 중앙 인덱스를 갱신
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // 중앙 인덱스 갱신
      setIsRotating(false); // 애니메이션 종료 후 다시 클릭 허용
    }, 1200);
  };

  return (
    <div className='final-page'>
        <div className='content101'>
            <img src="/images/101/background101.png" alt='background' className="background101"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_1"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_2"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_3"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_4"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_5"/>
            
            <div className="image-container">
            <div
              className={`image-wrapper ${isRotating ? 'rotate' : ''}`}
              style={{ transform: `rotateY(${rotationAngle}deg)` }} // 회전각을 적용
            >                    {images.map((imgSrc, index) => (
                <div
                key={index}
                className={`image ${index === currentIndex ? 'center-image' : ''}`}
                style={index === currentIndex ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }}
              >
                        <img src={imgSrc} alt={`Appeal ${index + 1}`} />
                    </div>
                    ))}
                </div>
            </div>
            <button className="custom-button1" onClick={rotateLeft}>Rotate Left</button>
            <button className="custom-button2" onClick={rotateRight}>Rotate Right</button>
        </div>
    </div>
  );
}
