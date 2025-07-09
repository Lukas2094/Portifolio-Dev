'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaGithub } from 'react-icons/fa';

export function MobileHeader() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const getHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <header className="p-4 bg-[#1b1f3b] text-white shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-between items-center md:ml-36">
                    <div className="flex items-center gap-3">
                        <Link href="/" onClick={handleLinkClick}>
                            <img src="/imgs/LS-Logo.png" alt="Logo" className="h-15 w-15 object-contain" />
                        </Link>
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
                        } transition-all duration-500 ease-in-out flex-col mt-4 gap-3 text-sm md:flex md:flex-row md:items-center md:mt-0 md:gap-4 md:text-base md:mr-30`}
                >
                    <Link href={getHref('sobremim')} onClick={handleLinkClick} className="hover:text-purple-300 transition">Sobre Mim</Link>
                    <Link href={getHref('habilidades')} onClick={handleLinkClick} className="hover:text-purple-300 transition">Habilidades</Link>
                    <Link href="/projects" onClick={handleLinkClick} className="hover:text-purple-300 transition">Projetos</Link>
                    <Link href={getHref('contato')} onClick={handleLinkClick} className="hover:text-purple-300 transition">Contato</Link>
                    <Link href={getHref('curriculo')} onClick={handleLinkClick} className="hover:text-purple-300 transition">Currículo</Link>
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
