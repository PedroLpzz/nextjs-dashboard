import '@/app/ui/global.css'; // Tus estilos globales
import { inter } from '@/app/ui/fonts'; // Fuente global (ejemplo)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es"> {/* Asegúrate de definir el lenguaje apropiado */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Descripción de mi aplicación" />
        <link rel="icon" href="/favicon.ico" />
        <title>Mi Aplicación</title> {/* Título de la aplicación */}
        {/* Agrega aquí otros metadatos, como enlaces a fuentes o iconos */}
      </head>
      <body className={`${inter.className} antialiased`}>
        {children} {/* El contenido de tus páginas se inyecta aquí */}
      </body>
    </html>
  );
}
