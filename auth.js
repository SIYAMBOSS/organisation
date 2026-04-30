const content = document.getElementById('app-content');
const nav = document.getElementById('nav-bar');

function init() {
    const isRegistered = localStorage.getItem('isRegistered');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isRegistered) {
        showRegister();
    } else if (!isLoggedIn) {
        showLogin();
    } else {
        showHome();
    }
}

function showRegister() {
    nav.style.display = 'none';
    content.innerHTML = `
        <div class="auth-container">
            <h2>সদস্য রেজিস্ট্রেশন</h2>
            <div class="input-group">
                <input type="text" id="name" placeholder="আপনার নাম" class="full-width">
                <input type="number" id="phone" placeholder="মোবাইল নাম্বার" class="full-width">
                <input type="text" id="fname" placeholder="পিতার নাম">
                <input type="text" id="mname" placeholder="মাতার নাম">
                <input type="text" id="dist" placeholder="জেলা">
                <input type="text" id="upazila" placeholder="উপজেলা">
                <input type="text" id="union" placeholder="ইউনিয়ন">
                <select id="blood">
                    <option value="">রক্তের গ্রুপ</option>
                    <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                    <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
                </select>
                <input type="text" id="village" placeholder="গ্রাম">
                <input type="text" id="job" placeholder="পেশা">
                <input type="date" id="dob" title="জন্ম তারিখ">
                <input type="text" id="nid" placeholder="NID নাম্বার (ঐচ্ছিক)">
                <input type="password" id="pin" placeholder="৬ ডিজিটের পিন" class="full-width">
            </div>
            <button class="primary-btn" onclick="saveUser()">অ্যাকাউন্ট তৈরি করুন</button>
        </div>
    `;
}

function saveUser() {
    const name = document.getElementById('name').value;
    const pin = document.getElementById('pin').value;
    const phone = document.getElementById('phone').value;

    if(name && pin.length >= 4 && phone) {
        const userData = {
            name: name,
            phone: phone,
            pin: pin,
            union: document.getElementById('union').value
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isRegistered', 'true');
        alert('অভিনন্দন! রেজিস্ট্রেশন সফল হয়েছে।');
        init();
    } else {
        alert('দয়া করে নাম, নাম্বার এবং পিন অবশ্যই দিন।');
    }
}

function showLogin() {
    const data = JSON.parse(localStorage.getItem('userData'));
    content.innerHTML = `
        <div class="auth-container" style="text-align:center;">
            <h2>লগইন করুন</h2>
            <p>স্বাগতম, ${data.name}</p>
            <input type="password" id="lpin" placeholder="আপনার পিন দিন">
            <button class="primary-btn" onclick="verifyLogin()">প্রবেশ করুন</button>
        </div>
    `;
}

function verifyLogin() {
    const pin = document.getElementById('lpin').value;
    const saved = JSON.parse(localStorage.getItem('userData'));
    if(pin === saved.pin) {
        localStorage.setItem('isLoggedIn', 'true');
        init();
    } else {
        alert('ভুল পিন! আবার চেষ্টা করুন।');
    }
}

function showHome() {
    nav.style.display = 'flex';
    content.style.alignItems = 'flex-start';
    content.innerHTML = `<h2 style="margin-top:50px;">আদর্শ সমাজ কল্যাণ পরিষদে স্বাগতম!</h2>`;
}

init();
