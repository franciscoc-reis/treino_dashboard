import { useState } from 'react';
import { Clock, TrendingUp, Award, Plus } from 'lucide-react'; // Adicionamos o ícone Plus
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../components/StatCard';
import { ListaTreinos } from '../components/ListaTreinos';
import { ModalNovoTreino } from '../components/ModalNovoTreino'; // Importamos o Modal

const dataGrafico = [
  { mes: 'Jan', horas: 12 },
  { mes: 'Fev', horas: 18 },
  { mes: 'Mar', horas: 15 },
  { mes: 'Abr', horas: 22 },
  { mes: 'Mai', horas: 28 },
  { mes: 'Jun', horas: 25 },
];

const treinosIniciais = [
  { id: 1, data: '15/11/2026', foco: 'Gi (Kimono) - Passagem', duracao: 1.5, finalizacoes: 3 },
  { id: 2, data: '17/11/2026', foco: 'No-Gi - Quedas e Controle', duracao: 2.0, finalizacoes: 2 },
  { id: 3, data: '18/11/2026', foco: 'Gi (Kimono) - Guarda', duracao: 1.5, finalizacoes: 4 },
];

export function Dashboard() {
  const [treinos, setTreinos] = useState(treinosIniciais);
  const [modalAberto, setModalAberto] = useState(false); // Controla a visibilidade do modal

  const totalHoras = treinos.reduce((acumulador, item) => acumulador + item.duracao, 0);
  const totalTreinos = treinos.length;
  const totalFinalizacoes = treinos.reduce((acumulador, item) => acumulador + item.finalizacoes, 0);

  // Função passada como prop para o Modal. Usa o operador spread (...) para criar uma nova lista com o item no topo
  function handleAdicionarTreino(novoTreino) {
    setTreinos([novoTreino, ...treinos]);
  }

  return (
    <div className="space-y-8">
      {/* Cabeçalho com o novo botão à direita */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Visão Geral</h1>
          <p className="text-slate-600 mt-1">Acompanhe seu desempenho no tatame.</p>
        </div>

        <button
          onClick={() => setModalAberto(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer"
        >
          <Plus size={20} />
          Novo Treino
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Horas Registradas" value={`${totalHoras}h`} icon={Clock} trend="+12%" />
        <StatCard title="Total de Treinos" value={totalTreinos} icon={TrendingUp} trend="+4%" />
        <StatCard title="Finalizações" value={totalFinalizacoes} icon={Award} trend="+18%" />
      </div>

      {/* Gráfico */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Horas de tatame por mês</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataGrafico}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line 
                type="monotone" 
                dataKey="horas" 
                stroke="#2563eb" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela */}
      <ListaTreinos treinos={treinos} />

      {/* Modal de Cadastro */}
      <ModalNovoTreino
        aberto={modalAberto}
        aoFechar={() => setModalAberto(false)}
        aoSalvar={handleAdicionarTreino}
      />
    </div>
  );
}