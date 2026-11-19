export function StatCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-slate-500 font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800 mt-2">{value}</h3>
        </div>
        {/* O ícone dinâmico é renderizado aqui */}
        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
          <Icon size={24} />
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className="text-emerald-600 font-medium">{trend}</span>
        <span className="text-slate-500 ml-2">desde o último mês</span>
      </div>
    </div>
  );
}