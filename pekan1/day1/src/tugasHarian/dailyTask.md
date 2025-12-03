no1: sudah jalan

no 2:
- HTML: kalo html sintask murni tapi kalo JSX: Sintaks mirip HTML tetapi ditulis di dalam JavaScript.
- HTML: <h1 class="title">Hello HTML</h1>
 JSX: const name = "React";
      const element = <h1 className="title">Hello, {name}</h1>;

no 3:
- Virtual DOM adalah representasi ringan dari DOM asli yang disimpan di memori. React menggunakan Virtual DOM untuk mengoptimalkan pembaruan UI agar lebih cepat dan efisien.
- cara kerjanya = Mempercepat render UI

no 4:
- SPA adalah aplikasi yang hanya memuat satu halaman HTML, lalu memperbarui konten secara dinamis menggunakan JavaScript tanpa reload halaman.
- MPA terdiri dari banyak halaman HTML, tiap navigasi me-reload halaman baru dari server.
kelebihan SPA:
- Pengalaman pengguna lebih mulus (tidak ada reload).
- Performa cepat setelah initial load (karena hanya update bagian tertentu).
kelebihan MPA:
- SEO jauh lebih baik (tiap halaman dapat diindeks terpisah).
- Initial load cepat karena hanya memuat halaman yang diperlukan.
