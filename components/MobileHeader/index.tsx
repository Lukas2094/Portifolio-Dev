"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaGithub } from 'react-icons/fa';

export function MobileHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="p-5 bg-[#1b1f3b] text-white shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-between items-center md:ml-36">
                    <div className="flex items-center gap-3">
                        <a href="/">
                            <img src="/imgs/LS-Logo.png" alt="Logo" className="h-10 w-10 object-contain" />
                        </a>
                        
                        <h1 className="text-xl font-bold">Lucas Santos da Silva</h1>
                    </div>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setOpen(!open)}
                    >
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
                <nav
                    className={`${open ? 'flex' : 'hidden'
                        } flex-col mt-4 gap-3 text-sm md:flex md:flex-row md:items-center md:mt-0 md:gap-4 md:text-base md:mr-30`}
                >
                    <a href="#sobremim" className="hover:text-purple-300 transition">Sobre Mim</a>
                    <a href="#habilidades" className="hover:text-purple-300 transition">Habilidades</a>
                    <Link href="/projects" className="hover:text-purple-300 transition">Projetos</Link>
                    <a href="#contato" className="hover:text-purple-300 transition">Contato</a>
                    <a href="#curriculo" className="hover:text-purple-300 transition">Currículo</a>
                    <a
                        href="https://github.com/Lukas2094"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:ml-2"
                    >
                        <FaGithub className="inline h-5 w-5" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
