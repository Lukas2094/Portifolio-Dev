'use client';
import React, { useState } from "react";
import type { ReactElement } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiGo, SiRuby, SiSharp } from "react-icons/si";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const languageIcons: Record<string, ReactElement> = {
  JavaScript: <FaJsSquare color="#f0db4f" size={20} />,
  TypeScript: <SiTypescript color="#3178c6" size={20} />,
  Python: <FaPython color="#3776ab" size={20} />,
  Java: <FaJava color="#b07219" size={20} />,
  PHP: <FaPhp color="#777bb4" size={20} />,
  Go: <SiGo color="#00ADD8" size={20} />,
  Ruby: <SiRuby color="#701516" size={20} />,
  CSharp: <SiSharp color="#68217a" size={20} />,
  HTML: <FaHtml5 color="#e34c26" size={20} />,
  CSS: <FaCss3Alt color="#264de4" size={20} />,
  React: <FaReact color="#61dafb" size={20} />,
  Node: <FaNodeJs color="#3c873a" size={20} />,
  SQL: <FaDatabase color="#00758f" size={20} />,
};

export function ProjectsPage({ repos }: { repos: Repo[] }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const sortedRepos = [...repos].sort((a, b) => a.name.localeCompare(b.name));

  const visibleRepos = sortedRepos.slice(0, visibleCount);

  const showMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Projetos no GitHub</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 bg-white dark:bg-[#1b1f3b] dark:border-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg text-blue-600 dark:text-white truncate">{repo.name}</h3>
              {repo.language && languageIcons[repo.language]}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
              {repo.description || "Sem descrição disponível."}
            </p>
          </a>
        ))}
      </div>

      {visibleCount < sortedRepos.length && (
        <div className="text-center">
          <button
            onClick={showMore}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Ver mais
          </button>
        </div>
      )}
    </section>
  );
};