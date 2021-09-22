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
            pendaftarantech: "Registration and Works Submission",
            october: "October",
            favwin: "Favorite Winner",

            // Photography
            photographyTheme: "An Optimistic Through the Pandemic And On To A Brighter Future",
            photographyText: {
                crea1: "CREANOMIC 2020",
                crea2: "VOCATIONAL EDUCATION PROGRAM",
                crea3: "BRAWIJAYA UNIVERSITY",
                crea4: "FOR UNIVERSITY STUDENTS ONLY",
                crea5: "FREE REGISTRATION",
                open: "Open Registration and Submission",
                opendate: "12<sup>th</sup> October - 23<sup>th</sup> November 2020",
                scor: "Scoring ",
                scordate: "26<sup>th</sup> November - 4<sup>th</sup> December 2020",
                win: "Winner Announcement",
                windate: "10<sup>th</sup> December 2020",
                cap: "“Our Registration and Submission is officially Extended until 25th November 2020 at 08.00 P.M Indonesian Time”",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pendaftarandate: "12<sup>th</sup> October - 30<sup>th</sup> November 2020",
                techmeetdate: "21<sup>th</sup> November 2020",
                penilaiandate: "1<sup>st</sup> December - 9<sup>th</sup> December 2020",
                pengumumandate: "10<sup>th</sup> December 2020",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Era",
            bussinessPlanText: {
                pendaftarandate: "12<sup>th</sup> October - 30<sup>th</sup> November 2020",
                techmeetdate: "21<sup>th</sup> November 2020",
                techmeetdate2: "3<sup>rd</sup> December 2020",
                penyisihandate: "1<sup>st</sup> December - 2<sup>nd</sup> December 2020",
                penyisihandate2: "8<sup>th</sup> December - 9<sup>th</sup> December 2020",
                pengumumandate: "10<sup>th</sup> December 2020",

            },

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                pendaftarandate: "12<sup>th</sup> October - 30<sup>th</sup> November 2020",
                techmeetdate: "21<sup>th</sup> November 2020",
                penilaiandate: "1<sup>st</sup> December - 9<sup>th</sup> December 2020",
                pengumumandate: "10<sup>th</sup> December 2020",
                ttp: "Due to the number of registrants who have exceeded the limit. We are sorry about the registration for the ESSAY COMPETITION is officially CLOSED.  Thank you to everyone that already registered and you can send your ESSAY before 30th November 2020. For those that have no chance to register for the essay competition, don’t worry, because Creanomic is still open registration for BUSINESS PLAN, SHORT MOVIE, and INTERNATIONAL PHOTOGRAPHY COMPETITION.",
            },
            //Announcement
            essayAnn: {
                text1: "WINNER ANNOUNCEMENT OF NATIONAL COMPETITION",
                text2: "CREANOMIC 2020",
                text3: "WINNER ANNOUNCEMENT OF INTERNATIONAL COMPETITION",
                cok1: "Congratulations to all winners of the Creanomic National Competition 2020. Thank you for the enthusiasm for joining this competition.",
                cok6: "Congratulations to all winners of the Creanomic International Competition 2020. Thank you for the enthusiasm for joining this competition.",
                cok2: "For those that have no chance to win, don't be sad because you can take that chance to succeed in the next year!",
                cok3: "Notes:",
                cok4: "Winners announcement will also notify through email, so to all the winners kindly check the email from our Creanomic 2020 committee for confirmation.",
                cok5: "Thank you!",
            },

            certificate: "E-Certificate",
            tax: "Rewards do not include tax",

            downloadPDF: 'Download Terms & Conditions',
            enrollComp: 'Enroll Competition',
        },
        webinars: `
            <h1 style="text-align: left;">Creanomic 2020 proudly present our speakers on Webinar.</h1>

            <div style="text-align: left;">
            <p style="line-height: 1.5; margin: 1rem 0;">
            The speakers for our webinar are extraordinary womans with a high entrepreneurial spirit, they have many experiences and knowledge in business activities.
            </p>
            <p style="line-height: 1.5; margin: 1rem 0;">
            The owner of famous brand in Indonesia and they are very inspiring woman with a lot of knowledge!
            </p>
            <p style="line-height: 1.5; margin: 1rem 0;">
            For this opportunity, they will share their inspiring experiences and knowledge about the world of entrepreneurship!
            </p> 

            <p style="line-height: 1.5; margin: 1rem 0;">
                We will share our details Speakers on Creanomic 2020:
                <br>
                ➢ The speaker for our first webinar at 15th of November is Jessica Amelia, The owner of a famous brand, Lippie Serum By Raecca.
                <br>
                ➢ The speaker for our second webinar at 22th of November is the owner of Kopi Soe, her name is Sylvia Surya, as an owner of very famous coffee shop in Indonesia.
                <br>
                ➢ The speaker for our third webinar at 29th of November is Gita Savitri Devi as content creator and Owner of Tesavara.
                </p>

            <p style="line-height: 1.5; margin: 1rem 0;">So, for those of you who want to chit-chat with our speakers, don't forget to join our webinar. See you!!</p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Register now on this link below:
                <br>
                <a class="text-link" href="http://bit.ly/WebinarCreanomic2020Eps1">Webinar 1 : bit.ly/WebinarCreanomic2020Eps1</a> <br>
                <a class="text-link" href="http://bit.ly/WebinarCreanomic2020Eps2">Webinar 2 : bit.ly/WebinarCreanomic2020Eps2</a> <br>
                <a class="text-link" href="http://bit.ly/WebinarCreanomic2020Eps3">Webinar 3 : bit.ly/WebinarCreanomic2020Eps3</a> <br>
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                For more information:
                <br>
                <a
                href="https://api.whatsapp.com/send?phone=6285155408711&text=Halo, Creanomic."
                >WA : 085155408711 (Aliyya)</a
                >
                <br>
                Line : Rimbafap (Rimba)
            </p>
            </div>
        `
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
            pendaftarantech: "Pendaftaran dan Pengumpulan Karya",
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
                cap: "“Pendaftaran dan Pengumpulan secara resmi Diperpanjang hingga tanggal 25 November 2020 pukul 20.00 WIB”",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pendaftarandate: "12 Oktober - 30 November 2020",
                techmeetdate: " 21 November 2020",
                penilaiandate: "1 Desember - 9 Desember 2020",
                pengumumandate: "10 Desember 2020",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Era",
            bussinessPlanText: {
                pendaftarandate: "12 Oktober - 30 November 2020",
                techmeetdate: "21 November 2020",
                techmeetdate2: "3 Desember 2020",
                penyisihandate: "1 Desember - 2 Desember 2020",
                penyisihandate2: "8 Desember - 9 Desember 2020",
                pengumumandate: "10 Desember 2020",
            },

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                pendaftarandate: "12 Oktober - 30 November 2020",
                techmeetdate: "21 November 2020",
                penilaiandate: "1 Desember - 9 Desember 2020",
                pengumumandate: "10 Desember 2020",
                ttp: "Dikarenakan jumlah pendaftar yang melampaui batas. Maka kami mohon maaf untuk pendaftaran lomba ESSAY resmi DITUTUP. Terimakasih untuk teman - teman yang telah mendaftar dan dimohon untuk segera mengirimkan karya nya paling lambat tanggal 30 November 2020. Bagi yang belum berkesempatan mendaftar di lomba ESSAY, jangan khawatir karena masih dibuka pendaftran untuk lomba BUSINESS PLAN, SHORT MOVIE, dan FOTOGRAFI INTERNASIONAL.",
            },

            certificate: "E-Sertifikat",
            tax: "Hadiah belum termasuk pajak",

            downloadPDF: 'Unduh Ketentuan & Persyaratan',
            enrollComp: 'Daftar Lomba',

            //Announcement
            essayAnn: {
                text1: "PENGUMUMAN PEMENANG LOMBA NASIONAL",
                text2: "CREANOMIC 2020",
                text3: "PENGUMUMAN PEMENANG LOMBA INTERNASIONAL",
                cok1: "Selamat kepada para pemenang Lomba Nasional Creanomic 2020. Terima kasih atas antusiasmenya untuk mengikuti lomba ini.",
                cok6: "Selamat kepada para pemenang Lomba Internasional Creanomic 2020. Terima kasih atas antusiasmenya untuk mengikuti lomba ini.",
                cok2: "Bagi yang belum sempat menang jangan berkecil hati karena masih ada peluang lain tahun depan!",
                cok3: "Catatan:",
                cok4: "Pengumuman pemenang juga akan diberitahukan melalui email, untuk semua pemenang mohon cek email dari panitia kami untuk konfirmasi.",
                cok5: "Terima kasih!",
                name1: "Dinda Arum Mustiko Weni",
                univ1: "Universitas Brawijaya",
                theme1: "“VIRCHO - Pengembangan High-Tech Education Berbasis Virtual Reality dengan Teknologi Immersion dan Integrated Network System untuk Mewujudkan Indonesia Emas 2045 di Tengah Pandemi Covid-19”",

                name2: "Muhammad Fakhri Jayadi",
                univ2: "Institut Teknologi Sepuluh Nopember ",
                theme2: "“LAPAN (Lapak Pak Tani) : Inovasi Aplikasi Digital Berbasis Electronic Supply Chain Management Sebagai Solusi Untuk Meningkatkan Efisiensi dan Efektivitas Proses Bisnis Komoditas Pertanian di Masa Pandemi Covid-19”",

                name3: "Primaresty Millenda Susanto",
                univ3: "Universitas Brawijaya",
                theme3: "“ASTRO (Virtual Wisata Agro) : Program Eskalasi Pariwisata dan Pertanian Milenial dengan Aplikasi Wisata Agro Berbasis Virtual Reality sebagai Upaya Stabilitas Ekonomi di Masa Pandemi”",

                name4: "Sandi Sakti Hidayatulloh",
                univ4: "Universitas Brawijaya",
                theme4: "“Geopark Virtual Apps : Geopark dengan Konsep Virtual Reality”",
            },

            shortmovieAnn: {
                theme1: "“Pemuda dan Pandemi”",
                tim11: "Suhadi Adit Prastowo",
                tim12: "Galih Cahyo Nugroho",
                tim13: "Akmal Dwi Pramudya",
                univ1: "Universitas Diponegoro",

                theme2: "“A Tout Le Monde”",
                tim2: "Syamil Ghifari Ansharullah Satria ",
                univ2: "Telkom University",

                theme3: "“Ngabdi”",
                tim31: "Lucky Candra Musahada",
                tim32: "Ahmad Sulton Nasta'in",
                tim33: "Bramasta Bima Prakoso",
                tim34: "Tatang Adi Nugroho",
                univ3: "Universitas Brawijaya",
            },
            bussinessplanAnn: {
                theme1: "“Green Auto Cage”",
                tim11: "Aprilia Yulihanita",
                tim12: "Akbar Sena Wijaya",
                tim13: "Ahmad Mustafa",
                univ1: "Universitas Negeri Surabaya",

                theme2: "“Mahajasa”",
                tim21: "Sriana Wahyuni",
                tim22: "Itsna Nabilla",
                tim23: "Sekar Larasati Muslimah",
                univ2: "Institut Teknologi Bandung",

                theme3: "“Goresanku”",
                tim31: "Avenzoar Zufar Qisthauzan",
                tim32: "Muhammad Ainul Yaqin",
                univ3: "Institut Teknologi Sepuluh Nopember",
            },
            photographyAnn: {

                theme1: "“Looking For Hope”",
                name1: "Annisa Hasna Kartina",
                univ1: "Universitas Pendidikan Indonesia",

                theme2: "“The Importance of Parental Support”",
                name2: "Kahfi Kusnandi",
                univ2: "Universitas Pendidikan Indonesia",

                theme3: "“Plant goodness during a pandemic for good future”",
                name3: "Muhammad Ghozi Aminulloh",
                univ3: "UIN Maulana Malik Ibrahim Malang",

                theme4: "“Work Can Be Anywhere”",
                name4: "Muhammad Rofiq",
                univ4: "Universitas Lambung Mangkurat",

            },

        },
        webinars: `
            <h1 style="text-align: left;">Creanomic 2020 dengan bangga memperkenalkan narasumber pada webinar kali ini.</h1>

            <div style="text-align: left;">
            <p style="line-height: 1.5; margin: 1rem 0;">
            Creanomic menghadirkan wanita-wanita luar biasa dengan jiwa wirausaha yang tinggi, memiliki banyak pengalaman dan pengetahuan dalam kegiatan bisnis.
            </p>
                
            <p style="line-height: 1.5; margin: 1rem 0;">
            Seorang wirausahawan pemilik Brand terkenal di Indonesia yang inspiratif dengan banyak pengetahuan yang mereka miliki!
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
            Dalam kesempatan kali ini, mereka akan berbagi pengalaman dan pengetahuan yang menginspirasi tentang dunia kewirausahaan!
            </p> 

            <p style="line-height: 1.5; margin: 1rem 0;">
            Kami akan membagikan detail Narasumber pada Webinar Creanomic 2020:
            <br>
            ➢ Webinar pertama pada tanggal 15 November 2020 akan dimeriahkan oleh Jessica Amelia, pemiliki merek terkenal, Lippie Serum By Reecha.
            <br>
            ➢ Webinar kedua pada tanggal 22 November 2020 akan dimeriahkan oleh Sylvia Surya pemilik Kopi Soe yang merupakan kedai kopi terkenal di Indonesia.
            <br>
            ➢ Webinar ketiga pada tanggal 29 November 2020 akan dimeriahkan oleh Gita Savitri Devi seorang content creator dan owner Tesavara.
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
            Untuk kalian semua yang ingin berbicara dan bertukar pikiran bersama narasumber kami jangan lupa ikut webinar kami ya. Sampai jumpa!!
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Daftar sekarang pada tautan di bawah ini:
                <br>
                <a class="text-link" href="http://bit.ly/WebinarCreanomic2020Eps1">Webinar 1 : bit.ly/WebinarCreanomic2020Eps1</a> <br>
                <a class="text-link" href="http://bit.ly/WebinarCreanomic2020Eps2">Webinar 2 : bit.ly/WebinarCreanomic2020Eps2</a> <br>
                <a class="text-link" href="http://bit.ly/WebinarCreanomic2020Eps3">Webinar 3 : bit.ly/WebinarCreanomic2020Eps3</a> <br>
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Untuk informasi lebih lanjut:
                <br>
                <a
                href="https://api.whatsapp.com/send?phone=6285155408711&text=Halo, Creanomic."
                >WA : 085155408711 (Aliyya)</a
                >
                <br>
                Line : Rimbafap (Rimba)
            </p>
            </div>
        `,
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