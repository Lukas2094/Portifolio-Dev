const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function getGitHubProjects() {
    const res = await fetch('https://api.github.com/users/Lukas2094/repos?per_page=50' , {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Erro ao buscar projetos do GitHub');
    return res.json();
};

export async function getGitHubProfile() {
    const res = await fetch('https://api.github.com/users/Lukas2094', {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: 'application/vnd.github+json',
        },
        next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Erro ao buscar perfil do GitHub');
    return res.json();
};

export async function getFeaturedGitHubProjects() {
  const repos = ['bank-app', 'System-Storage-FrontEnd', 'System-Storage-BackEnd', 'NetflixFrontEnd'];

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
  };

  const results = [];

  for (const repo of repos) {
    const res = await fetch(`https://api.github.com/repos/Lukas2094/${repo}`, {
      headers,
      next: { revalidate: 3600 }, // opcional para cache no Next.js
    });

    if (!res.ok) {
      throw new Error(`Erro ao buscar o repositório ${repo}`);
    }

    const data = await res.json();
    results.push(data);
  }

  return results;
}

