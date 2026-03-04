import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-900">
      {/* Navbar - Dibuat lebih tipis & clean */}
      <nav className="flex justify-between items-center px-16 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
            <div className="bg-blue-600 rounded-sm"></div>
            <div className="bg-blue-600 rounded-sm"></div>
            <div className="bg-blue-600 rounded-sm"></div>
            <div className="bg-blue-600 rounded-sm opacity-50"></div>
          </div>
          <span className="font-bold text-lg tracking-tight">ERP UMKM</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all">Register</Link>
          <Link to="/login" className="px-5 py-2 border border-gray-200 rounded-lg font-bold text-sm hover:bg-gray-50 transition-all">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-16 py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight">
            Simple Management for <br />
            <span className="text-gray-900">Small Businesses</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            A complete mini ERP solution to manage your merchant operations, inventory, and sales in one place. Streamline your workflow today.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
              Register Merchant
            </Link>
            <Link to="/login" className="px-8 py-4 border border-gray-200 rounded-lg font-bold hover:bg-gray-50 transition-all">
              Login
            </Link>
          </div>
          <div className="flex gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">✅ Free 14-day trial</span>
            <span className="flex items-center gap-2">✅ No credit card required</span>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="bg-gray-100 rounded-[2rem] p-4 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              alt="Dashboard Preview" 
              className="rounded-xl shadow-inner w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Stats Section - Bagian 500+, 1M+, dll */}
      <section className="max-w-7xl mx-auto px-16 py-16 border-y border-gray-50 grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { label: 'Merchants', val: '500+' },
          { label: 'Transactions', val: '1M+' },
          { label: 'Uptime', val: '99.9%' },
          { label: 'Support', val: '24/7' }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-extrabold mb-1">{stat.val}</div>
            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Grid - Why Choose ERP UMKM? */}
      <section className="max-w-7xl mx-auto px-16 py-24 text-center">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-tighter">Key Features</span>
        <h2 className="text-4xl font-extrabold mt-6 mb-4">Why Choose ERP UMKM?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">Streamline your business operations with our tailored features designed for growth and efficiency.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { icon: '📋', title: 'Inventory Management', desc: 'Keep track of your stock levels in real-time, get alerts for low stock.' },
            { icon: '📈', title: 'Sales Tracking', desc: 'Monitor your daily sales and generate comprehensive reports easily.' },
            { icon: '🏢', title: 'Multi-Merchant Support', desc: 'Manage multiple merchant profiles from a single account.' },
            { icon: '🧾', title: 'Invoicing', desc: 'Create professional invoices instantly. Send them to clients via email.' },
            { icon: '👥', title: 'Customer CRM', desc: 'Build better relationships with your customers. Maintain a database.' },
            { icon: '🛡️', title: 'Secure Data', desc: 'Your business data is encrypted and backed up daily. We prioritize security.' }
          ].map((feat, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all group">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {feat.icon}
              </div>
              <h3 className="font-bold text-lg mb-3">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section - Biru Mencolok */}
      <section className="px-16 py-20">
        <div className="bg-blue-600 rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="text-6xl opacity-20 absolute top-10 left-10 italic font-serif">"</div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              "ERP UMKM has completely transformed how I manage my coffee shop. Inventory headaches are gone, and I can finally see where my money is going."
            </h2>
            <div>
              <p className="font-bold text-xl">Budi Santoso</p>
              <p className="text-blue-200 text-sm">Owner, Kopi Kenangan Abadi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Ready to grow your business?</h2>
        <p className="text-gray-500 mb-10">Join thousands of small business owners who trust ERP UMKM.</p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-blue-100">
          Get Started for Free
        </button>
      </section>

      {/* Real Footer */}
      <footer className="px-16 py-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
           <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
           <span className="font-bold text-gray-800">ERP UMKM</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <Link to="#">Features</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Contact</Link>
        </div>
        <p className="text-gray-400 text-xs">© 2026 ERP UMKM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;