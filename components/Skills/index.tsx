import { FaReact, FaAngular, FaVuejs, FaPhp, FaNodeJs, FaPython, FaJava, FaGem, FaDatabase, FaCode, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiMysql, SiMongodb, SiPostgresql, SiTypescript, SiGraphql, SiRedis, SiSharp, SiGo, SiHtml5, SiCss3, SiJavascript, SiRuby, SiShell, SiDocker, SiKubernetes, SiJest, SiCypress, SiSwagger, SiFirebase, SiVite, SiTailwindcss, SiPrisma, SiEslint, SiPrettier, SiRedux, SiReactrouter, SiNestjs } from 'react-icons/si';

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
        { icon: SiSharp, label: 'C#', color: '#68217a' },
        { icon: FaPhp, label: 'PHP', color: '#777bb3' },
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
        { icon: FaCode, label: 'REST APIs', color: '#61dafb' },
        { icon: FaCode, label: 'JSON, XML', color: '#f0db4f' },
        { icon: FaCode, label: 'styled-components', color: '#db7093' },
        { icon: FaCode, label: 'Material UI', color: '#007FFF' },
        { icon: FaSass, label: 'SASS / SCSS', color: '#cd6799' },
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {skills.others.map(({ icon: Icon, label, color }, i) => (
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
        </section>
    );
};