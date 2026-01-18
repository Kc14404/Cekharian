// LIST KHODAM (MIX GIỮA NGẦU VÀ HÀI HƯỚC ĐỂ VIRAL)
const KHODAM_LIST = [
    // --- NHÓM NGẦU (COOL) ---
    "Macan Putih (Hổ Trắng)",
    "Naga Emas (Rồng Vàng)",
    "Elang Jawa (Đại Bàng)",
    "Singa Barong",
    "Raden Kian Santang",
    "Nyi Roro Kidul (Nữ thần biển)",
    "Kera Sakti (Tôn Ngộ Không)",
    "Garuda Wisnu",
    "Macan Kumbang (Báo đen)",
    "Raja Jin (Vua Thần Đèn)",
    
    // --- NHÓM HÀI HƯỚC (MEME - Yếu tố Viral) ---
    "Kulkas Dua Pintu (Tủ lạnh 2 cửa)",
    "Pecel Lele (Cá trê chiên)",
    "Tuyul Mohawk (Quỷ lùn tóc vuốt)",
    "Setan Kredit (Ma vay nợ)",
    "Buaya Darat (Tra nam/Cá sấu lên bờ)",
    "Kucing Oren (Mèo cam báo đời)",
    "Honda Beat Mberrr",
    "Sate Padang",
    "Seblak Ceker (Bánh đa chân gà)",
    "Cicak Kawin (Thạch sùng đang yêu)",
    "Poci (Ma bao tải)",
    "Genderuwo Imut (Quỷ lông lá cute)",
    "Bakso Beranak (Bò viên sinh đôi)",
    "Kerupuk Kaleng (Bánh phồng tôm)",
    "Lontong Sayur"
];

// Hàm chọn Khodam dựa trên tên (Kết quả cố định cho 1 tên)
function getKhodamByName(name) {
    if (!name) return null;
    
    // 1. Chuẩn hóa tên (Viết hoa, bỏ khoảng trắng thừa)
    const cleanName = name.trim().toUpperCase();
    
    // 2. Tính tổng mã ASCII của các ký tự
    let total = 0;
    for (let i = 0; i < cleanName.length; i++) {
        total += cleanName.charCodeAt(i);
    }
    
    // 3. Chọn index dựa trên tổng (Modulo)
    const index = total % KHODAM_LIST.length;
    
    return KHODAM_LIST[index];
}