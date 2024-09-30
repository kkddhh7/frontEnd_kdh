import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from './image/capture/icon_background.png';
import captureIcon from './image/capture/capture_icon.png';
import mapIcon from './image/capture/map_icon.png';
import Capture1 from './image/capture/capture1.png';
import Capture2 from './image/capture/capture2.png';
import Capture3 from './image/capture/capture3.png';
import Capture4 from './image/capture/capture4.png';
import Capture5 from './image/capture/capture5.png';

const captures = [Capture1, Capture2, Capture3, Capture4, Capture5];

export default function CaptureComponent() {
    const navigate = useNavigate();
    const [captureIndex, setCaptureIndex] = useState(-1);

    const handleMapClick = () => {
        navigate('/map');
    };

    const handleCaptureClick = () => {
        captures.forEach((_, index) => {
            setTimeout(() => {
                setCaptureIndex(index);
                // 마지막 이미지가 보인 후 1초 후에 숨기기
                if (index === captures.length - 1) {
                    setTimeout(() => {
                        setCaptureIndex(-1); // 모든 캡처 이미지가 보인 후 숨기기
                    }, 1000); // 1초 후 이미지 숨기기
                }
            }, index * 1000); // 각 이미지를 2초 간격으로 표시
        });
    };

    return (
        <>
            <img src={background} alt='아이콘 배경' style={{ position: 'absolute', top: '930px', left: '1500px', width: '160px', zIndex: 2, opacity: 0.8 }} />
            <img src={mapIcon} alt="Map" onClick={handleMapClick} style={{ position: 'absolute', top: '938px', left: '1590px', cursor: 'pointer', zIndex: 2 }} />
            <img src={captureIcon} alt="Capture" onClick={handleCaptureClick} style={{ position: 'absolute', top: '942px', left: '1530px', cursor: 'pointer', zIndex: 2 }} />
            {captureIndex >= 0 && (
                <img
                    src={captures[captureIndex]}
                    alt={`Capture ${captureIndex + 1}`}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        zIndex: 5,
                        transition: 'opacity 0.5s',
                        opacity: 0.9, // 이미지의 투명도를 0.5로 설정
                    }}
                />
            )}
        </>
    );
}
