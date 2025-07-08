'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function BackgroundParticles() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: '#ea580c' },
                particles: {
                    number: { value: 180 },
                    color: { value: '#cecece' },
                    links: {
                        enable: true,
                        color: '#f8f8f8',
                        distance: 150,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'attract' },
                    },
                    modes: {
                        attract: {
                            distance: 200,
                            duration: 0.4,
                            factor: 5,
                        },
                    },
                },
            }}
        />
    );
}
