'use client';

import { FaReact, FaAngular, FaVuejs, FaPhp, FaNodeJs, FaPython, FaJava, FaGem, FaDatabase, FaCode, FaSass, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiMysql, SiMongodb, SiPostgresql, SiTypescript, SiGraphql, SiRedis, SiSharp, SiGo, SiHtml5, SiCss3, SiJavascript, SiRuby, SiShell, SiDocker, SiKubernetes, SiJest, SiCypress, SiSwagger, SiFirebase, SiVite, SiTailwindcss, SiPrisma, SiEslint, SiPrettier, SiRedux, SiReactrouter, SiNestjs, SiZendesk, SiPrimevue, SiVuetify, SiReactquery, SiChakraui } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const skills = {
    frontend: [
        { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
        { icon: SiJavascript, label: 'JavaScript', color: '#f7df1e' },
        { icon: SiHtml5, label: 'HTML5', color: '#e34f26' },
        { icon: SiCss3, label: 'CSS3', color: '#264de4' },
        { icon: FaReact, label: 'React', color: '#61dafb' },
        { icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
        { icon: FaAngular, label: 'Angular', color: '#dd0031' },
        { icon: FaVuejs, label: 'Vue.js', color: '#42b883' },
        { icon: SiNuxtdotjs, label: 'Nuxt.js', color: '#00c58e' },
    ],
    backend: [
        { icon: FaPython, label: 'Python', color: '#3776ab' },
        { icon: FaPhp, label: 'PHP', color: '#777bb3' },
        { icon: FaLaravel, label: 'Laravel', color: '#fb503b' },
        { icon: SiZendesk, label: 'Zendesk', color: '#03363D' },
        { icon: FaNodeJs, label: 'Node.js', color: '#3c873a' },
        { icon: SiNestjs, label: 'NestJS', color: '#e0234e' },
    ],
    databases: [
        { icon: SiMysql, label: 'MySQL', color: '#4479a1' },
        { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
        { icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
        { icon: FaDatabase, label: 'SQL Server', color: '#cc2927' },
    ],
    others: [
        { icon: SiGraphql, label: 'GraphQL', color: '#e535ab' },
        { icon: SiRedux, label: 'Redux', color: '#764abc' },
        { icon: SiReactrouter, label: 'React Router', color: '#ca4245' },
        { icon: SiReactquery, label: 'React Query', color: '#FF4154' },
        { icon: FaCode, label: 'REST APIs', color: '#61dafb' },
        { icon: FaCode, label: 'JSON, XML', color: '#f0db4f' },
        { icon: FaCode, label: 'styled-comp.', color: '#db7093' },
        { icon: FaCode, label: 'Material UI', color: '#007FFF' },
        { icon: SiChakraui, label: 'Chakraui', color: '#034383' },
        { icon: FaSass, label: 'SASS / SCSS', color: '#cd6799' },
        { icon: SiPrimevue, label: 'PrimeVue', color: '#3B82F6' },
        { icon: SiVuetify, label: 'Vuetify', color: '#1867C0' },
        { icon: SiDocker, label: 'Docker', color: '#2496ed' },
        { icon: SiJest, label: 'Jest', color: '#99425b' },
        { icon: SiCypress, label: 'Cypress', color: '#15509e' },
        { icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
        { icon: SiVite, label: 'Vite', color: '#646cff' },
        { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
        { icon: SiPrisma, label: 'Prisma ORM', color: '#2D3748' },
        { icon: SiEslint, label: 'ESLint', color: '#4B32C3' },
    ],
};

export function SkillsSection() {
    return (
        <section id="habilidades" className="space-y-10">
            {/* Front-end */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Linguagens Front-end</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {skills.frontend.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon className="w-9 h-9 md:w-12 md:h-12" color={color} />
                            <p className="mt-2 text-center font-medium text-white text-sm md:text-base">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Back-end */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Linguagens Back-end</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {skills.backend.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon className="w-9 h-9 md:w-12 md:h-12" color={color} />
                            <p className="mt-2 text-center font-medium text-white text-sm md:text-base">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bancos de Dados */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Bancos de Dados</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {skills.databases.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon className="w-9 h-9 md:w-12 md:h-12" color={color} />
                            <p className="mt-2 text-center font-medium text-white text-sm md:text-base">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Outras Tecnologias */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Outras Tecnologias</h2>

                {/* Botões personalizados */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={false}
                        spaceBetween={20}
                        slidesPerView={4}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="pb-12"
                    >
                        {skills.others.map(({ icon: Icon, label, color }, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl">
                                    <Icon className="w-9 h-9 md:w-12 md:h-12" color={color} />
                                    <p className="mt-2 text-center font-medium text-white text-sm md:text-base">{label}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Botões visíveis posicionados */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                        <button className="custom-prev text-4xl bg-[#1b1f3b] text-white p-2 rounded-full hover:bg-[#2d335c]">
                            ‹
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                        <button className="custom-next text-4xl bg-[#1b1f3b] text-white p-2 rounded-full hover:bg-[#2d335c]">
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};