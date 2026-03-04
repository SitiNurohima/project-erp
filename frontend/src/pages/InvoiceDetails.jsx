import Sidebar from '../components/Sidebar';

const InvoiceDetails = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 flex justify-center">
        <div className="bg-white w-full max-w-2xl p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between mb-10">
            <div>
              <h1 className="text-xl font-bold uppercase tracking-widest">Invoice #INV-2023-001</h1>
              <p className="text-gray-400">Oct 26, 2023 • 14:32 PM</p>
            </div>
            <div className="text-right">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">PAID</span>
            </div>
          </div>
          
          <div className="space-y-4 mb-10">
            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-600">Crispy Fried Chicken (x2)</span>
              <span className="font-bold">Rp 50.000</span>
            </div>
            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-600">Iced Caramel Latte (x1)</span>
              <span className="font-bold">Rp 18.000</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <div className="flex justify-between text-xl font-bold">
              <span>Grand Total</span>
              <span className="text-blue-600">Rp 68.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;