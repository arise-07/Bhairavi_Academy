/* ===========================
   INITIALIZATION
   =========================== */

document.addEventListener('DOMContentLoaded', function () {
    initializeEventListeners();
    initializeScrollAnimations();
    initializeCounters();
    initializeImageUploads();
});

/* ===========================
   IMAGE UPLOAD FUNCTIONALITY
   =========================== */

function initializeImageUploads() {
    // Academy Logo Upload
    const logoUpload = document.getElementById('logoUpload');
    const logoArea = document.getElementById('logoArea');
    const logoImage = document.getElementById('logoImage');
    const logoFallback = document.getElementById('logoFallback');

    if (logoArea && logoUpload) {
        // Click logo to upload
        logoArea.addEventListener('click', () => logoUpload.click());

        // Handle logo file selection
        logoUpload.addEventListener('change', (e) => handleLogoUpload(e, logoImage, logoFallback));
    }

    // Faculty Image Uploads
    for (let i = 1; i <= 4; i++) {
        const uploadInput = document.getElementById(`faculty${i}-upload`);
        const facultyImage = document.getElementById(`faculty${i}-img`);
        const facultyPlaceholder = document.getElementById(`faculty${i}-placeholder`);
        const facultyImageWrapper = facultyImage?.closest('.faculty-image-wrapper');

        if (uploadInput && facultyImage && facultyImageWrapper) {
            // Right-click on image area to upload
            facultyImageWrapper.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                uploadInput.click();
            });

            // Handle file selection
            uploadInput.addEventListener('change', (e) => {
                handleFacultyImageUpload(e, facultyImage, facultyPlaceholder);
            });

            // Optional: Left-click also opens upload
            facultyImageWrapper.addEventListener('click', () => {
                uploadInput.click();
            });
        }
    }

    // Load images from localStorage
    loadImagesFromStorage();
}

function handleLogoUpload(e, logoImage, logoFallback) {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        showNotification('Please select a valid image file', 'error');
        return;
    }

    // Read and display image
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageData = event.target.result;
        
        // Display image in navbar
        logoImage.src = imageData;
        logoImage.style.display = 'block';
        logoFallback.style.display = 'none';
        
        // Also update hero section logo
        const academyLogoImg = document.getElementById('academyLogoImg');
        const academyLogoFallback = document.getElementById('academyLogoFallback');
        if (academyLogoImg && academyLogoFallback) {
            academyLogoImg.src = imageData;
            academyLogoImg.style.display = 'block';
            academyLogoFallback.style.display = 'none';
        }

        // Save to localStorage
        try {
            localStorage.setItem('bhairavi-logo', imageData);
            showNotification('✅ Logo updated successfully!', 'success');
        } catch (error) {
            console.warn('Could not save logo to localStorage:', error);
        }
    };

    reader.readAsDataURL(file);
}

function handleFacultyImageUpload(e, facultyImage, facultyPlaceholder) {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.startsWith('image/')) {
        showNotification('Please select a valid image file', 'error');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        showNotification('Image size should be less than 5MB', 'error');
        return;
    }

    // Read and display image
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageData = event.target.result;
        
        // Display image
        facultyImage.src = imageData;
        facultyImage.classList.add('loaded');
        if (facultyPlaceholder) {
            facultyPlaceholder.style.display = 'none';
        }

        // Save to localStorage
        const facultyId = facultyImage.id; // e.g., 'faculty1-img'
        try {
            localStorage.setItem(`bhairavi-${facultyId}`, imageData);
            showNotification('✅ Photo updated successfully!', 'success');
        } catch (error) {
            console.warn('Could not save image to localStorage:', error);
            if (error.name === 'QuotaExceededError') {
                showNotification('⚠️ Storage limit reached. Image saved temporarily.', 'warning');
            }
        }
    };

    reader.readAsDataURL(file);
}

function loadImagesFromStorage() {
    // Load logo (both navbar and hero section)
    try {
        const logoData = localStorage.getItem('bhairavi-logo');
        if (logoData) {
            // Load in navbar
            const logoImage = document.getElementById('logoImage');
            const logoFallback = document.getElementById('logoFallback');
            if (logoImage && logoFallback) {
                logoImage.src = logoData;
                logoImage.style.display = 'block';
                logoFallback.style.display = 'none';
            }
            
            // Load in hero section
            const academyLogoImg = document.getElementById('academyLogoImg');
            const academyLogoFallback = document.getElementById('academyLogoFallback');
            if (academyLogoImg && academyLogoFallback) {
                academyLogoImg.src = logoData;
                academyLogoImg.style.display = 'block';
                academyLogoFallback.style.display = 'none';
            }
        }
    } catch (error) {
        console.log('Could not load logo from storage');
    }

    // Load faculty images
    for (let i = 1; i <= 4; i++) {
        try {
            const imageId = `faculty${i}-img`;
            const imageData = localStorage.getItem(`bhairavi-${imageId}`);
            if (imageData) {
                const facultyImage = document.getElementById(imageId);
                const facultyPlaceholder = document.getElementById(`faculty${i}-placeholder`);
                if (facultyImage) {
                    facultyImage.src = imageData;
                    facultyImage.classList.add('loaded');
                    if (facultyPlaceholder) {
                        facultyPlaceholder.style.display = 'none';
                    }
                }
            }
        } catch (error) {
            console.log(`Could not load faculty ${i} image from storage`);
        }
    }
}

/* ===========================
   MOBILE MENU TOGGLE
   =========================== */

function initializeEventListeners() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Form submission
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', handleFormSubmit);
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* ===========================
   SMOOTH SCROLL NAVIGATION
   =========================== */

function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/* ===========================
   CALL NOW FUNCTIONALITY
   =========================== */

function callNow() {
    window.location.href = 'tel:+918056738833';
}

/* ===========================
   FORM SUBMISSION
   =========================== */

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = e.target.elements[0].value;
    const phone = e.target.elements[1].value;
    const course = e.target.elements[2].value;

    // Validate form
    if (!name || !phone || !course) {
        showNotification('Please fill all fields', 'error');
        return;
    }

    // WhatsApp message
    const message = `Hello! I'm interested in ${course} course.\nName: ${name}\nPhone: ${phone}`;
    const whatsappUrl = `https://wa.me/918056738833?text=${encodeURIComponent(message)}`;

    // Show success message
    showNotification('Thank you! Redirecting to WhatsApp...', 'success');

    // Redirect after 1 second
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        e.target.reset();
    }, 1000);
}

/* ===========================
   NOTIFICATIONS
   =========================== */

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : type === 'error' ? '#FF6B6B' : '#FF8C00'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ===========================
   ANIMATED COUNTERS
   =========================== */

function initializeCounters() {
    const counters = document.querySelectorAll('.result-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const increment = target / 50;
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

/* ===========================
   SCROLL ANIMATIONS
   =========================== */

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll(
        '.course-card, .why-card, .faculty-card, .result-card, .testimonial-card, .info-card, .contact-form'
    );

    elements.forEach(el => observer.observe(el));
}

/* ===========================
   NAVBAR SCROLL EFFECT
   =========================== */

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

/* ===========================
   SMOOTH HOVER EFFECTS FOR BUTTONS
   =========================== */

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

/* ===========================
   PARALLAX EFFECT
   =========================== */

window.addEventListener('scroll', function () {
    const circles = document.querySelectorAll('.circle');
    const scrollY = window.pageYOffset;

    circles.forEach((circle, index) => {
        circle.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
});

/* ===========================
   LAZY LOADING FOR IMAGES (if added in future)
   =========================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ===========================
   KEYBOARD NAVIGATION
   =========================== */

document.addEventListener('keydown', function (e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

/* ===========================
   UTILITY: ACTIVE NAV LINK ON SCROLL
   =========================== */

window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#FF8C00';
            link.style.borderBottomColor = '#FF8C00';
        } else {
            link.style.color = '#E0E0E0';
            link.style.borderBottomColor = 'transparent';
        }
    });
});

/* ===========================
   PERFORMANCE OPTIMIZATION
   =========================== */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners
const optimizedScroll = debounce(function () {
    // Scroll-related operations
}, 100);

window.addEventListener('scroll', optimizedScroll);

/* ===========================
   DYNAMIC FEATURE: COURSE CARD CLICK
   =========================== */

const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('click', function () {
        const courseName = this.querySelector('h3').textContent;
        scrollToSection('#contact');

        // Pre-fill the form with course name
        setTimeout(() => {
            const selectElement = document.querySelector('.contact-form select');
            if (selectElement) {
                selectElement.value = courseName.replace(/\s+/g, '-').toLowerCase();
            }
        }, 500);
    });
});

/* ===========================
   ACCESSIBILITY IMPROVEMENTS
   =========================== */

// Add focus visible styles for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

/* ===========================
   DYNAMIC TEXT ANIMATION (Optional)
   =========================== */

function typeWriter(element, text, speed = 50) {
    if (!element) return;
    element.innerHTML = '';
    let i = 0;

    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };

    type();
}

/* ===========================
   SERVICE WORKER REGISTRATION (for PWA)
   =========================== */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Bhairavi Academy: Service Worker registered successfully');
                
                // Check for updates periodically
                setInterval(() => {
                    registration.update();
                }, 60000); // Check every minute
            })
            .catch(error => {
                console.log('⚠️ Bhairavi Academy: Service Worker registration failed:', error);
            });
    });

    // Handle service worker updates
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('✅ Bhairavi Academy: Service Worker updated');
    });
}

/* ===========================
   PERFORMANCE MONITORING
   =========================== */

// Log page load performance
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
});

/* ===========================
   PREVENT CONSOLE ERRORS IN PRODUCTION
   =========================== */

window.addEventListener('error', (event) => {
    console.error('Error occurred:', event.error);
});

/* ===========================
   ANIMATION PERFORMANCE OPTIMIZATION
   =========================== */

// Use requestAnimationFrame for smooth animations
function smoothScroll(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();

    const animation = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start + distance * easeInOutQuad(progress));

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/* ===========================
   FEATURE: DYNAMIC COURSE FILTERING (Future Enhancement)
   =========================== */

function filterCourses(category) {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ===========================
   FEATURE: SEARCH FUNCTIONALITY (Future Enhancement)
   =========================== */

function searchCourses(query) {
    const courseCards = document.querySelectorAll('.course-card');
    const searchTerm = query.toLowerCase();

    courseCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ===========================
   FEATURE: THEME TOGGLE (Future Enhancement)
   =========================== */

function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.style.getPropertyValue('--dark-bg') === '#000000';

    if (isDark) {
        root.style.setProperty('--dark-bg', '#FFFFFF');
        root.style.setProperty('--text-white', '#000000');
        localStorage.setItem('theme', 'light');
    } else {
        root.style.setProperty('--dark-bg', '#000000');
        root.style.setProperty('--text-white', '#FFFFFF');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    toggleTheme();
}

/* ===========================
   ADDITIONAL: TRACK USER INTERACTIONS
   =========================== */

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
        console.log('CTA Button clicked');
        // Send analytics event
    }
});

/* ===========================
   CLEANUP AND ERROR HANDLING
   =========================== */

// Handle visibility change (pause animations when tab is not visible)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is hidden');
    } else {
        console.log('Page is visible');
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    // Clean up resources
});
