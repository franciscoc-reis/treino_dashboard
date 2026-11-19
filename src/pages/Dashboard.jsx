import { Clock, TrendingUp, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { StatCard } from '../components/StatCard';


const dataTreinos = [
  { mes: 'Jan', horas: 12 },
  { mes: 'Fev', horas: 18 },
  { mes: 'Mar', horas: 15 },
  { mes: 'Abr', horas: 22 },
  { mes: 'Mai', horas: 28 },
  { mes: 'Jun', horas: 25 },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      
      {/* Cabeçalho da página */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Visão Geral</h1>
        <p className="text-slate-600 mt-1">Acompanhe seu desempenho no tatame.</p>
      </div>

      {/* Grid de Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Horas Totais" value="120h" icon={Clock} trend="+12%" />
        <StatCard title="Treinos no Mês" value="24" icon={TrendingUp} trend="+4%" />
        <StatCard title="Finalizações" value="45" icon={Award} trend="+18%" />
      </div>

      {/* Área do Gráfico */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Horas de tatame por mês</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataTreinos}>
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

    </div>
  );
}