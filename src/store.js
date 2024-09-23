// store.js
import { createStore } from 'redux';

// 초기 상태
const initialState = {
    visitedPages: [],
};

// 리듀서
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PAGE':
            return {
                ...state,
                visitedPages: [...new Set([...state.visitedPages, action.payload])], // 중복 제거하여 페이지 추가
            };
        case 'CLEAR_PAGES':
            return {
                ...state,
                visitedPages: [],
            };
        default:
            return state;
    }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
