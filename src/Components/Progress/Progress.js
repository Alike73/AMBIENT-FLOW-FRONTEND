
import './Progress.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const Progress = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to("progress", {
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);

    return (
        <progress max="100" value="0"></progress>
    )
}

export default Progress;