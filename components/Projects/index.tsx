'use client';

import React, { useState } from "react";
import type { ReactElement } from "react";
import {
  FaReact, FaNodeJs, FaPhp, FaPython, FaJava, FaHtml5, FaCss3Alt,
  FaJsSquare, FaDatabase
} from "react-icons/fa";
import {
  SiTypescript, SiGo, SiRuby, SiSharp, SiNextdotjs, SiNuxtdotjs,
  SiExpress, SiNestjs, SiLaravel, SiDjango, SiSpring,
  SiVuedotjs, SiAngular
} from "react-icons/si";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const languageIcons: Record<string, ReactElement> = {
  JavaScript: <FaJsSquare color="#f0db4f" className="text-[24px] md:text-[30px]" />,
  TypeScript: <SiTypescript color="#3178c6" className="text-[24px] md:text-[30px]" />,
  Python: <FaPython color="#3776ab" className="text-[24px] md:text-[30px]" />,
  Java: <FaJava color="#b07219" className="text-[24px] md:text-[30px]" />,
  PHP: <FaPhp color="#777bb4" className="text-[24px] md:text-[30px]" />,
  Go: <SiGo color="#00ADD8" className="text-[24px] md:text-[30px]" />,
  Ruby: <SiRuby color="#701516" className="text-[24px] md:text-[30px]" />,
  CSharp: <SiSharp color="#68217a" className="text-[24px] md:text-[30px]" />,
  HTML: <FaHtml5 color="#e34c26" className="text-[24px] md:text-[30px]" />,
  CSS: <FaCss3Alt color="#264de4" className="text-[24px] md:text-[30px]" />,
  React: <FaReact color="#61dafb" className="text-[24px] md:text-[30px]" />,
  Node: <FaNodeJs color="#3c873a" className="text-[24px] md:text-[30px]" />,
  SQL: <FaDatabase color="#00758f" className="text-[24px] md:text-[30px]" />,
  NextJS: <SiNextdotjs color="#000000" className="text-[24px] md:text-[30px]" />,
  NuxtJS: <SiNuxtdotjs color="#00c58e" className="text-[24px] md:text-[30px]" />,
  Express: <SiExpress color="#000000" className="text-[24px] md:text-[30px]" />,
  NestJS: <SiNestjs color="#e0234e" className="text-[24px] md:text-[30px]" />,
  Laravel: <SiLaravel color="#f55247" className="text-[24px] md:text-[30px]" />,
  Django: <SiDjango color="#092e20" className="text-[24px] md:text-[30px]" />,
  Spring: <SiSpring color="#6db33f" className="text-[24px] md:text-[30px]" />,
  Vue: <SiVuedotjs color="#42b883" className="text-[24px] md:text-[30px]" />,
  Angular: <SiAngular color="#dd0031" className="text-[24px] md:text-[30px]" />,
};

export function ProjectsPage({ repos }: { repos: Repo[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const sortedRepos = [...repos].sort((a, b) => a.name.localeCompare(b.name));
  const totalPages = Math.ceil(sortedRepos.length / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const visibleRepos = sortedRepos.slice(startIndex, startIndex + perPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Projetos no GitHub</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 bg-white dark:bg-[#1b1f3b] dark:border-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-base md:text-lg text-blue-600 dark:text-white truncate">
                {repo.name}
              </h3>
              {repo.language && languageIcons[repo.language]}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
              {repo.description || "Sem descrição disponível."}
            </p>
          </a>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 disabled:opacity-50"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white'
              } hover:bg-blue-700`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </section>
  );
};