import React, { useEffect, useState } from 'react';
import '../song/thirdAlpha/thirdAlpha_base.css'
import '../song/thirdAlpha/thirdAlpha_img.css'

export default function ThirdAlpha() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [explainVisible, setExplainVisible] = useState([false, false, false, false, false]); // 각 explain이 보일 상태

    useEffect(() => {
        const handleScroll = (e) => {

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
            for (let i = 0; i < 5; i++) {
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
    }, [scrollPosition, explainVisible]);

      return (
        <div className={'thirdAlpha-page'}>
            <div className={'content33'}>
                <img src="/images/thirdAlpha/background33.png" alt='background' className="background33"/>
            
                <img src="/images/thirdAlpha/palace33.png" className='palace33'/>
                <img src="/images/thirdAlpha/fog33_1.png" className='fog33_1'/>
                <img src="/images/thirdAlpha/fog33_2.png" className='fog33_2'/>
                <img src="/images/thirdAlpha/land33.png" className='land33'/>
                <img src="/images/thirdAlpha/wall33.png" className='wall33'/>


                <img src="/images/thirdAlpha/explain33_1.png" className={`explain33_1 ${explainVisible[0] ? 'visible33' : ''}`}/>
                <img src="/images/thirdAlpha/explain33_2.png" className={`explain33_2 ${explainVisible[1] ? 'visible33' : ''}`}/>
                <img src="/images/thirdAlpha/explain33_3.png" className={`explain33_3 ${explainVisible[2] ? 'visible33' : ''}`}/>
                <img src="/images/thirdAlpha/explain33_4.png" className={`explain33_4 ${explainVisible[3] ? 'visible33' : ''}`}/>
                <img src="/images/thirdAlpha/explain33_5.png" className={`explain33_5 ${explainVisible[4] ? 'visible33' : ''}`}/>

            </div>
        </div>
    );
}