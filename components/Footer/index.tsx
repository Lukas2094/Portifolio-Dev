import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function FooterSection() {
  return (
    <footer className="mt-12 py-10 bg-[#0f172a] text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-5xl mx-auto px-6 md:px-20 text-center md:text-left">
        {/* Contato */}
        <section id="contato" className="space-y-4 md:space-y-6 md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold">Contato</h2>
          <p className="text-base md:text-lg">
            Você pode me contatar via email:
            <Link href="mailto:lukas2094@gmail.com" className="text-blue-400 underline ml-1">
              lukas2094@gmail.com
            </Link>
          </p>
          <p className="text-base md:text-lg">
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
          <div className="flex justify-center md:justify-start gap-4 md:gap-6 text-xl md:text-2xl">
            <Link
              href="https://github.com/Lukas2094"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
                <FaGithub color="#ffffff" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-santos-da-silva-91133616b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
                <FaLinkedin color="#0e76a8" />
            </Link>
            {/* <Link
              href="https://www.instagram.com/lucas.silva2094?igsh=cXRsZ3NjdHZldnh2"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
                <FaInstagram color="#E1306C" />
            </Link> */}
            <Link
              href="https://wa.me/5511949322230"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <FaWhatsapp color="#25D366" />
            </Link>
          </div>
        </section>

        {/* Currículo */}
        <section id="curriculo" className="space-y-4 md:space-y-6 md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold">Currículo</h2>
          <p className="text-base md:text-lg">
            Baixe meu currículo em PDF: <br />
            <Link href="/pdf/curriculo.pdf" download className="text-blue-400 underline ml-1">
              Clique aqui
            </Link>
          </p>
        </section>
      </div>

      {/* Créditos */}
      <div className="mt-8 text-center space-y-2 px-4">
        <p className="text-sm text-gray-400">
          Feito com{" "}
          <span className="text-green-500 font-semibold">Next.js</span>,{" "}
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