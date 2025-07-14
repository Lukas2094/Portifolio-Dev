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
                background: { color: '#1a1a2e' },
                particles: {
                    number: { value: 150 },
                    color: {
                        value: ['#008CFF', '#39ff14', '#FF073A', '#FFC300'],
                    },
                    links: {
                        enable: true,
                        color: '#e94560',
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
                        onHover: { enable: true, mode: 'repulse' },
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


// number: { value: 180 },
// color: { value: '#e94560' },
// links: {
//     enable: true,
//         color: '#e94560',