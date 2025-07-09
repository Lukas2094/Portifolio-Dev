export async function getGitHubProjects() {
    const res = await fetch('https://api.github.com/users/Lukas2094/repos?per_page=50');
    if (!res.ok) throw new Error('Erro ao buscar projetos do GitHub');
    return res.json();
};

export async function getGitHubProfile() {
    const res = await fetch('https://api.github.com/users/Lukas2094');
    if (!res.ok) throw new Error('Erro ao buscar perfil do GitHub');
    return res.json();
};

export async function getFeaturedGitHubProjects() {
  const repos = ['bank-app', 'System-Storage-FrontEnd', 'System-Storage-BackEnd', 'NetflixFrontEnd'];

  const requests = repos.map(repo =>
    fetch(`https://api.github.com/repos/Lukas2094/${repo}`).then(res => {
      if (!res.ok) throw new Error(`Erro ao buscar o repositório ${repo}`);
      return res.json();
    })
  );

  return Promise.all(requests);
};
