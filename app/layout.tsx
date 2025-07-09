import './globals.css';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { MobileHeader } from '@/components/MobileHeader';
import { FooterSection } from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles/BackgroundParticles';


const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Portfólio | Dev Full-Stack Pleno',
  description: 'Portfólio profissional de um desenvolvedor full-stack pleno',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} relative min-h-screen text-white`}>
        <BackgroundParticles />
        <MobileHeader />
        <div className="relative z-10 p-6 max-w-6xl xl mx-auto mt-8">{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
