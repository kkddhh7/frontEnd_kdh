import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './map.css';

const images = require.context('./assets', false, /.(png|jpe?g|svg)$/);

export default function Map() {
    const [activeIcon, setActiveIcon] = useState(null);
    const [showInk, setShowInk] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [commentOpacity, setCommentOpacity] = useState(0);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const navigate = useNavigate();

    const handleIconClick = (path, iconPosition) => {
        setActiveIcon({
            top: `${parseInt(iconPosition.top) - 250}px`,
            left: `${parseInt(iconPosition.left) - 720}px`
        });
        setShowInk(false);
        setTimeout(() => {
            setShowInk(true);
        }, 100);

        setTimeout(() => {
            navigate(path);
        }, 1500);
    };

    const handleMouseEnter = (icon) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
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

    const musicRef = useRef(null);

    useEffect(() => {
        const music = musicRef.current;

        if (music) {
            // 음소거 상태에서 음악을 자동 재생
            music.muted = true;
            music.play().then(() => {
                // 재생이 시작된 후 짧은 지연 시간 후 음소거 해제
                setTimeout(() => {
                    music.muted = false;
                }, 1000);
            }).catch((error) => {
                console.log('Autoplay was prevented:', error);
            });
        }

        return () => {
            if (music) {
                music.pause();
            }
        };
    }, []);

    return (
        <div>
            <audio ref={musicRef} src={process.env.PUBLIC_URL + '/music/map-music.mp3'} loop />
            <div className="custom-cursor">
                <div style={{ position: 'absolute', overflow: 'hidden', height: '1069px', width: '1710px' }}>
                    <img src={images('./map.png')} alt="배경" style={{ width: '1710px', height: '1069px', objectFit: 'cover', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />

                    {/* 아이콘 배치 */}
                    {[
                        { name: 'injungjun', top: '605px', left: '820px', size: '120px', img: './injungjun_icon.png', tag: './injungjun_tag.png' },
                        { name: 'yunghwadang', top: '310px', left: '915px', size: '125px', img: './yunghwadang_icon.png', tag: './yunghwadang_tag.png' },
                        { name: 'juniper', top: '520px', left: '680px', size: '120px', img: './juniper_icon.png', tag: './juniper_tag.png' },
                        { name: 'nakseonjae', top: '460px', left: '1130px', size: '190px', img: './nakseonjae_icon.png', tag: './nakseonjae_tag.png' },
                        { name: 'buyongji', top: '380px', left: '827px', size: '145px', img: './buyongji_icon.png', tag: './buyongji_tag.png' }
                    ].map(({ name, top, left, size, img, tag }) => (
                        <div
                            className="icon-container"
                            style={{ position: 'absolute', top, left, filter: hoveredIcon !== name && hoveredIcon ? 'blur(5px)' : 'none' }}
                            onMouseEnter={() => handleMouseEnter(name)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleIconClick(`/${name}`, { top, left })}
                            key={name}
                        >
                            <img
                                src={images(img)}
                                alt={name}
                                className="icon-effect"
                                style={{
                                    width: size
                                }}
                            />
                            {hoveredIcon === name && <img src={images(tag)} alt={`${name} 태그`} style={{ position: 'absolute', left: '-40px', top: '10px', zIndex: 3 }} />}
                        </div>
                    ))}

                    {/* 나머지 아이콘 */}
                    <img src={images('./daejojeon_icon.png')} alt="대조전" style={{ position: 'absolute', top: '454px', left: '952px', width: '130px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./bulomun_icon.png')} alt="불로문" style={{ position: 'absolute', top: '257px', left: '848px', width: '120px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./pyeomusa_icon.png')} alt="폄우사" style={{ position: 'absolute', top: '240px', left: '633px', width: '140px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./jondeokjeong_icon.png')} alt="존덕정" style={{ position: 'absolute', top: '190px', left: '754px', width: '145px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./cheonguijeong_icon.png')} alt="청의정" style={{ position: 'absolute', top: '93px', left: '630px', width: '145px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./donhwamun_icon.png')} alt="돈화문" style={{ position: 'absolute', top: '750px', left: '880px', width: '140px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./geumhomun_icon.png')} alt="금호문" style={{ position: 'absolute', top: '710px', left: '703px', width: '145px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./seonjeongjeon_icon.png')} alt="선정전" style={{ position: 'absolute', top: '520px', left: '888px', width: '150px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />
                    <img src={images('./kyujanggak_icon.png')} alt="규장각" style={{ position: 'absolute', top: '310px', left: '732px', width: '140px', filter: hoveredIcon ? 'blur(5px)' : 'none' }} />

                    {/* 마우스 오버 효과 */}
                    {showImages && (
                        <img src={images('./map_comment.png')} alt="코맨트" style={{
                            position: 'absolute',
                            top: '50px',
                            left: '1470px',
                            width: '190px',
                            opacity: commentOpacity,
                            transition: 'opacity 0.5s ease-in-out, left 1.5s ease-in-out',
                            filter: hoveredIcon ? 'blur(5px)' : 'none'
                        }}
                        />
                    )}

                    {/* 클릭 효과 */}
                    {activeIcon && (
                        <div className={`ink-overlay ${showInk ? 'show' : ''}`} style={{ top: activeIcon.top, left: activeIcon.left }}>
                            <img src={images('./ink.png')} alt="잉크" style={{ width: '1200px' }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
