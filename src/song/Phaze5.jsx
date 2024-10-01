import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../song/phaze5/phaze5_base.css'
import '../song/phaze5/phaze5_img.css'
import '../song/phaze5/phaze5_explain.css'

export default function Fourth() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [imgsVisible, setImgsVisible] = useState(false);
    const [fogVisible, setFogVisible] = useState(false);
    const [animationOn, setAnimationOn] = useState(false);

    const [explainVisible, setExplainVisible] = useState([false, false, false]); // 각 explain이 보일 상태
    const [zeoliteBack, setZeoliteBack] = useState(false); // 비석 뒤로 움직이기 + 작아지기
    const [zeolitesVisible, setZeolitesVisible] = useState(false); // zeolites 이미지 가시성 상태
    const [sinhaScale, setSinhaScale] = useState(1); // sinha의 크기


    useEffect(() => {

        setTimeout(() => {
            setImgsVisible(true);
        }, 1000);

        const handleScroll = (e) => {
          if (animationOn) return; // 상호작용 차단

          e.preventDefault();
    
          const delta = e.deltaY;

          setScrollPosition((prevScrollPosition) => {
            // 스크롤 위치를 업데이트하면서 반대 방향 이동을 허용
            const newScrollPosition = prevScrollPosition + delta;
            if (newScrollPosition < 0) return 0;

            return newScrollPosition; // -600px 이상으로 이동하지 않도록 제한
          });

          // 스크롤 위치에 따른 안개의 투명도 조정
          if(!fogVisible && scrollPosition <= 750) {
            const fogOpacity = 1 - scrollPosition / 500;
            
            document.querySelector('.fog5_1').style.opacity = fogOpacity;
            document.querySelector('.fog5_2').style.opacity = fogOpacity;
          }

          // 스크롤이 500에 도달하면 zeolite와 explain 이미지들 애니메이션 실행
          if (scrollPosition > 750 && !zeoliteBack) {
            setFogVisible(true);
            setAnimationOn(true);
            setZeoliteBack(true);

            for (let i = 0; i < 3; i++) {
              setTimeout(() => {
                setExplainVisible((prevState) => {
                  const newVisible = [...prevState];
                  newVisible[i] = true;
                  return newVisible;
                });
              }, i * 500);
            }
            
            setTimeout(() => setZeolitesVisible(true), 4000); // 2초 후 애니메이션 상태 해제
            setTimeout(() => setAnimationOn(false), 5000); // 2초 후 애니메이션 상태 해제
        }

          // 스크롤이 700에 도달하면 zeolites 이미지가 등장
          if (scrollPosition > 700 && !zeolitesVisible) {
          }

          // sinha 이미지의 이동과 크기 변화
          if (zeolitesVisible) {
            setSinhaScale((nowSinhaScale) => {
                const newSinhaScale = nowSinhaScale + (scrollPosition * 0.001);
                return newSinhaScale;
            });
          }
        };
    
        window.addEventListener("wheel", handleScroll, { passive: false });
    
        return () => {
          window.removeEventListener("wheel", handleScroll);
        };
    }, [scrollPosition, explainVisible, zeoliteBack, zeolitesVisible]);

      return (
        <div className={'fifth-page'}>
            <div className={'content5'}>
                <img src="/images/song/phaze5/background5.png" alt='background' className="background5"/>
                <img src="/images/song/phaze5/fog5_1.png" className={`fog5_1 ${imgsVisible ? 'visible5' : fogVisible ? 'hidden5' : ''}`}/>       
                <img src="/images/song/phaze5/fog5_2.png" className={`fog5_2 ${imgsVisible ? 'visible5' : fogVisible ? 'hidden5' : ''}`}/>
                <img src="/images/song/phaze5/zeolite5.png" className={`zeolite5 ${imgsVisible ? 'visible5' : zeoliteBack ? 'hidden5' : ''}`}/>

                <img src="/images/song/phaze5/explain5_1.png" className={`explain5_1 ${explainVisible[0] ? 'slideIn5' : ''}`}/>
                <img src="/images/song/phaze5/explain5_2.png" className={`explain5_2 ${explainVisible[1] ? 'slideIn5' : ''}`}/>
                <img src="/images/song/phaze5/explain5_3.png" className={`explain5_3 ${explainVisible[2] ? 'slideIn5' : ''}`}/>

                <img src="/images/song/phaze5/zeolites5.png" className={`zeolites5 ${zeolitesVisible ? 'fade-in-up' : ''}`}/>

                <img src="/images/song/phaze5/sinha5_1.png" 
                className={`sinha5_1 ${zeolitesVisible ? 'fade-in-up' : ''}`}
                style={{ transform: `scale(${sinhaScale})` }}
                />
                <img src="/images/song/phaze5/sinha5_2.png" 
                className={`sinha5_2 ${zeolitesVisible ? 'fade-in-up' : ''}`}
                style={{ transform: `scale(${sinhaScale})` }}
                />

            </div>
        </div>
    );
}