import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";

import * as THREE from "three"

export const Background = () => {
    return (
    <>
        <Environment preset="sunset" />
        <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
            <LayerMaterial
                lighting="physical"
                transmission={1}
                side={THREE.BackSide}
            >
                <Gradient
                    colorA={"red"}
                    colorB={"white"}
                    axes={"y"}
                    start={0}
                    end={-0.5}
                /> 
                {/* 여기서 배경 색이나 조절 가능함. 아니다 그냥 여기에 이미지 갖다 넣어도 되겠다*/}
            </LayerMaterial>
        </Sphere>
    </>
    );

};


// 기본 배경을 말하는 듯?