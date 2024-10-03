import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCapture } from '../captureComtext'; // Context 경로를 맞춰주세요

export default function CaptureListComponent() {
    const capturedPages = useSelector((state) => state.capturedPages); // Redux 스토어에서 페이지 데이터 가져오기
    // useEffect(() => {
    //     console.log('Capture List Component Rendered. Current Pages:', currentPages);
    // }, [currentPages]);
    

    return (
        <div>
            <h2>Captured Pages</h2>
            <ul>
                {capturedPages.length > 0 ? (
                    capturedPages.map((page, index) => (
                        <li key={index}>{page}</li>
                    ))
                ) : (
                    <li>캡처된 페이지가 없습니다.</li>
                )}
            </ul>
        </div>
    );
}
