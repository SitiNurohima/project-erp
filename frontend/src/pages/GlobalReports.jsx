import Sidebar from '../components/Sidebar';

const GlobalReports = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Global Ecosystem Reports</h1>
        <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm mb-8">
           <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-gray-400 text-sm">Total Processing Value (TPV)</p>
                <h2 className="text-4xl font-black text-gray-800">Rp 12.204.100.000</h2>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold">Daily</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold">Monthly</button>
              </div>
           </div>
           <div className="h-48 bg-blue-50/30 rounded-3xl flex items-center justify-center text-blue-300 font-bold italic text-sm">
             TPV Trends Visualization (Chart.js Placeholder)
           </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReports;