import React, { useState } from "react";
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./song/Experience";

export default function Test1() {

  // let post = '강남우동맛집';
  // let [글제목, b] = useState('배언제불러 밥먹고싶어');

  return (
    
      <Canvas>
        <color attach="background" args={["#f59f9f"]}/>
        <ScrollControls pages={20} damping={1}>
          <Experience/>
        </ScrollControls>
      </Canvas>
  
    
    );
}


    // <div className = "App">
    //   <div className="black-nav">
    //     <div>
    //       <h4>블로그 작성중입니당.</h4>
    //     </div>
    //     <div className="list">
    //       <h2 style={ {color : 'red', fontSize : '16px'} }>{ 글제목 }</h2>
    //       <p>7월 말일 발행한 글임</p>
    //     </div>
    //     <div className="list">
    //       <h2 style={ {color : 'red', fontSize : '16px'} }>{ 글제목 }</h2>
    //       <p>7월 말일 발행한 글임</p>
    //     </div>
    //     <div className="list">
    //       <h2 style={ {color : 'red', fontSize : '16px'} }>{ 글제목 }</h2>
    //       <p>7월 말일 발행한 글임</p>
    //     </div>
    //   </div>
    // </div>  