// LIST KHODAM (100% INDONESIAN - MIX COOL & FUNNY)
const KHODAM_LIST = [
    // --- COOL / SERIUS ---
    "Macan Putih Siliwangi",
    "Naga Emas Nusantara",
    "Elang Jawa Perkasa",
    "Singa Barong",
    "Raden Kian Santang",
    "Nyi Roro Kidul",
    "Kera Sakti Hanoman",
    "Garuda Wisnu Kencana",
    "Macan Kumbang",
    "Raja Jin",
    "Buto Ijo",
    "Dewi Sri (Dewi Padi)",
    "Gatotkaca Otot Kawat",
    
    // --- FUNNY / MEME / VIRAL ---
    "Kulkas Dua Pintu",
    "Pecel Lele Lamongan",
    "Tuyul Suka Ngopi",
    "Setan Kredit",
    "Buaya Darat Insyaf",
    "Kucing Oren Bar-bar",
    "Honda Beat Mberrr",
    "Sate Padang Pedas",
    "Seblak Ceker Mercon",
    "Cicak Kawin",
    "Poci Suka Lompat",
    "Genderuwo Imut",
    "Bakso Beranak",
    "Kerupuk Kaleng",
    "Lontong Sayur",
    "Mio Mirza",
    "Ambatron",
    "Rusdi Ngawi",
    "Kambing Guling",
    "Nasi Padang Bungkus Karet Dua",
    "Cendol Dawet",
    "Martabak Manis Spesial",
    "Bebek Sinjay"
];

function getKhodamByName(name) {
    if (!name) return null;
    const cleanName = name.trim().toUpperCase();
    let total = 0;
    for (let i = 0; i < cleanName.length; i++) {
        total += cleanName.charCodeAt(i);
    }
    const index = total % KHODAM_LIST.length;
    return KHODAM_LIST[index];
}