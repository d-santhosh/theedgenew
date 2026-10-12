// Common Footer Component for The Edge Showroom
(function() {
    const footerHTML = `
    <footer id="contact" class="footer">
        <div class="footer-content">
            <!-- Left Column: Contact & Social -->
            <div class="footer-section" id="location" style="display: flex; flex-direction: column; justify-content: center;">
                <div style="margin-bottom: 35px; text-align: left;">
                    <h3 style="margin: 0; display: inline-block;">Contact & Location</h3>
                </div>
                
                <ul class="contact-info" style="display: flex; flex-direction: column; gap: 25px; padding: 0; margin: 0 0 45px 0;">
                    <li style="display: flex; align-items: flex-start; gap: 15px;">
                        <span style="margin-top: 2px; font-size: 1.4rem;">📍</span>
                        <span style="color: #ccc; line-height: 1.8; text-align: left; font-size: 1.05rem;">
                            Bungalow stop, 6, Ganga Nagar 1st St, Ram Nagar,<br/>Ganga Nagar, Ramaiya Colony,<br/>Tiruppur, Tamil Nadu 641602, India
                        </span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 15px;">
                        <span style="font-size: 1.4rem;">📞</span> 
                        <span style="color: #ccc; letter-spacing: 1px; font-size: 1.05rem;">+91 8667614828</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 15px;">
                        <span style="font-size: 1.4rem;">✉️</span> 
                        <span style="color: #ccc; letter-spacing: 0.5px; font-size: 1.05rem;">theedgetirupur@gmail.com</span>
                    </li>
                </ul>

                <div class="social-links" style="display: flex; gap: 20px; justify-content: flex-start;">
                </div>
            </div>

            <!-- Right Column: Premium Map -->
            <div class="footer-section">
                <div class="footer-map-container" style="height: 320px; width: 100%; background: #111; border: 1px solid rgba(255,102,0,0.3); overflow: hidden; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.6);">
                    <iframe
                        src="https://maps.google.com/maps?q=bungalow+stop,+6,+Ganga+Nagar+1st+St,+Ram+Nagar,+Ganga+Nagar,+Ramaiya+Colony,+Tiruppur,+Tamil+Nadu+641602,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style="border: 0; filter: invert(90%) hue-rotate(180deg) contrast(1.1);"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="footer-bottom" style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 25px; text-align: center;">
            <p style="color: #777; font-size: 0.9rem; letter-spacing: 1px;">&copy; 2026 The Edge Showroom. All Rights Reserved.</p>
        </div>
    </footer>
    `;

    const target = document.getElementById('site-footer');
    if (target) {
        target.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
})();
