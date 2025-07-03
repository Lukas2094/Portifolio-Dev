export function ProjectsPage({ repos }: { repos: any[] }) {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-bold">Projetos no GitHub</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border p-4 rounded shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="font-semibold text-lg">{repo.name}</h3>
                        <p className="text-sm text-gray-600">{repo.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}