import React from 'react';
import { useSpring, animated } from 'react-spring';

function Home() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { delay: 500, duration: 800 },
    })
    return (
        <div className="home">
            <h3>blah blah blah</h3>
            <animated.h1 style={props}> Matthieu Nadeau</animated.h1>
            <p>Self taught learner, thinker and creator. Blah blah blah.</p>
        </div >
    );
}

export default Home;