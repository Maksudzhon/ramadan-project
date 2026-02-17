const translations = {
    'uz-Latn': {
        app_title: 'Ramazon 2026',
        ramadan_countdown: 'Ramazongacha',
        days: 'kun',
        hours: 'soat',
        minutes: 'daqiqa',
        seconds: 'soniya',
        hijri_date: 'Hijriy sana',
        gregorian_date: 'Milodiy sana',
        ramadan_day: 'Ramazon',
        day_suffix: '-kun',
        change_location: "O'zgartirish",
        prayer_times: 'Namoz vaqtlari',
        fajr: 'Bomdod',
        sunrise: 'Quyosh',
        dhuhr: 'Peshin',
        asr: 'Asr',
        maghrib: 'Shom',
        isha: 'Xufton',
        suhoor: 'Saharlik',
        iftar: 'Iftorlik',
        daily_hadith: 'Kunlik hadis',
        refresh: 'Yangilash',
        prophet_stories: "Payg'ambarlar tarixi",
        tasbih: 'Elektron tasbih',
        tap_count: 'Bosing',
        reset: 'Reset',
        home: 'Bosh sahifa',
        prayers: 'Namozlar',
        more: 'Boshqa',
        select_language: 'Tilni tanlang',
        select_city: 'Shaharni tanlang',
        search: 'Qidirish...',
        settings: 'Sozlamalar',
        adhan_notification: 'Azon bildirishnomasi',
        vibration: 'Tebranish',
        sound: 'Ovoz'
    },
    'uz-Cyrl': {
        app_title: 'Рамазон 2026',
        ramadan_countdown: 'Рамазонгача',
        days: 'кун',
        hours: 'соат',
        minutes: 'дақиқа',
        seconds: 'сония',
        hijri_date: 'Ҳижрий сана',
        gregorian_date: 'Милодий сана',
        ramadan_day: 'Рамазон',
        day_suffix: '-кун',
        change_location: 'Ўзгартириш',
        prayer_times: 'Намоз вақтлари',
        fajr: 'Бомдод',
        sunrise: 'Қуёш',
        dhuhr: 'Пешин',
        asr: 'Аср',
        maghrib: 'Шом',
        isha: 'Ҳуфтон',
        suhoor: 'Саҳарлик',
        iftar: 'Ифторлик',
        daily_hadith: 'Кунлик ҳадис',
        refresh: 'Янгилаш',
        prophet_stories: 'Пайғамбарлар тарихи',
        tasbih: 'Электрон тасбиҳ',
        tap_count: 'Босинг',
        reset: 'Рэсэт',
        home: 'Бош саҳифа',
        prayers: 'Намозлар',
        more: 'Бошқа',
        select_language: 'Тилни танланг',
        select_city: 'Шаҳарни танланг',
        search: 'Қидириш...',
        settings: 'Созламалар',
        adhan_notification: 'Азон билдиришномаси',
        vibration: 'Тебраниш',
        sound: 'Овоз'
    },
    'ru': {
        app_title: 'Рамадан 2026',
        ramadan_countdown: 'До Рамадана',
        days: 'дней',
        hours: 'часов',
        minutes: 'минут',
        seconds: 'секунд',
        hijri_date: 'Хиджра дата',
        gregorian_date: 'Грегорианская дата',
        ramadan_day: 'Рамадан',
        day_suffix: '-день',
        change_location: 'Изменить',
        prayer_times: 'Время намаза',
        fajr: 'Фаджр',
        sunrise: 'Восход',
        dhuhr: 'Зухр',
        asr: 'Аср',
        maghrib: 'Магриб',
        isha: 'Иша',
        suhoor: 'Сухур',
        iftar: 'Ифтар',
        daily_hadith: 'Хадис дня',
        refresh: 'Обновить',
        prophet_stories: 'Истории пророков',
        tasbih: 'Электронный тасбих',
        tap_count: 'Нажмите',
        reset: 'Сброс',
        home: 'Главная',
        prayers: 'Намазы',
        more: 'Еще',
        select_language: 'Выберите язык',
        select_city: 'Выберите город',
        search: 'Поиск...',
        settings: 'Настройки',
        adhan_notification: 'Уведомления азана',
        vibration: 'Вибрация',
        sound: 'Звук'
    }
};

const uzbekistanCities = [
    { name: 'Toshkent', lat: 41.2995, lng: 69.2401 },
    { name: 'Samarqand', lat: 39.6270, lng: 66.9750 },
    { name: 'Buxoro', lat: 39.7747, lng: 64.4286 },
    { name: 'Andijon', lat: 40.7821, lng: 72.3442 },
    { name: 'Namangan', lat: 40.9983, lng: 71.6726 },
    { name: 'Farg\'ona', lat: 40.3864, lng: 71.7864 },
    { name: 'Qarshi', lat: 38.8606, lng: 65.7895 },
    { name: 'Nukus', lat: 42.4531, lng: 59.6103 },
    { name: 'Urganch', lat: 41.5509, lng: 60.6314 },
    { name: 'Jizzax', lat: 40.1158, lng: 67.8422 },
    { name: 'Guliston', lat: 40.4897, lng: 68.7842 },
    { name: 'Navoiy', lat: 40.0844, lng: 65.3792 },
    { name: 'Termiz', lat: 37.2242, lng: 67.2783 },
    { name: 'Xiva', lat: 41.3775, lng: 60.3642 }
];

const hadithDatabase = [
    {
        text: "Kim yolg'on gapirishni va unga muvofiq amal qilishni tark etmasa, Alloh uning ovqat va ichimlikni tashlab turganiga muhtoj emas.",
        source: "Sahih al-Buxoriy 1903"
    },
    {
        text: "Ro'za tutuvchi kishi behuda gap va jaholat bilan shug'ullanmasin. Agar kimdir unga haqorat qilsa yoki urushmoqchi bo'lsa: 'Men ro'za tutganman' desin.",
        source: "Sahih al-Buxoriy 1894"
    },
    {
        text: "Alloh taolo deydi: 'Odam bolasining har bir amali o'zi uchun, faqat ro'za bundan mustasno. U Meniki va Men uning mukofotini Beraman.'",
        source: "Sahih al-Buxoriy 1904"
    },
    {
        text: "Ro'za tutuvchining og'zidan chiqayotgan hidning Alloh nazdida misk hididan ham yaxshiroqdir.",
        source: "Sahih Muslim 1151"
    },
    {
        text: "Ramazon kelganda jannat darvozalari ochiladi, do'zax darvozalari yopiladi va shayton zanjirlanadi.",
        source: "Sahih al-Buxoriy 1899"
    },
    {
        text: "Kim Ramazon oyida iymon va savob umidida ro'za tutsa, uning o'tmishdagi gunohlari kechiriladi.",
        source: "Sahih al-Buxoriy 1901"
    },
    {
        text: "Kim Laylatul-Qadrni iymon va savob umidida qo'ldan boy bermasa, uning o'tmishdagi gunohlari kechiriladi.",
        source: "Sahih al-Buxoriy 1901"
    },
    {
        text: "Saharlik qilish barakali narsadir. Saharlikni tark etmanglar, chunki bu sizni Ahlul-Kitobning ro'zasidan farq qiluvchi narsadir.",
        source: "Sahih Muslim 1096"
    }
];

const prophetStories = [
    {
        title: "Payg'ambar Muhammad ﷺ ning birinchi vahiyi",
        content: "Muhammad ﷺ Hiro g'orida ibodatda bo'lganlarida, Jabroil alayhissalom keldi va 'Iqro!' dedilar. Muhammad ﷺ: 'Men o'qiy olmayman' dedilar. Jabroil alayhissalom uch marta takrorladi va keyin Alaq surasining birinchi oyatlarini o'qib berdilar. Bu Muhammad ﷺ ga tushgan birinchi vahiy edi."
    },
    {
        title: "Ibrohim alayhissalomning sinovi",
        content: "Alloh taolo Ibrohim alayhissalomni sinash uchun unga o'g'li Ismoilni qurbon qilishni buyurdi. Ibrohim alayhissalom buyruqqa itoat qilishga tayyor bo'ldi. Ismoil ham otasiga itoat qildi. Lekin Alloh taolo ularga qo'chqor yubordi va Ismoilni saqlab qoldi. Bu Ibrohim alayhissalomning iymoni va tavakkalining eng buyuk namoyishi edi."
    },
    {
        title: "Muso alayhissalom va Fir'avn",
        content: "Muso alayhissalom Fir'avnga Allohning elchisi sifatida keldi va uni to'g'ri yo'lga chaqirdi. Fir'avn rad etdi va Bani Isroilni quvib yubordi. Alloh Muso alayhissalomga asosini dengizga urish qudratini berdi va dengiz yorildi. Bani Isroil xavfsiz o'tdi, lekin Fir'avn va uning qo'shini cho'kib ketdi."
    },
    {
        title: "Yusuf alayhissalomning sabr-toqati",
        content: "Yusuf alayhissalom akalarining hasadi tufayli quduqqa tashlandi. Keyin qul sifatida sotildi va hatto gunohsiz turib qamoqqa tashlandi. Lekin u doimo Allohga tavakkal qildi va sabr-toqat ko'rsatdi. Oxirida Alloh uni Misr azizi qildi va oilasi bilan qayta uchrashdi."
    },
    {
        title: "Sulaymon alayhissalomning donoligi",
        content: "Sulaymon alayhissalom ulkan donolik va hikmat bilan mashhur edi. U hayvonlar, parrandalar va jinlar bilan gaplasha olardi. Bir marta ikki ayol bir bolani da'vo qildi. Sulaymon alayhissalom bolani ikkiga bo'lishni taklif qildi. Haqiqiy ona darhol rad etdi va bolani boshqasiga berishga rozi bo'ldi. Shunday qilib Sulaymon alayhissalom haqiqiy onani aniqladi."
    }
];

const RAMADAN_START_2026 = new Date('2026-02-18T00:00:00');

let currentLanguage = localStorage.getItem('language') || 'uz-Latn';
let currentCity = localStorage.getItem('city') || 'Toshkent';
let currentStoryIndex = 0;
let tasbihCount = parseInt(localStorage.getItem('tasbihCount')) || 0;
let tasbihGoal = parseInt(localStorage.getItem('tasbihGoal')) || 33;
let prayerTimes = {};
let countdownIntervals = [];
let isRamadan = false;

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    if (typeof updateUserLanguage !== 'undefined') {
        updateUserLanguage(lang);
    }
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

function updateRamadanCountdown() {
    const now = new Date();
    const diff = RAMADAN_START_2026 - now;
    
    if (diff <= 0) {
        isRamadan = true;
        document.getElementById('countdownSection').style.display = 'none';
        document.getElementById('ramadanInfo').style.display = 'block';
        document.getElementById('specialTimes').style.display = 'grid';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('daysLeft').textContent = days.toString().padStart(2, '0');
    document.getElementById('hoursLeft').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutesLeft').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('secondsLeft').textContent = seconds.toString().padStart(2, '0');
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function getTimeRemaining(targetTime) {
    const now = new Date();
    const target = new Date();
    const [hours, minutes] = targetTime.split(':');
    target.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (target < now) {
        target.setDate(target.getDate() + 1);
    }
    
    const diff = target - now;
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hoursLeft}s ${minutesLeft}d`;
}

async function fetchPrayerTimes() {
    const city = uzbekistanCities.find(c => c.name === currentCity) || uzbekistanCities[0];
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    try {
        const response = await fetch(
            `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${city.lat}&longitude=${city.lng}&method=2`
        );
        const data = await response.json();
        
        const todayData = data.data[today.getDate() - 1];
        const timings = todayData.timings;
        
        prayerTimes = {
            fajr: timings.Fajr.split(' ')[0],
            sunrise: timings.Sunrise.split(' ')[0],
            dhuhr: timings.Dhuhr.split(' ')[0],
            asr: timings.Asr.split(' ')[0],
            maghrib: timings.Maghrib.split(' ')[0],
            isha: timings.Isha.split(' ')[0]
        };
        
        document.getElementById('fajrTime').textContent = prayerTimes.fajr;
        document.getElementById('sunriseTime').textContent = prayerTimes.sunrise;
        document.getElementById('dhuhrTime').textContent = prayerTimes.dhuhr;
        document.getElementById('asrTime').textContent = prayerTimes.asr;
        document.getElementById('maghribTime').textContent = prayerTimes.maghrib;
        document.getElementById('ishaTime').textContent = prayerTimes.isha;
        
        if (isRamadan) {
            document.getElementById('suhoorTime').textContent = prayerTimes.fajr;
            document.getElementById('iftarTime').textContent = prayerTimes.maghrib;
        }
        
        updatePrayerStatus();
        if (isRamadan) {
            startCountdowns();
        }
        
        const hijriDate = todayData.date.hijri;
        const gregorianDate = todayData.date.gregorian;
        
        document.getElementById('hijriDate').textContent = `${hijriDate.day} ${hijriDate.month.ar} ${hijriDate.year}`;
        document.getElementById('gregorianDate').textContent = `${gregorianDate.day} ${gregorianDate.month.en} ${gregorianDate.year}`;
        
        if (isRamadan) {
            const ramadanDay = parseInt(hijriDate.day);
            document.getElementById('ramadanDay').textContent = ramadanDay;
            updateRamadanProgress(ramadanDay);
        }
        
    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
}

function updateRamadanProgress(day) {
    const circle = document.getElementById('progressCircle');
    const totalDays = 30;
    const circumference = 2 * Math.PI * 90;
    const progress = (day / totalDays) * circumference;
    const offset = circumference - progress;
    
    circle.style.strokeDashoffset = offset;
}

function updatePrayerStatus() {
    const now = new Date();
    const currentTime = formatTime(now);
    
    const prayers = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
    let activePrayer = null;
    
    for (let i = 0; i < prayers.length; i++) {
        const prayerCard = document.querySelector(`.prayer-card[data-prayer="${prayers[i]}"]`);
        const prayerTime = prayerTimes[prayers[i]];
        
        prayerCard.classList.remove('active', 'completed');
        
        if (currentTime >= prayerTime) {
            prayerCard.classList.add('completed');
        } else if (activePrayer === null) {
            prayerCard.classList.add('active');
            activePrayer = prayers[i];
        }
    }
}

function startCountdowns() {
    countdownIntervals.forEach(interval => clearInterval(interval));
    countdownIntervals = [];
    
    const suhoorInterval = setInterval(() => {
        const countdown = getTimeRemaining(prayerTimes.fajr);
        document.getElementById('suhoorCountdown').textContent = countdown;
    }, 1000);
    
    const iftarInterval = setInterval(() => {
        const countdown = getTimeRemaining(prayerTimes.maghrib);
        document.getElementById('iftarCountdown').textContent = countdown;
    }, 1000);
    
    countdownIntervals.push(suhoorInterval, iftarInterval);
}

function playAdhan(prayerName) {
    const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    const vibrationEnabled = localStorage.getItem('vibrationEnabled') !== 'false';
    
    if (soundEnabled) {
        const audio = new Audio('assets/audio/adhan.mp3');
        audio.play().catch(err => console.log('Audio play failed:', err));
    }
    
    if (vibrationEnabled && navigator.vibrate) {
        navigator.vibrate([500, 200, 500, 200, 500]);
    }
    
    if (typeof trackPrayerTime !== 'undefined') {
        trackPrayerTime(prayerName);
    }
}

function checkPrayerTimes() {
    const now = new Date();
    const currentTime = formatTime(now);
    
    Object.entries(prayerTimes).forEach(([prayer, time]) => {
        if (currentTime === time) {
            playAdhan(prayer);
        }
    });
}

function loadRandomHadith() {
    const randomIndex = Math.floor(Math.random() * hadithDatabase.length);
    const hadith = hadithDatabase[randomIndex];
    
    document.getElementById('hadithText').textContent = hadith.text;
    document.getElementById('hadithSource').textContent = hadith.source;
}

function showStory(index) {
    if (index < 0) index = prophetStories.length - 1;
    if (index >= prophetStories.length) index = 0;
    
    currentStoryIndex = index;
    const story = prophetStories[index];
    
    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('storyContent').textContent = story.content;
}

function updateTasbihDisplay() {
    document.getElementById('tasbihCount').textContent = tasbihCount;
    localStorage.setItem('tasbihCount', tasbihCount);
}

function incrementTasbih() {
    tasbihCount++;
    updateTasbihDisplay();
    
    const vibrationEnabled = localStorage.getItem('vibrationEnabled') !== 'false';
    if (vibrationEnabled && navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    if (tasbihCount % tasbihGoal === 0) {
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
        if (typeof trackTasbihCount !== 'undefined') {
            trackTasbihCount(tasbihGoal);
        }
    }
}

function resetTasbih() {
    tasbihCount = 0;
    updateTasbihDisplay();
}

function renderCityList(searchTerm = '') {
    const cityList = document.getElementById('cityList');
    const filteredCities = uzbekistanCities.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    cityList.innerHTML = filteredCities.map(city => 
        `<div class="city-item" data-city="${city.name}">${city.name}</div>`
    ).join('');
    
    cityList.querySelectorAll('.city-item').forEach(item => {
        item.addEventListener('click', () => {
            currentCity = item.dataset.city;
            localStorage.setItem('city', currentCity);
            document.getElementById('currentLocation').textContent = currentCity;
            closeModal('locationModal');
            fetchPrayerTimes();
            if (typeof updateUserCity !== 'undefined') {
                updateUserCity(currentCity);
            }
        });
    });
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('langBtn').addEventListener('click', () => {
    openModal('languageModal');
});

document.getElementById('closeLangModal').addEventListener('click', () => {
    closeModal('languageModal');
});

document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.langCode;
        updateLanguage(lang);
        closeModal('languageModal');
    });
});

document.getElementById('changeLocationBtn').addEventListener('click', () => {
    renderCityList();
    openModal('locationModal');
});

document.getElementById('closeLocationModal').addEventListener('click', () => {
    closeModal('locationModal');
});

document.getElementById('citySearch').addEventListener('input', (e) => {
    renderCityList(e.target.value);
});

document.getElementById('settingsBtn').addEventListener('click', () => {
    openModal('settingsModal');
});

document.getElementById('closeSettingsModal').addEventListener('click', () => {
    closeModal('settingsModal');
});

document.getElementById('adhanNotification').addEventListener('change', (e) => {
    localStorage.setItem('adhanNotification', e.target.checked);
    if (e.target.checked && typeof requestNotificationPermission !== 'undefined') {
        requestNotificationPermission();
    }
});

document.getElementById('vibrationSetting').addEventListener('change', (e) => {
    localStorage.setItem('vibrationEnabled', e.target.checked);
});

document.getElementById('soundSetting').addEventListener('change', (e) => {
    localStorage.setItem('soundEnabled', e.target.checked);
});

document.getElementById('refreshHadith').addEventListener('click', () => {
    loadRandomHadith();
});

document.getElementById('prevStory').addEventListener('click', () => {
    showStory(currentStoryIndex - 1);
});

document.getElementById('nextStory').addEventListener('click', () => {
    showStory(currentStoryIndex + 1);
});

document.getElementById('tasbihBtn').addEventListener('click', incrementTasbih);

document.getElementById('resetTasbih').addEventListener('click', resetTasbih);

document.getElementById('tasbihGoal').addEventListener('change', (e) => {
    tasbihGoal = parseInt(e.target.value);
    localStorage.setItem('tasbihGoal', tasbihGoal);
    document.querySelector('.tasbih-goal').textContent = `/ ${tasbihGoal}`;
});

document.getElementById('currentLocation').textContent = currentCity;
document.getElementById('tasbihGoal').value = tasbihGoal;
document.querySelector('.tasbih-goal').textContent = `/ ${tasbihGoal}`;

updateLanguage(currentLanguage);
updateTasbihDisplay();
loadRandomHadith();
showStory(0);
fetchPrayerTimes();
updateRamadanCountdown();

setInterval(updateRamadanCountdown, 1000);
setInterval(checkPrayerTimes, 60000);
setInterval(updatePrayerStatus, 60000);

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});