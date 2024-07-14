import React from 'react';
import NavigationBar from '../Component_kdh/NavigationBar';
import './EventInfo.css'

function EventInfo() {
  return (
    <div>
      <NavigationBar />
      <br></br>
      <div className='eventinfo-title'>창덕궁 행사 정보</div>
      <br></br>
      <div className='event-content'>
        <div className='event-item'>0</div>
        <div className='event-item'>1</div>
        <div className='event-item'>2</div>
        <div className='event-item'>3</div>
        <div className='event-item'>4</div>
        <div className='event-item'>5</div>
        <div className='event-item'>6</div>
        <div className='event-item'>7</div>
        <div className='event-item'>8</div>
        <div className='event-item'>9</div>
      </div>
    </div>
  );
}

export default EventInfo;
