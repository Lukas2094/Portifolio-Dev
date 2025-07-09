import React from 'react';
import { SkillsSection } from '../Skills';
import { AboutSection } from '../AboutSection';
import { getGitHubProfile } from '@/lib/github';
import FeaturedProjectsSection from '../FeaturedProjects';

export async function HomePage(featuredRepos: any) {
    const profile = await getGitHubProfile(); 
    return (
        <>
        <section className="space-y-12">
            <AboutSection profile={profile} />
            <FeaturedProjectsSection repos={featuredRepos} />
            <SkillsSection />
        </section>
        </>

    );
}