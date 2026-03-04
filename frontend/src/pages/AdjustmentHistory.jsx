import Sidebar from '../components/Sidebar';

const AdjustmentHistory = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Stock Adjustment History</h1>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
           <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="border-l-4 border-blue-600 bg-gray-50 p-6 rounded-r-2xl flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Oct 26, 2023 • 14:32</p>
                    <h4 className="font-bold text-gray-800 text-lg">iPhone 13 Pro Max</h4>
                    <p className="text-xs text-gray-500">Reason: Damaged goods found during monthly audit</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-500 font-black text-xl">-2 Units</p>
                    <p className="text-[10px] font-black text-gray-300 uppercase">Corrected by Admin</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdjustmentHistory;