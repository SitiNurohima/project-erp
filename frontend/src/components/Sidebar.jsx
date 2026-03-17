import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Ambil role dari localStorage
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('userRole'); 
    navigate('/login');
  };

  const menuGroups = [
    {
      label: 'ADMIN SISTEM',
      visible: userRole === 'superadmin',
      items: [
        { name: 'Dashboard', path: '/superadmin', icon: '🛡️' },
        { name: 'Merchant Management', path: '/merchants', icon: '🏪' },
        { name: 'Create Merchant', path: '/merchants/create', icon: '➕' },
        { name: 'Global Reports', path: '/global-reports', icon: '🌍' },
        { name: 'System Audit Logs', path: '/admin/audit-logs', icon: '🔐' },
      ]
    },
    {
      label: 'OWNER MENU',
      visible: userRole === 'owner',
      items: [
        { name: 'Owner Dashboard', path: '/owner-dashboard', icon: '📊' },
        { name: 'Product List', path: '/products', icon: '📦' },
        { name: 'Create Product', path: '/products/create', icon: '➕' },
        { name: 'User Management', path: '/users', icon: '👥' },
        { name: 'Purchase Orders', path: '/purchases', icon: '📥' },
        { name: 'Adjustment History', path: '/warehouse/adjustments', icon: '📜' }, 
        { name: 'Reports', path: '/reports', icon: '📈' },
        { name: 'Audit Logs', path: '/audit-logs', icon: '🔒' },
      ]
    },
    {
      label: 'KASIR / POS',
      visible: ['owner', 'kasir'].includes(userRole),
      items: [
        { name: 'Kasir Dashboard', path: '/cashier', icon: '🖥️' }, 
        { name: 'POS Interface', path: '/pos', icon: '🛒' }, 
        { name: 'Sales History', path: '/sales-history', icon: '📜' },
        { name: 'Invoice Details', path: '/invoice-details', icon: '🧾' },
      ]
    },
    {
      label: 'GUDANG / WAREHOUSE',
      visible: ['owner', 'gudang'].includes(userRole),
      items: [
        { name: 'Warehouse Dashboard', path: '/inventory', icon: '🏢' },
        { name: 'Inventory Status', path: '/warehouse/inventory', icon: '📦' },
        { name: 'Stock Adjustment', path: '/inventory/adjustment', icon: '⚙️' },
        { name: 'Record Purchase', path: '/purchases/record', icon: '📥' },
      ]
    }
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col sticky top-0 overflow-y-auto shadow-sm no-print">
      <div className="p-6 font-bold text-xl flex items-center gap-2 text-blue-600">
        <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-lg shadow-blue-100 flex items-center justify-center text-white text-[10px]">ERP</div>
        <span className="tracking-tight">ERP UMKM</span>
      </div>
      
      <nav className="flex-1 px-4 space-y-6">
        {menuGroups.map((group) => (
          group.visible && (
            <div key={group.label}>
              <p className="text-[10px] font-black text-gray-400 mb-3 px-3 tracking-[0.2em]">{group.label}</p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      location.pathname === item.path 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                        : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600 font-medium'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
      </nav>

      <div className="p-4 border-t mt-auto">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 w-full rounded-xl font-bold transition-colors group"
        >
          <span className="group-hover:rotate-12 transition-transform">🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;