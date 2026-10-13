// Homepage Showcase Products
const homeProducts = [
    { id: 1, name: "Men's Shirt", price: "₹2,499", image: "public/home_page/new_collection/oct/img1.jpeg" },
    { id: 2, name: "Buy 2 Get 1 Free", price: "₹3,299", image: "public/home_page/new_collection/oct/img2.jpeg" },
    { id: 3, name: "Buy 2 Get 1 Free", price: "₹1,899", image: "public/home_page/new_collection/oct/img3.jpeg" },
    { id: 4, name: "Golden Aura Silhouette", price: "₹4,199", image: "public/home_page/new_collection/img4.jpg" },
    { id: 5, name: "Velvet Night Suit", price: "₹2,999", image: "public/home_page/new_collection/img5.jpg" },
    { id: 6, name: "Pearl White Harmony", price: "₹3,599", image: "public/home_page/new_collection/img6.jpg" },
    { id: 7, name: "Emerald Charm", price: "₹2,799", image: "public/home_page/new_collection/img7.jpg" }
];

// Product Image Slider for Category Cards
function changeImage(imgId, dir) {
    if (window.event) {
        window.event.preventDefault();
        window.event.stopPropagation();
    }
    const img = document.getElementById(imgId);
    if (!img) return;
    const images = img.getAttribute('data-images').split(',');
    let current = parseInt(img.getAttribute('data-current') || '0');
    current += dir;
    if (current < 0) current = images.length - 1;
    if (current >= images.length) current = 0;
    img.setAttribute('data-current', current);
    img.src = images[current];
}
window.changeImage = changeImage;

// ── Image Lightbox Modal ──────────────────────────────────────────
function createLightboxModal() {
    if (document.getElementById('img-lightbox-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'img-lightbox-modal';
    modal.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-box">
            <button class="lightbox-close" id="lightbox-close-btn" aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
            <div class="lightbox-img-wrap">
                <img id="lightbox-img" src="" alt="" />
                <div class="lightbox-tag-bar">
                    <span class="lightbox-badge">New Collection</span>
                </div>
            </div>
            <div class="lightbox-info">
                <h3 id="lightbox-name"></h3>
                <p id="lightbox-price"></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close handlers
    const closeModal = () => {
        modal.classList.remove('lightbox-open');
        document.body.style.overflow = '';
    };
    modal.querySelector('.lightbox-backdrop').addEventListener('click', closeModal);
    modal.querySelector('#lightbox-close-btn').addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openLightbox(product) {
    const modal = document.getElementById('img-lightbox-modal');
    document.getElementById('lightbox-img').src = product.image;
    document.getElementById('lightbox-img').alt = product.name;
    document.getElementById('lightbox-name').textContent = product.name;
    document.getElementById('lightbox-price').textContent = product.price;
    modal.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
}
// ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('product-carousel');

    // Inject products if carousel container exists on this page
    if (carouselContainer) {
        // Create the modal once
        createLightboxModal();

        homeProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" />
                    <div class="product-overlay">
                        <button class="add-to-cart-btn">View Image</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                </div>
            `;

            // Click on card or button → open lightbox
            card.addEventListener('click', () => openLightbox(product));

            carouselContainer.appendChild(card);
        });

        // Carousel controls
        const scrollLeftBtn = document.getElementById('scroll-left');
        const scrollRightBtn = document.getElementById('scroll-right');

        const scroll = (direction) => {
            const scrollAmount = direction === 'left' ? -carouselContainer.clientWidth : carouselContainer.clientWidth;
            carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        };

        if (scrollLeftBtn) scrollLeftBtn.addEventListener('click', () => scroll('left'));
        if (scrollRightBtn) scrollRightBtn.addEventListener('click', () => scroll('right'));
    }
});
