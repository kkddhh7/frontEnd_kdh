import React, { useState, useEffect } from 'react';
import '../song/101/101_img.css';
import '../song/101/101_base.css';
import '../song/101/101_img2.css';

export default function SelectAppeal() {

  const [images, setImages] = useState([
    '/images/101/appeal1.png',
    '/images/101/appeal2.png',
    '/images/101/appeal3.png',
    '/images/101/appeal4.png',
    '/images/101/appeal5.png',
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0); // 중앙 이미지의 인덱스 (처음에는 세 번째 이미지)
  const [isRotating, setIsRotating] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(''); // 추가: 회전 방향 상태
  const [rotationAngle, setRotationAngle] = useState(0); // 현재 회전 값을 저장
  const [isClicked, setIsClicked] = useState(false); // 클릭 여부 관리
  const [showOpenImage, setShowOpenImage] = useState(false); // 추가: appeal_open101 이미지 표시 여부

  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 추적
  const [maxAppealScroll, setMaxAppealScroll] = useState(false); // appeal_open101의 최대 이동 상태
  const [opacity1, setOpacity1] = useState(0); // 이미지1의 opacity 값
  const [opacity2, setOpacity2] = useState(0); // 이미지2의 opacity 값
  
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // 중앙 인덱스 갱신
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 중앙 인덱스 갱신

      setIsRotating(false); // 애니메이션 종료 후 다시 클릭 허용
    }, 1200);
  };

  const handleClick = () => {
    setIsClicked(true); // 클릭 시 상태 변화
    setTimeout(() => {
        setIsClicked(false);
        setShowOpenImage(true);  // appeal_open101 이미지를 표시
        setScrollPosition(0);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = (e) => {
    //   if (disableInteraction) return; // 상호작용 차단

      e.preventDefault();

      const delta = e.deltaY;

      setScrollPosition((prevScrollPosition) => {
        // 스크롤 위치를 업데이트하면서 반대 방향 이동을 허용
        const newScrollPosition = prevScrollPosition + delta;
        if (newScrollPosition <= 0) return 0;
        return newScrollPosition;
      });

      // appeal_open101 이미지 이동: 1510px까지는 자유롭게 이동, 그 이후에는 고정
      if (scrollPosition < 1510) {
        document.querySelector('.appeal-open101').style.transform = `translateX(${Math.min(scrollPosition, 1510)}px)`;
      } else {
        document.querySelector('.appeal-open101').style.transform = `translateX(1510px)`; // 1510px에서 고정
      }

     // 글자들 등장/사라짐 애니메이션 조절
     if (scrollPosition >= 1510 && scrollPosition <= 3010) {
        setOpacity1((scrollPosition - 1510) / 200); // 0에서 1로 서서히
      } else if (scrollPosition > 3010 && scrollPosition <= 4510) {
        setOpacity1((1910 - scrollPosition) / 200); // 1에서 0으로 서서히
      } else {
        setOpacity1(0); // 그 외 구간에서는 투명
      }
  
      if (scrollPosition >= 3010 && scrollPosition <= 4510) {
        setOpacity2((scrollPosition - 3010) / 200); // 0에서 1로 서서히
      } else if (scrollPosition > 4510) {
        setOpacity2(1); // 1에서 0으로 서서히
      } else {
        setOpacity2(0); // 그 외 구간에서는 투명
      }
  
    };

    window.addEventListener("wheel", handleScroll, { passive: false });


    return () => {
      window.removeEventListener("wheel", handleScroll);

    };
}, [scrollPosition]);

  return (
    <div className='final-page'>
        <div className='content101'>
            <div className={`dark-overlay ${isClicked ? 'active' : ''}`}></div>

            {isClicked && (
                <div className="cloud-overlay">
                    <img src="/images/101/cloud1.png" className="cloud-animate left-cloud1" alt="Cloud1" />
                    <img src="/images/101/cloud1.png" className="cloud-animate left-cloud2" alt="Cloud2" />
                    <img src="/images/101/cloud1.png" className="cloud-animate left-cloud3" alt="Cloud2" />
                    <img src="/images/101/cloud1.png" className="cloud-animate right-cloud1" alt="Cloud2" />
                    <img src="/images/101/cloud1.png" className="cloud-animate right-cloud2" alt="Cloud2" />
                    <img src="/images/101/cloud1.png" className="cloud-animate right-cloud3" alt="Cloud2" />
                </div>
                )
            }

            <img src="/images/101/background101.png" alt='background' className="background101"/>
            
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_1"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_2"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_3"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_4"/>
            <img src="/images/101/cloud1.png" alt='background' className="cloud1_5"/>
            {showOpenImage ? (
                <>
                <img 
                src="/images/101/appeal_open101.png" 
                alt="Appeal Open" 
                className="appeal-open101"
                style={{
                    transition: 'transform 0.2s ease-out',
                }} 
            />
            <img
  src="/images/101/explain101_1.png"
  alt="Image 1"
  className="explain101_1"
  style={{
    opacity: opacity1, // 스크롤에 따라 opacity 조절
    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out', // 자연스러운 애니메이션 적용
  }}
/>

<img
  src="/images/101/explain101_2.png"
  alt="Image 2"
  className="explain101_2"
  style={{
    opacity: opacity2, // 스크롤에 따라 opacity 조절
    transition: 'opacity 0.2s ease-out, transform 0.2s ease-out', // 자연스러운 애니메이션 적용
  }}
/>
        </>
        ) : (
            <>
            <div className="image-container">
            <div
              className={`image-wrapper ${isRotating ? 'rotate' : ''}`}
              style={{ transform: `rotateY(${rotationAngle}deg)` }} // 회전각을 적용
            >                    
                {images.map((imgSrc, index) => (
                <div
                key={index}
                className={`image ${index === currentIndex ? 'center-image' : ''}`}
                style={index === currentIndex ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }}
                onClick={handleClick} // Image click handler
                >
                <img src={imgSrc} alt={`Appeal ${index + 1}`} />
                    </div>
                )
            )}
                </div>
            </div>
            <button className="custom-button1" onClick={rotateLeft}>Rotate Left</button>
            <button className="custom-button2" onClick={rotateRight}>Rotate Right</button>
            </>
        )}
        </div>
    </div>
  );
}
