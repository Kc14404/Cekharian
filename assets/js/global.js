// =================================================================
// FILE: assets/js/global.js (LOGIC ONLY)
// =================================================================

// 1. CONFIG
const SITE_CONFIG = {
    name: "CekHarian",
    domain: "cekharian.com",
    ga_id: "G-ST37NEQSZL", 
    adsense_id: "ca-pub-XXXXXXXXXXXXXXXX" 
};

const MENU_ITEMS = [
    { name: "🏠 Home", link: "index.html" },
    { name: "📅 Cek Weton", link: "cek-weton.html" },
    { name: "❤️ Cek Jodoh", link: "cek-jodoh.html" },
    { name: "👻 Cek Khodam", link: "cek-khodam.html" },
    { name: "📘 Arti Nama", link: "arti-nama.html" },
    { name: "🎮 Game Love", link: "game-jodoh.html" }
];

const SUGGESTIONS = [
    { title: "Cek Jodoh", link: "cek-jodoh.html", icon: "❤️" },
    { title: "Cek Khodam", link: "cek-khodam.html", icon: "👻" },
    { title: "Cek Weton", link: "cek-weton.html", icon: "📅" }
];

// 2. INIT
document.addEventListener("DOMContentLoaded", function() {
    initGoogleAnalytics();
    renderAdsTop();
    renderNavbar();
    renderSuggestions();
    
    // RENDER SOCIAL FEED
    renderSocialFeed(); 
    
    renderFooter();
    initAdPlaceholders(); 
});

// =================================================================
// FUNCTIONS
// =================================================================

function initGoogleAnalytics() {
    if (!SITE_CONFIG.ga_id || SITE_CONFIG.ga_id.includes("XXXX")) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.ga_id}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', SITE_CONFIG.ga_id);
}

function renderAdsTop() {
    const adContainer = document.getElementById("global-ad-top");
    if(adContainer) {
        adContainer.innerHTML = `
            <div class="w-full bg-gray-50 border-b border-gray-200 py-3 flex justify-center">
                <div class="ad-placeholder w-[728px] h-[90px] hidden md:flex">Ads Leaderboard</div>
                <div class="ad-placeholder w-[320px] h-[50px] md:hidden flex">Ads Mobile</div>
            </div>
        `;
    }
}

function renderNavbar() {
    const navContainer = document.getElementById("global-navbar");
    if(navContainer) {
        let menuHtml = MENU_ITEMS.map(item => {
            const isActive = window.location.href.includes(item.link);
            const activeClass = isActive ? "text-green-700 bg-green-50" : "text-gray-600 hover:text-green-600 hover:bg-gray-50";
            return `<a href="${item.link}" class="${activeClass} font-semibold px-4 py-2 rounded-lg transition duration-200 whitespace-nowrap">${item.name}</a>`;
        }).join('');

        navContainer.innerHTML = `
            <nav class="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <a href="index.html" class="font-extrabold text-xl text-green-700 tracking-tight flex items-center gap-2 hover:opacity-80 transition shrink-0">
                        <span class="text-2xl">🍃</span> ${SITE_CONFIG.name}
                    </a>
                    <div class="hidden md:flex space-x-1 overflow-x-auto">${menuHtml}</div>
                    <button class="md:hidden text-2xl text-gray-600 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">☰</button>
                </div>
                <div id="mobile-menu" class="hidden md:hidden bg-white px-4 pb-4 space-y-2 border-t border-gray-100 shadow-lg absolute w-full left-0 top-full z-40">
                     ${menuHtml.replace(/px-4 py-2/g, 'block py-3 border-b border-gray-50')}
                </div>
            </nav>
        `;
    }
}

function renderSuggestions() {
    const sugContainer = document.getElementById("global-suggestions");
    if(sugContainer) {
        const currentPage = window.location.pathname.split("/").pop();
        const filteredSuggestions = SUGGESTIONS.filter(item => item.link !== currentPage);
        let listHtml = filteredSuggestions.map(item => `
            <a href="${item.link}" class="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition group">
                <span class="text-3xl group-hover:scale-110 transition duration-300">${item.icon}</span>
                <div>
                    <h4 class="font-bold text-gray-800 group-hover:text-green-700 transition">${item.title}</h4>
                    <p class="text-xs text-gray-400 mt-1">Coba Sekarang &rarr;</p>
                </div>
            </a>
        `).join('');
        sugContainer.innerHTML = `
            <div class="mt-12 pt-8 border-t border-gray-200">
                <h3 class="text-lg font-bold text-gray-800 mb-4">✨ Mungkin Anda Suka:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${listHtml}</div>
            </div>
        `;
    }
}

// ============================================================
// LOGIC SOCIAL FEED (DATABASE CONNECTED)
// ============================================================
function renderSocialFeed() {
    const footer = document.getElementById("global-footer");
    const data = window.SOCIAL_POOL; // Lấy từ window
    
    if (!data) {
        console.error("❌ Lỗi: Không tìm thấy data-videos.js! Kiểm tra lại file HTML.");
        return; 
    }
    if (!footer) return;

    // 1. Randomize
    const randomTikTok = [...(data.tiktok || [])].sort(() => 0.5 - Math.random()).slice(0, 3);
    const randomYT = [...(data.youtube || [])].sort(() => 0.5 - Math.random()).slice(0, 3);

    // ... (Phần code bên dưới giữ nguyên không cần sửa)    
    // 2. Render TikTok Cards
    const tiktokCards = randomTikTok.map(id => `
        <div class="snap-center shrink-0 w-[300px] bg-black rounded-xl overflow-hidden border border-gray-800 flex items-center justify-center relative shadow-lg">
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@user/video/${id}" data-video-id="${id}" style="max-width: 605px;min-width: 325px; margin: 0;" > 
                <section> <a target="_blank" href="https://www.tiktok.com/@user/video/${id}">@user</a> </section> 
            </blockquote> 
            <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
    `).join('');

    // 3. Render YouTube Cards
    const ytCards = randomYT.map(id => `
        <div class="snap-center shrink-0 w-[260px] aspect-[9/16] bg-black rounded-xl overflow-hidden border border-gray-800 relative shadow-lg">
            <iframe class="w-full h-full" src="https://www.youtube.com/embed/${id}?controls=1&rel=0&playsinline=1" title="Shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"></iframe>
        </div>
    `).join('');

    // 4. Build Section
    const section = document.createElement("section");
    section.className = "w-full bg-[#0a0a0a] py-12 mt-16 border-t border-gray-800";
    
    section.innerHTML = `
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center gap-3 mb-8">
                <span class="text-3xl animate-bounce">🔥</span>
                <div>
                    <h2 class="text-2xl font-black text-white uppercase tracking-tighter">Hiburan Harian</h2>
                    <p class="text-xs text-gray-500">Video Trending Pilihan (Updated)</p>
                </div>
            </div>
            
            <div class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide items-start" style="-webkit-overflow-scrolling: touch;">
                ${tiktokCards}
                ${ytCards}
            </div>
        </div>
    `;

    footer.parentNode.insertBefore(section, footer);
}

function renderFooter() {
    const footContainer = document.getElementById("global-footer");
    if(footContainer) {
        const year = new Date().getFullYear();
        footContainer.innerHTML = `
            <footer class="bg-gray-900 text-gray-400 py-10">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    <div class="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
                        <a href="privacy.html" class="hover:text-white">Privacy</a>
                        <a href="disclaimer.html" class="hover:text-white">Disclaimer</a>
                        <a href="index.html" class="hover:text-white">Home</a>
                    </div>
                    <p class="text-xs opacity-50">&copy; ${year} ${SITE_CONFIG.domain}. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

function initAdPlaceholders() {
    if (!document.getElementById('ads-style')) {
        const style = document.createElement('style');
        style.id = 'ads-style';
        style.innerHTML = `
            .ad-placeholder { background:#F3F4F6; border:2px dashed #D1D5DB; color:#9CA3AF; display:flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:700; text-transform:uppercase; cursor:not-allowed; }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .tiktok-embed { margin: 0 !important; border: none !important; }
        `;
        document.head.appendChild(style);
    }
}