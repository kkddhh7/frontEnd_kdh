import React, { useEffect, useState } from 'react';
import '../song/fifth/fifth_base.css'
import '../song/fifth/fifth_img.css'
import '../song/fifth/fifth_img2.css'

export default function Fifth() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [explainVisible, setExplainVisible] = useState([false, false, false, false]); // 각 explain이 보일 상태
    const [animationOn, setAnimationOn] = useState(false);
    const [changeBackground, setChangeBackground] = useState(false);



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
          if (!animationOn && scrollPosition > 0) {
            setAnimationOn(true);
            for (let i = 0; i < 4; i++) {
              setTimeout(() => {
                setExplainVisible((prevState) => {
                  const newVisible = [...prevState];
                  newVisible[i] = true;
                  return newVisible;
                });
              }, i * 500);
            }
            setTimeout(() => setAnimationOn(false), 2000); // 2초 후 애니메이션 상태 해제
          }

          if(!animationOn && delta > 0 && explainVisible.every(v => v === true)) {
            setChangeBackground(true);
          }




        };
    
        window.addEventListener("wheel", handleScroll, { passive: false });
    

        return () => {
          window.removeEventListener("wheel", handleScroll);

        };
    }, [scrollPosition, explainVisible, animationOn, changeBackground]);

      return (
        <div className={'fifth-page'}>
            <div className={'content5'}>
                <img src="/images/fifth/background5_1.png" alt='background' 
                  className="background5_1"/>
                <img src="/images/fifth/background5_2.png" alt='background' 
                  className={`background5_2 ${changeBackground ? 'fadein' : ''}`}/>
            
                <img src="/images/fifth/palace5_1.png" className='palace5_1'/>
                <img src="/images/fifth/palace5_2.png" 
                  className={`palace5_2 ${changeBackground ? 'fadein' : ''}`}/>


                <img src="/images/fifth/explain6_1.png" className={`explain6_1 ${explainVisible[0] ? 'visible2' : ''}`}/>
                <img src="/images/fifth/explain6_2.png" className={`explain6_2 ${explainVisible[1] ? 'visible' : ''}`}/>
                <img src="/images/fifth/explain6_3.png" className={`explain6_3 ${explainVisible[2] ? 'visible' : ''}`}/>
                <img src="/images/fifth/explain6_4.png" className={`explain6_4 ${explainVisible[3] ? 'visible' : ''}`}/>


                <img src="/images/fifth/cursor/cursor1.png" className='cursor5_1'/>
                <img src="/images/fifth/cursor/cursor2.png" className='cursor5_2'/>
                <img src="/images/fifth/cursor/cursor3.png" className='cursor5_3'/>
                <img src="/images/fifth/cursor/cursor4.png" className='cursor5_4'/>
                <img src="/images/fifth/cursor/cursor5.png" className='cursor5_5'/>
            </div>
        </div>
    );
}