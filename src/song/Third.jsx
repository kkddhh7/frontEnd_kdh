import React, { useEffect, useState } from 'react';
import '../song/third/third_base.css'
import '../song/third/third_img.css'
import '../song/third/third_img2.css'

export default function Hello() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [explainVisible, setExplainVisible] = useState([false, false, false, false]); // 각 explain이 보일 상태
    const [explain4Visible, setExplain4Visible] = useState([false, false, false, false, false]); // 각 explain이 보일 상태

    const [animationPlayed, setAnimationPlayed] = useState(false); // 애니메이션이 완료되었는지 여부
    const [palacePosition, setPalacePosition] = useState(0); // palace의 위치
    const [king3Visible, setKing3Visible] = useState(true); // king3의 가시성
    const [king4Visible, setKing4Visible] = useState(false); // king4의 가시성
    const [sinhaPosition, setSinhaPosition] = useState(0); // sinha의 위치
    const [disableInteraction, setDisableInteraction] = useState(false); // 상호작용 금지 상태

    useEffect(() => {
        let scrollTimeout;
        const handleScroll = (e) => {
          if (disableInteraction) return; // 상호작용 차단

          e.preventDefault();
    
          const delta = e.deltaY;

          setScrollPosition((prevScrollPosition) => {

            // 스크롤 위치를 업데이트하면서 반대 방향 이동을 허용
            const newScrollPosition = prevScrollPosition + delta;
            if (newScrollPosition <= 0) return 0;

            // palace의 이동: 좌우로 부드럽게 이동 (최대 -600px까지)
            setPalacePosition((prevPalacePosition) => {
              const newPalacePosition = prevPalacePosition + delta * 0.01;
              if(king4Visible)
                return 600;
              return Math.min(newPalacePosition, 600); // -600px 이상으로 이동하지 않도록 제한
            });
            
            setTimeout(() => {
              // 스크롤이 일정 값 이상일 때 애니메이션 실행
              if (!animationPlayed && newScrollPosition > 0) {
                setAnimationPlayed(true);
                setTimeout(() => setExplainVisible([true, true, true, true]), 0);
              }
            }, 150);

            // 궁궐이 -600px에 도달하면 king3과 explain3들이 사라지기 시작
            if(palacePosition >= 600 && !king4Visible) {
              // setAnimationPlayed(false);
              setExplainVisible([false, false, false, false]);
              setDisableInteraction(true); // 상호작용 차단
              // setTimeout(() => setExplainVisible([true, true, false, false]), 0);
              // setTimeout(() => setExplainVisible([true, false, false, false]), 0);
              // setTimeout(() => setExplainVisible([false, false, false, false]), 0)
              setTimeout(() => setKing3Visible(false), 1000);
                setTimeout(() => {
                  setKing4Visible(true);
                  setTimeout(() => {
                      setDisableInteraction(false); // 애니메이션 종료 후 상호작용 복구
                  }, 3000); // king4Visible 애니메이션이 3초 후 종료
              }, 2000);
            }

            if (newScrollPosition > 600 && king4Visible) {
              for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                  setExplain4Visible((prevState) => {
                    const newVisible = [...prevState]; // 배열 복사
                    newVisible[i] = true; // 특정 인덱스를 true로 설정
                    return newVisible; // 업데이트된 배열을 반환
                  });
                }, i * 250); // 0.25초마다 순차적으로 true로 변경
              }
              setSinhaPosition((prevSinhaPosition) => prevSinhaPosition + delta * 0.05); // 좌우 이동
            }

            return newScrollPosition;
          });
        };
    
        window.addEventListener("wheel", handleScroll, { passive: false });
    

        return () => {
          window.removeEventListener("wheel", handleScroll);

        };
      }, [scrollPosition, palacePosition, animationPlayed, king3Visible, king4Visible, disableInteraction]);

      return (
        <div className={'third-page'}>
            <div className={'content3'}>
                <img src="/images/third/background3.png" alt='background' className="background3"/> 
                <img src="/images/third/explain3/explain3_1.png" className={`explain3_1 ${(animationPlayed && explainVisible[0]) ? 'visible' : (animationPlayed && !explainVisible[0]) ? 'hidden' : ''}`} />
                <img src="/images/third/explain3/explain3_2.png" className={`explain3_2 ${(animationPlayed && explainVisible[1]) ? 'visible' : (animationPlayed && !explainVisible[1]) ? 'hidden' : ''}`} />
                  <img src="/images/third/explain3/explain3_3.png" className={`explain3_3 ${(animationPlayed && explainVisible[2]) ? 'visible' : (animationPlayed && !explainVisible[2]) ? 'hidden' : ''}`} />
                  <img src="/images/third/explain3/explain3_4.png" className={`explain3_4 ${(animationPlayed && explainVisible[3])? 'visible' : (animationPlayed && !explainVisible[3]) ? 'hidden' : ''}`} />

                <img src="/images/third/fog3_1.png" className='fog3_1'/>       
                <img src="/images/third/fog3_2.png" className='fog3_2'/>       
                <img src="/images/third/king3.png" className={`king3 ${king3Visible ? '' : 'fadeout'}`}/>


                <img src="/images/third/explain4/explain4_1.png" className={`explain4_1 ${explain4Visible[0] ? 'visible' : ''}`}/>
                <img src="/images/third/explain4/explain4_2.png" className={`explain4_2 ${explain4Visible[1] ? 'visible' : ''}`}/>
                <img src="/images/third/explain4/explain4_3.png" className={`explain4_3 ${explain4Visible[2] ? 'visible' : ''}`}/>
                <img src="/images/third/explain4/explain4_4.png" className={`explain4_4 ${explain4Visible[3] ? 'visible' : ''}`}/>
                <img src="/images/third/explain4/explain4_5.png" className={`explain4_5 ${explain4Visible[4] ? 'visible' : ''}`}/>
               
                
                <img src="/images/third/king4.png" className={`king4 ${king4Visible ? 'fadein' : ''}`} /> 
                <img src="/images/third/sinha.png" className='sinha' style={{ transform: `translateX(${sinhaPosition}px)` }}/>
                <img src="/images/third/palace3.png" className='palace3' style={{ transform: `translateX(${-palacePosition}px)` }}/>       
            </div>
        </div>
    );
}