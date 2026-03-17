import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [role, setRole] = useState('owner');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);
    
    try {
      // Request ke backend Laravel
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      });

      const { user, token } = response.data;

      // Simpan Token dan Data User ke localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id);
      
      // Catatan: Idealnya role didapat dari database (user.role), 
      // tapi untuk sementara kita pakai state UI sesuai desainmu
      localStorage.setItem('userRole', role);

      // Redirect sesuai role
      if (role === 'superadmin') navigate('/superadmin');
      else if (role === 'owner') navigate('/owner-dashboard');
      else if (role === 'kasir') navigate('/cashier');
      else if (role === 'gudang') navigate('/inventory');
      else navigate('/');

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMsg('Email atau password salah!');
      } else {
        setErrorMsg('Terjadi kesalahan pada server.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-gray-900 relative">
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

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 text-red-500 text-xs font-bold rounded-xl text-center border border-red-100">
              {errorMsg}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Account Identity</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">👤</span>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full bg-slate-50 p-4 pl-12 rounded-2xl border border-slate-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all text-sm" 
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Password</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400">🔒</span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 p-4 pl-12 rounded-2xl border border-slate-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all text-sm" 
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 rounded-2xl font-black shadow-xl flex items-center justify-center gap-2 transition-all mt-6 text-sm uppercase tracking-widest ${
                isLoading ? 'bg-gray-400 cursor-not-allowed text-white' :
                role === 'superadmin' ? 'bg-slate-900 text-white shadow-slate-100 hover:-translate-y-1' : 'bg-blue-600 text-white shadow-blue-100 hover:-translate-y-1'
              }`}
            >
              {isLoading ? 'Processing...' : 'Enter Dashboard'} <span>→</span>
            </button>
          </form>

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