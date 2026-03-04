import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- 1. IMPORT HALAMAN UTAMA & AUTH ---
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';

// --- 2. IMPORT HALAMAN OWNER & INVENTORY ---
import OwnerDashboard from './pages/OwnerDashboard';
import ProductList from './pages/ProductList';
import CreateProduct from './pages/CreateProduct';
import UserManagement from './pages/UserManagement';
import StockAdjustment from './pages/StockAdjustment';
import PurchaseOrders from './pages/PurchaseOrders';
import Reports from './pages/Reports';
import AuditLogs from './pages/AuditLogs';

// --- 3. IMPORT HALAMAN KASIR / POS ---
import KasirDashboard from './pages/KasirDashboard';
import POS from './pages/POS';
import SalesHistory from './pages/SalesHistory';
import InvoiceDetails from './pages/InvoiceDetails';

// --- 4. IMPORT HALAMAN GUDANG / WAREHOUSE ---
import WarehouseDashboard from './pages/WarehouseDashboard';
import InventoryStatus from './pages/InventoryStatus';
import AdjustmentHistory from './pages/AdjustmentHistory';
import RecordPurchase from './pages/RecordPurchase';

// --- 5. IMPORT HALAMAN SUPER ADMIN (PENYESUAIAN BARU) ---
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import MerchantManagement from './pages/MerchantManagement';
import CreateMerchant from './pages/CreateMerchant';
import GlobalReports from './pages/GlobalReports';
import SystemAuditLogs from './pages/SystemAuditLogs';

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTE LANDING & AUTH */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* MODUL OWNER */}
        <Route path="/dashboard" element={<OwnerDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/users" element={<UserManagement />} />
        
        {/* MODUL INVENTORY & PRODUK */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/inventory/adjustment" element={<StockAdjustment />} />
        <Route path="/purchases" element={<PurchaseOrders />} />
        
        {/* MODUL KASIR (POINT OF SALE) */}
        <Route path="/kasir" element={<KasirDashboard />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/sales-history" element={<SalesHistory />} />
        <Route path="/invoice-details" element={<InvoiceDetails />} />

        {/* MODUL GUDANG (WAREHOUSE) */}
        <Route path="/warehouse" element={<WarehouseDashboard />} />
        <Route path="/warehouse/inventory" element={<InventoryStatus />} />
        <Route path="/warehouse/adjustments" element={<AdjustmentHistory />} />
        <Route path="/warehouse/purchase" element={<RecordPurchase />} />

        {/* MODUL SUPER ADMIN (PENYESUAIAN BARU) */}
        <Route path="/admin" element={<SuperAdminDashboard />} />
        <Route path="/admin/merchants" element={<MerchantManagement />} />
        <Route path="/admin/merchants/create" element={<CreateMerchant />} />
        <Route path="/admin/reports" element={<GlobalReports />} />
        <Route path="/admin/audit-logs" element={<SystemAuditLogs />} />
      </Routes>
    </Router>
  );
}

export default App;