import Sidebar from '../components/Sidebar';

const CreateMerchant = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Merchant</h1>
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 max-w-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Business Name</label>
                <input type="text" className="w-full bg-gray-50 border-0 p-4 rounded-2xl outline-none" placeholder="e.g. Coffee Shop ABC" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Merchant Category</label>
                <select className="w-full bg-gray-50 border-0 p-4 rounded-2xl outline-none">
                  <option>Food & Beverage</option>
                  <option>Retail</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Owner Email</label>
              <input type="email" className="w-full bg-gray-50 border-0 p-4 rounded-2xl outline-none" placeholder="owner@email.com" />
            </div>
            <button className="bg-blue-600 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-100">Register Merchant Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMerchant;