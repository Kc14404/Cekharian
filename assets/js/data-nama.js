// DATA ARTI NAMA & NUMEROLOGY (100% BAHASA INDONESIA)

// 1. Arti Huruf Depan (First Letter Meaning)
const LETTER_MEANING = {
    'A': "Ambisius & Mandiri: Anda memiliki jiwa pemimpin yang kuat, tegas, dan suka berpetualang mencari tantangan baru.",
    'B': "Sensitif & Bersahabat: Anda menghargai kedamaian, sangat setia kawan, dan peka terhadap perasaan orang lain.",
    'C': "Kreatif & Komunikatif: Anda pandai bergaul, humoris, dan memiliki bakat seni yang tinggi.",
    'D': "Praktis & Membumi: Anda pekerja keras yang fokus pada hasil nyata, disiplin, dan sangat terorganisir.",
    'E': "Bebas & Antusias: Anda menyukai kebebasan, tidak suka dikekang, dan selalu ingin mencoba hal baru.",
    'F': "Penyayang & Romantis: Keluarga, cinta, dan persahabatan adalah prioritas utama dalam hidup Anda.",
    'G': "Intelektual & Perfeksionis: Anda suka mencari kebenaran, berpikir analitis, dan memiliki standar tinggi.",
    'H': "Sukses & Materialis: Anda memiliki potensi besar untuk sukses dalam bisnis dan pandai mengelola uang.",
    'I': "Idealistis & Toleran: Anda memiliki hati yang lembut, rela berkorban, dan suka menolong sesama.",
    'J': "Adil & Seimbang: Anda selalu berusaha melakukan hal yang benar dan menjadi penengah yang baik.",
    'K': "Intuitif & Inspiratif: Anda memiliki insting yang tajam, peka, dan sering memiliki ide-ide brilian.",
    'L': "Cerdas & Logis: Anda pemikir yang mendalam, rasional, dan tidak gegabah dalam mengambil keputusan.",
    'M': "Serius & Pekerja Keras: Anda sangat disiplin, memiliki tekad baja, dan dapat diandalkan.",
    'N': "Unik & Imajinatif: Anda berpikir 'out of the box', kreatif, dan tidak suka mengikuti aturan kaku.",
    'O': "Bertanggung Jawab: Anda adalah pelindung alami, setia, dan sangat peduli pada orang-orang di sekitar.",
    'P': "Cerdas & Tertutup: Anda memiliki wawasan luas, suka belajar, namun cenderung menjaga privasi.",
    'Q': "Misterius & Kuat: Anda memiliki aura yang menarik, intens, dan kekuatan mental yang luar biasa.",
    'R': "Bijaksana & Penolong: Anda sering menjadi tempat curhat orang lain karena sifat Anda yang mengayomi.",
    'S': "Karismatik & Ambisius: Anda menarik perhatian banyak orang dan memiliki dorongan kuat untuk sukses.",
    'T': "Diplomatis: Anda pandai menjaga perasaan orang lain, sopan, dan menghindari konflik.",
    'U': "Beruntung & Artistik: Hidup Anda sering dipenuhi kejutan menyenangkan dan Anda mencintai keindahan.",
    'V': "Setia & Fokus: Anda memiliki tekad kuat, teguh pendirian, dan sangat setia pada janji.",
    'W': "Impulsif & Petualang: Anda aktif, tidak kenal takut, dan suka mengejar kegembiraan.",
    'X': "Sensual & Magnetis: Anda memiliki daya tarik alami yang membuat orang lain mudah terpesona.",
    'Y': "Mandiri & Berani: Anda tidak takut berbeda dari orang lain dan berani mengambil jalan sendiri.",
    'Z': "Optimis & Harapan: Anda selalu melihat sisi baik dari segala hal dan membawa energi positif."
};

// 2. Arti Angka Kehidupan (Life Path Number 1-9)
const NUMBER_MEANING = {
    1: { title: "THE LEADER (Sang Pemimpin)", desc: "Anda dilahirkan untuk memimpin. Mandiri, orisinal, dan memiliki tekad yang kuat untuk sukses. Tantangan Anda adalah belajar untuk tidak terlalu egois." },
    2: { title: "THE PEACEMAKER (Sang Pendamai)", desc: "Anda adalah diplomat ulung. Sensitif, perhatian, dan selalu mementingkan harmoni. Anda adalah teman yang sangat setia dan pendengar yang baik." },
    3: { title: "THE CREATOR (Sang Seniman)", desc: "Anda penuh dengan kreativitas, pesona, dan humor. Sangat pandai berkomunikasi dan menjadi pusat perhatian. Hidup Anda penuh warna dan kegembiraan." },
    4: { title: "THE BUILDER (Sang Pembangun)", desc: "Anda adalah fondasi yang kokoh. Disiplin, praktis, dan sangat detail. Orang lain mengandalkan stabilitas dan kejujuran Anda." },
    5: { title: "THE ADVENTURER (Sang Petualang)", desc: "Kebebasan adalah napas Anda. Anda menyukai perubahan, travel, dan variasi. Anda sangat mudah beradaptasi dengan lingkungan baru." },
    6: { title: "THE NURTURER (Sang Pengasuh)", desc: "Anda adalah 'Ibu/Ayah' bagi semua orang. Penuh kasih sayang, tanggung jawab, dan rela berkorban demi kebahagiaan keluarga dan teman." },
    7: { title: "THE SEEKER (Sang Pencari)", desc: "Anda pemikir yang dalam, filosofis, dan spiritual. Anda suka menyendiri untuk merenungi arti kehidupan dan mencari kebenaran hakiki." },
    8: { title: "THE POWERHOUSE (Sang Penguasa)", desc: "Anda berorientasi pada kesuksesan materi, karir, dan kekuasaan. Anda memiliki bakat alami dalam bisnis, manajemen, dan kepemimpinan eksekutif." },
    9: { title: "THE HUMANITARIAN (Sang Filantropis)", desc: "Anda memiliki jiwa sosial yang tinggi dan wawasan luas. Pemaaf, murah hati, dan ingin membuat dunia menjadi tempat yang lebih baik." }
};

function analyzeName(nameInput) {
    // Hanya ambil huruf A-Z
    const name = nameInput.toUpperCase().replace(/[^A-Z]/g, ''); 
    if (!name) return null;

    // 1. Analisis Huruf Pertama
    const firstChar = name.charAt(0);
    const firstLetterMeaning = LETTER_MEANING[firstChar] || "Karakter Spesial: Unik, Misterius, dan sulit ditebak.";

    // 2. Hitung Numerology (A=1, B=2 ... I=9, J=1 ...)
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        const charCode = name.charCodeAt(i) - 64; // ASCII A=65 -> 1
        const val = (charCode % 9 === 0) ? 9 : charCode % 9;
        sum += val;
    }

    // Reduksi ke 1 digit (kecuali jika mau support Master Number 11,22 nanti)
    while (sum > 9) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    const numMeaning = NUMBER_MEANING[sum];

    return {
        firstLetter: { char: firstChar, text: firstLetterMeaning },
        number: { val: sum, ...numMeaning }
    };
}