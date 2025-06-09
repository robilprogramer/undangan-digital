import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-4">
      <div className="text-center bg-white p-8 rounded-2xl shadow-2xl max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Undangan Digital
        </h1>
        <p className="text-gray-600 mb-8">
          Buat undangan 7 bulan kehamilan dengan mudah
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/undangan?husband=Ahmad&wife=Siti&date=Sabtu, 15 Desember 2024&kepada=Pak Budi"
            className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Lihat Contoh Undangan
          </Link>
          
          <div className="text-sm text-gray-500">
            <p className="mb-2">Format URL:</p>
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
              /undangan?husband=NAMA_SUAMI&wife=NAMA_ISTRI&date=TANGGAL&kepada=NAMA_TAMU
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}