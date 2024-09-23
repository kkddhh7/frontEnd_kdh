import React, { useEffect, useState } from 'react';
import '../song/fourth/fourth_base.css'
import '../song/fourth/fourth_img.css'

export default function Fourth() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [explainVisible, setExplainVisible] = useState([false, false, false]); // 각 explain이 보일 상태

    const [disableInteraction, setDisableInteraction] = useState(false); // 상호작용 금지 상태
    const [zeoliteBack, setZeoliteBack] = useState(false); // 비석 뒤로 움직이기 + 작아지기
    const [zeolitesVisible, setZeolitesVisible] = useState(false); // zeolites 이미지 가시성 상태

    const [sinhaPosition, setSinhaPosition] = useState(0); // sinha의 위치
    const [sinhaScale, setSinhaScale] = useState(1); // sinha의 크기


    useEffect(() => {
        const handleScroll = (e) => {
          if (disableInteraction) return; // 상호작용 차단

          e.preventDefault();
    
          const delta = e.deltaY;

          setScrollPosition((prevScrollPosition) => {
            // 스크롤 위치를 업데이트하면서 반대 방향 이동을 허용
            const newScrollPosition = prevScrollPosition + delta;
            if (newScrollPosition <= 0) return 0;
            return newScrollPosition;
          });

          // 스크롤 위치에 따른 안개의 투명도 조정
          if(scrollPosition <= 500) {
            const fogOpacity = 1 - scrollPosition / 500;
            document.querySelector('.fog4_1').style.opacity = fogOpacity;
            document.querySelector('.fog4_2').style.opacity = fogOpacity;
          }

          // sinha 이미지의 이동과 크기 변화
          if (scrollPosition >= 500 && scrollPosition <= 1000 && zeolitesVisible) {
            // const sinhaNewPos = (scrollPosition - 500) * 0.5; // 움직일 범위 설정
            const sinhaNewScale = 1 + (scrollPosition - 500) * 0.005; // 크기 변화 설정

            // setSinhaPosition(sinhaNewPos); // 위치 업데이트
            setSinhaScale(sinhaNewScale); // 크기 업데이트
          }

          // 스크롤이 500에 도달하면 zeolite와 explain 이미지들 애니메이션 실행
          if (scrollPosition > 500 && !zeoliteBack) {
            for (let i = 0; i < 3; i++) {
              setTimeout(() => {
                setExplainVisible((prevState) => {
                  const newVisible = [...prevState];
                  newVisible[i] = true;
                  return newVisible;
                });
              }, i * 500);
            }

            setZeoliteBack(true);
          }

          // 스크롤이 700에 도달하면 zeolites 이미지가 등장
          if (scrollPosition > 700 && !zeolitesVisible) {
            setZeolitesVisible(true);
          }
        };
    
        window.addEventListener("wheel", handleScroll, { passive: false });
    

        return () => {
          window.removeEventListener("wheel", handleScroll);

        };
    }, [scrollPosition, explainVisible, zeoliteBack, zeolitesVisible]);

      return (
        <div className={'fourth-page'}>
            <div className={'content4'}>
                <img src="/images/fourth/background4.png" alt='background' className="background4"/>
                <img src="/images/fourth/fog4_1.png" className='fog4_1'/>       
                <img src="/images/fourth/fog4_2.png" className='fog4_2'/>
                <img src="/images/fourth/zeolite.png" className={`zeolite ${zeoliteBack ? 'back' : ''}`}/>

                <img src="/images/fourth/explain5_1.png" className={`explain5_1 ${explainVisible[0] ? 'visible' : ''}`}/>
                <img src="/images/fourth/explain5_2.png" className={`explain5_2 ${explainVisible[1] ? 'visible' : ''}`}/>
                <img src="/images/fourth/explain5_3.png" className={`explain5_3 ${explainVisible[2] ? 'visible' : ''}`}/>

                <img src="/images/fourth/zeolites.png" className={`zeolites ${zeolitesVisible ? 'fade-in-up' : ''}`}/>

                <img src="/images/fourth/sinha_left.png" 
                className={`sinha_left ${zeolitesVisible ? 'fade-in-up' : ''}`}
                style={{ transform: `translateY(${sinhaPosition}px) scale(${sinhaScale})` }}
                />
                <img src="/images/fourth/sinha_right.png" 
                className={`sinha_right ${zeolitesVisible ? 'fade-in-up' : ''}`}
                style={{ transform: `translateY(${sinhaPosition}px) scale(${sinhaScale})` }}
                />

            </div>
        </div>
    );
}