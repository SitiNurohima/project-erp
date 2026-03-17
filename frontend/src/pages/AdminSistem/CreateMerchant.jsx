import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'; // Panggil Sidebar manual

const CreateMerchant = () => {
  const navigate = useNavigate();
  
  // Ambil data user yang sedang login dari localStorage
  const userRole = localStorage.getItem('userRole'); 
  const currentUserId = localStorage.getItem('userId');

  // State untuk nyimpen isian form
  const [formData, setFormData] = useState({
    // --- Data Toko (Merchant) ---
    merchantName: '',
    address: '',
    phone: '',
    
    // --- Data Owner (Khusus untuk Super Admin yang bikinin akun) ---
    ownerName: '',
    ownerEmail: '',
    ownerPassword: '',
    
    // Kalau yang login adalah owner, otomatis pakai ID dia sendiri
    ownerId: userRole === 'owner' ? currentUserId : '', 
  });

  // Fungsi untuk menangani perubahan input ketikan
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi yang jalan saat tombol "Simpan" diklik
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // 1. Validasi Dasar (Semua role harus isi data toko)
    if (!formData.merchantName || !formData.address || !formData.phone) {
      alert('Tolong isi semua data toko (Nama, Alamat, No. Telp)!');
      return;
    }

    // 2. Validasi Khusus Super Admin (Harus isi data akun owner baru)
    if (userRole === 'superadmin') {
      if (!formData.ownerName || !formData.ownerEmail || !formData.ownerPassword) {
        alert('Karena Anda Admin, tolong isi juga Data Login untuk Owner tersebut!');
        return;
      }
    }

    // NANTI DI SINI TEMPAT KAMU NARUH KODE UNTUK KIRIM DATA KE API
    console.log('Data yang Siap Disimpan ke Database:', formData);
    
    if (userRole === 'superadmin') {
      alert(`Berhasil! Toko ${formData.merchantName} dan Akun ${formData.ownerEmail} sukses dibuat. User tinggal login!`);
      navigate('/merchants');
    } else {
      alert(`Berhasil! Cabang baru ${formData.merchantName} sukses didambahkan.`);
      navigate('/owner-dashboard');
    }
  };

  return (
    // Bungkus dengan flex agar Sidebar ada di kiri dan form di kanan
    <div className="flex bg-gray-50 min-h-screen">
      
      {/* --- SIDEBAR MANUAl --- */}
      <Sidebar />

      {/* --- KONTEN FORM (flex-1 agar memenuhi sisa layar) --- */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-black text-gray-800 mb-8 border-b border-gray-50 pb-6 tracking-tight">
            {userRole === 'owner' ? 'Buka Cabang Toko Baru' : 'Daftarkan Klien UMKM Baru'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* --- SECTION 1: DATA TOKO --- */}
            <div className="space-y-5">
              <h3 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Informasi Toko</h3>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 ml-1">Nama Toko</label>
                <input
                  type="text"
                  name="merchantName"
                  value={formData.merchantName}
                  onChange={handleChange}
                  placeholder="Contoh: Toko Berkah Jaya"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 ml-1">Nomor Telepon Toko</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 08123456789"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 ml-1">Alamat Lengkap</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Masukkan alamat lengkap toko..."
                  rows="3"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm"
                ></textarea>
              </div>
            </div>

            {/* --- SECTION 2: DATA OWNER (KHUSUS SUPER ADMIN) --- */}
            {userRole === 'superadmin' && (
              <div className="pt-8 border-t border-gray-50 space-y-5">
                <div className="bg-blue-50/50 p-6 rounded-[24px] border border-blue-100/50 space-y-5">
                  <div>
                    <h3 className="text-[10px] font-black text-blue-800 uppercase tracking-[0.2em]">Buatkan Akun Login Owner</h3>
                    <p className="text-[10px] text-blue-500 mt-1 font-medium">Data ini diperlukan agar pemilik toko bisa langsung login.</p>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-blue-900/40 ml-1">Nama Pemilik</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full p-4 bg-white border border-blue-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-blue-900/40 ml-1">Email Login</label>
                      <input
                        type="email"
                        name="ownerEmail"
                        value={formData.ownerEmail}
                        onChange={handleChange}
                        placeholder="budi@gmail.com"
                        className="w-full p-4 bg-white border border-blue-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-blue-900/40 ml-1">Password Sementara</label>
                      <input
                        type="text"
                        name="ownerPassword"
                        value={formData.ownerPassword}
                        onChange={handleChange}
                        placeholder="minimal 6 karakter"
                        className="w-full p-4 bg-white border border-blue-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tombol Aksi */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(-1)} 
                className="flex-1 py-4 border border-gray-100 text-gray-400 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-gray-50 transition-all"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-[2] py-4 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all"
              >
                {userRole === 'superadmin' ? 'Simpan & Buat Akun' : 'Simpan Cabang Baru'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMerchant;