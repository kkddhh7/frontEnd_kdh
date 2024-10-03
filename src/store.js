// src/store.js
import { createStore } from 'redux';

// 초기 상태
const initialState = {
    capturedPages: JSON.parse(localStorage.getItem('capturedPages')) || [], // 로컬 스토리지에서 불러오기
};

// 리듀서 함수
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAPTURED_PAGE':
            const updatedPages = [...state.capturedPages, action.payload.page];
            localStorage.setItem('capturedPages', JSON.stringify(updatedPages)); // 로컬 스토리지에 저장
            return {
                ...state,
                capturedPages: updatedPages,
            };
        default:
            return state;
    }
};

// 스토어 생성
const store = createStore(pageReducer);

export default store;
