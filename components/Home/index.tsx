import React from 'react';
import { SkillsSection } from '../Skills';

export function HomePage() {
    return (
        <section className="space-y-12">
            <section id="sobremim" className="space-y-6">
                <h2 className="text-2xl font-bold">Sobre Mim</h2>
                <p className="text-lg">Sou um desenvolvedor full-stack com experiência em React, Node.js, Next.js, e bancos de dados relacionais e não-relacionais. Gosto de construir soluções performáticas, intuitivas e escaláveis.</p>
            </section>

            <SkillsSection />

            <section id="contato" className="space-y-6">
                <h2 className="text-2xl font-bold">Contato</h2>
                <p className="text-lg">Você pode me contatar via email: <a href="mailto:seuemail@exemplo.com" className="text-blue-600 underline">seuemail@exemplo.com</a></p>
            </section>

            <section id="curriculo" className="space-y-6">
                <h2 className="text-2xl font-bold">Currículo</h2>
                <p className="text-lg">Baixe meu currículo em PDF: <a href="/curriculo.pdf" download className="text-blue-600 underline">Clique aqui</a></p>
            </section>
        </section>
    );
}