import { useState } from 'react';
import { X } from 'lucide-react';

export function ModalNovoTreino({ aberto, aoFechar, aoSalvar }) {

  const [data, setData] = useState('');
  const [foco, setFoco] = useState('');
  const [duracao, setDuracao] = useState('');
  const [finalizacoes, setFinalizacoes] = useState('');

  
  if (!aberto) return null;

  function handleSubmit(e) {
    
    e.preventDefault();
    
    const dataFormatada = data.split('-').reverse().join('/');
    
    const novoTreino = {
      id: Date.now(),
      
      data: dataFormatada,
      foco,
      duracao: Number(duracao),
      finalizacoes: Number(finalizacoes),
    };
    
    aoSalvar(novoTreino);
    
    setData('');
    setFoco('');
    setDuracao('');
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Duração (horas)</label>
              <input
                type="number"
                step="0.5"
                min="0.5"
                required
                placeholder="Ex: 1.5"
                value={duracao}
                onChange={(e) => setDuracao(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Finalizações</label>
              <input
                type="number"
                min="0"
                required
                placeholder="Ex: 2"
                value={finalizacoes}
                onChange={(e) => setFinalizacoes(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={aoFechar}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"
            >
              Salvar treino
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}