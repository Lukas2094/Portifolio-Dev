import { ProjectsPage } from "@/components/Projects";
import { getGitHubProjects } from "@/lib/github";

export const dynamic = 'force-dynamic';

export default async function Projects() {
    const repos = await getGitHubProjects();    
    return <ProjectsPage repos={repos} />;
}
