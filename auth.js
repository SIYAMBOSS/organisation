const mainDisplay = document.getElementById('main-display');

function checkAuth() {
    const isRegistered = localStorage.getItem('isRegistered');
    
    if (!isRegistered) {
        showRegistration();
    } else {
        showLogin();
    }
}

function showRegistration() {
    mainDisplay.innerHTML = `
        <div class="auth-box">
            <h2>রেজিস্ট্রেশন</h2>
            <p>আপনার তথ্য দিয়ে পিন সেট করুন</p>
            <input type="text" id="reg-name" placeholder="পুরো নাম">
            <input type="number" id="reg-phone" placeholder="মোবাইল নাম্বার">
            <input type="text" id="reg-union" placeholder="আপনার ইউনিয়ন (ম্যানুয়াল)">
            <input type="password" id="set-pin" placeholder="৬ ডিজিটের পিন দিন">
            <button onclick="handleRegister()">অ্যাকাউন্ট তৈরি করুন</button>
        </div>
    `;
}

function handleRegister() {
    const name = document.getElementById('reg-name').value;
    const pin = document.getElementById('set-pin').value;
    
    if(name && pin.length >= 4) {
        localStorage.setItem('isRegistered', 'true');
        localStorage.setItem('userPin', pin);
        localStorage.setItem('userName', name);
        alert('সফল হয়েছে! এখন পিন দিয়ে লগইন করুন।');
        location.reload();
    } else {
        alert('সব তথ্য সঠিকভাবে দিন।');
    }
}

function showLogin() {
    const userName = localStorage.getItem('userName');
    mainDisplay.innerHTML = `
        <div class="auth-box">
            <h2>স্বাগতম, ${userName}</h2>
            <p>প্রবেশ করতে আপনার পিন দিন</p>
            <input type="password" id="login-pin" placeholder="আপনার পিন">
            <button onclick="handleLogin()">লগইন করুন</button>
        </div>
    `;
}

function handleLogin() {
    const enteredPin = document.getElementById('login-pin').value;
    const savedPin = localStorage.getItem('userPin');
    
    if(enteredPin === savedPin) {
        localStorage.setItem('isLoggedIn', 'true');
        location.reload();
    } else {
        alert('ভুল পিন! আবার চেষ্টা করুন।');
    }
}

// অটো রান
if (localStorage.getItem('isLoggedIn') !== 'true') {
    checkAuth();
} else {
    // এখানে হোম পেজ লোড হবে
    window.onload = () => loadPage('home');
}
