import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapImage from './image/map.png';
import Kyujanggak from './image/Kyujanggak_icon.png';
import inkStoneImage from './image/ink_stone_icon.png';
import brushImage from './image/brush_icon.png';
import brushHolderImage from './image/brush_holder_icon.png';
import bigBrush from './image/big_brush.png'; 
import inkImage from './image/ink.png';
import './map.css'; 

export default function Map() {
    const [activeIcon, setActiveIcon] = useState(null);
    const [showInk, setShowInk] = useState(false);
    const navigate = useNavigate();
  
    const handleIconClick = (path, iconPosition) => {
      setActiveIcon(iconPosition);
      setShowInk(false);
      setTimeout(() => {
        setShowInk(true); // 잉크 이미지 보이게 설정
      }, 1000); // 붓 이동 후 잉크 이미지가 1초 후에 보이도록 설정

      setTimeout(() => {
        navigate(path); // 1.5초 후에 화면 전환
      }, 1500); // 잉크 이미지가 보여진 후 0.5초 더 대기
    };

    return (
        <div style={{ position: 'relative' }}>
            <img src={mapImage} alt="배경" style={{ width: '100%' }} />

            {/* 아이콘 배치 */}
            <div style={{ position: 'absolute', top: '66%', left: '37%' }} onClick={() => handleIconClick('/kyujanggak', { top: '66%', left: '37%' })}>
                <img src={Kyujanggak} alt="규장각" style={{ width: '150px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '60%' }} onClick={() => handleIconClick('/nakseonjae', { top: '50%', left: '60%' })}>
                <img src={Kyujanggak} alt="낙선재" style={{ width: '150px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '62%', left: '44%' }} onClick={() => handleIconClick('/injungjun', { top: '62%', left: '44%' })}>
                <img src={Kyujanggak} alt="인정전" style={{ width: '150px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '34%', left: '45%' }} onClick={() => handleIconClick('/buyongji', { top: '34%', left: '45%' })}>
                <img src={Kyujanggak} alt="부용지" style={{ width: '100px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '32%', left: '49%' }} onClick={() => handleIconClick('/chundangdae', { top: '32%', left: '49%' })}>
                <img src={Kyujanggak} alt="춘당대" style={{ width: '100px', cursor: 'pointer' }} />
            </div>
            <img src={inkStoneImage} alt="벼루" style={{ position: 'absolute', top: '74%', left: '18%', width: '150px' }} />
            <img src={brushImage} alt="붓" style={{ position: 'absolute', top: '64%', left: '15%', width: '70px' }} />
            <img src={brushHolderImage} alt="붓발" style={{ position: 'absolute', top: '65%', left: '10%', width: '70px' }} />
            
            {activeIcon && (
                <div className="overlay" style={{ position: 'absolute', top: activeIcon.top, left: activeIcon.left }}>
                    <img src={bigBrush} alt="큰 붓" className="big-brush" />
                </div>
            )}
            {activeIcon && (
                <div className={`ink-overlay ${showInk ? 'show' : ''}`} style={{ top: activeIcon.top, left: activeIcon.left }}>
                    <img src={inkImage} alt="잉크" style={{ width: '160px' }} />
                </div>
            )}
        </div>
    );
}