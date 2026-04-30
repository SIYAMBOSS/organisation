function changeTab(element, pageName) {
    // অ্যাক্টিভ ক্লাস চেঞ্জ
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    loadPage(pageName);
}

function loadPage(page) {
    const main = document.getElementById('main-display');
    
    if(page === 'home') {
        main.innerHTML = `
            <div style="padding:20px;">
                <div class="auth-box" style="background: linear-gradient(45deg, #1e293b, #334155);">
                    <p>মোট তহবিল</p>
                    <h1 style="color:var(--primary)">৳ ৫০,৫০০</h1>
                </div>
                <button style="margin-bottom:20px;">টাকা জমা করুন</button>
                <marquee style="background:#1e293b; padding:10px; border-radius:10px; color:var(--primary)">
                    মানবিক সংবাদ: আমাদের পরবর্তী রক্তদান কর্মসূচি আগামী শুক্রবার অনুষ্ঠিত হবে...
                </marquee>
            </div>
        `;
    }
    // অন্য পেজগুলো (events, accounts, help) পরে ধাপে ধাপে যোগ করব
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    location.reload();
}
