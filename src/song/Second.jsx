import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import '../song/second/second.css'
import '../song/second/second_imgs.css'
import '../song/second/explain.css'

export default function NextPage() {

  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false); // 이미지 가시성 상태
  const [scrollPosition, setScrollPosition] = useState(0);
  const [explainVisible, setExplainVisible] = useState([false, false, false]); // explain 이미지 가시성 상태
  const [fogOffset, setFogOffset] = useState(0); // fog 이미지의 이동값
  const [fogHidden, setFogHidden] = useState(false); // fog가 사라졌는지 상태
  const [rightPalaceZoomed, setRightPalaceZoomed] = useState(false); // right-palace 확대 상태



  const birdImages = [
    "/images/second/birds/birds1.png",
    "/images/second/birds/birds2.png",
    "/images/second/birds/birds3.png"
  ];
  const fogMaxOffset = 1500; // fog가 사라지는 기준 (화면에서 벗어나는 시점)

  const [currentBirdImage, setCurrentBirdImage] = useState(birdImages[0]);
  const birdImageIndexRef = useRef(0);
  const navigate = useNavigate(); // For page navigation


  useEffect(() => {
    // 배경 이미지가 1초 후 서서히 나타나도록 설정
    setTimeout(() => {
      setBackgroundVisible(true);
    }, 1000);

    setTimeout(() => {
        setImgVisible(true);
    }, 2000);

    const handleWheel = (e) => {
      // 마우스 휠의 움직임 감지 (위로 스크롤하면 음수, 아래로 스크롤하면 양수)
      const delta = e.deltaY;
      setFogOffset((prevOffset) => {
        const newOffset = prevOffset + delta * 0.5;
        if (newOffset < 0) return 0; // fog가 0보다 작아지지 않도록 제한
        return newOffset;
      });

      setScrollPosition((prevScrollPosition) => {
        // 스크롤 위치를 업데이트하면서 반대 방향 이동을 허용
        const newScrollPosition = prevScrollPosition + delta;
        return Math.max(0, newScrollPosition); // 스크롤 위치가 0보다 작아지지 않도록 제한
      });

      // fog가 화면 밖으로 나가면 explain 이미지를 펼치는 애니메이션 시작
      if (fogOffset >= fogMaxOffset) {
        setFogHidden(true); // fog가 사라졌음을 표시
        setTimeout(() => setExplainVisible([true, false, false]), 200); // 시간차 두고 순차적으로 나타남
        setTimeout(() => setExplainVisible([true, true, false]), 400);
        setTimeout(() => setExplainVisible([true, true, true]), 600);
      }

      // 스크롤이 반대로 돌아오면 다시 말려올라가듯이 숨김
      else if (fogOffset < fogMaxOffset) {
        setFogHidden(false);
        setExplainVisible([false, false, false]); // 다시 숨김
      }

       // explain 이미지가 모두 펼쳐진 이후에 zoom 적용
       if (scrollPosition >= 5500 && !rightPalaceZoomed && explainVisible) {
        setRightPalaceZoomed(true); // right-palace 확대
        setTimeout(() => {
          navigate("/third"); // Redirect to another page after zoom
        }, 2000); // Wait for the zoom to complete (adjust time as needed)
      }

    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollPosition, fogOffset, rightPalaceZoomed]);

  useEffect(() => {
    // birds 이미지 교차 애니메이션: 3개의 이미지가 200ms마다 변경
    const birdInterval = setInterval(() => {
      birdImageIndexRef.current = (birdImageIndexRef.current + 1) % birdImages.length;
      setCurrentBirdImage(birdImages[birdImageIndexRef.current]);
    }, 500); // 200ms마다 이미지 변경

    return () => clearInterval(birdInterval);
  }, []);

  // birds 이미지의 이동 위치를 계산 (300px ~ 350px 사이)
  const birdsProgress = scrollPosition > 50 ? (scrollPosition - 50) / 400 : 0;
  const birdsTransform = `translateX(${birdsProgress * - 400}px)`; // 왼쪽으로 이동

  const explainTransform = (visible) => visible ? 'translateY(0px) scaleY(1)' : 'translateY(-50px) scaleY(0)';


  return (
    <div className="second-page">
      {/* 고정된 화면에서 배경이 서서히 나타남 */}
      <div className={`content ${rightPalaceZoomed ? 'zoom-view' : ''}`}>
        <img src="images/second/base.png" alt='Base'/>
        <div className={`background ${backgroundVisible ? 'visible' : ''}`}>
          <img 
          src="images/second/background.png" 
          alt='Background'/>
        </div>    

        <img
          src="images/second/land.png"
          alt="land"
          className={`scroll-img land ${imgVisible ? 'visible' : ''}`}
        />
        <img
          src="images/second/palace_right.png"
          alt="palace_right"
          className={`scroll-img palace ${imgVisible ? 'visible' : ''}`}
        />
        <img
          src={currentBirdImage}
          alt="bird"
          className={`scroll-img birds ${imgVisible ? 'visible' : ''}`}
          style={{ transform: birdsTransform }}
        />
        <img
          src="images/second/fog1.png"
          alt="fog1"
          className={`scroll-img fog1 ${imgVisible ? 'visible' : ''}`}
          style={{ transform: `translateX(${fogOffset}px)` }} // 오른쪽으로 이동
        />
        <img
          src="images/second/fog2.png"
          alt="fog2"
          className={`scroll-img fog2 ${imgVisible ? 'visible' : ''}`}
          style={{ transform: `translateX(${-fogOffset}px)` }} // 왼쪽으로 이동
        />
        <img
          src="images/second/water.png"
          alt="water"
          className={`scroll-img water ${imgVisible ? 'visible' : ''}`}
        />
        <img
          src="images/second/explain1.png"
          alt="explain1"
          className={`scroll-img explain1 ${imgVisible ? 'visible' : ''}`}
        />
         {/* explain2, explain3, explain4 순차적 등장 */}
         <img
          src="images/second/explain2.png"
          alt="explain2"
          className={`scroll-img2 explain2 ${explainVisible[0] ? 'visible' : ''}`}
          style={{ transform: explainTransform(explainVisible[0]) }}        
          />
        <img
          src="images/second/explain3.png"
          alt="explain3"
          className={`scroll-img2 explain3 ${explainVisible[1] ? 'visible' : ''}`}
          style={{ transform: explainTransform(explainVisible[1]) }}
        />
        <img
          src="images/second/explain4.png"
          alt="explain4"
          className={`scroll-img2 explain4 ${explainVisible[2] ? 'visible' : ''}`}
          style={{ transform: explainTransform(explainVisible[2]) }}
        />
      </div>
    </div>
  );
}