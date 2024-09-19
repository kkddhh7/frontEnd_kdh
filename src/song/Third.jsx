import React, { useEffect, useState } from 'react';
import '../song/third/third_base.css'
import '../song/third/third_img.css'

export default function Hello() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
          e.preventDefault();
    
          const delta = e.deltaY;
          const newPosition = scrollPosition + delta;

          setScrollPosition(newPosition); // 스크롤 위치 업데이트
        };
    
        window.addEventListener("wheel", handleScroll, { passive: false });
    
        return () => {
          window.removeEventListener("wheel", handleScroll);
        };
      }, [scrollPosition]);

      return (
        <div className={'third-page'}>
            <div className={'content3'}>
                <img src="/images/third/background3.png" alt='background' className="background3"/> 
                <img src="/images/third/explain3/explain3_1.png" className="explain3_1" />
                <img src="/images/third/explain3/explain3_2.png" className='explain3_2'/>       
                <img src="/images/third/explain3/explain3_3.png" className='explain3_3'/>  
                <img src="/images/third/explain3/explain3_4.png" className='explain3_4'/>       

                <img src="/images/third/fog3_1.png" className='fog3_1'/>       
                <img src="/images/third/fog3_2.png" className='fog3_2'/>       
                <img src="/images/third/king3.png" className='king3'/>


                <img src="/images/third/explain4/explain4_1.png" className="explain3_1" />
                <img src="/images/third/explain4/explain4_2.png" className='explain3_2'/>       
                <img src="/images/third/explain4/explain4_3.png" className='explain3_3'/>  
                <img src="/images/third/explain4/explain4_4.png" className='explain3_4'/>  
                <img src="/images/third/explain4/explain4_5.png" className='explain3_4'/>  

                <img src="/images/third/king4.png" className='king3'/>       
                <img src="/images/third/sinha.png" className='king3'/>       
       
                <img src="/images/third/palace3.png" className='palace3'/>       
            </div>
        </div>
    );
}