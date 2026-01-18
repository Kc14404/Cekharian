// FILE: assets/js/data.js

// 1. DỮ LIỆU 35 WETON (Dùng cho Tool Cek Weton)
const WETON_DATA = {
    // MINGGU (CHỦ NHẬT)
    "Minggu Legi": { id: "Sumur Sinaba: Orang yang bijaksana, wawasannya luas, dan sering dicari orang untuk dimintai nasihat." },
    "Minggu Pahing": { id: "Lakuning Rembulan: Mempesona dan menenteramkan hati orang lain, tetapi cenderung pendiam." },
    "Minggu Pon": { id: "Bumi Kapetak: Pekerja keras, tahan banting, tetapi terkadang keras kepala." },
    "Minggu Wage": { id: "Lakuning Angin: Menyejukkan tetapi tidak bisa menetap, sering berpindah-pindah keinginan." },
    "Minggu Kliwon": { id: "Lakuning Lintang: Pendiam, suka menyendiri, tetapi memiliki hati yang tulus." },

    // SENIN (THỨ 2)
    "Senin Legi": { id: "Lakuning Angin: Ceria dan suka bergaul, namun pendiriannya mudah goyah." },
    "Senin Pahing": { id: "Lakuning Lintang: Suka menyampaikan pendapat, bercita-cita tinggi, dan pekerja keras." },
    "Senin Pon": { id: "Demang Kandhuwuran: Angkuh dan keras hati, namun sangat tangguh dalam menghadapi masalah." },
    "Senin Wage": { id: "Lakuning Geni: Mudah marah tetapi semangatnya membara, cepat reda jika ditenangkan." },
    "Senin Kliwon": { id: "Macan Ketawan: Waspada, resah, namun sangat sayang terhadap keluarganya." },

    // SELASA (THỨ 3)
    "Selasa Legi": { id: "Lakuning Geni: Memiliki jiwa pemimpin, tegas, tetapi terkadang mudah tersinggung." },
    "Selasa Pahing": { id: "Aras Kembang: Mempesona dan berwibawa, namun sering kali memendam masalah sendiri." },
    "Selasa Pon": { id: "Sanggar Waringin: Teduh dan melindungi, hatinya sangat teduh bagi orang sekitar." },
    "Selasa Wage": { id: "Lakuning Bumi: Sabar, amanah, dan mau mengalah demi kebaikan." },
    "Selasa Kliwon": { id: "Anggoro Kasih: Beruntung dalam hidup, pandai bicara, dan setia." },

    // RABU (THỨ 4)
    "Rabu Legi": { id: "Padangon Jagur: Waspada, adil, dan berpegang teguh pada prinsip." },
    "Rabu Pahing": { id: "Lakuning Banyu: Tenang seperti air, mudah beradaptasi, dan murah rezeki." },
    "Rabu Pon": { id: "Lakuning Rembulan: Menerangi hati orang lain, santun, dan berbudi luhur." },
    "Rabu Wage": { id: "Pancasuda Sumur Sinaba: Berwawasan luas dan hemat, namun terkadang sedikit kaku." },
    "Rabu Kliwon": { id: "Lakuning Srengenge: Memberi kehangatan, bicara apa adanya, dan bertanggung jawab." },

    // KAMIS (THỨ 5)
    "Kamis Legi": { id: "Lakuning Lintang: Mandiri, berkarisma, dan memiliki etos kerja tinggi." },
    "Kamis Pahing": { id: "Lakuning Gunung: Teguh pendirian, cerdas, tetapi terkadang tidak tegaan." },
    "Kamis Pon": { id: "Lakuning Srengenge: Cerdas, cekatan, dan memiliki jiwa pengayom." },
    "Kamis Wage": { id: "Lakuning Kembang: Mempesona dan menarik perhatian, suka kemewahan." },
    "Kamis Kliwon": { id: "Lakuning Banyu: Periang, pandai bergaul, dan murah hati." },

    // JUMAT (THỨ 6)
    "Jumat Legi": { id: "Sanggar Waringin: Dapat diandalkan, jujur, dan suka menolong sesama." },
    "Jumat Pahing": { id: "Lakuning Srengenge: Berwibawa, mandiri, dan disegani banyak orang." },
    "Jumat Pon": { id: "Lakuning Lintang: Penyendiri, tutur katanya halus, dan berjiwa seni." },
    "Jumat Wage": { id: "Aras Pepet: Pendiam, memiliki aura misterius, dan setia." },
    "Jumat Kliwon": { id: "Lakuning Rembulan: Memiliki daya pikat tinggi, romantis, dan penuh kasih." },

    // SABTU (THỨ 7)
    "Sabtu Legi": { id: "Lakuning Rembulan: Menyenangkan, pandai mengatur keuangan, dan stabil." },
    "Sabtu Pahing": { id: "Lakuning Geni: Ambisius, mudah emosi, tetapi cepat memaafkan." },
    "Sabtu Pon": { id: "Lakuning Banyu: Tenang, pemaaf, dan memiliki rezeki yang mengalir." },
    "Sabtu Wage": { id: "Lakuning Lintang: Introvert, teguh pada pendirian, dan tidak suka keramaian." },
    "Sabtu Kliwon": { id: "Lakuning Bumi: Mengalah, sabar, dan sangat peduli pada orang lain." }
};

// 2. DỮ LIỆU JODOH (Dùng cho Tool Cek Jodoh)
const JODOH_DATA = {
    1: { name: "PEGAT", desc: "Masalah: Hubungan ini mungkin menghadapi banyak rintangan, pertengkaran, atau bahkan perpisahan. Perlu kesabaran ekstra." },
    2: { name: "RATU", desc: "Sempurna: Pasangan ini dianggap sangat serasi, dihargai orang lain, dan berpotensi hidup bahagia serta harmonis." },
    3: { name: "JODOH", desc: "Jodoh Sejati: Kalian memang ditakdirkan bersama. Hubungan akan rukun, saling menerima, dan awet hingga tua." },
    4: { name: "TOPO", desc: "Ujian Awal: Awal pernikahan mungkin akan mengalami kesulitan ekonomi atau penyesuaian, namun akan sukses dan bahagia kemudian." },
    5: { name: "TINARI", desc: "Bahagia: Pasangan ini akan menemukan kebahagiaan dan kemudahan dalam mencari rezeki. Hidup serba kecukupan." },
    6: { name: "PADU", desc: "Pertengkaran: Sering terjadi cekcok untuk masalah sepele, namun tidak sampai bercerai. Hanya perlu menekan ego masing-masing." },
    7: { name: "SUJANAN", desc: "Waspada: Ada risiko perselingkuhan atau ketidaksetiaan dari salah satu pihak. Perlu komunikasi yang sangat kuat." },
    8: { name: "PESTHI", desc: "Harmonis: Hubungan yang sangat damai, rukun, dan tenteram. Sangat sedikit masalah yang berarti." },
    0: { name: "PESTHI", desc: "Harmonis: Hubungan yang sangat damai, rukun, dan tenteram. Sangat sedikit masalah yang berarti." }
};

// 3. HẰNG SỐ LOGIC (Dùng chung)
const CONSTANTS = {
    dayValues: [5, 4, 3, 7, 8, 6, 9], // Minggu -> Sabtu
    pasaranNames: ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'],
    pasaranValues: {'Legi': 5, 'Pahing': 9, 'Pon': 7, 'Wage': 4, 'Kliwon': 8},
    dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
};