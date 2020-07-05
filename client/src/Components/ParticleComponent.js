import React from "react";
import Particles from "react-particles-js";

export default () => (
    <div
        style={{
            position: "absolute",
            top: '40px',
            left: 0,
            width: "100%",
            height: "100%"
        }}
    >
        <Particles
            className='particles'
            params={{
                particles: {
                    number: {
                        value: 20
                    },
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 9
                        }
                    },
                    move: {
                        enable: true,
                        speed: 1
                    }
                },
                opacity: {
                    value: 0.5008530152163807,
                    anim: {
                        speed: 1
                    }
                }
            }}
        />
    </div>
);
