import React from 'react';
import { SkillsSection } from '../Skills';
import { AboutSection } from '../AboutSection';
import { getGitHubProfile } from '@/lib/github';

export async function HomePage() {
    const profile = await getGitHubProfile(); 
    return (
        <>
        <section className="space-y-12">
            <AboutSection profile={profile} />
            <SkillsSection />
        </section>
        </>

    );
}