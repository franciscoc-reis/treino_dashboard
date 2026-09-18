// Importa a função Maiúscula do arquivo minúsculo
import { LayoutDashboard } from './layouts/layoutDashboard';

function App() {
  return (
    <LayoutDashboard>
      <div>
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h1>
        <p className="text-slate-600">Essa será a estrutura base do dashboard!</p>
      </div>
    </LayoutDashboard>
  );
}

export default App;