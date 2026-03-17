import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

// --- 1. IMPORT HALAMAN UTAMA & AUTH ---
import LandingPage from './pages/auth-landing/LandingPage';
import Register from './pages/auth-landing/Register';
import Login from './pages/auth-landing/Login';

// --- 2. IMPORT HALAMAN OWNER ---
import OwnerDashboard from './pages/Owner/OwnerDashboard';
import ProductList from './pages/Owner/ProductList';
import CreateProduct from './pages/Owner/CreateProduct';
import UserManagement from './pages/Owner/UserManagement';
import PurchaseOrders from './pages/Owner/PurchaseOrders';
import AdjustmentHistory from './pages/Owner/AdjustmentHistory';
import Reports from './pages/Owner/Reports';
import AuditLogs from './pages/Owner/AuditLogs';

// --- 3. IMPORT HALAMAN ADMIN SISTEM ---
import SuperAdminDashboard from './pages/AdminSistem/SuperAdminDashboard';
import SystemAuditLogs from './pages/AdminSistem/SystemAuditLogs';
import GlobalReports from './pages/AdminSistem/GlobalReports'; 
import MerchantManagement from './pages/AdminSistem/MerchantManagement'; 
import CreateMerchant from './pages/AdminSistem/CreateMerchant'; 

// --- 4. IMPORT HALAMAN KASIR ---
import KasirDashboard from './pages/Kasir/KasirDashboard';
import POS from './pages/Kasir/POS';
import SalesHistory from './pages/Kasir/SalesHistory';
import InvoiceDetails from './pages/Kasir/InvoiceDetails';

// --- 5. IMPORT HALAMAN GUDANG ---
import WarehouseDashboard from './pages/Gudang/WarehouseDashboard';
import InventoryStatus from './pages/Gudang/InventoryStatus';
import StockAdjustment from './pages/Gudang/StockAdjustment';
import RecordPurchase from './pages/Gudang/RecordPurchase'; 

// =========================================================================
// LOGIKA PROTEKSI RUTE
// =========================================================================

// 1. PublicRoute: Mencegah user yang SUDAH login membuka halaman Login/Register lagi
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  if (token && userRole) {
    if (userRole === 'superadmin') return <Navigate to="/superadmin" replace />;
    if (userRole === 'owner') return <Navigate to="/owner-dashboard" replace />;
    if (userRole === 'kasir') return <Navigate to="/cashier" replace />;
    if (userRole === 'gudang') return <Navigate to="/inventory" replace />;
  }
  return children;
};

// 2. ProtectedRoute: Mencegah user BELUM login masuk dashboard, dan membatasi hak akses role
const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  // Jika tidak ada token (belum login), lempar ke halaman login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika ada token tapi role tidak sesuai dengan yang diizinkan untuk rute tersebut
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Kembalikan ke dashboard masing-masing
    if (userRole === 'superadmin') return <Navigate to="/superadmin" replace />;
    if (userRole === 'owner') return <Navigate to="/owner-dashboard" replace />;
    if (userRole === 'kasir') return <Navigate to="/cashier" replace />;
    if (userRole === 'gudang') return <Navigate to="/inventory" replace />;
    return <Navigate to="/" replace />;
  }

  // Jika aman, render komponen halaman (Outlet)
  return <Outlet />;
};

// =========================================================================
// KOMPONEN UTAMA
// =========================================================================
function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Publik */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Halaman Auth (Hanya bisa diakses kalau belum login) */}
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />

        {/* ======================================= */}
        {/* RUTE TERPROTEKSI BERDASARKAN ROLE */}
        {/* ======================================= */}

        {/* KHUSUS OWNER */}
        <Route element={<ProtectedRoute allowedRoles={['owner']} />}>
          <Route path="/owner-dashboard" element={<OwnerDashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/purchases" element={<PurchaseOrders />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/warehouse/adjustments" element={<AdjustmentHistory />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/users" element={<UserManagement />} />
        </Route>

        {/* KHUSUS SUPERADMIN */}
        <Route element={<ProtectedRoute allowedRoles={['superadmin']} />}>
          <Route path="/superadmin" element={<SuperAdminDashboard />} />
          <Route path="/admin/audit-logs" element={<SystemAuditLogs />} />
          <Route path="/merchants" element={<MerchantManagement />} />
          <Route path="/merchants/create" element={<CreateMerchant />} />
          <Route path="/global-reports" element={<GlobalReports />} />
        </Route>

        {/* KHUSUS KASIR */}
        <Route element={<ProtectedRoute allowedRoles={['kasir']} />}>
          <Route path="/cashier" element={<KasirDashboard />} />
          <Route path="/pos" element={<POS />} />
          <Route path="/sales-history" element={<SalesHistory />} />
          <Route path="/invoice-details" element={<InvoiceDetails />} />
        </Route>

        {/* KHUSUS GUDANG */}
        <Route element={<ProtectedRoute allowedRoles={['gudang']} />}>
          <Route path="/inventory" element={<WarehouseDashboard />} />
          <Route path="/warehouse/inventory" element={<InventoryStatus />} />
          <Route path="/inventory/adjustment" element={<StockAdjustment />} />
          <Route path="/purchases/record" element={<RecordPurchase />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<div className="flex items-center justify-center h-screen font-bold text-xl text-gray-800">404 - Halaman Tidak Ditemukan</div>} />
      </Routes>
    </Router>
  );
}

export default App;