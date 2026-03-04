import React from 'react';
import Sidebar from '../components/Sidebar';

const UserManagement = () => {
  const team = [
    { name: 'Ahmad Fauzi', email: 'ahmad@tokomaju.com', role: 'Admin', status: 'Active' },
    { name: 'Siti Aminah', email: 'siti@tokomaju.com', role: 'Staff', status: 'Active' },
    { name: 'Budi Santoso', email: 'budi@tokomaju.com', role: 'Staff', status: 'Inactive' },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-bold">Team Members</h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Manage staff access and permissions</p>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-xs font-bold shadow-md hover:bg-blue-700 transition flex items-center gap-2">
            <span>➕</span> Create User
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] text-gray-400 font-bold mb-1">TOTAL STAFF</p>
            <h4 className="text-xl font-black">12</h4>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm border-l-4 border-l-green-500">
            <p className="text-[10px] text-gray-400 font-bold mb-1">ACTIVE NOW</p>
            <h4 className="text-xl font-black text-green-600">8</h4>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] text-gray-400 font-bold mb-1">ADMINS</p>
            <h4 className="text-xl font-black">3</h4>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-[10px] text-gray-400 font-bold mb-1">INVITES PENDING</p>
            <h4 className="text-xl font-black text-blue-500">2</h4>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b text-[10px] font-black text-gray-400 uppercase">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {team.map((u, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">{u.name.charAt(0)}</div>
                    <span className="font-bold text-gray-800">{u.name}</span>
                  </td>
                  <td className="p-4 text-gray-500 text-xs font-mono">{u.email}</td>
                  <td className="p-4 text-xs font-semibold text-gray-600">{u.role}</td>
                  <td className="p-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${u.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'}`}>
                      ● {u.status}
                    </span>
                  </td>
                  <td className="p-4 text-center text-gray-300">
                    <button className="hover:text-blue-600 text-lg mr-2">✏️</button>
                    <button className="hover:text-red-500 text-lg">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Restricted Module Banner - Sesuai Figma */}
        <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center gap-3">
          <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs">ℹ️</div>
          <div className="text-xs text-blue-600">
            <p className="font-bold">Module Restricted</p>
            <p>Currently managing users for Merchant ID: MID-2947-LJ (Toko Maju Jaya). Only users linked to this specific merchant ID are displayed.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;