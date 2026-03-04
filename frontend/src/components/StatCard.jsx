const StatCard = ({ label, value, trend, color }) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <div className="bg-white p-5 rounded-xl border flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <span className={`p-2 rounded-lg text-xs font-bold ${colorMap[color]}`}>{label}</span>
        <span className="text-xs text-green-500 font-medium">{trend}</span>
      </div>
      <h2 className="text-xl font-bold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;