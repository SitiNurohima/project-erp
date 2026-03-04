import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar'; // 1. Tambahin import sidebar

const UserManagement = () => {
  const userRole = localStorage.getItem('userRole');

  const [users, setUsers] = useState([
    { id: 'U-001', name: 'Asep Kasir', email: 'asep@kopi.com', role: 'kasir', status: 'Active' },
    { id: 'U-002', name: 'Dadang Gudang', email: 'dadang@kopi.com', role: 'gudang', status: 'Active' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'kasir', password: '' });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("Tolong lengkapi semua data staff!");
      return;
    }

    const newStaffData = {
      id: `U-00${users.length + 1}`,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: 'Active'
    };

    setUsers([...users, newStaffData]);
    setShowModal(false);
    setNewUser({ name: '', email: '', role: 'kasir', password: '' });
    alert(`Sukses! Akun ${newStaffData.role} untuk ${newStaffData.name} berhasil disimpan.`);
  };

  return (
    // 2. Tambahin div flex agar Sidebar dan Konten berdampingan
    <div className="flex bg-gray-50 min-h-screen">
      
      {/* 3. Masukkan komponen Sidebar di sini */}
      <Sidebar />

      {/* 4. Bungkus konten utama dengan flex-1 */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            <p className="text-sm text-gray-500">Manage your shop staff (Cashiers & Warehousekeepers)</p>
          </div>
          
          {userRole === 'owner' && (
            <button 
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-100 transition-all"
            >
              + Add New Staff
            </button>
          )}
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">User ID</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Full Name</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Email</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Role</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-5 font-bold text-blue-600">{u.id}</td>
                  <td className="p-5 font-bold text-gray-800">{u.name}</td>
                  <td className="p-5 text-gray-600 text-sm">{u.email}</td>
                  <td className="p-5">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      u.role === 'kasir' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-tighter">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL (Tetap di luar div konten agar posisinya fixed di tengah layar) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl">
            <h2 className="text-xl font-black text-gray-800 mb-6 tracking-tight">Create New Staff Account</h2>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Full Name</label>
                <input type="text" required className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 text-sm" placeholder="e.g. Andi Wijaya" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
                <input type="email" required className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 text-sm" placeholder="staff@tokoanda.com" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Select Role</label>
                <select className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 text-sm" value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})} >
                  <option value="kasir">Kasir (Point of Sale)</option>
                  <option value="gudang">Gudang (Inventory)</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Initial Password</label>
                <input type="text" required className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-400 text-sm" placeholder="Set password for staff" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
              </div>
              <div className="flex gap-3 mt-8">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 text-sm font-bold text-gray-400 hover:bg-gray-50 rounded-2xl">Cancel</button>
                <button type="submit" className="flex-1 py-4 bg-blue-600 text-white text-sm font-black rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700">Save Staff</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;