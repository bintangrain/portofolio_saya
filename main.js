/* ===== Skrip umum untuk semua halaman (setiap blok hanya jalan jika elemennya ada) ===== */

// Tahun otomatis di footer
const tahunEl = document.getElementById('tahun');
if (tahunEl) tahunEl.textContent = new Date().getFullYear();

// Membuat kartu proyek
function kartuHTML(p) {
  const badge = p.teknologi.slice(0, 2).map(function (t) {
    return '<span class="badge badge-teknologi me-1">' + t + '</span>';
  }).join('');
  const teks = (p.judul + ' ' + p.ringkas + ' ' + p.teknologi.join(' ')).toLowerCase();
  return '<div class="col-md-6 col-lg-4" data-kategori="' + p.kategori + '" data-teks="' + teks + '">' +
    '<article class="card kartu-proyek">' +
    '<img src="' + sampul(p) + '" class="card-img-top" alt="Sampul proyek ' + p.judul + '">' +
    '<div class="card-body">' +
    '<p class="small text-secondary mb-1">' + p.kategori + '</p>' +
    '<h3 class="card-title h5"><a href="detail.html?id=' + p.id + '">' + p.judul + '</a></h3>' +
    '<p class="card-text">' + p.ringkas + '</p><div>' + badge + '</div>' +
    '</div></article></div>';
}

// ---------- Beranda: proyek unggulan + statistik ----------
const unggulan = document.getElementById('daftarUnggulan');
if (unggulan) unggulan.innerHTML = dataProyek.slice(0, 3).map(kartuHTML).join('');

const statistik = document.getElementById('statistik');
if (statistik) {
  let html = '<div class="col-6 col-md-3"><a class="text-decoration-none" href="proyek.html"><div class="kotak text-center"><div class="angka">' +
    dataProyek.length + '</div><div class="text-secondary">Total proyek</div></div></a></div>';
  ['Web', 'UI/UX', 'Pendidikan'].forEach(function (k) {
    const n = dataProyek.filter(function (p) { return p.kategori === k; }).length;
    html += '<div class="col-6 col-md-3"><a class="text-decoration-none" href="proyek.html?kategori=' + encodeURIComponent(k) +
      '"><div class="kotak text-center"><div class="angka">' + n + '</div><div class="text-secondary">' + k + '</div></div></a></div>';
  });
  statistik.innerHTML = html;
}

// ---------- Halaman Proyek: filter + pencarian ----------
const daftarProyek = document.getElementById('daftarProyek');
if (daftarProyek) {
  daftarProyek.innerHTML = dataProyek.map(kartuHTML).join('');
  const kolomCari = document.getElementById('cariProyek');
  const pesanKosong = document.getElementById('pesanKosong');
  let kategoriAktif = new URLSearchParams(location.search).get('kategori') || 'semua';

  function terapkanFilter() {
    const kata = kolomCari.value.trim().toLowerCase();
    let jumlah = 0;
    daftarProyek.querySelectorAll('[data-kategori]').forEach(function (kartu) {
      const cocokKategori = kategoriAktif === 'semua' || kartu.dataset.kategori === kategoriAktif;
      const cocokKata = kata === '' || kartu.dataset.teks.indexOf(kata) !== -1;
      const tampil = cocokKategori && cocokKata;
      kartu.classList.toggle('d-none', !tampil);
      if (tampil) jumlah++;
    });
    document.querySelectorAll('[data-filter]').forEach(function (tombol) {
      tombol.classList.toggle('aktif', tombol.dataset.filter === kategoriAktif);
    });
    pesanKosong.classList.toggle('d-none', jumlah > 0);
  }
  document.querySelectorAll('[data-filter]').forEach(function (tombol) {
    tombol.addEventListener('click', function () {
      kategoriAktif = tombol.dataset.filter;
      terapkanFilter();
    });
  });
  kolomCari.addEventListener('input', terapkanFilter);
  terapkanFilter();
}

// ---------- Halaman Detail: dibaca dari ?id=... ----------
const isiDetail = document.getElementById('isiDetail');
if (isiDetail) {
  const id = new URLSearchParams(location.search).get('id');
  const p = dataProyek.find(function (x) { return x.id === id; });
  const galat = document.getElementById('galatDetail');

  if (!p) {
    isiDetail.classList.add('d-none');
    galat.classList.remove('d-none');
  } else {
    function isiList(idElemen, daftar) {
      document.getElementById(idElemen).innerHTML = daftar.map(function (x) { return '<li>' + x + '</li>'; }).join('');
    }
    document.title = p.judul + ' | Bintang Rain';
    document.getElementById('judul').textContent = p.judul;
    document.getElementById('navJudul').textContent = p.judul;
    document.getElementById('ringkas').textContent = p.ringkas;
    document.getElementById('latar').textContent = p.latar;
    document.getElementById('hasil').textContent = p.hasil;
    document.getElementById('kategori').textContent = p.kategori;
    document.getElementById('tahunProyek').textContent = p.tahun;
    document.getElementById('peran').textContent = p.peran;
    const gambar = document.getElementById('gambar');
    gambar.src = sampul(p);
    gambar.alt = 'Sampul proyek ' + p.judul;
    isiList('fitur', p.fitur);
    isiList('proses', p.proses);
    document.getElementById('teknologi').innerHTML = p.teknologi.map(function (t) {
      return '<span class="badge badge-teknologi me-1 mb-1 fs-6">' + t + '</span>';
    }).join('');

    const urutan = dataProyek.indexOf(p);
    const sebelum = dataProyek[urutan - 1];
    const sesudah = dataProyek[urutan + 1];
    const tSebelum = document.getElementById('sebelum');
    const tSesudah = document.getElementById('sesudah');
    tSebelum.classList.toggle('d-none', !sebelum);
    tSesudah.classList.toggle('d-none', !sesudah);
    if (sebelum) tSebelum.href = 'detail.html?id=' + sebelum.id;
    if (sesudah) tSesudah.href = 'detail.html?id=' + sesudah.id;

    document.getElementById('salinTautan').addEventListener('click', function () {
      const tombol = this;
      const asli = tombol.innerHTML;
      function selesai(teks) {
        tombol.textContent = teks;
        setTimeout(function () { tombol.innerHTML = asli; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(location.href).then(function () { selesai('Tautan disalin'); }, function () { selesai('Salin dari address bar'); });
      } else {
        selesai('Salin dari address bar');
      }
    });
  }
}

// ---------- Halaman Tentang: foto profil ----------
const fotoProfil = document.getElementById('fotoProfil');
if (fotoProfil) fotoProfil.src = fotoProfilUri;