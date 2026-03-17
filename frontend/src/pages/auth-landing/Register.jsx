import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // State form (Merchant Name dan Address disimpan di state, tapi belum dikirim ke API Auth)
  const [formData, setFormData] = useState({
    merchantName: '',
    address: '',
    name: '',     // Owner Name
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password // Laravel butuh ini karena rule 'confirmed'
      });

      // Jika sukses, langsung arahkan ke halaman login
      if (response.status === 200 || response.status === 201) {
        alert('Registrasi berhasil! Silakan login.');
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        // Ambil error validasi pertama dari Laravel
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];
        setErrorMsg(firstError);
      } else {
        setErrorMsg('Gagal melakukan pendaftaran. Coba lagi.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <nav className="flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
             <span className="text-white font-bold text-xl">📦</span>
          </div>
          <span className="font-bold text-xl text-gray-800 tracking-tight">ERP UMKM</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400 hidden md:block">Already have an account?</span>
          <Link to="/login" className="px-6 py-2 border border-gray-200 rounded-lg font-bold text-sm text-gray-700 hover:bg-gray-50 transition-all">
            Log In
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Kiri - Teks & Fitur (Tidak ada perubahan) */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
            🚀 Merchant Access
          </div>
          
          <h1 className="text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
            Start Your <br /> 
            <span className="text-gray-900">Business Journey Today</span>
          </h1>
          
          <p className="text-xl text-gray-500 max-w-md leading-relaxed">
            Join thousands of UMKM owners managing their inventory and sales efficiently.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border border-gray-100 rounded-[24px] shadow-sm bg-white hover:shadow-md transition-all">
              <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xl">📦</div>
              <h3 className="font-bold text-gray-800 text-sm">Inventory Mgmt</h3>
              <p className="text-xs text-gray-400 mt-1">Real-time stock tracking.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-[24px] shadow-sm bg-white hover:shadow-md transition-all">
              <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-xl">📊</div>
              <h3 className="font-bold text-gray-800 text-sm">Sales Analytics</h3>
              <p className="text-xs text-gray-400 mt-1">Growth insights.</p>
            </div>
          </div>

          <div className="relative rounded-[32px] overflow-hidden h-56 shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
              alt="Cafe" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <p className="text-white font-bold text-lg">Trusted by local businesses</p>
              <p className="text-white/70 text-sm">Empowering growth across the nation.</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan - Form */}
        <div className="bg-white p-12 rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.05)] border border-gray-50">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Create Merchant Account</h2>
            <p className="text-gray-400 text-sm font-medium">Enter your business details to get started.</p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 text-red-500 text-sm font-bold rounded-xl border border-red-100">
              {errorMsg}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">🏪 Business Info</div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 ml-1">Merchant Name</label>
                <input type="text" name="merchantName" value={formData.merchantName} onChange={handleChange} placeholder="e.g. Kopi Kenangan Abadi" className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all placeholder:text-gray-300 text-sm" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 ml-1">Business Address</label>
                <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Full street address, City, Zip Code" className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all placeholder:text-gray-300 h-24 resize-none text-sm" required />
              </div>
            </div>

            <hr className="border-gray-50" />

            <div className="space-y-4">
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">👤 Owner Details</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 ml-1">Owner Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 ml-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 ml-1">Create Password</label>
                <div className="relative">
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full bg-gray-50/50 p-4 rounded-xl border border-gray-100 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm" required />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl font-black shadow-xl flex items-center justify-center gap-2 mt-8 transition-all ${
                isLoading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 active:scale-95'
              }`}
            >
              {isLoading ? 'Processing...' : 'Complete Registration'} <span>→</span>
            </button>
            
            <p className="text-[10px] text-center text-gray-400 px-6 leading-relaxed">
              By registering, you agree to our <Link to="#" className="text-blue-500 font-bold underline">Terms</Link> and <Link to="#" className="text-blue-500 font-bold underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;