import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        home: 'Home',
        virtualArtGallery: 'Virtual Art Exhibition',
        webinar: 'Webinar',
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
            mic: 'Centre'
        },
        vaePage: {
            VirtualArtExhibitionText: `Virtual Art Exhibition is an online platform art gallery or a showcase of creative arts made by all <i>vocational student</i>, Brawijaya Unversity. All arts are collected and provided inside this art exhibition. To take a visit, please click the button below.`,
            VirtualArtExhibitionBtn: 'Enter Virtual Art Exhibition',
        },
        wPage: {
            WebinarText: `The presence of <i>corona virus</i> has pushed technology to evolve and new innovation is then created. The prior seminar which takes venun has now changed into the brand new online seminar which works with website, known as Webinar. This year, Creanomic provides an online seminar with a topic about <strong>creativity</strong> to manage economy and industry. To take a part on this webinar, please click the button below`,
            WebinarBtn: 'Enroll Online Webinar',
        },
        cPage: {
            CompetitionText: `Creanomic provides both international and national competition. We are open for everyone to participate with ease registration. Starts from photography, short film, essay, and more. We have grandprized awaits you along with certificates. To get more information, please click the button below.`,
            CompetitionBtn1: 'International Competition',
            CompetitionBtn2: 'National Competition',
            NationalCompTitle: 'Creanomic National Competition',
            InternationalCompTitle: 'Creanomic International Competition',
        },
        competitions: {
            photography: 'Photography',
            shortMovie: 'Short Movie',
            essay: 'Essay',
            bussinessPlan: 'Bussiness Plan',

            theme: 'Theme',
            timeline: 'Timeline',
            reward: 'Rewards',
            contactPerson: 'Contact Person',
            regist: 'Registration',

            Winner1: "1st Winner",
            Winner2: "2st Winner",
            Winner3: "3st Winner",
            runnerup: "Runner Up",
            techmeet: "Technical Meeting",
            october: "October",
            favwin: "Favorite Winner",

            // Photography
            photographyTheme: "An Optimistic Through the Pandemic And On To A Brighter Future",
            photographyText: {
                line1: "Open Registration and Submission 12th October - 13th November 2020",
                line2: "Scoring 20th November - 28th November 2020",
                line3: "Winner Announcement 30th November 2020",
            },

            shortMovieTheme: "Become Inspirational Generation Admist The Pandemy",
            shortMovieText: {
                pengumpulan: "Works Submission",
                penyisihan: "Elimination round",
                pengumuman: "Announcement",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Area",

            essayTheme: "Inovation and Creativity Youth On Pandemy",
            essayText: {
                penilaian: "Scoring",
            },

            certificate: "e-certificate",
            tax: "Rewards do not include tax",

            downloadPDF: 'Download PDF',
            enrollComp: 'Enroll Competition',
        }

    },
    'id': {
        home: 'Beranda',
        virtualArtGallery: 'Pameran Seni Virtual',
        webinar: 'Webinar',
        competition: 'Perlombaan',
        tagline: 'Jelajahi',
        cta: 'Klik untuk Menjelajahi',
        prev: 'Kembali',
        about: 'Tentang',
        aboutCrea: 'Tentang Creanomic',
        aboutCreaText1: `Pusat Ekonomi dan Inovasi Kreatif, yang kemudian disebut CREANOMIC, merupakan kegiatan tahunan yang diadakan oleh Program Pendidikan Vokasi di Universitas Brawijaya. Acara ini mengangkat topik mengenai <i>Kreativitas</i> dan <i>Inovasi</i> yang menjaga standard ekonomi.`,
        aboutCreaText2: `Karena adanya <i>pandemi virus corona</i>, acara ini berkembang untuk menyesuaikan situasi saat ini dengan membawa konsep baru tahun ini. Creanomic juga menghadirkan event event baru seperti <strong>Art Exhibition</strong> dan <strong>Online Webinar</strong>, dan sesuatu yang baru dari Creanomic adalah memperluas cakupan kompetisi kita ke tingkat internasional.`,
        creanomic: {
            cr: 'Pusat',
            ea: 'Ekonomi',
            no: 'Inovasi',
            mic: 'Kreatif'
        },
        vaePage: {
            VirtualArtExhibitionText: `Virtual Art Exhibition adalah galeri seni platform online dan showcase seni virtual hasil karya seluruh <i>mahasiswa vokasi</i> Universitas Brawijaya. Semua seni dikumpulkan dan disediakan di dalam galeri seni virtual online kami. Sekarang anda dapat melihat semua kreativitas dengan mengunjungi pameran seni virtual kami.`,
            VirtualArtExhibitionBtn: 'Masuk ke Pameran Seni Virtual',
        },
        wPage: {
            WebinarText: `Kehadiran <i>pandemi virus corona</i> telah mendorong teknologi berkembang dan inovasi baru pun diciptakan. Seminar yang berlangsung dengan hadirin kini telah berkembang menjadi seminar online yang bekerja dengan website. Webinar adalah seminar online Creanomic kami yang berlangsung sesuai keinginan Anda dan Creanomic mempersembahkan seminar online dengan topik <strong>kreativitas untuk mengelola industri ekonomi</strong>. Daftar sekarang untuk mendapatkan pemberitahuan.`,
            WebinarBtn: 'Daftar Webinar Online',
        },
        cPage: {
            CompetitionText: `Creanomic menyediakan kompetisi international dan nasional. Kami terbuka bagi semua orang untuk berpartisipasi dengan kemudahan pendaftaran. Mulai dari fotografi internasional, film pendek, essay, dan masih banyak lagi. Kami memiliki hadiah utama khusus yang akan menanti anda bersama dengan sertifikatnya. Untuk mendapatkan detail lebih lanjut tentang semua kompetisi, silahkan klik tombol di bawah ini.`,
            CompetitionBtn1: 'Kompetisi Internasional',
            CompetitionBtn2: 'Kompetisi Nasional',
            NationalCompTitle: 'Kompetisi Nasional Creanomic',
            InternationalCompTitle: 'Kompetisi Internasional Creanomic',
        },
        competitions: {
            photography: 'Fotografi',
            shortMovie: 'Film Pendek',
            essay: 'Karangan',
            bussinessPlan: 'Rencana Bisnis',

            theme: 'Tema',
            timeline: 'Alur Waktu',
            reward: 'Hadiah',
            contactPerson: 'Orang yang dapat dihubungi',
            regist: 'Pendaftaran',

            Winner1: "Juara 1",
            Winner2: "Juara 2",
            Winner3: "Juara 3",
            runnerup: "Juara Harapan",
            techmeet: "Pertemuan Teknis",
            october: "Oktober",
            favwin: "Pemenang Favorit",

            photographyTheme: "Optimisme Dalam Pandemi Dan Menuju Masa Depan Lebih Cerah",
            photographyText: {
                line1: "Buka Pendaftaran dan Pengumpulan 12 Oktober - 13 November 2020",
                line2: "Penilaian 20 November - 28 November 2020",
                line3: "Pengumuman Juara 30 November 2020",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pengumpulan: "Pengumpulan Karya",
                penyisihan: "Babak Penyisihan",
                pengumuman: "Pengumuman",
            },

            bussinessPlanTheme: "Tujuan Bisnis Pembangunan Berkelanjutan Dengan Penggunaan Teknologi di Daerah Pandemi",

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                penilaian: "Penilaian",
            },

            certificate: "e-sertifikat",
            tax: "Hadiah belum termasuk pajak",

            downloadPDF: 'Unduh PDF',
            enrollComp: 'Daftar Lomba',
        }
    }
}

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'id',
    silentFallbackWarn: true,
    silentTranslationWarn: true,
    messages,
})

export default i18n