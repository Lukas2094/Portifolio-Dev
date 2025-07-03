export async function getGitHubProjects() {
    const res = await fetch('https://api.github.com/users/Lukas2094/repos');
    if (!res.ok) throw new Error('Erro ao buscar projetos do GitHub');
    return res.json();
}