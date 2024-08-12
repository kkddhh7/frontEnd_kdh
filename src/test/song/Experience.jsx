import { OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Person } from "./Person";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const Experience = () => {

    const { camera } = useThree();

    useEffect(() => {
        const handleScroll = (event) => {
            // 스크롤할 때 카메라를 앞으로 이동시키기
            camera.position.z -= event.deltaY * 0.01;
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [camera]);

    return (
        <>
            <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
            <Background/>
            <Person />
        </>

    );
};