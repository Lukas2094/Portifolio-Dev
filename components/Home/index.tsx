import React from 'react';
import { SkillsSection } from '../Skills';
import { AboutSection } from '../AboutSection';
import { FooterSection } from '../Footer';

export function HomePage() {
    return (
        <>
        <section className="space-y-12">
            <AboutSection />
            <SkillsSection />
        </section>
        </>

    );
}