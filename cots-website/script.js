
// Set this to your verified, publicly accessible APK URL when your release is ready.
const APK_URL = '';

// Mobile navigation
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');

        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? '✕' : '☰';
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.textContent = '☰';
        });
    });
}

// Automatically update the copyright year
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}

// APK download handling
const download = document.getElementById('apkDownload');
const help = document.getElementById('downloadHelp');

if (download) {
    if (APK_URL.trim()) {
        download.href = APK_URL;
        download.removeAttribute('aria-disabled');
        download.querySelector('span').textContent = 'Android';
    } else {
        download.addEventListener('click', e => {
            e.preventDefault();

            if (help) {
                help.textContent =
                    'The APK is not available yet. Please check back after the official release.';
            }
        });
    }
}
