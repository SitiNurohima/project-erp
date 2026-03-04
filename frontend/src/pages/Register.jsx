import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-lg p-10 rounded-[40px] shadow-sm border border-gray-100">
        <h2 className="text-3xl font-black text-gray-800 mb-2">Start Your Business Journey Today</h2>
        <p className="text-gray-500 mb-10 text-sm italic">Hanya butuh 2 menit untuk mendaftarkan merchant Anda.</p>
        
        <form className="space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Merchant Name</label>
            <input type="text" placeholder="Contoh: Kopi Senja Utama" className="w-full bg-gray-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 border border-gray-100" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Email Address</label>
            <input type="email" placeholder="email@merchant.com" className="w-full bg-gray-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 border border-gray-100" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase mb-2 block tracking-widest">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-gray-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 border border-gray-100" />
          </div>
          <button className="w-full bg-blue-600 text-white py-5 rounded-3xl font-black shadow-xl shadow-blue-100 uppercase tracking-widest text-sm hover:bg-blue-700 transition-all">Create Account</button>
        </form>
        
        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-blue-600 font-bold">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;