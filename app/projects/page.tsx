import { ProjectsPage } from "@/components/Projects";
import { getGitHubProjects } from "@/lib/github";

export default async function Projects() {
    const repos = await getGitHubProjects();
    return <ProjectsPage repos={repos} />;
}