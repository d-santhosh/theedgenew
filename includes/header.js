// Common Header Component for The Edge Showroom
(function() {
    // Detect if the current page is in a subfolder (like /shirts/ or /pants/)
    const isSubDir = window.location.pathname.includes('/shirts/') || 
                     window.location.pathname.includes('/pants/') || 
                     document.currentScript?.getAttribute('data-base') === '../';
    const base = isSubDir ? '../' : '';

    const headerHTML = `
    <header class="header-container">
        <div class="header-left">
            <a href="${base}index.html" class="custom-logo">
                <img src="${base}public/logo.png" alt="The Edge Logo" class="logo-img" />
            </a>
        </div>
        <button class="mobile-hamburger-btn" id="mobileMenuBtn" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="nav-links" id="mainNavLinks">
            <a href="${base}index.html">Home</a>
            <a href="${base}about.html">About Us</a>
            <div class="collection-dropdown">
                <span class="nav-item">Shirts ▾</span>
                <div class="dropdown-content">
                    <a href="${base}shirts/formal.html" class="dropdown-link" style="display: flex !important; align-items: center; gap: 10px;">
                        <img src="${base}public/shirts/formal/img1.jpg" alt="Formal" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee;" />
                        Formal
                    </a>
                    <a href="${base}shirts/stripes.html" class="dropdown-link" style="display: flex !important; align-items: center; gap: 10px;">
                        <img src="${base}public/shirts/stripes/img1.jpg" alt="Stripes" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee;" />
                        Stripes
                    </a>
                    <a href="${base}shirts/checks.html" class="dropdown-link" style="display: flex !important; align-items: center; gap: 10px;">
                        <img src="${base}public/shirts/checkes/img1.jpg" alt="Checks" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee;" />
                        Checks
                    </a>
                    <a href="${base}shirts/casuals.html" class="dropdown-link" style="display: flex !important; align-items: center; gap: 10px;">
                        <img src="${base}public/shirts/casuals/img1.jpg" alt="Casuals" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee;" />
                        Casuals
                    </a>
                    <a href="${base}shirts/beach.html" class="dropdown-link" style="display: flex !important; align-items: center; gap: 10px;">
                        <img src="${base}public/shirts/beach/img1.jpg" alt="Beach" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee;" />
                        Beach Shirts
                    </a>
                    <a href="${base}shirts/jeans.html" class="dropdown-link" style="display: flex !important; align-items: center; gap: 10px;">
                        <img src="${base}public/shirts/jeans/img1.jpg" alt="Jeans" style="width: 35px; height: 35px; border-radius: 50%; object-fit: cover; border: 2px solid #eee;" />
                        Jeans Shirt
                    </a>
                </div>
            </div>
            <div class="collection-dropdown">
                <span class="nav-item">Pants ▾</span>
                <div class="dropdown-content">
                    <a href="${base}pants/casual.html" class="dropdown-link">Casual</a>
                    <a href="${base}pants/formal.html" class="dropdown-link">Formal</a>
                    <a href="${base}pants/jeans.html" class="dropdown-link">Jeans</a>
                </div>
            </div>
            <a href="${base}contact.html">Contact</a>
        </nav>
    </header>
    `;

    const target = document.getElementById('site-header');
    if (target) {
        target.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Interactive Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('mainNavLinks');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileBtn.classList.toggle('is-active');
            navLinks.classList.toggle('mobile-open');
        });

        // Toggle dropdown on mobile
        const dropdowns = navLinks.querySelectorAll('.collection-dropdown');
        dropdowns.forEach(dropdown => {
            const toggleSpan = dropdown.querySelector('.nav-item');
            if (toggleSpan) {
                toggleSpan.addEventListener('click', function(e) {
                    if (window.innerWidth <= 868) {
                        e.stopPropagation();
                        // Close other dropdowns
                        dropdowns.forEach(other => {
                            if (other !== dropdown) other.classList.remove('is-expanded');
                        });
                        dropdown.classList.toggle('is-expanded');
                    }
                });
            }
        });

        // Close menu when clicking outside or clicking a link
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
                mobileBtn.classList.remove('is-active');
                navLinks.classList.remove('mobile-open');
            }
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                mobileBtn.classList.remove('is-active');
                navLinks.classList.remove('mobile-open');
            });
        });
    }
})();
