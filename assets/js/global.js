// CONFIGURATION
const SITE_CONFIG = {
    name: "CekHarian",
    domain: "cekharian.com",
    ga_id: "UA-XXXXX-Y", // Google Analytics ID
    adsense_id: "ca-pub-XXXXXXXXXXXXXXXX" // AdSense ID của bạn
};

// DỮ LIỆU MENU (Sửa ở đây là menu toàn trang đổi)
const MENU_ITEMS = [
    { name: "🏠 Home", link: "index.html" },
    { name: "📅 Cek Weton", link: "cek-weton.html" },
    { name: "❤️ Cek Jodoh", link: "cek-jodoh.html" },
    { name: "🎮 Game Love", link: "game-jodoh.html" }
];

// DỮ LIỆU SUGGESTION (Gợi ý cuối bài)
const SUGGESTIONS = [
    { title: "Cek Kecocokan Jodoh (Love Compatibility)", link: "cek-jodoh.html", icon: "❤️" },
    { title: "Hitung Weton Jawa (Javanese Birthday)", link: "cek-weton.html", icon: "📅" },
    { title: "Main Game 'Flappy Love'", link: "game-jodoh.html", icon: "🎮" }
];

document.addEventListener("DOMContentLoaded", function() {
    renderAdsTop();
    renderNavbar();
    renderSuggestions();
    renderFooter();
    // Khởi tạo các banner quảng cáo placeholder
    initAdPlaceholders(); 
});

// 1. RENDER TOP AD (Quảng cáo trên cùng theo ý bạn)
function renderAdsTop() {
    const adContainer = document.getElementById("global-ad-top");
    if(adContainer) {
        adContainer.innerHTML = `
            <div class="w-full bg-gray-100 border-b border-gray-200 py-2 flex justify-center">
                <div class="ad-placeholder w-[728px] h-[90px] hidden md:flex">Leaderboard Banner (728x90)</div>
                <div class="ad-placeholder w-[320px] h-[50px] md:hidden flex">Mobile Banner (320x50)</div>
            </div>
        `;
    }
}

// 2. RENDER NAVBAR
function renderNavbar() {
    const navContainer = document.getElementById("global-navbar");
    if(navContainer) {
        let menuHtml = MENU_ITEMS.map(item => 
            `<a href="${item.link}" class="text-gray-600 hover:text-green-600 font-semibold px-3 py-2 transition">${item.name}</a>`
        ).join('');

        navContainer.innerHTML = `
            <nav class="w-full bg-white shadow-sm sticky top-0 z-50">
                <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="index.html" class="font-bold text-xl text-green-700 tracking-tight flex items-center gap-2">
                        <span class="text-2xl">🍃</span> ${SITE_CONFIG.name}
                    </a>
                    <div class="hidden md:flex space-x-4">
                        ${menuHtml}
                    </div>
                    <button class="md:hidden text-2xl" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">☰</button>
                </div>
                <div id="mobile-menu" class="hidden md:hidden bg-gray-50 p-4 space-y-2 border-t">
                     ${menuHtml.replace(/px-3 py-2/g, 'block py-2')}
                </div>
            </nav>
        `;
    }
}

// 3. RENDER SUGGESTIONS (Cuối bài)
function renderSuggestions() {
    const sugContainer = document.getElementById("global-suggestions");
    if(sugContainer) {
        let listHtml = SUGGESTIONS.map(item => `
            <a href="${item.link}" class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl hover:shadow-md transition group">
                <span class="text-2xl group-hover:scale-110 transition">${item.icon}</span>
                <span class="font-medium text-gray-700 group-hover:text-green-600">${item.title}</span>
            </a>
        `).join('');

        sugContainer.innerHTML = `
            <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-lg font-bold text-gray-800 mb-4">✨ Kamu mungkin juga suka (You might like):</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${listHtml}
                </div>
            </div>
        `;
    }
}

// 4. RENDER FOOTER
function renderFooter() {
    const footContainer = document.getElementById("global-footer");
    if(footContainer) {
        const year = new Date().getFullYear();
        footContainer.innerHTML = `
            <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    <div class="flex justify-center space-x-6 mb-4 text-sm">
                        <a href="privacy.html" class="hover:text-white">Privacy Policy</a>
                        <a href="disclaimer.html" class="hover:text-white">Disclaimer</a>
                        <a href="index.html" class="hover:text-white">Home</a>
                    </div>
                    <p class="text-xs text-gray-500">&copy; ${year} ${SITE_CONFIG.domain}. All rights reserved.</p>
                    <p class="text-[10px] text-gray-600 mt-2">Nội dung phục vụ mục đích giải trí & văn hóa.</p>
                </div>
            </footer>
        `;
    }
}

// Helper: Styling placeholder ads
function initAdPlaceholders() {
    // Inject CSS for placeholders if not exists
    const style = document.createElement('style');
    style.innerHTML = `
        .ad-placeholder {
            background-color: #f3f4f6; border: 2px dashed #d1d5db; color: #9ca3af;
            display: flex; align-items: center; justify-content: center;
            font-size: 0.7rem; font-weight: bold; text-transform: uppercase;
            margin: 0 auto; cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);
}