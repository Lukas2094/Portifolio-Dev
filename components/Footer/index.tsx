import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function FooterSection() {
    return (
        <footer className="mt-12 py-10 border-t border-gray-300 bg-[#0f172a] text-white">
            <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left max-w-5xl mx-auto px-20">
                <section id="contato" className="space-y-6 md:w-1/2 mr-14">
                    <h2 className="text-2xl font-bold">Contato</h2>
                    <p className="text-lg">
                        Você pode me contatar via email:
                        <Link href="mailto:lukas2094@gmail.com" className="text-blue-400 underline ml-1">
                            lukas2094@gmail.com
                        </Link>
                    </p>
                    <p className="text-lg">
                        Ou no WhatsApp:
                        <Link href="https://wa.me/5511949322230" target="_blank" rel="noopener noreferrer" className="text-green-400 underline ml-1">
                            55 (11) 949322230
                        </Link>
                    </p>
                    <div className="flex justify-center md:justify-start gap-6 text-2xl">
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
                        <Link
                            href="https://www.instagram.com/lucas.silva2094?igsh=cXRsZ3NjdHZldnh2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition transform hover:scale-110"
                        >
                            <FaInstagram color="#E1306C" />
                        </Link>
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

                <section id="curriculo" className="space-y-6 md:w-1/2">
                    <h2 className="text-2xl font-bold">Currículo</h2>
                    <p className="text-lg">
                        Baixe meu currículo em PDF: <br />
                        <Link href="/pdf/curriculo.pdf" download className="text-blue-400 underline ml-1">
                            Clique aqui
                        </Link>
                    </p>
                </section>
            </div>

            <div className="mt-8 text-center space-y-2">
                <p className="text-sm text-gray-400">
                    Feito com{" "}
                    <span className="text-green-500 font-semibold">Next.js</span>,{" "}
                    <span style={{ color: "#61DAFB" }} className="font-semibold">React</span> e{" "}
                    <span style={{ color: "#06B6D4" }} className="font-semibold">Tailwind CSS</span>
                </p>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Lucas Santos da Silva. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
