import Sidebar from '../components/Sidebar';

const RecordPurchase = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Record New Stock Purchase</h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="font-bold mb-6 text-blue-600 uppercase text-xs tracking-widest">Purchase Items</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 border border-dashed rounded-2xl">
                <span className="text-gray-400">Add product to purchase list...</span>
                <button className="text-blue-600 font-bold">+</button>
              </div>
            </div>
            <textarea placeholder="Additional Notes..." className="w-full bg-gray-50 border-0 rounded-2xl p-4 text-sm outline-none" rows="4"></textarea>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-fit">
            <h3 className="font-bold mb-6 text-gray-800">Supplier Details</h3>
            <select className="w-full bg-gray-50 p-3 rounded-xl mb-6 text-sm outline-none">
              <option>Select Supplier...</option>
            </select>
            <div className="border-t pt-6">
              <div className="flex justify-between font-bold mb-6">
                <span>Total Amount</span>
                <span className="text-blue-600">Rp 0</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-blue-100 uppercase tracking-widest text-xs">Submit Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordPurchase;