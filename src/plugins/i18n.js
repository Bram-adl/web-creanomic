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
        aboutCreaText1: `Creative Economy and Innovation Centre, which well-known as Creanomic, is an annual event which holds by Vocational Education Program, Brawijaya University. The event itself brings up topic about <i>creativity</i> and <i>innovation</i> which maintains the standard economy.`,
        aboutCreaText2: `Due to <i>corona virus pandemic</i>, the event evolves to adapt the current situation along with bringing new concept this year. Creanomic also brings up new events: <strong>Virtual Art Exhibition</strong>, <strong>Webinar</strong>, and widen our competitions scope to International level.`,
        creanomic: {
            cr: 'Creative',
            ea: 'Economy',
            no: 'Innovation',
            mic: 'Centre'
        },
        vaePage: {
            VirtualArtExhibitionText: `Virtual Art Exhibition is an online platform art gallery or a showcase of creative arts made by all <i>vocational student</i>, Brawijaya University. All arts are collected and provided inside this art exhibition. To take a visit, please click the button below.`,
            VirtualArtExhibitionBtn: 'Enter Virtual Art Exhibition',
        },
        wPage: {
            WebinarText: `The presence of <i>corona virus</i> has pushed technology to evolve and new innovation is then created. The prior seminar which takes venue has now changed into the brand new online seminar which works with website, known as Webinar. This year, Creanomic provides an online seminar with a topic about <strong>creativity</strong> to manage economy and industry. To take a part on this webinar, please click the button below`,
            WebinarBtn: 'Enroll Webinar',
        },
        cPage: {
            CompetitionText: `Creanomic provides both international and national competition. We are open for all active students of public/private university. Starts from photography, short movie, essay, and more. We have grandprized awaits you along with certificates. To get more information, please click the button below.`,
            CompetitionBtn1: 'International Competition',
            CompetitionBtn2: 'National Competition',
            NationalCompTitle: 'Creanomic National Competition',
            InternationalCompTitle: 'Creanomic International Competition',
        },
        competitions: {
            photography: 'Photography Competition',
            shortMovie: 'Short Movie Competition',
            essay: 'Essay Contest Competition',
            bussinessPlan: 'Bussiness Plan Competition',

            theme: 'Theme',
            timeline: 'Timeline',
            reward: 'Rewards',
            contactPerson: 'Contact Person',
            regist: 'Registration',

            Winner1: "1st Winner",
            Winner2: "2nd Winner",
            Winner3: "3rd Winner",
            runnerup: "Runner Up",
            pendaftaran: "Registration",
            pengumpulan: "Works Submission",
            penilaian: "Scoring",
            pengumuman: "Winner Announcement",
            penyisihan: "Elimination round",
            techmeet: "Technical Meeting",
            october: "October",
            favwin: "Favorite Winner",

            // Photography
            photographyTheme: "An Optimistic Through the Pandemic And On To A Brighter Future",
            photographyText: {
                crea1: "CREANOMIC 2020",
                crea2: "VOCATIONAL EDUCATION PROGRAM",
                crea3: "UNIVERSITAS BRAWIJAYA",
                crea4: "FOR UNIVERSITY STUDENTS ONLY",
                crea5: "FREE REGISTRATION",
                open: "Open Registration and Submission",
                opendate: "12<sup>th</sup> October - 23<sup>th</sup> November 2020",
                scor: "Scoring ",
                scordate: "26<sup>th</sup> November - 4<sup>th</sup> December 2020",
                win: "Winner Announcement",
                windate: "10<sup>th</sup> December 2020",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pendaftarandate: "12<sup>th</sup> October - 12<sup>th</sup> November 2020",
                pengumpulandate: "16<sup>th</sup> November - 30<sup>th</sup> November 2020",
                penilaiandate: "1<sup>st</sup> December - 4<sup>th</sup> December 2020",
                pengumumandate: "10<sup>th</sup> December 2020",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Era",
            bussinessPlanText: {
                pendaftarandate: "12<sup>th</sup> October - 12<sup>th</sup> November 2020",
                techmeetdate: "15<sup>th</sup> November 2020",
                techmeetdate2: "3<sup>rd</sup> December 2020",
                pengumpulandate: "16<sup>th</sup> November - 30<sup>th</sup> November 2020",
                penyisihandate: "1<sup>st</sup> December - 2<sup>nd</sup> December 2020",
                penyisihandate2: "8<sup>th</sup> December - 9<sup>th</sup> December 2020",
                pengumumandate: "10<sup>th</sup> December 2020",

            },

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                pendaftarandate: "12<sup>th</sup> October - 12<sup>th</sup> November 2020",
                pengumpulandate: "16<sup>th</sup> November - 30<sup>th</sup> November 2020",
                penilaiandate: "1<sup>st</sup> December - 4<sup>th</sup> December 2020",
                pengumumandate: "10<sup>th</sup> December 2020"
            },

            certificate: "E-Certificate",
            tax: "Rewards do not include tax",

            downloadPDF: 'Download Terms & Conditions',
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
        aboutCreaText2: `Karena adanya <i>pandemi virus corona</i>, acara ini berkembang untuk menyesuaikan situasi saat ini dengan membawa konsep baru tahun ini. Creanomic juga menghadirkan event event baru seperti <strong>Pameran Seni Virtual</strong> dan <strong>Webinar</strong>, dan sesuatu yang baru dari Creanomic adalah memperluas cakupan kompetisi kita ke tingkat internasional.`,
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
            WebinarBtn: 'Daftar Webinar',
        },
        cPage: {
            CompetitionText: `Creanomic menyediakan kompetisi international dan nasional. Kompetisi terbuka untuk Mahasiswa/i aktif di Universitas atau Perguruan Tinggi Negeri maupun Swasta. Mulai dari fotografi internasional, short movie, essay, dan masih banyak lagi. Kami memiliki hadiah utama khusus yang akan menanti anda bersama dengan sertifikatnya. Untuk mendapatkan detail lebih lanjut tentang semua kompetisi, silahkan klik tombol di bawah ini.`,
            CompetitionBtn1: 'Kompetisi Internasional',
            CompetitionBtn2: 'Kompetisi Nasional',
            NationalCompTitle: 'Kompetisi Nasional Creanomic',
            InternationalCompTitle: 'Kompetisi Internasional Creanomic',
        },
        competitions: {
            photography: 'Photography Competition',
            shortMovie: 'Short Movie Competition',
            essay: 'Essay Contest Competition',
            bussinessPlan: 'Business Plan Competition',

            theme: 'Tema',
            timeline: 'Alur Waktu',
            reward: 'Hadiah',
            contactPerson: 'Orang yang dapat dihubungi',
            regist: 'Pendaftaran',

            Winner1: "Juara 1",
            Winner2: "Juara 2",
            Winner3: "Juara 3",
            runnerup: "Juara Harapan",
            pendaftaran: "Pendaftaran",
            pengumpulan: "Pengumpulan Karya",
            penilaian: "penilaian",
            pengumuman: "Pengumuman",
            penyisihan: "Babak Penyisihan",
            techmeet: "Pertemuan Teknis",
            october: "Oktober",
            favwin: "Pemenang Favorit",

            photographyTheme: "An Optimistic Through the Pandemic And On To A Brighter Future",
            photographyText: {
                crea1: "CREANOMIC 2020",
                crea2: "PROGRAM PENDIDIKAN VOKASI",
                crea3: "UNIVERSITAS BRAWIJAYA",
                crea4: "KHUSUS MAHASISWA",
                crea5: "PENDAFTARAN GRATIS",
                open: "Buka Pendaftaran dan Pengumpulan",
                opendate: "12 Oktober - 23 November 2020",
                scor: "Penilaian ",
                scordate: "26 November - 4 Desember 2020",
                win: "Pengumuman Juara",
                windate: "10 Desember 2020",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pendaftarandate: "12 Oktober - 12 November 2020",
                pengumpulandate: "16 November - 30 November 2020",
                penilaiandate: "1 Desember - 4 Desember 2020",
                pengumumandate: "10 Desember 2020",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Era",
            bussinessPlanText: {
                pendaftarandate: "12 Oktober - 12 November 2020",
                techmeetdate: "15 November 2020",
                techmeetdate2: "3 Desember 2020",
                pengumpulandate: "16 November - 30 November 2020",
                penyisihandate: "1 Desember - 2 Desember 2020",
                penyisihandate2: "8 Desember - 9 Desember 2020",
                pengumumandate: "10 Desember 2020",


            },

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                pendaftarandate: "12 Oktober - 12 November 2020",
                pengumpulandate: "16 November - 30 November 2020",
                penilaiandate: "1 Desember - 4 Desember 2020",
                pengumumandate: "10 Desember 2020",
            },

            certificate: "E-Sertifikat",
            tax: "Hadiah belum termasuk pajak",

            downloadPDF: 'Unduh Ketentuan & Persyaratan',
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