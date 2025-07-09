import { log } from "console";
import React from "react";

export function AboutSection(profile: any) {
    
    if (!profile || !profile.profile) {
        console.error("Perfil não encontrado ou inválido");
        return null;
    }
    
    return (
        <section id="sobremim" className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Sobre Mim</h2>
            <div className="flex flex-col md:flex-row items-center gap-20">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg text-justify text-white">
                        Sou um desenvolvedor full-stack pleno, com foco sênior em front-end. Tenho sólida experiência em construção de interfaces modernas e escaláveis usando React, Next.js, TypeScript, Tailwind CSS e ferramentas como Redux, React Router e Vite.
                    </p>
                    <p className="text-lg text-justify text-white">
                        No back-end, atuo com Node.js, NestJS, PHP e Laravel, integrando APIs RESTful e GraphQL com bancos de dados como MySQL, PostgreSQL, MongoDB e SQL Server. Utilizo Prisma ORM, testes com Jest e Cypress, e deploys com Docker.
                    </p>
                    <p className="text-lg text-justify text-white">
                        Prezo por boas práticas de desenvolvimento como clean code, versionamento com Git, padrões de projeto, e ferramentas de qualidade como ESLint. Também tenho experiência com integrações de suporte via Zendesk e Firebase.
                    </p>
                    <p className="text-lg text-justify text-white">
                        Sou sempre focado voltado a perfomance e usabilidade, buscando sempre entregar soluções que sejam não apenas funcionais, mas também agradáveis e intuitivas para o usuário final.
                    </p>
                    <p className="text-lg text-justify text-white">      
                        Estou sempre em busca de evoluir tecnicamente com objetivo de me tornar Full-Stack Senior e Eng. da Computação. 
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-end">
                    <img
                        src={profile.profile?.avatar_url}
                        alt={profile.profile?.name || "Avatar do perfil"}
                        className="rounded-full shadow-lg max-w-xs md:max-w-sm object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
