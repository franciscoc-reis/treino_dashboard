import { formatarDuracao } from '../utils/formatarTempo';

export function ListaTreinos({ treinos }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-slate-800">Últimos treinos</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="py-3 px-6 font-medium">Data</th>
              <th className="py-3 px-6 font-medium">Modalidade / Foco</th>
              <th className="py-3 px-6 font-medium">Duração</th>
              <th className="py-3 px-6 font-medium">Finalizações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-slate-700">
            {treinos.map((treino) => (
              <tr key={treino.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-medium">{treino.data}</td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {treino.foco}
                  </span>
                </td>
                <td className="py-4 px-6">{formatarDuracao(treino.duracao)}</td>
                <td className="py-4 px-6">{treino.finalizacoes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}