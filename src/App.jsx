import { LayoutDashboard } from './layouts/LayoutDashboard';
import { Dashboard } from './pages/Dashboard'; 

function App() {
  return (
    <LayoutDashboard>
      {/* Renderizar a página dentro do layout */}
      <Dashboard />
    </LayoutDashboard>
  );
}

export default App;