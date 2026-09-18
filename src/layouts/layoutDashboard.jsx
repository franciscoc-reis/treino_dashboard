import { Home, User} from 'lucide-react';

export function LayoutDashboard({ children }) {
  
    return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold text-slate-800">Treino de acompanhamento</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 bg-slate-800 text-white rounded-lg">
            <Home size={20} />
            <span className="font-medium">Visão Geral</span>
          </a>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}