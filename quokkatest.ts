function selamatIndonesia() {
  const nama = 'Negara Kesatuan Republik Indonesia';
  const datenow = new Date();
  const independenceDay = 1945;
  const umur = datenow.getFullYear() - independenceDay;
  const harapan = 'Semoga bertambah makmur, adil, dan merata dalam kebaikan.';

  // tampilkan selamat
  console.log(`Dirgayahu ${nama} yang ke ${umur} tahun . ${harapan}`);
}

selamatIndonesia();
