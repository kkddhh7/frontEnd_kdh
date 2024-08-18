import React from 'react';
import { Link } from 'react-router-dom';
import mapImage from './image/map.png';
import Kyujanggak from './image/Kyujanggak_icon.png';
import inkStoneImage from './image/ink_stone_icon.png';
import brushImage from './image/brush_icon.png';
import brushHolderImage from './image/brush_holder_icon.png';


export default function Map() {
  return (
    <div style={{ position: 'relative' }}>
      <img src={mapImage} alt="배경" style={{ width: '100%' }} />
      
      {/* 아이콘 배치 */}
      <Link to="/kyujanggak" style={{ position: 'absolute', top: '30%', left: '32%' }}>
        <img src={Kyujanggak} alt="규장각" style={{ width: '180px', cursor: 'pointer' }} />
      </Link>
      <Link to="/nakseonjae" style={{ position: 'absolute', top: '50%', left: '60%' }}>
        <img src={Kyujanggak} alt="낙선재" style={{ width: '180px', cursor: 'pointer' }} />
      </Link>
      <img src={inkStoneImage} alt="벼루" style={{ position: 'absolute', top: '74%', left: '18%', width: '150px' }} />
      <img src={brushImage} alt="붓" style={{ position: 'absolute', top: '64%', left: '15%', width: '70px' }} />
      <img src={brushHolderImage} alt="붓발" style={{ position: 'absolute', top: '65%', left: '10%', width: '70px' }} />
    </div>
  );
}