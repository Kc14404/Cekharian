// =================================================================
// FILE: assets/js/global.js
// AUTHOR: CekHarian System
// DESCRIPTION: Core logic for Menu, Footer, Ads, and Analytics
// =================================================================

// 1. CẤU HÌNH TOÀN TRANG (CONFIGURATION)
const SITE_CONFIG = {
    name: "CekHarian",
    domain: "cekharian.com",
    
    // Google Analytics 4 ID (Đã cập nhật)
    ga_id: "G-ST37NEQSZL", 
    
    // Google AdSense ID (Thay bằng mã ca-pub-... của bạn khi được duyệt)
    adsense_id: "ca-pub-XXXXXXXXXXXXXXXX" 
};

// 2. DỮ LIỆU MENU (Navigation Data)
const MENU_ITEMS = [
    { name: "🏠 Home", link: "index.html" },
    { name: "📅 Cek Weton", link: "cek-weton.html" },
    { name: "❤️ Cek Jodoh", link: "cek-jodoh.html" },
    { name: "🎮 Game Love", link: "game-jodoh.html" }
];

// 3. DỮ LIỆU GỢI Ý (Cross-sell Data)
const SUGGESTIONS = [
    { title: "Cek Kecocokan Jodoh (Love Compatibility)", link: "cek-jodoh.html", icon: "❤️" },
    { title: "Hitung Weton Jawa (Javanese Birthday)", link: "cek-weton.html", icon: "📅" },
    { title: "Main Game 'Flappy Love' (Couple Game)", link: "game-jodoh.html", icon: "🎮" }
];

// 4. KHỞI TẠO (INITIALIZATION)
document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 System Initializing...");
    
    initGoogleAnalytics();    // Kích hoạt theo dõi
    renderAdsTop();           // Vẽ quảng cáo đầu trang
    renderNavbar();           // Vẽ Menu
    renderSuggestions();      // Vẽ Gợi ý cuối bài
    renderFooter();           // Vẽ Footer
    initAdPlaceholders();     // CSS cho khung quảng cáo
});

// =================================================================
// FUNCTIONS DEFINITION
// =================================================================

/**
 * Tự động chèn mã Google Analytics (GTags)
 */
function initGoogleAnalytics() {
    if (!SITE_CONFIG.ga_id || SITE_CONFIG.ga_id.includes("XXXX")) {
        console.warn("Analytics ID missing or invalid.");
        return;
    }

    // 1. Tạo thẻ script load thư viện
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.ga_id}`;
    document.head.appendChild(script);

    // 2. Config gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', SITE_CONFIG.ga_id);
    
    console.log(`✅ Analytics Active: ${SITE_CONFIG.ga_id}`);
}

/**
 * Hiển thị Banner Quảng cáo trên cùng (Top Leaderboard)
 */
function renderAdsTop() {
    const adContainer = document.getElementById("global-ad-top");
    if(adContainer) {
        // Render 2 phiên bản: Desktop (728x90) và Mobile (320x50)
        adContainer.innerHTML = `
            <div class="w-full bg-gray-50 border-b border-gray-200 py-3 flex justify-center">
                <div class="ad-placeholder w-[728px] h-[90px] hidden md:flex">
                    Google AdSense - Leaderboard (728x90)
                </div>
                <div class="ad-placeholder w-[320px] h-[50px] md:hidden flex">
                    Mobile Banner (320x50)
                </div>
            </div>
        `;
    }
}

/**
 * Hiển thị Thanh điều hướng (Navbar) Responsive
 */
function renderNavbar() {
    const navContainer = document.getElementById("global-navbar");
    if(navContainer) {
        // Tạo HTML cho menu items
        let menuHtml = MENU_ITEMS.map(item => {
            // Highlight menu đang active (so sánh URL)
            const isActive = window.location.href.includes(item.link);
            const activeClass = isActive ? "text-green-700 bg-green-50" : "text-gray-600 hover:text-green-600 hover:bg-gray-50";
            return `<a href="${item.link}" class="${activeClass} font-semibold px-4 py-2 rounded-lg transition duration-200">${item.name}</a>`;
        }).join('');

        navContainer.innerHTML = `
            <nav class="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    
                    <a href="index.html" class="font-extrabold text-xl text-green-700 tracking-tight flex items-center gap-2 hover:opacity-80 transition">
                        <span class="text-2xl">🍃</span> ${SITE_CONFIG.name}
                    </a>
                    
                    <div class="hidden md:flex space-x-2">
                        ${menuHtml}
                    </div>

                    <button class="md:hidden text-2xl text-gray-600 focus:outline-none p-2 rounded hover:bg-gray-100" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                        ☰
                    </button>
                </div>

                <div id="mobile-menu" class="hidden md:hidden bg-white px-4 pb-4 space-y-2 border-t border-gray-100 shadow-lg">
                     ${menuHtml.replace(/px-4 py-2/g, 'block py-3 border-b border-gray-50')}
                </div>
            </nav>
        `;
    }
}

/**
 * Hiển thị phần Gợi ý (Suggestions) cuối bài
 */
function renderSuggestions() {
    const sugContainer = document.getElementById("global-suggestions");
    if(sugContainer) {
        // Lọc bỏ trang hiện tại khỏi danh sách gợi ý
        const currentPage = window.location.pathname.split("/").pop();
        const filteredSuggestions = SUGGESTIONS.filter(item => item.link !== currentPage);

        let listHtml = filteredSuggestions.map(item => `
            <a href="${item.link}" class="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-green-200 transition group">
                <span class="text-3xl group-hover:scale-110 transition duration-300">${item.icon}</span>
                <div>
                    <h4 class="font-bold text-gray-800 group-hover:text-green-700 transition">${item.title}</h4>
                    <p class="text-xs text-gray-400 mt-1">Klik untuk mencoba &rarr;</p>
                </div>
            </a>
        `).join('');

        sugContainer.innerHTML = `
            <div class="mt-12 pt-8 border-t border-gray-200">
                <div class="flex items-center gap-2 mb-6">
                    <span class="text-xl">✨</span>
                    <h3 class="text-lg font-bold text-gray-800">Kamu mungkin juga suka (You might like):</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${listHtml}
                </div>
            </div>
        `;
    }
}

/**
 * Hiển thị Footer (Chân trang) chuẩn AdSense
 */
function renderFooter() {
    const footContainer = document.getElementById("global-footer");
    if(footContainer) {
        const year = new Date().getFullYear();
        footContainer.innerHTML = `
            <footer class="bg-gray-900 text-gray-400 py-10 mt-auto">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    
                    <div class="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
                        <a href="privacy.html" class="hover:text-white transition">Privacy Policy</a>
                        <span>•</span>
                        <a href="disclaimer.html" class="hover:text-white transition">Disclaimer</a>
                        <span>•</span>
                        <a href="index.html" class="hover:text-white transition">Home</a>
                    </div>
                    
                    <div class="w-16 h-1 bg-gray-800 mx-auto mb-6 rounded"></div>

                    <p class="text-xs text-gray-500">
                        &copy; ${year} <strong>${SITE_CONFIG.domain}</strong>. All rights reserved. <br>
                        Developed with ❤️ for Indonesian Culture.
                    </p>
                </div>
            </footer>
        `;
    }
}

/**
 * Inject CSS cho các khung quảng cáo (Placeholder)
 * Giúp giữ chỗ khi chưa có quảng cáo thật, tránh vỡ layout (CLS)
 */
function initAdPlaceholders() {
    const styleId = 'ads-placeholder-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.innerHTML = `
            .ad-placeholder {
                background-color: #F3F4F6;
                border: 2px dashed #D1D5DB;
                color: #9CA3AF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.7rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin: 0 auto;
                cursor: not-allowed;
                user-select: none;
                transition: all 0.3s ease;
            }
            .ad-placeholder:hover {
                background-color: #E5E7EB;
                border-color: #9CA3AF;
                color: #6B7280;
            }
        `;
        document.head.appendChild(style);
    }
}