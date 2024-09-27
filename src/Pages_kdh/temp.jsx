// import React from 'react';
// import './ScrollDownPage.css';

// function ScrollDownPage() {
//     return (
//         <div className="App">
//             <div id="info" className="section info">
//                 <h1>궁궐 스팟</h1>
//             </div>

//             <div className="section info-event"></div>
//             <div className="section info-event2"></div>

//             <div id="event-info" className="section">
//                 <div className='event-nav'>
//                     <img src={process.env.PUBLIC_URL + '/comehere-logo.png'} alt="Come Here Logo" className="logo" />
//                     <img src={process.env.PUBLIC_URL + '/name.png'} alt="name" className="name" />

//                     <div className='nbutton-container'>
//                         <a href="#event-info" className="now-link">행사정보</a>
//                         <a href="#palace-tour">궁궐 여행 정보</a>
//                         <a href="#quiz">퀴즈 풀기</a>
//                         <a href="#photo-album">스팟 사진첩</a>
//                     </div>
//                 </div>

//                 <div className='event-content'>
//                     <div className='event-title'>
//                         <h1>창덕궁 행사 정보</h1>
//                         <div>창덕궁에서 진행하는 재미있는 행사를 소개합니다!</div>
//                     </div>
//                     <div className='event-items-container'>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event1.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event2.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event3.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event1.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event2.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event3.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event1.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event2.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                         <div className='event-item'>
//                             <img src={process.env.PUBLIC_URL + '/event3.png'} alt="Event Image" z />
//                             <div className="overlay">
//                                 <div className="text">이벤트 정보</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="section event-tour"></div>

//             <div id="palace-tour" className="section">
//                 <div className='tour-nav'>
//                     <img src={process.env.PUBLIC_URL + '/comehere-logo.png'} alt="Come Here Logo" className="logo" />
//                     <img src={process.env.PUBLIC_URL + '/name.png'} alt="name" className="name" />

//                     <div className='nbutton-container'>
//                         <a href="#event-info" >행사정보</a>
//                         <a href="#palace-tour" className="now-link">궁궐 여행 정보</a>
//                         <a href="#quiz">퀴즈 풀기</a>
//                         <a href="#photo-album">스팟 사진첩</a>
//                     </div>
//                 </div>

//                 <div className='tour-content'>
//                     <div className='tour-title'>
//                         <h1>창덕궁 여행 정보</h1>
//                         <div>이리오너라와 함께 창덕궁으로 여행을 떠나요!</div>
//                         <div>다양한 투어 코스를 추천해드립니다.</div>
//                     </div>
//                     <div className='tour-items-container'>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour1.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour2.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour3.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour1.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour2.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour3.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour1.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour2.png'} alt="tour Image" z />
//                         </div>
//                         <div className='tour-item'>
//                             <img src={process.env.PUBLIC_URL + '/tour3.png'} alt="tour Image" z />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="section tour-quiz"></div>

//             <div className="section tour-quiz2"></div>

//             <div id="quiz" className="section">
//                 <div className='quiz-nav'>
//                     <img src={process.env.PUBLIC_URL + '/comehere-logo.png'} alt="Come Here Logo" className="logo" />
//                     <img src={process.env.PUBLIC_URL + '/name.png'} alt="name" className="name" />

//                     <div className='nbutton-container'>
//                         <a href="#event-info" >행사정보</a>
//                         <a href="#palace-tour">궁궐 여행 정보</a>
//                         <a href="#quiz" className="now-link">퀴즈 풀기</a>
//                         <a href="#photo-album">스팟 사진첩</a>
//                     </div>
//                 </div>

//                 <h2>퀴즈 풀기</h2>
//                 <p>퀴즈를 여기에 표시합니다.</p>
//             </div>

//             <div className="section quiz-photo"></div>

//             <div id="photo-album" className="section">
//                 <div className='photo-nav'>
//                     <img src={process.env.PUBLIC_URL + '/comehere-logo.png'} alt="Come Here Logo" className="logo" />
//                     <img src={process.env.PUBLIC_URL + '/name.png'} alt="name" className="name" />

//                     <div className='nbutton-container'>
//                         <a href="#event-info" >행사정보</a>
//                         <a href="#palace-tour">궁궐 여행 정보</a>
//                         <a href="#quiz" >퀴즈 풀기</a>
//                         <a href="#photo-album" className="now-link">스팟 사진첩</a>
//                     </div>
//                 </div>

//                 <h2>스팟 사진첩</h2>
//                 <p>스팟 사진첩을 여기에 표시합니다.</p>
//             </div>

//             <div className="section photo-end"></div>

//         </div>
//     );
// }

// export default ScrollDownPage;
