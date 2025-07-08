import { FaReact, FaAngular, FaVuejs, FaPhp, FaNodeJs, FaPython, FaJava, FaGem, FaDatabase, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiNuxtdotjs, SiMysql, SiMongodb, SiPostgresql, SiTypescript, SiGraphql, SiRedis, SiSharp, SiGo, SiHtml5, SiCss3, SiJavascript, SiRuby, SiShell } from 'react-icons/si';

const skills = {
    frontend: [
        { icon: SiJavascript, label: 'JavaScript (ES6+)', color: '#f7df1e' },
        { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
        { icon: SiHtml5, label: 'HTML5', color: '#e34f26' },
        { icon: SiCss3, label: 'CSS3 / SCSS / SASS', color: '#264de4' },
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
    ],
    databases: [
        { icon: SiMysql, label: 'MySQL', color: '#4479a1' },
        { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
        { icon: SiMongodb, label: 'MongoDB', color: '#47a248' },
        { icon: FaDatabase, label: 'SQL Server', color: '#cc2927' },
    ],
    others: [
        { icon: SiGraphql, label: 'GraphQL', color: '#e535ab' },
        { icon: FaCode, label: 'REST APIs', color: '#61dafb' },
        { icon: FaCode, label: 'JSON, XML', color: '#f0db4f' },
    ],
};

export function SkillsSection() {
    return (
        <section id="habilidades" className="space-y-10">
            {/* Front-end */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Linguagens Front-end</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.frontend.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon size={48} color={color} />
                            <p className="mt-2 text-center font-medium text-white">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Back-end */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Linguagens Back-end</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.backend.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon size={48} color={color} />
                            <p className="mt-2 text-center font-medium text-white">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bancos de Dados */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Bancos de Dados</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.databases.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon size={48} color={color} />
                            <p className="mt-2 text-center font-medium text-white">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Outras Tecnologias */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Outras Tecnologias</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.others.map(({ icon: Icon, label, color }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-[#1b1f3b] transform transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            <Icon size={48} color={color} />
                            <p className="mt-2 text-center font-medium text-white">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
