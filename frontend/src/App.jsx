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

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTE LANDING & AUTH (Halaman Utama) */}
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
      </Routes>
    </Router>
  );
}

export default App;