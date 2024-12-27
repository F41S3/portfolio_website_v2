import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './css/styles.css'

export default function ParticleBackground() {
    const options = {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#9e3f78", "#724191", "#52389e", "#60a0d1", "#5ad2dd"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: { min: 1, max: 4 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
            }
        }
    };

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="particle_background">
            <Particles options={options} init={particlesInit} />
        </div>
    );
};