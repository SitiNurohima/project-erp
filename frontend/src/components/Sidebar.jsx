import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuGroups = [
    {
      label: 'OWNER & ADMIN',
      items: [
        { name: 'Dashboard', path: '/', icon: '📊' },
        { name: 'Users', path: '/users', icon: '👥' },
        { name: 'Reports', path: '/reports', icon: '📈' },
        { name: 'Audit Logs', path: '/audit-logs', icon: '🔒' },
      ]
    },
    {
      label: 'KASIR / POS',
      items: [
        { name: 'POS Interface', path: '/pos', icon: '🛒' },
        { name: 'Sales History', path: '/sales-history', icon: '📜' },
      ]
    },
    {
      label: 'GUDANG / WAREHOUSE',
      items: [
        { name: 'Warehouse Status', path: '/warehouse', icon: '🏢' },
        { name: 'Inventory Status', path: '/warehouse/inventory', icon: '📦' },
        { name: 'Stock Adjustment', path: '/inventory/adjustment', icon: '⚙️' },
        { name: 'Record Purchase', path: '/warehouse/purchase', icon: '📥' },
      ]
    }
  ];

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6 font-bold text-xl flex items-center gap-2 text-blue-600">
        <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-lg shadow-blue-100"></div>
        ERP UMKM
      </div>
      
      <nav className="flex-1 px-4 space-y-6">
        {menuGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-black text-gray-400 mb-2 px-3 tracking-widest">{group.label}</p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    location.pathname === item.path 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t mt-auto">
        <button className="flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 w-full rounded-xl font-bold transition-colors">
          <span>🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;