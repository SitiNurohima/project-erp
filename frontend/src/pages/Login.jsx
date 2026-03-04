import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-blue-50 rounded-full blur-[100px]"></div>
      
      <div className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl shadow-blue-50 relative z-10 border border-gray-50">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4"></div>
          <h2 className="text-2xl font-black text-gray-800">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Login to manage your business</p>
        </div>
        
        <form className="space-y-6">
          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 border border-gray-100" />
          <input type="password" placeholder="Password" className="w-full bg-gray-50 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 border border-gray-100" />
          <button className="w-full bg-blue-600 text-white py-5 rounded-3xl font-black shadow-xl shadow-blue-100 uppercase tracking-widest text-sm">Login System</button>
        </form>
        
        <div className="mt-8 flex justify-between items-center text-xs">
          <Link to="/register" className="text-blue-600 font-bold">Create Merchant Account</Link>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-400">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;