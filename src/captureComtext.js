import React, { createContext, useContext, useState, useEffect } from 'react';

// Context 생성
const CaptureContext = createContext();

// Provider 컴포넌트
export const CaptureProvider = ({ children }) => {
    const [currentPages, setCurrentPages] = useState([]); // 캡처한 페이지 리스트

    // 페이지를 추가하는 함수
    const addPage = (page) => {
        setCurrentPages((prevPages) => {
            const updatedPages = [...prevPages, page];
            localStorage.setItem('currentPages', JSON.stringify(updatedPages)); // 상태를 localStorage에 저장
            return updatedPages;
        });
    };

    // 컴포넌트가 마운트될 때 localStorage에서 상태를 불러오기
    useEffect(() => {
        const storedPages = JSON.parse(localStorage.getItem('currentPages'));
        if (storedPages) {
            setCurrentPages(storedPages);
        }
    }, []);

    // 상태가 변경될 때마다 로그 출력
    useEffect(() => {
        console.log('Current Pages:', currentPages);
    }, [currentPages]);

    return (
        <CaptureContext.Provider value={{ currentPages, addPage }}>
            {children}
        </CaptureContext.Provider>
    );
};

// Context 사용을 위한 커스텀 훅
export const useCapture = () => {
    return useContext(CaptureContext);
};
