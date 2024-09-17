import React, { useEffect, useState } from 'react';
import '../song/second/second.css'
import '../song/second/second_imgs.css'

export default function NextPage() {

  const [backgroundVisible, setBackgroundVisible] = useState(false)
  const [scrollAction1, setScrollAction1] = useState(false);
  const [imgVisible, setImgVisible] = useState(false); // 이미지 가시성 상태
  const [scrollPosition, setScrollPosition] = useState(0);
  const [explainVisible, setExplainVisible] = useState([false, false, false]); // explain 이미지 가시성 상태
  const [fogOffset, setFogOffset] = useState(0); // fog 이미지의 이동값

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
      setFogOffset((prevOffset) => prevOffset + delta * 0.5); // 0.5 배율로 이동

      setScrollPosition((prevScrollPosition) => {
        // 스크롤 위치를 업데이트하면서 반대 방향 이동을 허용
        const newScrollPosition = prevScrollPosition + delta;
        return Math.max(0, newScrollPosition); // 스크롤 위치가 0보다 작아지지 않도록 제한
      });

      // explain2, explain3, explain4 순차적 등장/숨김
      if (scrollPosition >= 300 && scrollPosition < 600) {
        const index = Math.floor((scrollPosition - 300) / 100);
        const newVisible = [false, false, false];
        for (let i = 0; i <= index; i++) {
          newVisible[i] = true;
        }
        setExplainVisible(newVisible);
      } else if (scrollPosition < 300) {
        setExplainVisible([false, false, false]);
      }

      // 특정 px에 도달하면 imgVisible 변경 (스크롤에 따라 이미지 등장)
    if (scrollPosition > 0) {
      setScrollAction1(true);
    }

    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollPosition]);

  // 특정 구간에서 비율을 계산하여 애니메이션 진행도를 반환하는 함수
  const calculateScrollProgress = (start, end) => {
    if (scrollPosition < start) return 0; // 구간 이전
    if (scrollPosition > end) return 1;   // 구간 이후
    return (scrollPosition - start) / (end - start); // 구간 내 비율 계산
  };

  // birds 이미지의 이동 위치를 계산 (300px ~ 350px 사이)
  const birdsProgress = calculateScrollProgress(50, 400);
  const birdsTransform = `translateX(${birdsProgress * - 400}px)`; // 왼쪽으로 이동

  const explainTransform = (visible) => visible ? 'translateY(0px) scaleY(1)' : 'translateY(-50px) scaleY(0)';


  return (
    <div className="second-page">
      {/* 고정된 화면에서 배경이 서서히 나타남 */}
      <div className="content">
        <img src="images/second/base.png" alt='Base'/>
        <div className={`background ${backgroundVisible ? 'visible' : ''}`}>
          <img src="images/second/background.png" alt='Background'/>
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
          src="images/second/birds.png"
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