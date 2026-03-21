import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Martínez & Asociados — Estudio Jurídico',
  description: 'Más de 25 años protegiendo los intereses de nuestros clientes con dedicación, estrategia y resultados comprobables.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
