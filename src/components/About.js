import React from 'react';
import { useSpring, animated } from 'react-spring';

function About() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { delay: 500, duration: 800 },
    })
    return (
        <div className="about">
            <animated.h1 style={props}>About</animated.h1>
            <p>I am a self taught developer. I love to create. I am a human.
            I poop. I am just typing stuff to make this section bigger so that
            I can style it. Something else. I have a dog named Tasha. She looks
            like a toad.
                </p>
        </div>
    );
}
export default About;
