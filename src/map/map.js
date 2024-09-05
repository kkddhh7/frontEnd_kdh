import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './map.css'; 

const images = require.context('./image', false, /\.(png|jpe?g|svg)$/);

export default function Map() {
    const [activeIcon, setActiveIcon] = useState(null);
    const [showInk, setShowInk] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [commentOpacity, setCommentOpacity] = useState(0); 
    const navigate = useNavigate();
  
    const handleIconClick = (path, iconPosition) => {
        setActiveIcon({
            top: iconPosition.top,
            left: iconPosition.left
        });
        setShowInk(false);
        setTimeout(() => {
            setShowInk(true); 
        }, 1000);
    
        setTimeout(() => {
            navigate(path);
        }, 1500);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImages(true);
            const opacityTimer = setInterval(() => {
                setCommentOpacity(prev => {
                    if (prev < 0.8) {
                        return prev + 0.08; 
                    } else {
                        clearInterval(opacityTimer); 
                        return prev; 
                    }
                });
            }, 100); 

            return () => clearInterval(opacityTimer); 
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="custom-cursor">
            <div style={{ position: 'absolute', overflow: 'hidden', height: '1069px', width: '1710px' }}>
                <img src={images('./map.png')} alt="배경" style={{ width: '1710px', height: '1069px', objectFit: 'cover' }} />
    
                {/* 아이콘 배치 */}
                <div style={{ position: 'absolute', top: '56%', left: '44%' }} onClick={() => handleIconClick('/injungjun', { top: '56%', left: '44%' })}>
                    <img src={images('./injungjun_icon.png')} alt="인정전" className="icon-effect" style={{ width: '170px', cursor: 'pointer' }} />
                </div>
    
                <img src={images('./daejojeon_icon.png')} alt="대조전" style={{ position: 'absolute', top: '37%', left: '52%', width: '170px' }} />
    
                <div style={{ position: 'absolute', top: '22%', left: '50%' }} onClick={() => handleIconClick('/yunghwadang', { top: '22%', left: '50%' })}>
                    <img src={images('./yunghwadang_icon.png')} alt="영화당" className="icon-effect" style={{ width: '170px', cursor: 'pointer' }} />
                </div>
    
                <img src={images('./bulomun_icon.png')} alt="불로문" style={{ position: 'absolute', top: '15%', left: '48%', width: '130px' }} />
                <img src={images('./pyeomusa_icon.png')} alt="폄우사" style={{ position: 'absolute', top: '15%', left: '35%', width: '170px' }} />
                <img src={images('./jondeokjeong_icon.png')} alt="존덕정" style={{ position: 'absolute', top: '12%', left: '42%', width: '170px' }} />
                <img src={images('./cheonguijeong_icon.png')} alt="청의정" style={{ position: 'absolute', top: '2%', left: '36%', width: '170px' }} />
    
                <img src={images('./donhwamun_icon.png')} alt="돈화문" style={{ position: 'absolute', top: '64%', left: '52%', width: '190px' }} />
                <img src={images('./geumhomun_icon.png')} alt="금호문" style={{ position: 'absolute', top: '67%', left: '44%', width: '190px' }} />
                <img src={images('./seonjeongjeon_icon.png')} alt="선정전" style={{ position: 'absolute', top: '45%', left: '50%', width: '190px' }} />
    
                <div style={{ position: 'absolute', top: '38%', left: '32%' }} onClick={() => handleIconClick('/juniper', { top: '38%', left: '32%' })}>
                    <img src={images('./juniper_icon.png')} alt="향나무" className="icon-effect" style={{ width: '170px', cursor: 'pointer' }} />
                </div>
                <div style={{ position: 'absolute', top: '56%', left: '68%' }} onClick={() => handleIconClick('/nakseonjae', { top: '56%', left: '68%' })}>
                    <img src={images('./nakseonjae_icon.png')} alt="낙선재" className="icon-effect" style={{ width: '250px', cursor: 'pointer' }} />
                </div>
                <div style={{ position: 'absolute', top: '34%', left: '42%' }} onClick={() => handleIconClick('/buyongji', { top: '34%', left: '42%' })}>
                    <img src={images('./buyongji_icon.png')} alt="부용지" className="icon-effect" style={{ width: '190px', cursor: 'pointer' }} />
                </div>
                
                <img src={images('./kyujanggak_icon.png')} alt="규장각" style={{ position: 'absolute', top: '24%', left: '40%', width: '170px' }} />
    
                {showImages && (
                    <img 
                        src={images('./map_comment.png')}
                        alt="코맨트" 
                        style={{ 
                            position: 'absolute', 
                            top: '10%', 
                            left: '75%', 
                            width: '350px', 
                            opacity: commentOpacity, 
                            transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out' 
                        }} 
                    />
                )}
                
                {activeIcon && (
                    <div className="overlay" style={{ position: 'absolute', top: activeIcon.top, left: activeIcon.left }}>
                        <img src={images('./big_brush.png')} alt="큰 붓" className="big-brush" />
                    </div>
                )}
                {activeIcon && (
                    <div className={`ink-overlay ${showInk ? 'show' : ''}`} style={{ top: activeIcon.top, left: activeIcon.left}}>
                        <img src={images('./ink.png')} alt="잉크" style={{ width: '1200px' }} />
                    </div>
                )}
            </div>
        </div>
    );
}
