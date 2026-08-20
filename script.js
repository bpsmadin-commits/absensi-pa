// ============================================================
// 1. DATA DUMMY GURU + KELAS + MAPEL
// ============================================================
// Setiap entri: { kelas, mapel, guru, sessions } â†’ kunci absensi "1A Tauhid"
const TEACHERS_MID = {
    1: [
        { kelas: '1A', mapel: 'Tauhid', guru: 'Bu Ani, S.Pd.', sessions: ['Jam 1'] },
        { kelas: '1A', mapel: 'Al-Quran', guru: 'Pak Budi, M.Pd.', sessions: ['Jam 2'] },
        { kelas: '1B', mapel: 'Tauhid', guru: 'Bu Citra, S.Si.', sessions: ['Jam 1'] },
        { kelas: '1B', mapel: 'Al-Quran', guru: 'Pak Dedi, M.Eng.', sessions: ['Jam 2'] }
    ],
    2: [
        { kelas: '2A', mapel: 'Fiqih', guru: 'Bu Eka, S.Pd.', sessions: ['Jam 1'] },
        { kelas: '2A', mapel: 'Al-Quran', guru: 'Pak Fajar, S.Kom.', sessions: ['Jam 2'] },
        { kelas: '2B', mapel: 'Fiqih', guru: 'Bu Gina, S.Sos.', sessions: ['Jam 1'] },
        { kelas: '2B', mapel: 'Al-Quran', guru: 'Pak Haris, M.Pd.', sessions: ['Jam 2'] }
    ],
    3: [
        { kelas: '3A', mapel: 'Akidah', guru: 'Bu Indah, S.Si.', sessions: ['Jam 1'] },
        { kelas: '3A', mapel: 'Hadis', guru: 'Pak Joko, S.Pd.', sessions: ['Jam 2'] },
        { kelas: '3B', mapel: 'Akidah', guru: 'Bu Lina, M.Si.', sessions: ['Jam 1'] },
        { kelas: '3B', mapel: 'Hadis', guru: 'Pak Maman, S.Pd.', sessions: ['Jam 2'] }
    ],
    4: [
        { kelas: '4A', mapel: 'Bahasa Arab', guru: 'Bu Nia, M.Pd.', sessions: ['Jam 1'] },
        { kelas: '4A', mapel: 'Fiqih', guru: 'Pak Oki, S.Sos.', sessions: ['Jam 2'] },
        { kelas: '4B', mapel: 'Bahasa Arab', guru: 'Bu Putri, S.Si.', sessions: ['Jam 1'] },
        { kelas: '4B', mapel: 'Fiqih', guru: 'Pak Rudi, M.Eng.', sessions: ['Jam 2'] }
    ],
    5: [
        { kelas: '5A', mapel: 'Sejarah', guru: 'Bu Sari, S.Pd.', sessions: ['Jam 1'] },
        { kelas: '5A', mapel: 'Akhlak', guru: 'Pak Tono, S.Kom.', sessions: ['Jam 2'] },
        { kelas: '5B', mapel: 'Sejarah', guru: 'Bu Umi, S.Pd.', sessions: ['Jam 1'] },
        { kelas: '5B', mapel: 'Akhlak', guru: 'Pak Vino, M.Pd.', sessions: ['Jam 2'] }
    ],
    6: [
        { kelas: '6A', mapel: 'Bahasa Arab', guru: 'Bu Wati, S.Si.', sessions: ['Jam 1'] },
        { kelas: '6A', mapel: 'Tauhid', guru: 'Pak Yayan, S.Pd.', sessions: ['Jam 2'] },
        { kelas: '6B', mapel: 'Bahasa Arab', guru: 'Bu Zulfa, M.Si.', sessions: ['Jam 1'] },
        { kelas: '6B', mapel: 'Tauhid', guru: 'Pak Akbar, M.Pd.', sessions: ['Jam 2'] }
    ]
};

// MTSD: Kelas 7-9 langsung digabung
const TEACHERS_MTSD = [
    { kelas: '7A', mapel: 'Tauhid', guru: 'Bu Aisyah, S.Pd.', sessions: ['Jam 1'] },
    { kelas: '7A', mapel: 'Al-Quran', guru: 'Pak Badru, M.Pd.', sessions: ['Jam 2'] },
    { kelas: '7B', mapel: 'Tauhid', guru: 'Bu Cinta, S.Si.', sessions: ['Jam 1'] },
    { kelas: '7B', mapel: 'Al-Quran', guru: 'Pak Darma, S.Pd.', sessions: ['Jam 2'] },
    { kelas: '8A', mapel: 'Fiqih', guru: 'Bu Elok, M.Eng.', sessions: ['Jam 1'] },
    { kelas: '8A', mapel: 'Hadis', guru: 'Pak Fikri, S.Kom.', sessions: ['Jam 2'] },
    { kelas: '8B', mapel: 'Fiqih', guru: 'Bu Gita, S.Pd.', sessions: ['Jam 1'] },
    { kelas: '8B', mapel: 'Hadis', guru: 'Pak Hidayat, M.Si.', sessions: ['Jam 2'] },
    { kelas: '9A', mapel: 'Bahasa Arab', guru: 'Bu Ika, S.Sos.', sessions: ['Jam 1'] },
    { kelas: '9A', mapel: 'Akhlak', guru: 'Pak Jamil, S.Pd.', sessions: ['Jam 2'] },
    { kelas: '9B', mapel: 'Bahasa Arab', guru: 'Bu Kiki, S.Si.', sessions: ['Jam 1'] },
    { kelas: '9B', mapel: 'Akhlak', guru: 'Pak Lukman, M.Pd.', sessions: ['Jam 2'] }
];

// ============================================================
// 2. KONFIGURASI & USER
// ============================================================
const USERS = {
    '1': { tab: 'MID', grade: 1 },
    '2': { tab: 'MID', grade: 2 },
    '3': { tab: 'MID', grade: 3 },
    '4': { tab: 'MID', grade: 4 },
    '5': { tab: 'MID', grade: 5 },
    '6': { tab: 'MID', grade: 6 },
    'mtsd': { tab: 'MTSD' },
    'admin': {} // akses penuh: bisa pilih tab & grade
};
const STORAGE_KEY = 'attendance_app_mid_mtsd';
const USERNAME_STORAGE_KEY = 'custom_usernames';
const STATUSES = ['H', 'I', 'A'];
const STATUS_FULL = { 'H': 'Hadir', 'I': 'Izin', 'A': 'Alpha' };
const STATUS_SHORT = { 'Hadir': 'H', 'Izin': 'I', 'Alpha': 'A' };

// ============================================================
// 2a. FIREBASE INIT (Firestore = database cloud)
// ============================================================
firebase.initializeApp({
    apiKey: "AIzaSyC66jXFp-LdamKXfwJAPWx4A_JxUp7XFKA",
    authDomain: "absensi-mid-mtsd.firebaseapp.com",
    projectId: "absensi-mid-mtsd",
    storageBucket: "absensi-mid-mtsd.firebasestorage.app",
    messagingSenderId: "153084648290",
    appId: "1:153084648290:web:dbb3f63b15255bf1fbea3b"
});
const db = firebase.firestore();

// Cache lokal hasil snapshot Firestore
let scheduleCache = {};
let customUsernames = {};
let hijriConfigCache = null;
let waNumbers = {};
let subscribed = false;

function ref(col, id) { return db.collection(col).doc(id); }

// Listener realtime: semua collection disinkronkan otomatis, antar device.
function subscribeAll() {
    if (subscribed) return;
    subscribed = true;

    // absensi: collection 'absensi' → 1 dokumen per tanggal
    db.collection('absensi').onSnapshot(snap => {
        attendanceData = {};
        snap.forEach(d => { attendanceData[d.id] = d.data() || {}; });
        render();
    }, e => console.error('Firestore read absensi gagal:', e.code || e.message));

    // jadwal custom per jenjang+hari
    db.collection('jadwal').onSnapshot(snap => {
        scheduleCache = {};
        snap.forEach(d => { scheduleCache[d.id] = (d.data() || {}).items || []; });
        render();
    }, e => console.error('Firestore read jadwal gagal:', e.code || e.message));

    // username custom
    ref('settings', 'usernames').onSnapshot(snap => {
        customUsernames = snap.exists ? (snap.data() || {}) : {};
    });

    // config kalender hijriah
    ref('settings', 'hijri').onSnapshot(snap => {
        hijriConfigCache = snap.exists ? ((snap.data() || {}).config || null) : null;
    });

    // nomor WA tujuan per jenjang
    db.collection('nowa').onSnapshot(snap => {
        waNumbers = {};
        snap.forEach(d => { waNumbers[d.id] = (d.data() || {}).nomors || [] });
    });
}

// Satu kali: pindahkan data lama dari localStorage ke Firestore kalau masih ada.
function migrateLegacyLocalStorage() {
    const oldAtt = localStorage.getItem(STORAGE_KEY);
    if (oldAtt && Object.keys(attendanceData).length === 0) {
        try {
            const parsed = JSON.parse(oldAtt);
            Object.keys(parsed).forEach(date => ref('absensi', date).set(parsed[date]));
        } catch (e) {}
        localStorage.removeItem(STORAGE_KEY);
    }
    const oldSch = localStorage.getItem(SCHEDULE_KEY);
    if (oldSch) {
        try {
            const parsed = JSON.parse(oldSch);
            Object.keys(parsed).forEach(k => {
                if (parsed[k] && parsed[k].length) ref('jadwal', k).set({ items: parsed[k] });
            });
        } catch (e) {}
        localStorage.removeItem(SCHEDULE_KEY);
    }
    const oldUn = localStorage.getItem(USERNAME_STORAGE_KEY);
    if (oldUn) {
        try { ref('settings', 'usernames').set(JSON.parse(oldUn)); } catch (e) {}
        localStorage.removeItem(USERNAME_STORAGE_KEY);
    }
    const oldHj = localStorage.getItem(HIJRI_CONFIG_KEY);
    if (oldHj) {
        try { ref('settings', 'hijri').set({ config: JSON.parse(oldHj) }); } catch (e) {}
        localStorage.removeItem(HIJRI_CONFIG_KEY);
    }
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && k.indexOf('nowaTujuan') === 0) {
            try { ref('nowa', k).set({ nomors: String(localStorage.getItem(k)).split(',').map(s => s.trim()).filter(Boolean) }); } catch (e) {}
            localStorage.removeItem(k);
        }
    }
}

firebase.auth().onAuthStateChanged(user => {
    window.isAdmin = !!(user && !user.isAnonymous);
    if (user) {
        subscribeAll();
        if (!localStorage.getItem('attendance_migrated')) {
            localStorage.setItem('attendance_migrated', '1');
            setTimeout(migrateLegacyLocalStorage, 800);
        }
    }
    render();
});
firebase.auth().signInAnonymously().catch(e => {
    console.error('Anonymous sign-in gagal:', e.code, e);
    const el = document.getElementById('loginError');
    if (el) {
        el.textContent = 'Login anonim gagal: ' + (e.code || e.message) + '. Aktifkan Anonymous di Authentication > Sign-in method.';
        el.style.display = 'block';
    }
});

function getDefaultUsernames() {
    return { '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', 'mtsd': 'mtsd' };
}

function loadCustomUsernames() {
    return { ...customUsernames };
}

function saveCustomUsernames(obj) {
    customUsernames = obj;
    ref('settings', 'usernames').set(obj);
}

function getLoginMap() {
    const defaults = getDefaultUsernames();
    const custom = loadCustomUsernames();
    const result = {};
    Object.keys(defaults).forEach(gradeKey => {
        const customUsername = custom[gradeKey];
        const username = customUsername ? customUsername : defaults[gradeKey];
        result[username.toLowerCase()] = gradeKey;
    });
    return result;
}

function getSessions(t) {
    return (t.sessions && t.sessions.length > 0) ? t.sessions : ['Jam 1'];
}

function getSessionStatus(teacherData, session, sessions) {
    if (!teacherData) return null;
    if (typeof teacherData === 'string') return session === sessions[0] ? teacherData : null;
    return teacherData[session] || null;
}

let currentTab = 'MID';        // 'MID' atau 'MTSD'
let selectedGrade = 1;         // 1-6 (khusus MID)
let userProfile = null;        // profil user login: {tab, grade} atau {} untuk admin
let attendanceData = {};
let isDirty = false; // ada perubahan absensi yang belum disimpan
let currentDate = getTodayString();
let weekOffset = 0; // 0 = minggu ini, -1 = minggu lalu, +1 = minggu depan
let weekDays = getWeekDays(weekOffset);

// ============================================================
// 3. FUNGSI BANTU
// ============================================================
function getTodayString() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

// 7 hari dalam minggu berjalan (Seninâ€“Minggu)
function getWeekDays(offset = 0) {
    const base = new Date();
    const dow = base.getDay(); // 0=Minggu
    const diff = (dow === 0 ? -6 : 1 - dow);
    const monday = new Date(base.getFullYear(), base.getMonth(), base.getDate() + diff + (offset * 7));
    const names = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const today = getTodayString();
    const days = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
        const date = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
        days.push({ date, name: names[i], num: getHijriFull(date).d, isToday: date === today });
    }
    return days;
}

function selectDay(date) {
    if (currentDate === date) return;
    if (!confirmDiscardUnsaved()) return;
    currentDate = date;
    render();
}

function shiftWeek(delta) {
    if (!confirmDiscardUnsaved()) return;
    weekOffset += delta;
    weekDays = getWeekDays(weekOffset);
    currentDate = weekDays[0].date;
    render();
}

function goToToday() {
    if (currentDate === getTodayString()) return;
    if (!confirmDiscardUnsaved()) return;
    weekOffset = 0;
    weekDays = getWeekDays(0);
    currentDate = getTodayString();
    render();
}

// ponytail: pakai confirm() native, satu konfirmasi untuk semua jalur keluar.
// Naikkan ke modal custom + peringatan per-hari kalau nanti perlu multiplatform/toast.
function confirmDiscardUnsaved() {
    if (!isDirty) return true;
    return confirm('Ada perubahan absensi yang belum disimpan. Lanjut tanpa menyimpan?');
}

function renderDaySelector() {
    const container = document.getElementById('daySelector');
    container.innerHTML = '';
    
    // Add navigation arrows
    const prevBtn = document.createElement('button');
    prevBtn.className = 'day-btn px-3';
    prevBtn.innerHTML = '&lsaquo;';
    prevBtn.onclick = () => shiftWeek(-1);
    prevBtn.title = 'Minggu sebelumnya';
    container.appendChild(prevBtn);
    
    // Add day buttons
    weekDays.forEach(day => {
        const btn = document.createElement('button');
        btn.className = 'day-btn' + (day.date === currentDate ? ' active' : '');
        btn.innerHTML = `<span class="block text-sm font-bold leading-tight">${day.name}</span><span class="block text-xs opacity-80">${day.num}</span>`;
        btn.onclick = () => selectDay(day.date);
        container.appendChild(btn);
    });
    
    // Add next arrow
    const nextBtn = document.createElement('button');
    nextBtn.className = 'day-btn px-3';
    nextBtn.innerHTML = '&rsaquo;';
    nextBtn.onclick = () => shiftWeek(1);
    nextBtn.title = 'Minggu berikutnya';
    container.appendChild(nextBtn);
}

function formatDateDisplay(dateStr) {
    const { y, m, d } = getHijriFull(dateStr);
    return d + ' ' + HIJRI_MONTHS[m - 1] + ' ' + y + ' H';
}

// Buat icon SVG pakai sprite di index.html
function icon(name, cls) {
    return `<svg class="${cls || 'w-4 h-4 inline-block'}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><use href="#i-${name}"/></svg>`;
}

// ============================================================
// 4. DAPATKAN DAFTAR GURU SESUAI TAB & GRADE
//    (pakai jadwal custom dari settings kalo ada)
// ============================================================
const SCHEDULE_KEY = 'attendance_schedule';

function loadSchedule() {
    return { ...scheduleCache };
}

function saveSchedule(s) {
    Object.keys(s).forEach(key => {
        if (s[key] && s[key].length) ref('jadwal', key).set({ items: s[key] });
        else ref('jadwal', key).delete();
    });
}

function getTeacherList() {
    const key = (currentTab === 'MID' ? 'MID' + selectedGrade : 'MTSD') + '_' + currentDayName();
    const sch = loadSchedule();
    if (sch && sch[key]) return sch[key];
    if (currentTab === 'MID') return TEACHERS_MID[selectedGrade] || [];
    return TEACHERS_MTSD;
}

// Nama hari dari tanggal yang sedang dipilih
function currentDayName() {
    const day = weekDays.find(d => d.date === currentDate);
    return day ? day.name : 'Sen';
}

// ============================================================
// 5. RENDER UTAMA
// ============================================================
function render() {
    // Tampilkan tanggal
    const todayLabel = currentDate === getTodayString() ? ' (Hari ini)' : '';
    document.getElementById('displayDate').innerHTML = icon('calendar', 'w-4 h-4 inline-block mr-1') + formatDateDisplay(currentDate) + todayLabel;

    // Tombol "Hari Ini" cuma muncul kalau sedang di hari lain
    const goTodayBtn = document.getElementById('goTodayBtn');
    if (goTodayBtn) goTodayBtn.style.display = currentDate === getTodayString() ? 'none' : '';

    // Tampilkan pilihan hari
    renderDaySelector();

    // User terkunci ke halaman tertentu â†’ sembunyikan tab & grade selector
    const isLocked = !!userProfile.tab;
    const tabBar = document.getElementById('tabBar');
    const gradeSelector = document.getElementById('gradeSelector');
    tabBar.style.display = isLocked ? 'none' : 'flex';
    if (currentTab === 'MID' && !isLocked) {
        gradeSelector.style.display = 'flex';
        // Update active class tombol grade
        document.querySelectorAll('.grade-btn').forEach(btn => {
            const g = parseInt(btn.dataset.grade);
            btn.classList.toggle('active', g === selectedGrade);
        });
    } else {
        gradeSelector.style.display = 'none';
    }

    // Pengaturan cuma untuk admin
    const settingsBtn = document.getElementById('btnSettings');
    if (settingsBtn) settingsBtn.style.display = window.isAdmin ? '' : 'none';

    // Update tab button style
    document.getElementById('tabMID').className = 'tab-btn ' + (currentTab === 'MID' ? 'active' : 'inactive');
    document.getElementById('tabMTSD').className = 'tab-btn ' + (currentTab === 'MTSD' ? 'active' : 'inactive');
    const teachers = getTeacherList();
    const container = document.getElementById('teacherListContainer');
    container.innerHTML = '';

    // Pastikan data hari ini ada
    if (!attendanceData[currentDate]) {
        attendanceData[currentDate] = {};
    }
    const todayData = attendanceData[currentDate];

    teachers.forEach(t => {
        const key = t.kelas + ' ' + t.mapel;
        const sessions = getSessions(t);

        const card = document.createElement('div');
        card.className = 'card-teacher';

        sessions.forEach((session, si) => {
            const sessionDiv = document.createElement('div');
            sessionDiv.className = 'mb-2 last:mb-0' + (si > 0 ? ' mt-3' : '');

            const headRow = document.createElement('div');
            headRow.className = 'grid grid-cols-3 items-center mb-1';

            if (si === 0) {
                const kelasDiv = document.createElement('div');
                kelasDiv.className = 'font-bold text-gray-800 text-sm';
                kelasDiv.innerText = t.kelas + ' Â· ' + t.mapel;
                headRow.appendChild(kelasDiv);
                const guruDiv = document.createElement('div');
                guruDiv.className = 'text-sm text-gray-500 text-center truncate px-1';
                guruDiv.innerText = t.guru;
                headRow.appendChild(guruDiv);
            } else {
                headRow.appendChild(document.createElement('div'));
                headRow.appendChild(document.createElement('div'));
            }

            const sessionLabel = document.createElement('div');
            sessionLabel.className = 'text-sm font-semibold text-gray-500 uppercase tracking-wide text-right';
            sessionLabel.innerText = session;
            headRow.appendChild(sessionLabel);

            sessionDiv.appendChild(headRow);

            const btnGroup = document.createElement('div');
            btnGroup.className = 'flex flex-wrap gap-2';

            const currentStatus = getSessionStatus(todayData[key], session, sessions);

            STATUSES.forEach(status => {
                const btn = document.createElement('button');
                btn.innerText = status;
                btn.className = 'status-btn status-' + status.toLowerCase();

                if (STATUS_SHORT[currentStatus] === status) {
                    let cls = '';
                    if (status === 'H') cls = 'active-hadir';
                    else if (status === 'I') cls = 'active-izin';
                    else if (status === 'A') cls = 'active-alpha';
                    btn.classList.add(cls);
                }

                btn.onclick = function(e) {
                    e.stopPropagation();
                    toggleStatus(key, STATUS_FULL[status], session, sessions, t.guru);
                };

                btnGroup.appendChild(btn);
            });

            sessionDiv.appendChild(btnGroup);
            card.appendChild(sessionDiv);
        });

        container.appendChild(card);
    });
}

// ============================================================
// 6. TOGGLE STATUS (MANUAL SAVE - cuma ubah tampilan dulu)
// ============================================================
function toggleStatus(teacherName, status, session, sessions, guruName) {
    if (!attendanceData[currentDate]) {
        attendanceData[currentDate] = {};
    }

    const todayData = attendanceData[currentDate];

    if (guruName) {
        if (!todayData.guruLookup) todayData.guruLookup = {};
        todayData.guruLookup[teacherName] = guruName;
    }

    const current = todayData[teacherName];

    if (!current || typeof current === 'string') {
        todayData[teacherName] = {};
        if (typeof current === 'string' && session === sessions[0]) {
            todayData[teacherName][session] = current;
        }
    }

    const sessionData = todayData[teacherName];

    if (sessionData[session] === status) {
        delete sessionData[session];
    } else {
        sessionData[session] = status;
    }

    if (Object.keys(sessionData).length === 0) {
        delete todayData[teacherName];
    }

    isDirty = true;
    queueSave();
    render();
}

// ============================================================
// 6b. AUTO-SAVE (debounce) KE FIRESTORE
// ============================================================
let saveTimer = null;
let lastWriteErrorAt = 0;
function writeError(e, action) {
    const code = e && (e.code || e.message) ? (e.code || e.message) : 'unknown';
    const now = Date.now();
    if (now - lastWriteErrorAt > 15000) {
        lastWriteErrorAt = now;
        alert(`Gagal ${action} ke cloud: ${code}\nPastikan Firestore Rules sudah di-publish dan domain ini ada di Authentication > Authorized domains.`);
    }
    console.error('Firestore ' + action + ' gagal:', code, e);
}
function queueSave() {
    if (saveTimer) clearTimeout(saveTimer);
    const d = currentDate;
    saveTimer = setTimeout(() => {
        saveTimer = null;
        ref('absensi', d).set(attendanceData[d] || {}).catch(e => writeError(e, 'menyimpan'));
    }, 600);
}

// ============================================================
// 7. SIMPAN (MANUAL)
// ============================================================
function saveAttendance() {
    if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
    const todayData = attendanceData[currentDate] || {};
    ref('absensi', currentDate).set(todayData).catch(e => writeError(e, 'menyimpan'));
    isDirty = false;
    // Feedback visual
    const btn = document.getElementById('saveBtnText');
    if (btn) {
        const el = btn.parentElement;
        const originalColor = el.style.backgroundColor;
        btn.innerText = 'Tersimpan!';
        el.style.backgroundColor = '#16A34A';
        setTimeout(() => {
            btn.innerText = 'Simpan Absensi';
            el.style.backgroundColor = originalColor;
        }, 1500);
    }
}

// ============================================================
// 10. SWITCH TAB & GRADE
// ============================================================
function switchTab(tab) {
    if (currentTab === tab) return;
    if (!confirmDiscardUnsaved()) return;
    currentTab = tab;
    // Reset grade ke 1 kalo pindah ke MID
    if (tab === 'MID') selectedGrade = 1;
    render();
}

function selectGrade(grade) {
    if (selectedGrade === grade) return;
    if (!confirmDiscardUnsaved()) return;
    selectedGrade = grade;
    render();
}

// ============================================================
// 12. LOGIN / LOGOUT
// ============================================================
function openDashboard() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'none';
    document.getElementById('recapScreen').style.display = 'none';
    document.getElementById('dashboardScreen').style.display = 'block';
    currentDate = getTodayString();
    render();
}

function doLogin() {
    const input = document.getElementById('usernameInput');
    const btn = document.getElementById('btnLogin');
    const err = document.getElementById('loginError');
    const fail = (msg) => { err.textContent = msg; err.style.display = 'block'; btn.disabled = false; };
    const username = input.value.trim().toLowerCase();
    if (!username) { fail('Masukkan username.'); input.focus(); return; }
    
    btn.disabled = true;
    err.style.display = 'none';
    
    const loginMap = getLoginMap();
    const gradeKey = loginMap[username];
    
    if (!gradeKey) {
        err.textContent = 'Username tidak dikenali. Tersedia: ' + Object.keys(loginMap).join(', ');
        err.style.display = 'block';
        btn.disabled = false;
        input.value = '';
        input.focus();
        return;
    }
    
    const profile = USERS[gradeKey];
    userProfile = profile;
    window.isAdmin = false;
    if (profile.tab) {
        currentTab = profile.tab;
        selectedGrade = profile.grade || 1;
    }
    
    openDashboard();
}

function toggleAdminLogin() {
    const box = document.getElementById('adminLoginBox');
    const guru = document.getElementById('guruLoginForm');
    if (box.style.display === 'none') {
        box.style.display = 'block';
        guru.style.display = 'none';
        document.getElementById('toggleAdminLogin').innerText = 'Login Guru (username)';
    } else {
        box.style.display = 'none';
        guru.style.display = 'block';
        document.getElementById('toggleAdminLogin').innerText = 'Login Admin email/password';
    }
}

function batalAdminLogin() {
    document.getElementById('adminLoginBox').style.display = 'none';
    document.getElementById('guruLoginForm').style.display = 'block';
    document.getElementById('toggleAdminLogin').innerText = 'Login Admin email/password';
    document.getElementById('loginError').style.display = 'none';
}

function doAdminLogin() {
    const email = document.getElementById('adminEmail').value.trim().toLowerCase();
    const pass = document.getElementById('adminPass').value;
    const err = document.getElementById('loginError');
    if (!email || !pass) {
        err.textContent = 'Isi email dan password admin.';
        err.style.display = 'block';
        return;
    }
    err.style.display = 'none';
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(() => {
            window.isAdmin = true;
            userProfile = USERS['admin'];
            openDashboard();
        })
        .catch(e => {
            err.textContent = 'Login admin gagal: ' + (e && e.message ? e.message.split('.')[0] : 'cek email & password.');
            err.style.display = 'block';
        });
}

function doLogout() {
    const msg = isDirty ? 'Yakin keluar? Perubahan absensi yang belum disimpan akan hilang.' : 'Yakin keluar?';
    if (!confirm(msg)) return;
    isDirty = false;
    userProfile = null;
    try {
        firebase.auth().signOut();
        firebase.auth().signInAnonymously().catch(() => {});
    } catch (e) {}
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'none';
    document.getElementById('recapScreen').style.display = 'none';
    const btn = document.getElementById('btnLogin');
    if (btn) { btn.disabled = false; }
    const err = document.getElementById('loginError');
    if (err) { err.style.display = 'none'; }
    const box = document.getElementById('adminLoginBox');
    if (box) { box.style.display = 'none'; }
    const guru = document.getElementById('guruLoginForm');
    if (guru) { guru.style.display = 'block'; }
    const tg = document.getElementById('toggleAdminLogin');
    if (tg) { tg.innerText = 'Login Admin email/password'; }
    document.getElementById('usernameInput').value = '';
    document.getElementById('usernameInput').focus();
}

// ============================================================
// 13. PENGATURAN JADWAL (edit per jenjang)
// ============================================================
let settingsTarget = '1'; // '1'-'6' atau 'mtsd'
let settingsDay = 'Sen';  // nama hari

// Jenjang yang boleh diedit user ini (non-admin cuma jenjang sendiri)
function allowedTargets() {
    if (userProfile.tab === 'MTSD') return ['mtsd'];
    if (userProfile.grade) return [String(userProfile.grade)];
    return ['1', '2', '3', '4', '5', '6', 'mtsd']; // admin
}

function openSettings() {
    const targets = allowedTargets();
    const current = currentTab === 'MTSD' ? 'mtsd' : String(selectedGrade);
    settingsTarget = targets.includes(current) ? current : targets[0];
    settingsDay = currentDayName();
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'block';
    renderSettings();
}

function closeSettings() {
    document.getElementById('settingsScreen').style.display = 'none';
    document.getElementById('dashboardScreen').style.display = 'block';
    render();
}

function getScheduleKey() {
    return (settingsTarget === 'mtsd' ? 'MTSD' : 'MID' + settingsTarget) + '_' + settingsDay;
}

// Jadwal default per jenjang (dipakai kalau belum ada yg custom)
function defaultScheduleFor(key) {
    if (key.startsWith('MTSD')) return TEACHERS_MTSD;
    const grade = parseInt(key.charAt(3)); // 'MID1_..' â†’ 1
    return TEACHERS_MID[grade] || [];
}

// Jadwal yang benar-benar dipakai: custom kalau ada, selain itu default
function getEffectiveSchedule(key) {
    const sch = loadSchedule() || {};
    if (sch[key]) return sch[key];
    return defaultScheduleFor(key);
}

// Pastikan custom ada (salinan dari jadwal efektif) sebelum diedit/dihapus
function ensureCustom(key) {
    const sch = loadSchedule() || {};
    if (!sch[key]) sch[key] = getEffectiveSchedule(key).map(x => ({ ...x }));
    return sch;
}

function renderSettings() {
    // Tombol pilih jenjang (cuma jenjang milik user)
    const jc = document.getElementById('settingsJenjang');
    jc.innerHTML = '';
    allowedTargets().forEach(k => {
        const b = document.createElement('button');
        b.className = 'grade-btn' + (k === settingsTarget ? ' active' : '');
        b.innerText = k === 'mtsd' ? 'MTSD' : k;
        b.onclick = () => { settingsTarget = k; renderSettings(); };
        jc.appendChild(b);
    });

    // Tombol pilih hari
    const jd = document.getElementById('settingsDay');
    jd.innerHTML = '';
    ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].forEach(k => {
        const b = document.createElement('button');
        b.className = 'day-btn' + (k === settingsDay ? ' active' : '');
        b.innerText = k;
        b.onclick = () => { settingsDay = k; renderSettings(); };
        jd.appendChild(b);
    });

    // Daftar jadwal (semua jadwal yang sedang dipakai, bisa diedit langsung di tabel)
    const list = document.getElementById('settingsList');
    const items = getEffectiveSchedule(getScheduleKey());
    const sch = loadSchedule() || {};
    const isCustom = !!sch[getScheduleKey()];
    list.innerHTML = '';
    if (items.length === 0) {
        list.innerHTML = '<p class="text-sm text-gray-500 italic text-center py-4">Belum ada jadwal. Tambah lewat form di bawah.</p>';
    } else {
        const wrapper = document.createElement('div');
        wrapper.className = 'rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden';
        const table = document.createElement('table');
        table.className = 'settings-table w-full table-fixed text-left text-sm';
        const widths = [12, 16, 34, 20, 18];
        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        ['Kelas', 'Mapel', 'Guru', 'Sesi', 'Aksi'].forEach((text, ci) => {
            const th = document.createElement('th');
            th.className = 'text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-2 bg-gray-50';
            th.style.width = widths[ci] + '%';
            th.innerText = text;
            headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        items.forEach((it, i) => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-50 transition align-top';
            const makeInput = (value, cls) => {
                const inp = document.createElement('input');
                inp.value = value;
                inp.className = 'w-full min-w-0 border border-gray-200 bg-white text-gray-900 rounded-lg px-1.5 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none ' + (cls || '');
                return inp;
            };
            const td = (input) => {
                const x = document.createElement('td');
                x.className = 'px-1.5 py-2';
                x.appendChild(input);
                return x;
            };
            tr.appendChild(td(makeInput(it.kelas, 'font-medium')));
            tr.appendChild(td(makeInput(it.mapel)));
            tr.appendChild(td(makeInput(it.guru)));
            tr.appendChild(td(makeInput((it.sessions || ['Jam 1']).join(', '))));
            const aksi = document.createElement('td');
            aksi.className = 'px-1.5 py-2';
            const actWrap = document.createElement('div');
            actWrap.className = 'flex flex-col gap-1';
            const save = document.createElement('button');
            save.className = 'grade-btn text-xs px-2 py-1.5';
            save.innerText = 'Simpan';
            save.onclick = () => saveRow(i, tr);
            const del = document.createElement('button');
            del.className = 'grade-btn text-xs px-2 py-1.5';
            del.innerText = 'Hapus';
            del.onclick = () => deleteSettingItem(i);
            actWrap.appendChild(save);
            actWrap.appendChild(del);
            aksi.appendChild(actWrap);
            tr.appendChild(aksi);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        wrapper.appendChild(table);
        list.appendChild(wrapper);
        const addBtn = document.createElement('button');
        addBtn.className = 'mt-3 w-full grade-btn py-2.5 text-sm font-semibold';
        addBtn.innerText = '+ Tambah Jadwal';
        addBtn.onclick = addNewRow;
        list.appendChild(addBtn);
    }
    if (!isCustom && items.length > 0) {
        list.appendChild(Object.assign(document.createElement('p'), {
            className: 'text-xs text-gray-500 italic text-center mt-2',
            innerText: 'Jadwal default. Edit salah satu untuk mulai pakai jadwal custom hari ini.'
        }));
    }

    // Tampilkan pengaturan username & kalender hijriah jika admin
    const usernameSection = document.getElementById('settingsUsernameSection');
    if (usernameSection) {
        usernameSection.style.display = window.isAdmin ? 'block' : 'none';
        if (window.isAdmin) renderUsernameSettings();
    }
    const hijriSection = document.getElementById('settingsHijriSection');
    if (hijriSection) {
        hijriSection.style.display = window.isAdmin ? 'block' : 'none';
        if (window.isAdmin) renderHijriSettings();
    }
}

function renderUsernameSettings() {
    const container = document.getElementById('settingsUsernameList');
    if (!container) return;
    const custom = loadCustomUsernames();
    const defaults = getDefaultUsernames();
    container.innerHTML = '';
    const targets = ['1', '2', '3', '4', '5', '6', 'mtsd'];
    targets.forEach(key => {
        const row = document.createElement('div');
        row.className = 'flex items-center gap-2';
        const label = document.createElement('span');
        label.className = 'text-sm font-medium text-gray-600 w-16';
        label.innerText = key === 'mtsd' ? 'MTSD' : 'MID ' + key;
        row.appendChild(label);
        const input = document.createElement('input');
        input.value = custom[key] || '';
        input.dataset.usernameKey = key;
        input.className = 'flex-1 border border-gray-200 rounded px-2 py-1.5 text-sm focus:border-black outline-none';
        input.placeholder = defaults[key];
        row.appendChild(input);
        container.appendChild(row);
    });
}

function saveAllUsernames() {
    if (!window.isAdmin) { alert('Cuma admin yang bisa mengubah username.'); return; }
    const inputs = document.querySelectorAll('#settingsUsernameList input[data-username-key]');
    const custom = {};
    inputs.forEach(inp => {
        const key = inp.dataset.usernameKey;
        const val = inp.value.trim();
        if (val) custom[key] = val;
    });
    saveCustomUsernames(custom);
    alert('Username berhasil disimpan.');
}

function resetAllUsernames() {
    if (!window.isAdmin) { alert('Cuma admin yang bisa mereset username.'); return; }
    if (!confirm('Yakin reset semua username ke default? Semua custom username akan dihapus.')) return;
    saveCustomUsernames({});
    renderUsernameSettings();
    alert('Semua username sudah direset ke default.');
}

// ============================================================
// 13b. PENGATURAN KALENDER HIJRIAH (admin, jumlah hari tiap bulan)
// ============================================================
function renderHijriSettings() {
    const cfg = loadHijriConfig();
    const cur = cfg || {};
    const todayHij = getHijriYMD(getTodayString());

    document.getElementById('hijriAnchorGreg').value = cur.greg || getTodayString();
    document.getElementById('hijriAnchorD').value = cur.hijD || todayHij.d;
    const selM = document.getElementById('hijriAnchorM');
    selM.innerHTML = '';
    HIJRI_MONTHS.forEach((name, i) => {
        const opt = document.createElement('option');
        opt.value = i + 1;
        opt.innerText = name;
        opt.selected = (cur.hijM || todayHij.m) === i + 1;
        selM.appendChild(opt);
    });
    document.getElementById('hijriAnchorY').value = cur.hijY || todayHij.y;

    const grid = document.getElementById('settingsHijriLengths');
    grid.innerHTML = '';
    const lengths = cfg && cfg.lengths && cfg.lengths.length === 12 ? cfg.lengths : [30,29,30,29,30,29,30,29,30,29,30,29];
    HIJRI_MONTHS.forEach((name, i) => {
        const wrap = document.createElement('div');
        wrap.className = 'flex items-center gap-1';
        const lbl = document.createElement('span');
        lbl.className = 'text-xs font-semibold text-gray-600 flex-1 truncate';
        lbl.innerText = name;
        const inp = document.createElement('input');
        inp.type = 'number';
        inp.min = 29; inp.max = 30;
        inp.value = lengths[i];
        inp.dataset.hijriLen = i;
        inp.className = 'w-14 border border-gray-200 rounded-lg px-1 py-1.5 text-sm text-center focus:ring-2 focus:ring-blue-500 outline-none';
        wrap.appendChild(lbl);
        wrap.appendChild(inp);
        grid.appendChild(wrap);
    });
}

function saveHijriSettings() {
    if (!window.isAdmin) { alert('Cuma admin yang bisa mengubah kalender hijriah.'); return; }
    const greg = document.getElementById('hijriAnchorGreg').value;
    const hijD = parseInt(document.getElementById('hijriAnchorD').value, 10);
    const hijM = parseInt(document.getElementById('hijriAnchorM').value, 10);
    const hijY = parseInt(document.getElementById('hijriAnchorY').value, 10);
    const lengths = [];
    document.querySelectorAll('#settingsHijriLengths input[data-hijri-len]').forEach(inp => {
        lengths.push(parseInt(inp.value, 10));
    });
    if (!greg || isNaN(dayNum(greg))) { alert('Isi patokan tanggal Masehi dengan benar.'); return; }
    if (!hijD || hijD < 1 || hijD > 30) { alert('Isi tanggal Hijri (1-30).'); return; }
    if (!hijM || hijM < 1 || hijM > 12) { alert('Pilih bulan Hijri yang benar.'); return; }
    if (!hijY || hijY < 1300) { alert('Isi tahun Hijriah dengan benar.'); return; }
    if (lengths.length !== 12 || lengths.some(n => n !== 29 && n !== 30)) {
        alert('Semua bulan harus diisi 29 atau 30 hari.');
        return;
    }
    saveHijriConfig({ greg, hijY, hijM, hijD, lengths });
    renderHijriSettings();
    alert('Kalender hijriah tersimpan. Rekap sekarang memakai jumlah hari sesuaian.');
}

function resetHijriSettings() {
    if (!window.isAdmin) { alert('Cuma admin yang bisa mereset.'); return; }
    if (!confirm('Reset ke perhitungan bawaan (Intl islamic)? Config custom akan dihapus.')) return;
    saveHijriConfig(null);
    renderHijriSettings();
    alert('Kalender hijriah dikembalikan ke perhitungan bawaan.');
}


function saveRow(i, tr) {
    const inputs = tr.querySelectorAll('input');
    const kelas = inputs[0].value.trim();
    const mapel = inputs[1].value.trim();
    const guru = inputs[2].value.trim();
    const jamRaw = inputs[3].value.trim();
    if (!kelas || !mapel || !guru) {
        alert('Isi Kelas, Mapel, Guru!');
        return;
    }
    const sessions = jamRaw ? jamRaw.split(',').map(s => s.trim()).filter(Boolean) : ['Jam 1'];
    const key = getScheduleKey();
    const sch = ensureCustom(key);
    if (i > -1 && i < sch[key].length) {
        sch[key][i] = { kelas, mapel, guru, sessions };
    } else {
        sch[key].push({ kelas, mapel, guru, sessions });
    }
    saveSchedule(sch);
    renderSettings();
}

function addNewRow() {
    const key = getScheduleKey();
    const sch = ensureCustom(key);
    sch[key].push({ kelas: '', mapel: '', guru: '', sessions: ['Jam 1'] });
    saveSchedule(sch);
    renderSettings();
}

function deleteSettingItem(i) {
    if (!confirm('Hapus jadwal ini?')) return;
    const key = getScheduleKey();
    const sch = ensureCustom(key);
    sch[key].splice(i, 1);
    saveSchedule(sch);
    renderSettings();
}

// ============================================================
// 14. REKAP BULANAN (KALENDER HIJRIAH)
// ============================================================
const HIJRI_MONTHS = ['Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 'Jumadil Awal', 'Jumadil Akhir', 'Rajab', 'Syaban', 'Ramadan', 'Syawal', 'Zulkaidah', 'Zulhijah'];
const HIJRI_CONFIG_KEY = 'hijri_calendar_config';
let recapHijri = null; // { y, m } tahun & bulan Hijriah yang sedang dilihat

function loadHijriConfig() {
    return hijriConfigCache;
}

function saveHijriConfig(cfg) {
    hijriConfigCache = cfg;
    ref('settings', 'hijri').set({ config: cfg || null });
}

function dayNum(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return Math.floor(Date.UTC(y, m - 1, d) / 86400000);
}

// Konversi Masehi -> Hijriah berdasar config custom { greg, hijY, hijM, hijD, lengths[12] }
// lengths: jumlah hari tiap bulan Safar.. dst, 29/30. Config kosong -> fallback Intl islamic.
function calcHijriFromConfig(cfg, dateStr) {
    if (!cfg || !cfg.greg || !cfg.hijY || !cfg.hijM || !cfg.hijD || !Array.isArray(cfg.lengths) || cfg.lengths.length !== 12) return null;
    const lengths = cfg.lengths.map(n => (n === 30 || n === 29) ? n : 30);
    let y = cfg.hijY, m = cfg.hijM - 1, d = cfg.hijD + (dayNum(dateStr) - dayNum(cfg.greg));
    while (d > lengths[((m % 12) + 12) % 12]) { d -= lengths[((m % 12) + 12) % 12]; m++; }
    while (d <= 0) { m--; d += lengths[((m % 12) + 12) % 12]; }
    y += Math.floor(m / 12);
    return { y, m: ((m % 12) + 12) % 12 + 1, d };
}

function getHijriYMD(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    const parts = new Intl.DateTimeFormat('en', { calendar: 'islamic-umalqura', year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(new Date(y, m - 1, d));
    let hy = 0, hm = 0, hd = 0;
    parts.forEach(p => {
        if (p.type === 'year') hy = +p.value;
        if (p.type === 'month') hm = +p.value;
        if (p.type === 'day') hd = +p.value;
    });
    return { y: hy, m: hm, d: hd };
}

// Tanggal Gregorian -> Hijriah lengkap {y,m,d}. Config custom dipakai kalau ada, selain itu Intl.
function getHijriFull(dateStr) {
    const fromCfg = calcHijriFromConfig(loadHijriConfig(), dateStr);
    if (fromCfg) return fromCfg;
    return getHijriYMD(dateStr);
}

// Ambil tahun & bulan Hijriah dari tanggal Gregorian (YYYY-MM-DD)
function getHijriYM(dateStr) {
    const { y, m } = getHijriFull(dateStr);
    return { y, m };
}

function buildGuruLookup() {
    const map = {};
    const sch = loadSchedule() || {};
    Object.values(sch).forEach(list => list.forEach(t => {
        const k = t.kelas + ' ' + t.mapel;
        if (!map[k]) map[k] = t.guru;
    }));
    [1,2,3,4,5,6].forEach(g => (TEACHERS_MID[g] || []).forEach(t => {
        const k = t.kelas + ' ' + t.mapel;
        if (!map[k]) map[k] = t.guru;
    }));
    TEACHERS_MTSD.forEach(t => {
        const k = t.kelas + ' ' + t.mapel;
        if (!map[k]) map[k] = t.guru;
    });
    return map;
}

function dayNameOf(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][new Date(y, m - 1, d).getDay()];
}

// Kunci jadwal dari nama kelas: 1-6 -> MID<n>, 7 ke atas -> MTSD
function scheduleKeyForKelas(kelas, dayName) {
    const g = parseInt(kelas, 10);
    return (g >= 7 ? 'MTSD' : 'MID' + g) + '_' + dayName;
}

function recapScope() {
    if (window.isAdmin) return null;
    if (currentTab === 'MTSD') return 'MTSD';
    return 'MID' + selectedGrade;
}

function isRecapEligibleKelas(kelas) {
    const scope = recapScope();
    if (!scope) return true;
    const g = parseInt(kelas, 10);
    if (scope === 'MTSD') return g >= 7;
    return g === parseInt(scope.replace('MID', ''), 10);
}

function openRecap() {
    if (!recapHijri) recapHijri = getHijriYM(getTodayString());
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('recapScreen').style.display = 'block';
    renderRecap();
}

function closeRecap() {
    document.getElementById('recapScreen').style.display = 'none';
    document.getElementById('dashboardScreen').style.display = 'block';
}

function shiftRecapMonth(delta) {
    recapHijri.m += delta;
    while (recapHijri.m < 1) { recapHijri.m += 12; recapHijri.y--; }
    while (recapHijri.m > 12) { recapHijri.m -= 12; recapHijri.y++; }
    renderRecap();
}

function renderRecap() {
    document.getElementById('recapMonthLabel').innerText = HIJRI_MONTHS[recapHijri.m - 1] + ' ' + recapHijri.y + ' H';
    const container = document.getElementById('recapList');
    container.innerHTML = '';

    const rekap = {};
    const sch = loadSchedule() || {};
    Object.entries(attendanceData).forEach(([date, day]) => {
        const { y, m } = getHijriYM(date);
        if (y !== recapHijri.y || m !== recapHijri.m) return;
        const dayName = dayNameOf(date);
        Object.entries(day).forEach(([key, data]) => {
            if (key === 'guruLookup') return;
            const [kelas, ...mapelParts] = key.split(' ');
            if (!isRecapEligibleKelas(kelas)) return;
            const mapel = mapelParts.join(' ');
            const schedKey = scheduleKeyForKelas(kelas, dayName);
            const item = (sch[schedKey] || defaultScheduleFor(schedKey)).find(x => x.kelas === kelas && x.mapel === mapel);
            const guru = (day.guruLookup && day.guruLookup[key]) || (item ? item.guru : 'â€”');
            if (!rekap[guru]) rekap[guru] = { H: 0, I: 0, A: 0 };
            if (typeof data === 'string') {
                const st = STATUS_SHORT[data] || (data === 'Z' ? 'I' : data);
                if (rekap[guru][st] !== undefined) rekap[guru][st]++;
            } else {
                Object.values(data).forEach(s => {
                    const st = STATUS_SHORT[s] || (s === 'Z' ? 'I' : s);
                    if (rekap[guru][st] !== undefined) rekap[guru][st]++;
                });
            }
        });
    });

    const listGuru = Object.keys(rekap).sort((a, b) => a.localeCompare(b));
    if (listGuru.length === 0) {
        container.innerHTML = '<p class="text-sm text-gray-500 italic text-center py-8 bg-white rounded-2xl border border-gray-200">Belum ada data absensi bulan ini.</p>';
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm';
    const table = document.createElement('table');
    table.className = 'recap-table w-full text-left text-sm';
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    ['Nama Guru', 'H', 'I', 'A', 'Total'].forEach(text => {
        const th = document.createElement('th');
        th.className = 'text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 py-2 bg-gray-50';
        th.innerText = text;
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    const totals = { H: 0, I: 0, A: 0 };
    listGuru.forEach((guru, i) => {
        const data = rekap[guru];
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 transition';
        const vals = [guru, data.H, data.I, data.A, data.H + data.I + data.A];
        vals.forEach((v, ci) => {
            const td = document.createElement('td');
            td.className = 'px-2 py-2' + (ci === 1 ? ' text-green-600 font-semibold' : '') + (ci === 2 ? ' text-purple-600 font-semibold' : '') + (ci === 3 ? ' text-red-600 font-semibold' : '') + (ci === 4 ? ' font-bold' : '');
            td.innerText = v;
            tr.appendChild(td);
        });
        totals.H += data.H; totals.I += data.I; totals.A += data.A;
        tbody.appendChild(tr);
    });
    const ftr = document.createElement('tr');
    ftr.className = 'bg-gray-50 font-bold';
    ['Total', totals.H, totals.I, totals.A, totals.H + totals.I + totals.A].forEach(v => {
        const td = document.createElement('td');
        td.className = 'px-2 py-2';
        td.innerText = v;
        ftr.appendChild(td);
    });
    tbody.appendChild(ftr);
    table.appendChild(tbody);
    wrapper.appendChild(table);
    container.appendChild(wrapper);

    // Export CSV
    window.exportRecapCSV = function() {
        const rekap = {};
        const sch = loadSchedule() || {};
        Object.entries(attendanceData).forEach(([date, day]) => {
            const { y, m } = getHijriYM(date);
            if (y !== recapHijri.y || m !== recapHijri.m) return;
            const dayName = dayNameOf(date);
            Object.entries(day).forEach(([key, data]) => {
                if (key === 'guruLookup') return;
                const [kelas, ...mapelParts] = key.split(' ');
                if (!isRecapEligibleKelas(kelas)) return;
                const mapel = mapelParts.join(' ');
                const schedKey = scheduleKeyForKelas(kelas, dayName);
                const item = (sch[schedKey] || defaultScheduleFor(schedKey)).find(x => x.kelas === kelas && x.mapel === mapel);
                const guru = (day.guruLookup && day.guruLookup[key]) || (item ? item.guru : 'â€”');
                if (!rekap[guru]) rekap[guru] = { H: 0, I: 0, A: 0 };
                if (typeof data === 'string') {
                    const st = STATUS_SHORT[data] || (data === 'Z' ? 'I' : data);
                    if (rekap[guru][st] !== undefined) rekap[guru][st]++;
                } else {
                    Object.values(data).forEach(s => {
                        const st = STATUS_SHORT[s] || (s === 'Z' ? 'I' : s);
                        if (rekap[guru][st] !== undefined) rekap[guru][st]++;
                    });
                }
            });
        });
        const listGuru = Object.keys(rekap).sort((a, b) => a.localeCompare(b));
        if (listGuru.length === 0) {
            alert('Belum ada data absensi untuk bulan yang sedang ditampilkan.');
            return;
        }
        let csv = 'Nama Guru,Hadir,Izin,Alpha,Total\r\n';
        listGuru.forEach(guru => {
            const d = rekap[guru];
            const total = d.H + d.I + d.A;
            csv += `"${guru}",${d.H},${d.I},${d.A},${total}\r\n`;
        });
        const totals = { H: 0, I: 0, A: 0 };
        listGuru.forEach(g => {
            totals.H += rekap[g].H;
            totals.I += rekap[g].I;
            totals.A += rekap[g].A;
        });
        const totalAll = totals.H + totals.I + totals.A;
        csv += `"TOTAL",${totals.H},${totals.I},${totals.A},${totalAll}\r\n`;

        const monthLabel = HIJRI_MONTHS[recapHijri.m - 1] + ' ' + recapHijri.y;
        const filename = 'rekap_absensi_' + monthLabel.replace(/\s/g, '_') + '.csv';

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
};

// ============================================================
// 15. SUPPORT ENTER DI LOGIN
// ============================================================
document.getElementById('usernameInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doLogin();
});
document.getElementById('adminPass').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doAdminLogin();
});

// Peringatan kalau tutup/refresh browser padahal ada perubahan belum disimpan
window.addEventListener('beforeunload', function(e) {
    if (!isDirty) return;
    e.preventDefault();
    e.returnValue = '';
});

window.openRecap = openRecap;
window.closeRecap = closeRecap;
window.shiftRecapMonth = shiftRecapMonth;
window.shiftWeek = shiftWeek;
window.goToToday = goToToday;

// ============================================================
// 16. LAPORAN HARIAN VIA WHATSAPP
// ============================================================
const WA_STORAGE_KEY_BASE = 'nowaTujuan';

function waKey(tab, grade) {
    return tab === 'MTSD' ? 'nowaTujuan_MTSD' : 'nowaTujuan_MID' + grade;
}

function getNomorWaTujuan(tab, grade) {
    return waNumbers[waKey(tab, grade)] || [];
}

function setNomorWaTujuan(tab, grade, input) {
    const list = [];
    String(input).split(/[,\n;]/).forEach(part => {
        const bersih = part.replace(/\D/g, '');
        if (bersih.length >= 10 && list.indexOf(bersih) === -1) list.push(bersih);
    });
    if (list.length === 0) {
        alert('Tidak ada nomor WA yang valid. Pakai format internasional tanpa 0 di depan, dan pisahkan dengan koma atau baris baru.\nContoh: 6281234567890, 6289876543210');
        return false;
    }
    const key = waKey(tab, grade);
    waNumbers[key] = list;
    ref('nowa', key).set({ nomors: list });
    return true;
}

function formatNomorWa(n) {
    const s = String(n);
    if (s.length <= 4) return s;
    return s.slice(0, 3) + ' ' + s.slice(3).replace(/(\d{3})(?=\d)/g, '$1 ');
}

function buatLaporanHarian(tanggal, tab, grade) {
    const lembaga = tab === 'MTSD' ? 'MTsD' : 'MID Kelas ' + grade;
    const dayName = weekDays.find(d => d.date === tanggal);
    const namaHari = dayName ? dayName.name : '-';

    const todayData = attendanceData[tanggal] || {};
    const teachers = getTeacherList();
    const records = [];

    teachers.forEach(t => {
        const key = t.kelas + ' ' + t.mapel;
        const sessions = getSessions(t);
        sessions.forEach(session => {
            const st = getSessionStatus(todayData[key], session, sessions);
            const lbl = st === 'H' ? 'Hadir' : st === 'I' ? 'Izin' : st === 'A' ? 'Alpa' : 'Belum diisi';
            records.push({ jam: session, kelas: t.kelas, mapel: t.mapel, guru: t.guru, status: lbl });
        });
    });

    const h = records.filter(r => r.status === 'Hadir').length;
    const i = records.filter(r => r.status === 'Izin').length;
    const a = records.filter(r => r.status === 'Alpa').length;
    const belum = records.filter(r => r.status === 'Belum diisi').length;

    let pesan = `LAPORAN ABSENSI ${lembaga}\n`;
    pesan += `Tanggal: ${tanggal} (${namaHari})\n`;
    pesan += `Hadir: ${h}   Izin: ${i}   Alpa: ${a}   Belum: ${belum}\n`;
    pesan += `Total jadwal: ${records.length}\n--------------------\n`;
    records.forEach(r => {
        pesan += `- ${r.jam} - ${r.kelas}\n  Mapel: ${r.mapel}\n  Guru: ${r.guru} -> ${r.status}\n`;
    });
    pesan += '--------------------\nDikirim dari Aplikasi Absensi MID & MTsD';
    return pesan;
}

let waKonteksLaporan = null;

function tampilModalPilihNomor() {
    const modal = document.getElementById('modalKirimLaporan');
    const list = document.getElementById('waPickList');
    const btnNext = document.getElementById('btnWaNext');
    list.innerHTML = waKonteksLaporan.nomors.map(n => `
      <label class="wa-pick-row">
        <input type="checkbox" value="${n}" checked>
        <span class="wa-num">${formatNomorWa(n)}</span>
      </label>
    `).join('');
    btnNext.innerHTML = waKonteksLaporan.nomors.length + ' nomor';
    modal.style.display = 'flex';
}

function kirimLaporanKeNomorTerpilih() {
    const modal = document.getElementById('modalKirimLaporan');
    if (!waKonteksLaporan) return;
    const checked = [...document.querySelectorAll('#waPickList input:checked')].map(i => i.value);
    if (checked.length === 0) { alert('Centang minimal satu nomor.'); return; }
    modal.style.display = 'none';
    const pesan = waKonteksLaporan.pesan;
    waKonteksLaporan = null;
    checked.forEach(n => window.open(`https://wa.me/${n}?text=${encodeURIComponent(pesan)}`, '_blank'));
}

function bukaLaporanWhatsApp() {
    if (!currentDate) { alert('Pilih tanggal terlebih dahulu.'); return; }
    let nomors = getNomorWaTujuan(currentTab, selectedGrade);
    if (nomors.length === 0) {
        const input = prompt('Belum ada nomor WA tujuan. Masukkan nomor tujuan (bisa beberapa, pisahkan dengan koma).\nFormat internasional tanpa 0 di depan:\n\nContoh: 6281234567890, 6289876543210');
        if (!input) return;
        if (!setNomorWaTujuan(currentTab, selectedGrade, input)) return;
        nomors = getNomorWaTujuan(currentTab, selectedGrade);
    }
    const pesan = buatLaporanHarian(currentDate, currentTab, selectedGrade);
    if (nomors.length === 1) {
        window.open(`https://wa.me/${nomors[0]}?text=${encodeURIComponent(pesan)}`, '_blank');
        return;
    }
    waKonteksLaporan = { pesan, nomors };
    tampilModalPilihNomor();
}

// Buat fungsi global
window.bukaLaporanWhatsApp = bukaLaporanWhatsApp;
window.tampilModalPilihNomor = tampilModalPilihNomor;
window.kirimLaporanKeNomorTerpilih = kirimLaporanKeNomorTerpilih;

document.getElementById('btnWaNext').addEventListener('click', kirimLaporanKeNomorTerpilih);
document.getElementById('btnWaBatal').addEventListener('click', () => {
    document.getElementById('modalKirimLaporan').style.display = 'none';
    waKonteksLaporan = null;
});

// ============================================================
// 17. EXPORT GLOBAL FUNCTIONS
// ============================================================
window.doLogin = doLogin;
window.doLogout = doLogout;
window.switchTab = switchTab;
window.selectGrade = selectGrade;
window.selectDay = selectDay;
window.toggleStatus = toggleStatus;
window.saveAttendance = saveAttendance;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.saveRow = saveRow;
window.addNewRow = addNewRow;
window.toggleAdminLogin = toggleAdminLogin;
window.batalAdminLogin = batalAdminLogin;
window.doAdminLogin = doAdminLogin;
