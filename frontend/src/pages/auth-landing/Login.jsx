import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('owner'); // Default role di UI
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- 1. SIMULASI RESPON DARI BACKEND (API) ---
    // Nanti bagian ini diganti dengan response asli dari backend/database
    const responseData = {
      roleFromApi: role, // Ambil dari state tombol yang diklik user
      id: 'USR-999', // Dummy User ID
    };

    const { roleFromApi, id } = responseData;

    // --- 2. SIMPAN DATA KE BROWSER (localStorage) ---
    // Simpan role dan ID agar sidebar/layout tahu siapa yang login
    localStorage.setItem('userRole', roleFromApi);
    localStorage.setItem('userId', id);

    // --- 3. LOGIKA PENGARAHAN (REDIRECT) YANG BARU ---
    // Karena Owner udah bikin toko pas Register, semua langsung bablas ke dasbor!
    if (roleFromApi === 'superadmin') {
      navigate('/superadmin'); // Dashboard utama sistem
    } 
    else if (roleFromApi === 'owner') {
      navigate('/owner-dashboard'); // Langsung masuk ke dasbor Owner
    } 
    else if (roleFromApi === 'kasir') {
      navigate('/cashier'); // Halaman kasir/POS
    } 
    else if (roleFromApi === 'gudang') {
      navigate('/inventory'); // Halaman manajemen gudang
    } 
    else {
      navigate('/'); // Fallback
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-900 relative">
      
      {/* Background Decor */}
      <div 
        className="absolute inset-0 z-0 opacity-30 blur-md"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1500")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/50 backdrop-blur-sm">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100">
                <span className="text-3xl text-white">📦</span>
            </div>
            <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Portal Login</h2>
            <p className="text-gray-400 text-sm font-medium">Select your role to access the system</p>
          </div>

          {/* Role Selection - Pill Style */}
          <div className="grid grid-cols-2 gap-2 mb-8 bg-slate-100 p-1.5 rounded-2xl">
            {[
              { id: 'owner', label: 'Owner', icon: '👑' },
              { id: 'kasir', label: 'Kasir', icon: '🛒' },
              { id: 'gudang', label: 'Gudang', icon: '🏠' },
              { id: 'superadmin', label: 'Admin Sistem', icon: '🛡️' },
            ].map((item) => (
              <button
                key={item.id}
                type="button" 
                onClick={() => setRole(item.id)}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-black transition-all ${
                  role === item.id 
                  ? 'bg-white shadow-sm text-blue-600' 
                  : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <span>{item.icon}</span> {item.label.toUpperCase()}
              </button>
            ))}
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Account Identity</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">👤</span>
                <input 
                  type="text" 
                  placeholder={role === 'superadmin' ? "Admin ID" : "Username / Email"} 
                  className="w-full bg-slate-50 p-4 pl-12 rounded-2xl border border-slate-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all text-sm" 
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">🔒</span>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 p-4 pl-12 rounded-2xl border border-slate-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all text-sm" 
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className={`w-full py-5 rounded-2xl font-black shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1 transition-all mt-6 text-sm uppercase tracking-widest ${
                role === 'superadmin' ? 'bg-slate-900 text-white shadow-slate-100' : 'bg-blue-600 text-white shadow-blue-100'
              }`}
            >
              Enter Dashboard <span>→</span>
            </button>
          </form>

          {/* Link Register cuma ditampilin kalau milih role Owner */}
          {role === 'owner' && (
            <div className="mt-8 pt-6 border-t border-slate-50 text-center">
              <p className="text-xs text-gray-400 font-medium">
                Want to register a new shop? <Link to="/register" className="text-blue-600 font-bold hover:underline">Register here</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;