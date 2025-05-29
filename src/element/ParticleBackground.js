import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './css/styles.scss'


/**
 * SOURCE: CoderPad.io
 * AUTHOR: Taminoturoko Briggs
 * DATE PUBLISHED: Oct 4th, 2022
 * URL: https://coderpad.io/blog/development/interactive-animated-backgrounds-react-tsparticles/
 *
 * ParticleBackground component
 * This component displays a particle background effect with interactive features.
 *
 * @returns {JSX.Element} The JSX element representing the particle background section.
 */
export default function ParticleBackground() {
    /**
     * Define options for the particles, including number, color, shape, opacity, size, and links.
     */
    const options = {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    area: 800
                }
            },
            // Color palette for the particles
            color: {
                value: ["#9e3f78", "#724191", "#52389e", "#60a0d1", "#5ad2dd"]
            },
            // Shape of the particles (type: circle)
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            // Size range for the particles
            size: {
                value: { min: 1, max: 4 }
            },
            // Links between particles (enable or disable)
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
            },
            // Movement of the particles (enable or disable)
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            }
        },
        /**
         * Interactivity options, including events and modes.
         */
        interactivity: {
            // Events to trigger interactions (onHover and onClick)
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
            // Modes for the interactions (grab and push)
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

    /**
     * Initialization function using useCallback hook.
     * This function initializes the particles engine with loadFull.
     *
     * @param {object} engine - Particles engine instance.
     */
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="particle_background">
            <Particles options={options} init={particlesInit} />
        </div>
    );
};