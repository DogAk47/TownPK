// components.js - Reusable UI components

function renderNavbar() {
    const navbarHtml = `
        <nav class="navbar">
            <a href="index.html" class="navbar-brand">
                <span>📍</span> 故鄉 PK
            </a>
            <div class="navbar-nav">
                <a href="index.html" class="nav-link">首頁總覽</a>
                <a href="category.html?id=history" class="nav-link">歷史沿革</a>
                <a href="category.html?id=commercial" class="nav-link">商圈機能</a>
                <a href="category.html?id=education" class="nav-link">教育資源</a>
                <a href="category.html?id=tourism" class="nav-link">觀光資產</a>
                <a href="category.html?id=food" class="nav-link">在地美食</a>
                <a href="category.html?id=population" class="nav-link">人口密度</a>
                <a href="category.html?id=transportation" class="nav-link">交通運輸</a>
            </div>
        </nav>
        <div id="scrollProgressBar" class="scroll-progress-bar"></div>
        <button id="backToTopBtn" class="back-to-top-btn" title="回到頂部">↑</button>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);

    // Set active link
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentUrl = currentPath.substring(currentPath.lastIndexOf('/') + 1) + currentSearch;

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Exact match or if we are on root / index.html
        if (currentUrl === linkHref || (currentUrl === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function renderFooter() {
    const footerHtml = `
        <footer class="footer">
            <div class="footer-content">
                <p>1142934 林承憲</p>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

function initPageTransitions() {
    document.body.classList.add('page-transition-wrapper');

    document.querySelectorAll('a').forEach(link => {
        // Only apply to local links
        if (link.hostname === window.location.hostname && link.getAttribute('target') !== '_blank') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.href;
                document.body.classList.remove('page-transition-wrapper');
                document.body.classList.add('page-transition-exit');

                setTimeout(() => {
                    window.location.href = target;
                }, 300); // Matches CSS fadeOutPage duration
            });
        }
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Add fade-in-up class to specific elements and observe
    document.querySelectorAll('.category-card, .split-panel, .scoring-table-container, .photo-gallery').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

function initScrollProgressAndBackToTop() {
    const progressBar = document.getElementById('scrollProgressBar');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        // Progress Bar Logic
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        if (progressBar) progressBar.style.width = scrolled + '%';

        // Back to Top Button Logic
        if (winScroll > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const updateCount = () => {
                    const count = +counter.innerText.replace(/,/g, '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc).toLocaleString();
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target.toLocaleString();
                    }
                };
                updateCount();
                obs.unobserve(counter); // Only animate once
            }
        });
    }, { threshold: 0.1 });

    counters.forEach(counter => {
        counter.innerText = '0';
        observer.observe(counter);
    });
}

function initApp() {
    renderNavbar();
    renderFooter();
    initPageTransitions();
    initScrollAnimations();
    initScrollProgressAndBackToTop();
    // setTimeout to ensure elements are rendered by other scripts before finding .counter
    setTimeout(initCounters, 100);
}

document.addEventListener('DOMContentLoaded', initApp);
