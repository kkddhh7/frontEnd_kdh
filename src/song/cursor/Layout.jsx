import React from 'react';
import Cursor from './Cursor';

const Layout = ({ children }) => {
  return (
    <div>
      <Cursor />
      {children} {/* 페이지의 컨텐츠가 렌더링되는 곳 */}
    </div>
  );
};

export default Layout;