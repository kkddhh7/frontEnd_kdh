import React, { useEffect, useState } from 'react';
import background from './assets/background.png';
import character1 from './assets/character1.png';
import effect1 from './assets/effect1.png';

export default function Loading() {
    const [characterPosition, setCharacterPosition] = useState(100);
    const [effectVisible, setEffectVisible] = useState(true);

    // 캐릭터 및 효과 애니메이션
    useEffect(() => {
        const moveElements = () => {
            if (characterPosition > 24) {
                setCharacterPosition(prev => prev - 2);
            } else {
                clearInterval(animationInterval);
            }
        };

        const animationInterval = setInterval(() => {
            moveElements();
        }, 100);

        const effectTimer = setTimeout(() => {
            setEffectVisible(true); 
        }, 1000);

        return () => {
            clearInterval(animationInterval);
            clearTimeout(effectTimer);
        };
    }, [characterPosition, effectPosition]);

    return (
        <div style={{ position: 'relative', height: '1069px', width: '1710px', overflow: 'hidden' }}>
            <img
                src={background}
                alt="Background"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
            />
            <img
                src={character1}
                alt="Character"
                style={{
                    position: 'absolute',
                    top: '480px',
                    left: `${characterPosition}vw`,
                    width: '300px',
                    zIndex: 3,
                    transition: 'left 0.03s',
                }}
            />
            {effectVisible && (
                <img
                    src={effect1}
                    alt="Effect"
                    style={{
                        position: 'absolute',
                        top: '250px',
                        left: `600px`,
                        width: '1400px',
                        zIndex: 1,
                    }}
                />
            )}
        </div>
    );
}
