/* --- 1. Button Logic --- */
function moveButton() {
    var x = Math.random() * (window.innerWidth - 100);
    if(x < 0) x = 0;
    var y = Math.random() * (window.innerHeight - 100);
    if(y < 0) y = 0;
    
    var btn = document.getElementById('noBtn');
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';

    var gif = document.getElementById('main-gif');
    if (gif) {
        gif.src = "sad.gif";
    }
}

function sayYes() {
    document.getElementById('screen-1').classList.add('hidden');
    document.getElementById('screen-2').classList.remove('hidden');
}

function showLetter() {
    document.getElementById('screen-2').classList.add('hidden');
    document.getElementById('screen-3').classList.remove('hidden');
}

/* --- NEW: Go Back Function --- */
function goBack(screenNumber) {
    // Hide current screens
    document.getElementById('screen-2').classList.add('hidden');
    document.getElementById('screen-3').classList.add('hidden');
    
    // Show the target screen
    document.getElementById('screen-' + screenNumber).classList.remove('hidden');
}

/* --- 2. Envelope Logic --- */
function openEnvelope() {
    document.getElementById('closed-env').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('closed-env').classList.add('hidden');
        document.getElementById('open-letter').classList.remove('hidden');
        document.getElementById('open-letter').classList.add('slide-up');
    }, 300);
}

/* --- 3. LDR Clock Logic --- */
function updateClock() {
    const now = new Date();
    const myTime = now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kuala_Lumpur', hour: '2-digit', minute: '2-digit', hour12: true 
    });
    const auTime = now.toLocaleTimeString('en-US', { 
        timeZone: 'Australia/Sydney', hour: '2-digit', minute: '2-digit', hour12: true 
    });
    document.getElementById('my-time').innerText = myTime;
    document.getElementById('au-time').innerText = auTime;
}
setInterval(updateClock, 1000);
updateClock();