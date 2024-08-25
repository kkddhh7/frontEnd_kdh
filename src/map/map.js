import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './map.css'; 

const images = require.context('./image', false, /\.(png|jpe?g|svg)$/);

export default function Map() {
    const [activeIcon, setActiveIcon] = useState(null);
    const [showInk, setShowInk] = useState(false);
    const navigate = useNavigate();
  
    const handleIconClick = (path, iconPosition) => {
      setActiveIcon(iconPosition);
      setShowInk(false);
      setTimeout(() => {
        setShowInk(true); 
      }, 1000);

      setTimeout(() => {
        navigate(path);
      }, 1500);
    };

    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw' }}>
      <img src={images('./map.png')} alt="배경" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* 아이콘 배치 */}
            <div style={{ position: 'absolute', top: '54%', left: '44%' }} onClick={() => handleIconClick('/injungjun', { top: '54%', left: '44%' })}>
                <img src={images('./injungjun_icon.png')} alt="인정전" className="icon-effect" style={{ width: '220px', cursor: 'pointer' }} />
            </div>
            
            <img src={images('./daejojeon_icon.png')} alt="대조전" style={{ position: 'absolute', top: '42%', left: '52%', width: '220px' }} />

            <div style={{ position: 'absolute', top: '24%', left: '45%' }} onClick={() => handleIconClick('/yunghwadang', { top: '24%', left: '45%' })}>
                <img src={images('./yunghwadang_icon.png')} alt="영화당"className="icon-effect" style={{ width: '220px', cursor: 'pointer' }} />
            </div>

            <img src={images('./bulomun_icon.png')} alt="불로문" style={{ position: 'absolute', top: '15%', left: '47%', width: '180px' }}/>

            <img src={images('./pyeomusa_icon.png')} alt="폄우사" style={{ position: 'absolute', top: '13%', left: '29%', width: '220px' }} />

            <img src={images('./jondeokjeong_icon.png')} alt="존덕정" style={{ position: 'absolute', top: '10%', left: '40%', width: '220px' }} />

            <img src={images('./cheonguijeong_icon.png')} alt="청의정" style={{ position: 'absolute', top: '2%', left: '34%', width: '220px' }} />

            <img src={images('./donhwamun_icon.png')} alt="돈화문" style={{ position: 'absolute', top: '68%', left: '53%', width: '220px' }} />

            <img src={images('./geumhomun_icon.png')} alt="금호문" style={{ position: 'absolute', top: '73%', left: '43%', width: '220px' }} />

            <img src={images('./seonjeongjeon_icon.png')} alt="선정전" style={{ position: 'absolute', top: '53%', left: '57%',width: '220px' }} />

            <div style={{ position: 'absolute', top: '40%', left: '34%' }} onClick={() => handleIconClick('/juniper', { top: '40%', left: '34%' })}>
                <img src={images('./juniper_icon.png')} alt="향나무" className="icon-effect" style={{ width: '220px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '51%', left: '66%' }} onClick={() => handleIconClick('/nakseonjae', { top: '58%', left: '70%' })}>
                <img src={images('./nakseonjae_icon.png')} alt="낙선재" className="icon-effect" style={{ width: '350px', cursor: 'pointer' }} />
            </div>
            <div style={{ position: 'absolute', top: '36%', left: '43%' }} onClick={() => handleIconClick('/buyongji', { top: '36%', left: '43%' })}>
                <img src={images('./buyongji_icon.png')} alt="부용지" className="icon-effect" style={{ width: '240px', cursor: 'pointer' }} />
            </div>
            
            <img src={images('./kyujanggak_icon.png')} alt="규장각" style={{ position: 'absolute', top: '24%', left: '33%', width: '220px' }} />

            {/* <img src={images('./ink_stone_icon.png')} alt="벼루" style={{ position: 'absolute', top: '70%', left: '18%', width: '200px' }} />
            <img src={images('./brush_icon.png')} alt="붓" style={{ position: 'absolute', top: '64%', left: '15%', width: '70px' }} />
            <img src={images('./brush_holder_icon.png')} alt="붓발" style={{ position: 'absolute', top: '65%', left: '10%', width: '70px' }} /> */}
            
            {activeIcon && (
                <div className="overlay" style={{ position: 'absolute', top: activeIcon.top, left: activeIcon.left }}>
                    <img src={images('./big_brush.png')} alt="큰 붓" className="big-brush" />
                </div>
            )}
            {activeIcon && (
                <div className={`ink-overlay ${showInk ? 'show' : ''}`} style={{ top: activeIcon.top, left: activeIcon.left }}>
                    <img src={images('./ink.png')} alt="잉크" style={{ width: '160px' }} />
                </div>
            )}
        </div>
    );
}