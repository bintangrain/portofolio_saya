/* ===== Halaman Masuk: validasi form dengan JavaScript (tanpa backend) ===== */
const form = document.getElementById('formLogin');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const areaAlert = document.getElementById('areaAlert');
const tombolLihat = document.getElementById('lihatPassword');
const kartuLogin = document.getElementById('kartuLogin');
const kartuSudahMasuk = document.getElementById('kartuSudahMasuk');
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // pola email sederhana: teks@teks.teks

function tampilkanAlert(jenis, pesan) {
  areaAlert.innerHTML =
    '<div class="alert alert-' + jenis + ' alert-dismissible fade show" role="alert">' + pesan +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Tutup"></button></div>';
}
function setError(input, pesan) {
  input.classList.add('is-invalid'); input.classList.remove('is-valid');
  document.getElementById(input.id + 'Pesan').textContent = pesan;
}
function setValid(input) { input.classList.remove('is-invalid'); input.classList.add('is-valid'); }

// Aturan Gmail: tidak kosong, format email benar, dan berakhiran @gmail.com
function validasiEmail() {
  const nilai = inputEmail.value.trim().toLowerCase();
  if (nilai === '') { setError(inputEmail, 'Gmail tidak boleh kosong.'); return false; }
  if (!polaEmail.test(nilai)) { setError(inputEmail, 'Format email tidak valid. Contoh: nama@gmail.com'); return false; }
  if (!nilai.endsWith('@gmail.com') || nilai === '@gmail.com') { setError(inputEmail, 'Gunakan alamat Gmail yang berakhiran @gmail.com.'); return false; }
  setValid(inputEmail); return true;
}
// Aturan password: tidak kosong, minimal 8 karakter, ada huruf dan angka
function validasiPassword() {
  const nilai = inputPassword.value;
  if (nilai === '') { setError(inputPassword, 'Password tidak boleh kosong.'); return false; }
  if (nilai.length < 8) { setError(inputPassword, 'Password minimal 8 karakter.'); return false; }
  if (!/[A-Za-z]/.test(nilai) || !/[0-9]/.test(nilai)) {
    setError(inputPassword, 'Password harus mengandung huruf dan angka.'); return false;
  }
  setValid(inputPassword); return true;
}

inputEmail.addEventListener('blur', validasiEmail);
inputPassword.addEventListener('blur', validasiPassword);

// Tombol tampilkan/sembunyikan password
tombolLihat.addEventListener('click', function () {
  const tersembunyi = inputPassword.type === 'password';
  inputPassword.type = tersembunyi ? 'text' : 'password';
  tombolLihat.innerHTML = tersembunyi ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
  tombolLihat.setAttribute('aria-label', tersembunyi ? 'Sembunyikan password' : 'Tampilkan password');
});

// Menampilkan form login atau kartu "sudah masuk" sesuai status
function perbaruiTampilan() {
  const email = penggunaAktif();
  document.getElementById('emailAktif').textContent = email || '';
  kartuLogin.classList.toggle('d-none', !!email);
  kartuSudahMasuk.classList.toggle('d-none', !email);
}
perbaruiTampilan();

form.addEventListener('submit', function (event) {
  event.preventDefault(); // form tidak diproses sebelum lolos validasi
  const emailOk = validasiEmail();
  const passwordOk = validasiPassword();

  if (!emailOk || !passwordOk) {
    tampilkanAlert('danger', '<strong>Gagal masuk.</strong> Periksa kembali isian yang ditandai merah.');
    return;
  }
  // Lolos validasi: simpan status masuk, lalu buka beranda
  simpanMasuk(inputEmail.value.trim().toLowerCase());
  tampilkanAlert('success', '<strong>Berhasil masuk.</strong> Membuka beranda...');
  setTimeout(function () { location.href = 'index.html'; }, 800);
});

document.getElementById('tombolKeluar').addEventListener('click', function () {
  hapusMasuk();
  form.reset();
  [inputEmail, inputPassword].forEach(function (i) { i.classList.remove('is-valid', 'is-invalid'); });
  areaAlert.innerHTML = '';
  location.reload(); // muat ulang agar menu navbar tersembunyi lagi
});