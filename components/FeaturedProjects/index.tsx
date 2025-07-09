'use client';

import Link from 'next/link';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

interface FeaturedRepos {
  featuredRepos: Repo[];
}

export default function FeaturedProjectsSection({ repos }: { repos: FeaturedRepos }) {

  function regexReplace(str: string): string {
    return str.replace(/-/g, ' ')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .toUpperCase();
  }

  return (
    <section className="py-10 space-y-6">
      <h2 className="text-2xl font-bold text-white">Projetos em Destaque</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {repos.featuredRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 bg-[#1b1f3b] dark:bg-[#1b1f3b] dark:border-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
          >
            <h3 className="font-semibold text-base md:text-lg text-white dark:text-white truncate">
              {regexReplace(repo.name)}
            </h3>

            <p className="text-sm text-gray-300 dark:text-gray-300 mt-2 line-clamp-3">
              {repo.description || 'Sem descrição disponível.'}
            </p>
          </a>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link href="/projects" className="text-blue-500 hover:text-blue-700 font-semibold">
          Veja mais projetos &rarr;
        </Link>
      </div>
    </section>
  );
};