import { OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Person } from "./Person";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import './Experience.css';

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

            <div className="world">
                <div className="stage">
                    <div className="house">
                        <section className="wall wall-left"></section>
                        <section className="wall wall-right"></section>
                        <section className="wall wall-front wall-front-a">
                            <div className="wall-content">
                                <h2 className="wall-title">안녕하세요</h2>
                            </div>
                        </section>
                        {/* <section className="wall wall-front wall-front-b">
                            <div className="wall-content">
                                <h2 className="wall-title">Hello</h2>
                            </div>
                        </section>
                        <section className="wall wall-front wall-front-c">
                            <div className="wall-content">
                                <h2 className="wall-title">Hola</h2>
                            </div>
                        </section>
                        <section className="wall wall-front wall-front-d">
                            <div className="wall-content">
                                <h2 className="wall-title">こんにちは</h2>
                            </div>
                        </section> */}
                    </div>
                </div>
            </div>
            {/* <Person /> */}
        </>

    );
};