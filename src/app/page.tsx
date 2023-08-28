import { ModeToggle } from '@/components/ToogleDarkMode';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-bold">
          Bienvenido a la página de inicio de la aplicación
        </h1>
      </div>
    </main>
  );
}
