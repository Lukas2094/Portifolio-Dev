'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivity() {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4 overflow-hidden">
      <h2 className="text-2xl font-bold text-white mb-4">
        Atividades no GitHub {new Date().getFullYear()}
      </h2>

      <div className="w-full max-w-6xl bg-black p-4 rounded-lg shadow-md">
        {/* Este div é quem rola horizontalmente no mobile */}
        <div className="overflow-x-auto">
          {/* Este mantém o gráfico centralizado horizontalmente */}
          <div className="inline-block min-w-[600px] mx-auto text-white">
            <GitHubCalendar
              username="Lukas2094"
              colorScheme="dark"
              blockSize={14}
              blockMargin={5}
              fontSize={12}
              labels={{
                months: [
                  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
                ],
                weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
                totalCount: '{{count}} contribuições no último ano',
              }}
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};