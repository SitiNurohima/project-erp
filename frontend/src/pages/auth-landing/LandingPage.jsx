import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-gray-900">
      
      {/* Navbar - Konsisten dengan Register */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xl leading-none">📦</span>
          </div>
          <span className="font-bold text-xl text-gray-800 tracking-tight">ERP UMKM</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 transition-all">Register</Link>
          <Link to="/login" className="px-5 py-2 border border-gray-200 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 md:px-16 py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
            Simple Management for <br />
            <span className="text-gray-900">Small Businesses</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            A complete mini ERP solution to manage your merchant operations, inventory, and sales in one place. Streamline your workflow today.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:scale-105 hover:bg-blue-700 transition-all">
              Register Merchant
            </Link>
            <Link to="/login" className="px-8 py-4 border border-gray-200 rounded-xl font-bold hover:bg-white hover:shadow-sm transition-all bg-transparent">
              Login
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">✅ Free 14-day trial</span>
            <span className="flex items-center gap-2">✅ No credit card required</span>
          </div>
        </div>
        
        <div className="flex-1 relative w-full">
          <div className="bg-white rounded-[2rem] p-4 shadow-2xl border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              alt="Dashboard Preview" 
              className="rounded-xl shadow-inner w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 border-y border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-12 bg-white/50">
        {[
          { label: 'Merchants', val: '500+' },
          { label: 'Transactions', val: '1M+' },
          { label: 'Uptime', val: '99.9%' },
          { label: 'Support', val: '24/7' }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-extrabold mb-1 text-gray-800">{stat.val}</div>
            <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-24 text-center">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-blue-100">Key Features</span>
        <h2 className="text-4xl font-extrabold mt-6 mb-4 text-gray-900">Why Choose ERP UMKM?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">Streamline your business operations with our tailored features designed for growth and efficiency.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { icon: '📋', title: 'Inventory Management', desc: 'Keep track of your stock levels in real-time, get alerts for low stock.' },
            { icon: '📈', title: 'Sales Tracking', desc: 'Monitor your daily sales and generate comprehensive reports easily.' },
            { icon: '🏢', title: 'Multi-Merchant Support', desc: 'Manage multiple merchant profiles from a single account.' },
            { icon: '🧾', title: 'Invoicing', desc: 'Create professional invoices instantly. Send them to clients via email.' },
            { icon: '👥', title: 'Customer CRM', desc: 'Build better relationships with your customers. Maintain a database.' },
            { icon: '🛡️', title: 'Secure Data', desc: 'Your business data is encrypted and backed up daily. We prioritize security.' }
          ].map((feat, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[24px] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all group">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                {feat.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-8 md:px-16 py-20">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-blue-200">
          <div className="text-8xl opacity-20 absolute -top-4 left-10 italic font-serif leading-none">"</div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">
              "ERP UMKM has completely transformed how I manage my coffee shop. Inventory headaches are gone, and I can finally see where my money is going."
            </h2>
            <div>
              <p className="font-bold text-xl">Budi Santoso</p>
              <p className="text-blue-200 text-sm mt-1">Owner, Kopi Kenangan Abadi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center px-8">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Ready to grow your business?</h2>
        <p className="text-gray-500 mb-10 text-lg">Join thousands of small business owners who trust ERP UMKM.</p>
        <Link to="/register" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
          Get Started for Free
        </Link>
      </section>

      {/* Real Footer */}
      <footer className="px-8 md:px-16 py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded flex items-center justify-center">
             <span className="text-white font-bold text-xs leading-none">📦</span>
          </div>
          <span className="font-bold text-gray-800 tracking-tight">ERP UMKM</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
          <Link to="#" className="hover:text-blue-600 transition-colors">Features</Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">Pricing</Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="#" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>
        <p className="text-gray-400 text-xs font-medium">© 2026 ERP UMKM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;