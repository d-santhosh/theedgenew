// Homepage Showcase Products
const homeProducts = [
    { id: 1, name: "Midnight Elegance", price: "₹2,499", image: "public/home_page/new_collection/img1.jpg" },
    { id: 2, name: "Ruby Flare Gown", price: "₹3,299", image: "public/home_page/new_collection/img2.jpg" },
    { id: 3, name: "Ocean Breeze Dress", price: "₹1,899", image: "public/home_page/new_collection/img3.jpg" },
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

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('product-carousel');
    
    // Inject products if carousel container exists on this page
    if (carouselContainer) {
        homeProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" />
                    <div class="product-overlay">
                        <button class="add-to-cart-btn">View Details</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                </div>
            `;
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
