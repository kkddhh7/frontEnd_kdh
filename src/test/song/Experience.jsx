import { OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Person } from "./Person";

export const Experience = () => {
    return (
        <>
            <OrbitControls />
            <Background/>
            <Person />
        
        </>

    );
};