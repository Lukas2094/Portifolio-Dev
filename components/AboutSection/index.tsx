import { log } from "console";
import React from "react";

export function AboutSection(profile: any) {
    console.log('Profile data:', profile);
    
    return (
        <section id="sobremim" className="space-y-6">
            <h2 className="text-2xl font-bold">Sobre Mim</h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg text-justify text-white">
                        Sou um desenvolvedor full-stack com experiência em React, Node.js, Next.js, e bancos de dados relacionais e não-relacionais. Gosto de construir soluções performáticas, intuitivas e escaláveis.
                    </p>
                    <p className="text-lg text-justify text-white">
                        Tenho foco em boas práticas, clean code, testes automatizados e aprendizado contínuo. Busco sempre entregar soluções com alto valor para o usuário e para o negócio.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
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
