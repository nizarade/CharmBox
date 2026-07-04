<img width="1834" height="882" alt="ss_charmbox" src="https://github.com/user-attachments/assets/85b9358c-dc70-47e2-a4b3-abebf649f72e" />


# CharmBox
**Live Preview : https://charm-box.vercel.app/**


CharmBox adalah platform web landing page sederhana untuk penyedia hampers dan gift box premium. Proyek ini dikembangkan sebagai sarana pembelajaran React dan Tailwind CSS guna menyajikan katalog hampers secara bersih, estetik, dan interaktif bagi para pengunjung.

Tampilan antarmuka didesain secara clean, modern, dan responsif menggunakan Tailwind CSS serta font Outfit yang estetik. Proyek ini juga dilengkapi animasi transisi halus dari Framer Motion untuk memberikan pengalaman navigasi pengguna yang lebih dinamis.

## Fitur Utama

- **Hero Section Menarik**: Header dengan latar gambar premium dan tagline *"Explore Hampers that fit your Dreams"* sebagai impresi awal bagi pengunjung.
- **About Us & Statistik**: Bagian penjelasan profil singkat brand beserta statistik pencapaian layanan.
- **Slider Katalog Hampers**: Galeri interaktif menampilkan ragam pilihan paket hampers (seperti *Sweet Blossom Box*, *Rustic Celebration Gift*, dll.) lengkap dengan harga, kategori, dan tombol navigasi kiri-kanan.
- **Testimoni Pelanggan**: Kolom ulasan dari pelanggan dengan tampilan kartu melingkar (*circular card*) untuk membangun kepercayaan pengunjung.
- **Form Kontak Terintegrasi**: Fitur kirim pesan yang terhubung langsung menggunakan layanan Web3Forms tanpa memerlukan konfigurasi server/backend tambahan.
- **Newsletter Subscription**: Form berlangganan di bagian footer untuk menyimulasikan sistem pembaruan informasi berkala kepada pengguna.

## Teknologi yang Dipakai

Proyek ini dikembangkan menggunakan kombinasi teknologi berikut:

- **React 18** sebagai pustaka (library) utama untuk membangun antarmuka pengguna yang modular.
- **Vite** sebagai build tool modern untuk menunjang kecepatan proses development.
- **Tailwind CSS** untuk mempermudah penyusunan layout yang responsif dan konsisten.
- **Motion (Framer Motion)** untuk mengimplementasikan animasi transisi elemen yang halus.
- **React Toastify** untuk menampilkan notifikasi umpan balik (toast) setelah pengisian form kontak.
- **Web3Forms** untuk memproses pengiriman form langsung menuju email tujuan secara praktis.

## Cara Menjalankan Project di Lokal

Jika Anda ingin menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah di bawah ini:

1. Clone repository ini ke komputer Anda:
   ```bash
   git clone https://github.com/nizarade/CharmBox.git
   ```

2. Masuk ke folder proyek:
   ```bash
   cd CharmBox
   ```

3. Install seluruh dependensi yang diperlukan:
   ```bash
   npm install
   ```

4. Jalankan server local development:
   ```bash
   npm run dev
   ```

Setelah server aktif, buka browser Anda dan akses alamat localhost yang tertera di terminal (biasanya http://localhost:5173).

5. Membuat build production (opsional):
   ```bash
   npm run build
   ```
