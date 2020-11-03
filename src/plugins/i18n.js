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
            techmeet: "Technical Meeting",
            october: "October",
            favwin: "Favorite Winner",

            // Photography
            photographyTheme: "An Optimistic Through the Pandemic And On To A Brighter Future",
            photographyText: {
                open: "Open Registration and Submission",
                opendate: "12<sup>th</sup> October - 13<sup>th</sup> November 2020",
                scor: "Scoring ",
                scordate: "20<sup>th</sup> November - 28<sup>th</sup> November 2020",
                win: "Winner Announcement",
                windate: "30<sup>th</sup> November 2020",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pengumpulan: "Works Submission",
                penyisihan: "Elimination round",
                pengumuman: "Announcement",

                timeline: "12<sup>th</sup> October - 29<sup>th</sup> October 2020",
                techmeet: "31<sup>st</sup> October 2020 (<i>via google meet/zoom</i>)",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Era",
            bussinessPlanText: {
                regist: "10<sup>th</sup> October - 29<sup>th</sup> October 2020",
                techmeet: "31<sup>st</sup> October 2020",
                works: "2<sup>nd</sup> November - 15<sup>th</sup> November 2020",
                elround: "17<sup>th</sup> November - 19<sup>th</sup> November 2020",
                techmeeti: "20<sup>th</sup> November 2020",
                elroundi: "26<sup>th</sup> November - 27<sup>th</sup> November 2020",
                announcement: "30<sup>th</sup> November 2020",
            },

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                penilaian: "Scoring",

                regist: "10<sup>th</sup> October - 29<sup>th</sup> October 2020",
                techmeet: "31<sup>st</sup> October 2020 (<i>via google meet/zoom</i>)",
                scor: "19<sup>th</sup> November - 27<sup>th</sup> November 2020",
                announcement: "30<sup>th</sup> November 2020",
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
                The speaker for this webinar is an extraordinary women with a high entrepreneurial spirit, they have many experiences and knowledge in business activities. 
            </p>
            <p style="line-height: 1.5; margin: 1rem 0;">
                The owner of famous brand in Indonesia and they are very inspiring woman with a lot of knowledge!
            </p>
            <p style="line-height: 1.5; margin: 1rem 0;">
                For this opportunity, they will share inspiring experiences and knowledge about the world of entrepreneurship! 
            </p> 

            <p style="line-height: 1.5; margin: 1rem 0;">
                We will share our details Speakers on Creanomic 2020 :
                <br>
                ➢ The speakers on first webinar is Jessica Amelia,  The owner of a famous brand, Lippie Serum By Raecca.
                <br>
                ➢ The speakers on second webinar is owner Kopi Soe, her name is Sylvia Surya, the owner of a famous coffee shop in Indonesia.
                <br>
                ➢ The speakers on third webinar is Gita Savitri Devi as content creator and Owner of Tesavara.
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">So, for those of you who want to chit-chat with our speakers, don't forget to join our webinar. See you!!</p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Register now on this link below :
                <br>
                <a class="text-link" href="bit.ly/WebinarCreanomic2020Eps1">Webinar 1 : bit.ly/WebinarCreanomic2020Eps1</a> <br>
                <a class="text-link" href="bit.ly/WebinarCreanomic2020Eps2">Webinar 2 : bit.ly/WebinarCreanomic2020Eps2</a> <br>
                <a class="text-link" href="bit.ly/WebinarCreanomic2020Eps3">Webinar 3 : bit.ly/WebinarCreanomic2020Eps3</a> <br>
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                For more information:
                <br>
                <a
                href="https://api.whatsapp.com/send?phone=6285155408711&text=Halo, Creanomic."
                >WA : 085155408711 (Aliyya)</a
                >
                <br>
                Line : Rimbafp (Rimba)
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
            techmeet: "Pertemuan Teknis",
            october: "Oktober",
            favwin: "Pemenang Favorit",

            photographyTheme: "An Optimistic Through the Pandemic And On To A Brighter Future",
            photographyText: {
                open: "Buka Pendaftaran dan Pengumpulan",
                opendate: "12 Oktober - 13 November 2020",
                scor: "Penilaian ",
                scordate: "20 November - 28 November 2020",
                win: "Pengumuman Juara",
                windate: "30 November 2020",
            },

            shortMovieTheme: "Menjadi Generasi yang Menginsipirasi di Tengah Pandemi",
            shortMovieText: {
                pengumpulan: "Pengumpulan Karya",
                penyisihan: "Babak Penyisihan",
                pengumuman: "Pengumuman",

                timeline: "12 Oktober - 29 Oktober 2020",
                techmeet: "31 Oktober 2020 (<i>via google meet/zoom</i>)",
            },

            bussinessPlanTheme: "Sustainable Development Bussiness Goals With The Use of Technology in Pandemic Era",
            bussinessPlanText: {
                regist: "10 Oktober - 29 Oktober 2020",
                techmeet: "31 Oktober 2020",
                works: "2 November - 15 November 2020",
                elround: "17 November - 19 November 2020",
                techmeeti: "20 November 2020",
                elroundi: "26 November - 27 November 2020",
                announcement: "30 November 2020",
            },

            essayTheme: "Inovasi dan Kreativitas Generasi Muda di Masa Pandemi",
            essayText: {
                penilaian: "Penilaian",

                regist: "10 Oktober - 29 Oktober 2020",
                techmeet: "31 Oktober 2020",
                scor: "19 November - 27 November 2020",
                announcement: "30 November 2020",
            },

            certificate: "E-Sertifikat",
            tax: "Hadiah belum termasuk pajak",

            downloadPDF: 'Unduh Ketentuan & Persyaratan',
            enrollComp: 'Daftar Lomba',
        },
        webinars: `
            <h1 style="text-align: left;">Creanomic 2020 dengan bangga memperkenalkan narasumber pada webinar Creanomic 2020.</h1>

            <div style="text-align: left;">
            <p style="line-height: 1.5; margin: 1rem 0;">
                Pada webinar kali ini Creanomic menghadirkan wanita luar biasa dengan jiwa wirausaha yang tinggi, memiliki banyak pengalaman dan pengetahuan dalam kegiatan bisnis. 
            </p>
                
            <p style="line-height: 1.5; margin: 1rem 0;">
                Seorang wirausahawan pemilik Brand terkenal di Indonesia yang inspiratif dengan banyak pengetahuan yang mereka miliki! 
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Dalam kesempatan kali ini, mereka akan berbagi pengalaman dan pengetahuan yang menginspirasi tentang dunia kewirausahaan!
            </p> 

            <p style="line-height: 1.5; margin: 1rem 0;">
                Kami akan membagikan detail Narasumber pada Webinar Creanomic 2020 :
                <br>
                ➢ Webinar pertama akan dimeriahkan oleh Jessica Amelia, pemiliki merek terkenal, Lippie Serum By Reecha.
                <br>
                ➢ Webinar kedua akan dimeriahkan oleh Sylvia Surya pemilik Kopi Soe yang merupakan kedai kopi terkenal di Indonesia.
                <br>
                ➢ Webinar ketiga akan dimeriahkan oleh Gita Savitri Devi seorang content creator dan owner Tesavara.
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Untuk kalian semua yang ingin berbicara dan bertukar pikiran bersama narasumber kami jangan lupa ikut webinar kami ya! Sampai jumpa.
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Daftar sekarang pada tautan di bawah ini :
                <br>
                <a class="text-link" href="bit.ly/WebinarCreanomic2020Eps1">Webinar 1 : bit.ly/WebinarCreanomic2020Eps1</a> <br>
                <a class="text-link" href="bit.ly/WebinarCreanomic2020Eps2">Webinar 2 : bit.ly/WebinarCreanomic2020Eps2</a> <br>
                <a class="text-link" href="bit.ly/WebinarCreanomic2020Eps3">Webinar 3 : bit.ly/WebinarCreanomic2020Eps3</a> <br>
            </p>

            <p style="line-height: 1.5; margin: 1rem 0;">
                Untuk informasi lebih lanjut:
                <br>
                <a
                href="https://api.whatsapp.com/send?phone=6285155408711&text=Halo, Creanomic."
                >WA : 085155408711 (Aliyya)</a
                >
                <br>
                Line : Rimbafp (Rimba)
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