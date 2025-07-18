import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../ContactForm';

export function FooterSection() {
  return (
    <footer className="mt-12 py-10 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Lado Esquerdo: Contato + Currículo */}
        <div className="space-y-10">
          {/* Contato */}
          <section id="contato" className="space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">Contato</h2>
            <p className="text-base md:text-lg text-center md:text-left">
              Você pode me contatar via email:
              <Link href="mailto:lukas2094@gmail.com" className="text-blue-400 underline ml-1">
                lukas2094@gmail.com
              </Link>
            </p>
            <p className="text-base md:text-lg text-center md:text-left">
              Ou no WhatsApp:
              <Link
                href="https://wa.me/5511949322230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline ml-1"
              >
                55 (11) 949322230
              </Link>
            </p>
            <div className="flex gap-5 text-2xl justify-center md:justify-start mt-4">
              <Link href="https://github.com/Lukas2094" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/lucas-santos-da-silva-91133616b" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <FaLinkedin color="#0e76a8" />
              </Link>
              <Link href="https://wa.me/5511949322230" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <FaWhatsapp color="#25D366" />
              </Link>
            </div>
          </section>

          {/* Currículo */}
          <section id="curriculo" className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">Currículo</h2>
            <p className="text-base md:text-lg text-center md:text-left">
              Baixe meu currículo aqui:
              <Link href={"doc/curriculo.docx"} download className="text-blue-400 underline ml-1">
                Clique aqui
              </Link>
            </p>
          </section>
        </div>

        {/* Lado Direito: Formulário */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">Fale comigo</h2>
          <ContactForm />
        </section>
      </div>

      {/* Créditos */}
      <div className="mt-12 text-center space-y-2 px-4">
        <p className="text-sm text-gray-400">
          Feito com <span className="text-green-500 font-semibold">Next.js</span>,{" "}
          <span className="font-semibold text-[#61DAFB]">React</span> e{" "}
          <span className="font-semibold text-[#06B6D4]">Tailwind CSS</span>
        </p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Lucas Santos da Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};