import React, { useEffect, useState } from 'react';
import '../song/fifth/fifth_base.css'
import '../song/fifth/fifth_img.css'

export default function Fifth() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [explainVisible, setExplainVisible] = useState([false, false, false, false]); // 각 explain이 보일 상태

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

          // 스크롤이 500에 도달하면 zeolite와 explain 이미지들 애니메이션 실행
          if (scrollPosition > 0) {
            for (let i = 0; i < 4; i++) {
              setTimeout(() => {
                setExplainVisible((prevState) => {
                  const newVisible = [...prevState];
                  newVisible[i] = true;
                  return newVisible;
                });
              }, i * 500);
            }
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
                <img src="/images/fifth/background5_1.png" alt='background' className="background5_1"/>
                <img src="/images/fifth/background5_2.png" alt='background' className="background5_2"/>
            
                <img src="/images/fifth/palace5_1.png" className='palace5_1'/>
                <img src="/images/fifth/palace5_2.png" className='palace5_2'/>


                <img src="/images/fifth/explain6_1.png" className={`explain6_1 ${explainVisible[0] ? 'visible2' : ''}`}/>
                <img src="/images/fifth/explain6_2.png" className={`explain6_2 ${explainVisible[1] ? 'visible' : ''}`}/>
                <img src="/images/fifth/explain6_3.png" className={`explain6_3 ${explainVisible[2] ? 'visible' : ''}`}/>
                <img src="/images/fifth/explain6_4.png" className={`explain6_4 ${explainVisible[3] ? 'visible' : ''}`}/>

            </div>
        </div>
    );
}