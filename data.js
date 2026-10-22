/* ===== DATA PROYEK: ganti dengan proyek milik sendiri =====
   "id" unik tanpa spasi. "kategori" salah satu: Web, UI/UX, Pendidikan.
   Kartu, halaman detail, dan statistik dibuat otomatis dari sini. */
const dataProyek = [
  { id: 'kuis-interaktif', judul: 'Aplikasi Kuis Interaktif', label: 'Kuis Interaktif', kategori: 'Web', tahun: 2026,
    warna: ['#2B4EFF', '#FFB627'],
    ringkas: 'Kuis pilihan ganda berbasis browser dengan penilaian otomatis.',
    peran: 'Perancang antarmuka dan pengembang front-end',
    teknologi: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    latar: 'Latihan soal sering dilakukan di kertas sehingga hasilnya baru diketahui setelah diperiksa. Proyek ini dibuat agar mahasiswa bisa langsung melihat skor dan pembahasan setelah menjawab.',
    fitur: ['Soal pilihan ganda dengan urutan acak', 'Penilaian dan skor otomatis', 'Pembahasan singkat setiap soal', 'Tampilan responsif di ponsel dan laptop'],
    proses: ['Menyusun bank soal beserta kunci jawaban', 'Merancang alur dan tampilan dengan Bootstrap', 'Menulis logika penilaian dengan JavaScript', 'Menguji pada beberapa ukuran layar'],
    hasil: 'Aplikasi berjalan sepenuhnya di browser sehingga dapat dipublikasikan sebagai website statis tanpa server.' },

  { id: 'redesain-perpustakaan', judul: 'Redesain Antarmuka Perpustakaan Kampus', label: 'Redesain Perpustakaan', kategori: 'UI/UX', tahun: 2026,
    warna: ['#0B3C49', '#2BB5A0'],
    ringkas: 'Prototipe ulang halaman pencarian buku berdasarkan prinsip usability.',
    peran: 'Peneliti pengguna dan perancang prototipe',
    teknologi: ['Figma', 'Heuristik Nielsen', 'Usability Testing'],
    latar: 'Pengguna baru sering kesulitan menemukan buku karena menu dan hasil pencarian kurang jelas. Evaluasi dilakukan dengan sepuluh heuristik Nielsen.',
    fitur: ['Kolom pencarian yang lebih menonjol', 'Penyaringan hasil berdasarkan jurusan dan tahun', 'Status ketersediaan buku yang mudah dibaca', 'Pesan kesalahan yang menjelaskan cara memperbaikinya'],
    proses: ['Mengevaluasi antarmuka lama dengan heuristik Nielsen', 'Mencatat masalah usability beserta tingkat keparahannya', 'Membuat sketsa dan prototipe di Figma', 'Menguji prototipe pada beberapa pengguna'],
    hasil: 'Prototipe baru lebih mudah dipahami pengguna baru dan mengurangi jumlah langkah untuk menemukan sebuah buku.' },

  { id: 'media-ajar-informatika', judul: 'Media Ajar Informatika Interaktif', label: 'Media Ajar Informatika', kategori: 'Pendidikan', tahun: 2026,
    warna: ['#FFB627', '#2B4EFF'],
    ringkas: 'Media pembelajaran dasar algoritma untuk peserta didik SMA.',
    peran: 'Perancang materi dan pengembang media',
    teknologi: ['HTML', 'Bootstrap 5', 'JavaScript'],
    latar: 'Konsep algoritma sering terasa abstrak bagi peserta didik. Media ini menyajikan materi bertahap dengan contoh dan latihan singkat.',
    fitur: ['Materi dibagi per subtopik', 'Contoh algoritma dalam bentuk diagram alur', 'Latihan singkat dengan umpan balik langsung', 'Penyajian disesuaikan dengan tahap perkembangan kognitif peserta didik'],
    proses: ['Menentukan tujuan pembelajaran', 'Menyusun materi dan contoh', 'Membangun halaman dengan Bootstrap', 'Menambahkan latihan interaktif dengan JavaScript'],
    hasil: 'Media dapat dibuka lewat browser tanpa instalasi sehingga mudah dipakai di kelas.' },

  { id: 'website-profil-kelas', judul: 'Website Profil Kelas', label: 'Profil Kelas', kategori: 'Web', tahun: 2025,
    warna: ['#0E1F2B', '#2B4EFF'],
    ringkas: 'Website statis berisi profil, jadwal, dan galeri kegiatan kelas.',
    peran: 'Pengembang website',
    teknologi: ['HTML', 'CSS', 'Bootstrap 5'],
    latar: 'Informasi kelas tersebar di banyak grup percakapan sehingga sulit dicari kembali. Website ini mengumpulkannya dalam satu tempat.',
    fitur: ['Profil anggota kelas', 'Jadwal perkuliahan', 'Galeri dokumentasi kegiatan', 'Navigasi antar halaman'],
    proses: ['Mengumpulkan data anggota dan jadwal', 'Merancang kerangka halaman', 'Menerapkan sistem grid Bootstrap', 'Menguji tampilan di ponsel'],
    hasil: 'Seluruh informasi kelas dapat diakses lewat satu alamat website.' },

  { id: 'kalkulator-nilai', judul: 'Kalkulator Nilai Semester', label: 'Kalkulator Nilai', kategori: 'Web', tahun: 2025,
    warna: ['#2BB5A0', '#0B3C49'],
    ringkas: 'Alat hitung IPS dan IPK dengan validasi masukan.',
    peran: 'Pengembang front-end',
    teknologi: ['HTML', 'JavaScript'],
    latar: 'Menghitung IPS secara manual rawan salah karena bobot SKS berbeda-beda. Kalkulator ini mempercepat dan mengurangi kesalahan hitung.',
    fitur: ['Input nilai dan bobot SKS per mata kuliah', 'Perhitungan IPS otomatis', 'Validasi agar tidak ada kolom kosong', 'Pesan kesalahan untuk nilai di luar rentang'],
    proses: ['Menentukan rumus perhitungan', 'Membuat form dengan Bootstrap', 'Menulis fungsi hitung dan validasi', 'Menguji dengan beberapa contoh data'],
    hasil: 'Hasil perhitungan sesuai dengan perhitungan manual pada contoh yang diuji.' },

  { id: 'poster-edukasi-digital', judul: 'Poster Edukasi Literasi Digital', label: 'Poster Literasi Digital', kategori: 'UI/UX', tahun: 2025,
    warna: ['#E8453C', '#0E1F2B'],
    ringkas: 'Seri poster digital tentang etika bermedia sosial.',
    peran: 'Desainer visual',
    teknologi: ['Canva', 'Desain Visual'],
    latar: 'Pesan tentang etika bermedia sosial perlu disampaikan dengan cara yang singkat dan mudah dibaca di layar ponsel.',
    fitur: ['Hierarki visual yang jelas', 'Kontras warna yang memadai', 'Teks singkat dan langsung', 'Format yang sesuai untuk dibagikan di media sosial'],
    proses: ['Menentukan pesan utama setiap poster', 'Memilih palet warna dan huruf', 'Membuat tata letak di Canva', 'Meminta masukan dari teman sebelum dipublikasikan'],
    hasil: 'Seri poster siap dibagikan dan mudah dibaca pada layar kecil.' }
];

/* Gambar sampul dibuat otomatis (tidak perlu file gambar) */
function sampul(p) {
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'>" +
    "<rect width='800' height='500' fill='" + p.warna[0] + "'/>" +
    "<circle cx='650' cy='110' r='170' fill='" + p.warna[1] + "' opacity='.9'/>" +
    "<rect x='50' y='280' width='520' height='170' rx='18' fill='#F3F6F4'/>" +
    "<text x='85' y='350' font-family='Arial, sans-serif' font-weight='700' font-size='38' fill='#0E1F2B'>" + p.label + "</text>" +
    "<text x='85' y='400' font-family='Arial, sans-serif' font-size='26' fill='#5B6B75'>" + p.kategori + " | " + p.tahun + "</text></svg>";
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

/* Foto profil sementara (ganti dengan fotomu) */
const fotoProfilUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='#2B4EFF'/>" +
  "<circle cx='200' cy='160' r='70' fill='#F3F6F4'/><path d='M60 400c0-90 62-150 140-150s140 60 140 150z' fill='#FFB627'/></svg>");