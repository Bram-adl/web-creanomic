import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

/* 
  ===================================================================
  |
  | Translate Bahasa - English to Bahasa
  |
  ===================================================================
  |
  | Di sini ada dua buah object bernama en dan id. Untuk bagian en, 
  | kita tulisan teks dengan variable bebas tetapi value nya adalah
  | konten yang berbahasa inggris, setelah sudah dituliskan bahasa
  | inggrisnya, kita lakukan yang sama di object berikutnya, tetapi
  | kali ini kita tulisnya menggunakan bahasa indonesia. Penamaan
  | variable sebetulnya bebas, tetapi berdasarkan penggunaannya di 
  | dalam components, maka disesuaikan saja dengan isi utamanya.
  |
  ===================================================================
  |
  | Cheat Sheet - Penamaan Variable
  |
  ===================================================================
  |
  | 1. VirtualArtExhibitionText -> Paragraf penjelasan virtual art 
  | exhibition di halaman VirtualArtExhibition.vue
  | 2. VirtualArtExhibitionBtn -> Teks pada button di dalam halaman
  | VirtualArtExhibiion.vue
  | 3. WebinarText -> Paragraf penjelasan webinar di halaman 
  | Webinar.vue
  | 4. WebinarBtn -> Teks pada button di dalam halaman Webinar.vue
  | 5. WebinarFormTitle -> Judul pada formulir pendaftaran webinar
  | di dalam halaman Webinar.vue
  | 6. WebinarFormInfo -> Paragraf untuk informasi yang terletak di
  | form dalam halaman Webinar.Vue
  | 7. WebinarFName -> Placeholder untuk input First Name dalam 
  | halaman Webinar.vue
  | 8. WebinarLName -> Placeholder untuk input Last Name dalam
  | halaman Webinar.vue
  | 9. WebinarEMail -> Placeholder untuk input Email Address dalam
  | halaman Webinar.vue
  | 10. WebinarFormBtn -> Teks untuk button pada form dalam halaman
  | Webinar.vue
  | 11. CompetitionText -> Paragraf penjelasan competitions di dalam
  | halaman Competitions.vue
  | 12. CompetitionBtn1 -> Teks pada button International Competition
  | 13. CompetitionBtn2 -> Teks pada button National Competition
  | 14. NationalCompTitle -> Judul untuk halaman 
  | NationalCompetition.vue
  | 15. InternationalCompTitle -> Judul untuk halaman 
  | InternationalCompetition.vue
*/
const messages = {
  'en': {
    home: 'Home',
    virtualArtGallery: 'Virtual Art Gallery',
    webinar: 'Online Webinar',
    competition: 'Competitions',
    tagline: 'Explore',
    cta: 'Click to Explore',
    prev: 'Go Back',
    about: 'About',
    aboutCrea: 'About Creanomic',
    aboutCreaText1: `Creative Inovative and Economic Center, which well-known as Creanomic, is an annual event which holds by Vocational Education Program, Brawijaya University. The event itself brings up topic about <i>creativity</i> and <i>innovation</i> which maintains the standard economy.`,
    aboutCreaText2: `Due to <i>corona virus pandemic</i>, the event evolves to adapt the current situation along with bringing new concept this year. Creanomic also brings up new events: <strong>Art Exhibition</strong>, <strong>Online Webinar</strong>, and widen our competition scope to International level.`,
    creanomic: {
      cr: 'Creative',
      ea: 'Economy',
      no: 'Innovation',
      mic: 'Center'
    }
  },
  'id': {
    home: 'Beranda',
    virtualArtGallery: 'Pameran Seni Virtual',
    webinar: 'Webinar Online',
    competition: 'Perlombaan',
    tagline: 'Jelajahi',
    cta: 'Klik untuk Menjelajahi',
    prev: 'Kembali',
    about: 'Tentang',
    aboutCrea: 'Tentang Creanomic',
    aboutCreaText1: `Pusat Ekonomi dan Inovasi Kreatif, yang kemudian disebut CREANOMIC, merupakan kegiatan tahunan yang diadakan oleh Program Pendidikan Vokasi di Universitas Brawijaya. Acara ini mengangkat topik mengenai <i>Kreativitas</i> dan <i>Inovasi</i> yang menjaga standard ekonomi.`,
    aboutCreaText2: `Karena adanya <i>pandemi virus corona</i>, acara ini berkembang untuk menyesuaikan situasi saat ini dengan membawa konsep baru tahun ini. Creanomic juga menghadirkan event event baru seperti <strong>Art Exhibition</strong> dan <strong>Online Webinar</strong>, dan sesuatu yang baru dari Creanomic adalah memperluas cakupan kompetisi kita ke tingkat internasional.`,
    VirtualArtExhibitionText: `Virtual Art Exhibition adalah galeri seni flatform online dan showcase seni virtual hasil karya seluruh mahasiswa vokasi Universitas Brawijaya. Semua seni dikumpulkan dan disediakan di dalam galeri seni virtual online kami. Sekarang Anda dapat melihat semua kreativitas dengan memasukkan proyek seni virtual merek baru kami.`,
    WebinarText: `Kehadiran pandemi virus corona Creanomic telah mendorong teknologi berkembang dan cara inovasi baru diciptakan. Seminar yang berlangsung dan hadirin kini telah berkembang menjadi seminar online yang bekerja dengan website. Webinar adalah seminar online Creanomic kami yang berlangsung sesuai keinginan anda dan creanomic mempersembahkan seminar online dengan topik kreativitas untuk mengelola industri ekonomi, daftar sekarang untuk mendapatkan pemberitahuan.`,
    CompetitionText: `Creanomic menyediakan kompetisi internasional dan nasional. Kami terbuka bagi semua orang untuk berpartisipasi dengan kemudahan pendaftaran. Mulai dari fotografi internasional, film pendek, essay dan masih banyak lagi. Kami memiliki hadiah utama khusus yang akan menanti anda bersama dengan sertifikatnya. Untuk mendapatkan detil lebih lanjut tentang semua kompetisi, silahkan klik tombol dibawah ini.`,
    creanomic: {
      cr: 'Pusat',
      ea: 'Ekonomi',
      no: 'Inovasi',
      mic: 'Kreatif'
    },
  }
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'id',
  silentFallbackWarn: true,
  messages,
})

export default i18n