import { useState } from 'react';
import { X } from 'lucide-react';

export function ModalNovoTreino({ aberto, aoFechar, aoSalvar }) {
  const [data, setData] = useState('');
  const [foco, setFoco] = useState('');
  const [horas, setHoras] = useState('');
  const [minutos, setMinutos] = useState('');
  const [finalizacoes, setFinalizacoes] = useState('');

  if (!aberto) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const dataFormatada = data.split('-').reverse().join('/');
    const duracaoEmMinutos = (Number(horas) * 60) + Number(minutos);

    const novoTreino = {
      id: Date.now(),
      data: dataFormatada,
      foco,
      duracao: duracaoEmMinutos,
      finalizacoes: Number(finalizacoes),
    };

    aoSalvar(novoTreino);

    setData('');
    setFoco('');
    setHoras('');
    setMinutos('');
    setFinalizacoes('');
    aoFechar();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Registrar novo treino</h2>
          <button onClick={aoFechar} className="text-slate-400 hover:text-slate-600 cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Data do treino</label>
            <input
              type="date"
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Modalidade / Foco</label>
            <input
              type="text"
              required
              placeholder="Ex: Gi (Kimono) - Passagem"
              value={foco}
              onChange={(e) => setFoco(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Horas</label>
              <input
                type="number"
                required
                min="0"
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Minutos</label>
              <input
                type="number"
                required
                min="0"
                max="59"
                value={minutos}
                onChange={(e) => setMinutos(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Finalizações</label>
              <input
                type="number"
                required
                min="0"
                value={finalizacoes}
                onChange={(e) => setFinalizacoes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Registrar treino
          </button>
        </form>
      </div>
    </div>
  );
}