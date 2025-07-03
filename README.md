🚀 **Webpack Starter**
Sebuah starter Webpack sederhana yang siap pakai untuk proyek JavaScript/HTML/CSS modern Anda. Cepat, ringan, dan mudah dikustomisasi!

✨ Fitur Utama
Webpack 5 Terbaru: Menggunakan konfigurasi Webpack versi terbaru untuk performa dan fitur terbaik.

Mode Pengembangan & Produksi:

Pengembangan: Hot Module Replacement (HMR) untuk live-reloading instan.

Produksi: Optimalisasi kode (minifikasi, tree-shaking) untuk bundle yang lebih kecil.

Dukungan JavaScript Modern: Kompatibel dengan ES6+ melalui Babel.

Dukungan CSS: Pengelolaan CSS dengan loader yang relevan (misalnya, style-loader, css-loader).

HTML Dinamis: Otomatis menghasilkan index.html dengan bundle JS/CSS yang benar.

Asset Management: Penanganan gambar, font, dan aset lainnya dengan mudah.

Clean Build: Membersihkan direktori build secara otomatis sebelum setiap build baru.

🛠️ Instalasi
Untuk memulai proyek ini, pastikan Anda sudah menginstal Node.js dan npm (atau Yarn) di sistem Anda.

Clone repositori ini:

Bash

git clone https://github.com/USERNAME_ANDA/webpack-starter.git
cd webpack-starter
(Ganti USERNAME_ANDA dengan nama pengguna GitHub Anda.)

Instal dependensi:

Bash

npm install

# atau

yarn install
🚀 Cara Menggunakan
Mode Pengembangan (Development)
Untuk menjalankan server pengembangan dengan live-reloading dan HMR:

Bash

npm run start

# atau

yarn start
Aplikasi akan tersedia di http://localhost:8080 (atau port lain yang dikonfigurasi). Perubahan pada kode sumber Anda akan otomatis dimuat ulang di browser.

Mode Produksi (Production)
Untuk membuat bundle yang dioptimalkan untuk produksi (siap deploy):

Bash

npm run build

# atau

yarn build
Hasil bundle akan tersimpan di direktori dist/ (atau direktori output yang Anda konfigurasi).

📂 Struktur Proyek
webpack-starter/
├── dist/ # Direktori output setelah proses build
├── public/ # File statis yang akan disalin langsung (misal: index.html, favicon)
├── src/ # Source code aplikasi Anda
│ ├── index.js # Titik masuk utama aplikasi JavaScript Anda
│ ├── style.css # Contoh file CSS
│ └── assets/ # Folder untuk gambar, font, dll.
├── .babelrc # Konfigurasi Babel (jika digunakan)
├── .gitignore # File/folder yang diabaikan oleh Git
├── package.json # Daftar dependensi dan script NPM
├── README.md # File ini!
└── webpack.config.js # Konfigurasi utama Webpack
⚙️ Konfigurasi Webpack
File konfigurasi Webpack utama ada di webpack.config.js. Anda bisa memodifikasinya untuk:

Mengubah entry point atau direktori output.

Menambahkan loader untuk jenis file baru (misalnya, TypeScript, Sass, Vue, React).

Menambahkan plugin untuk fungsionalitas tambahan (misalnya, optimisasi, variabel lingkungan).

🤝 Kontribusi
Sumbangan Anda sangat dihargai! Jika Anda memiliki saran atau menemukan bug, silakan buka issue atau buat pull request.

📜 Lisensi
Proyek ini dilisensikan di bawah [Nama Lisensi Anda] - lihat file LICENSE.md untuk detailnya.

📧 Kontak
Jika ada pertanyaan, jangan ragu untuk menghubungi:

[Nama Anda] - [Email Anda]

[Profil GitHub Anda (opsional)]
