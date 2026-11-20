export function formatarDuracao(totalMinutos) {
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;

  if (horas === 0) return `${minutos}min`;
  if (minutos === 0) return `${horas}h`;

  // Garante dois dígitos nos minutos (ex: 1h05min em vez de 1h5min)
  const minutosFormatados = String(minutos).padStart(2, '0');
  return `${horas}h${minutosFormatados}min`;
}