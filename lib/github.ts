export async function getGitHubProjects() {
    const res = await fetch('https://api.github.com/users/Lukas2094/repos');
    if (!res.ok) throw new Error('Erro ao buscar projetos do GitHub');
    return res.json();
};

export async function getGitHubProfile() {
    const res = await fetch('https://api.github.com/users/Lukas2094');
    if (!res.ok) throw new Error('Erro ao buscar perfil do GitHub');
    return res.json();
}