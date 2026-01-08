function StatCard({ icon, value, label, color }: { icon: React.ReactNode; value: number; label: string; color: string }) {
  return (
    <div className={`group relative overflow-hidden bg-${color}/10 backdrop-blur-xl rounded-3xl p-6 border-2 border-${color}/30 hover:border-${color} transition-all duration-300 hover:scale-105 shadow-xl`}>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/20 rounded-full blur-3xl`} />
      <div className="relative">
        <div className="flex items-center justify-between mb-3">{icon}</div>
        <div className={`text-4xl font-black text-${color} mb-1`}>{value}</div>
        <div className="text-textcolor/70 font-semibold">{label}</div>
      </div>
    </div>
  );
}
export default StatCard;