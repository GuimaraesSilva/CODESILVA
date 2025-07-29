import NavBar from '@/components/NavBar/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Conteúdo de exemplo */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Meu Portfolio</h1>
          <p className="text-xl opacity-80">NavBar vertical com efeito blur</p>
        </div>
      </div>
    </div>
  );
}
