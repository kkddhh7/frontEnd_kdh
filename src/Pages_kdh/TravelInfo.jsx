import React from 'react';
import NavigationBar from '../Component_kdh/NavigationBar';
import './TravelInfo.css'

function TravelInfo() {
  return (
    <div>
      <NavigationBar />
      <br></br>
      <div className='travelinfo-title'>창덕궁 여행 정보</div>
      <br></br>
      <div className='travel-content'>
        <div className='travel-item'>0</div>
        <div className='travel-item'>1</div>
        <div className='travel-item'>2</div>
        <div className='travel-item'>3</div>
        <div className='travel-item'>4</div>
        <div className='travel-item'>5</div>
        <div className='travel-item'>6</div>
        <div className='travel-item'>7</div>
        <div className='travel-item'>8</div>
        <div className='travel-item'>9</div>
      </div>
    </div>
  );
}

export default TravelInfo;
