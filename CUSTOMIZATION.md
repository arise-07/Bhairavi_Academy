# 🎨 Bhairavi Academy - Customization Guide

## Quick Customization Reference

This guide helps you quickly customize the website for your specific needs.

---

## 1️⃣ BASIC INFORMATION UPDATES

### Step 1: Update Contact Information

**File**: `index.html`

Search for these sections and update:

```html
<!-- Phone in Hero Section -->
<button class="btn btn-secondary" onclick="callNow()">
    <i class="fas fa-phone"></i> Call Now
</button>
```

```html
<!-- Phone in Contact Info Cards -->
<a href="tel:+918056738833">+91 8056738833</a>

<!-- WhatsApp Link -->
<a href="https://wa.me/918056738833" target="_blank">Chat with us</a>

<!-- Address -->
<p>K.P Road, Near KFC<br>Nagercoil, Tamil Nadu</p>
```

**Update in these locations:**
- Line ~330: Hero section "Call Now" button
- Line ~690: Contact section phone links
- Line ~720: Footer contact info
- Line ~815: WhatsApp floating button

### Step 2: Update Social Media Links

**File**: `index.html` - Footer Section

```html
<div class="social-links">
    <a href="https://facebook.com/yourpage" title="Facebook">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://instagram.com/yourpage" title="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com/yourpage" title="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://youtube.com/yourpage" title="YouTube">
        <i class="fab fa-youtube"></i>
    </a>
</div>
```

---

## 2️⃣ BRANDING & COLORS

### Update Brand Colors

**File**: `styles.css` - Lines 1-10

```css
:root {
    --primary-color: #FF8C00;      /* Orange - Change to your brand color */
    --dark-bg: #000000;             /* Dark background */
    --text-white: #FFFFFF;          /* White text */
    --text-light: #E0E0E0;          /* Light gray text */
    --text-muted: #A0A0A0;          /* Muted gray text */
    --dark-panel: #111111;          /* Panel background */
    --dark-card: #1A1A1A;           /* Card background */
    --border-color: #333333;        /* Border color */
}
```

### Change Primary Color Only

To change from Orange (#FF8C00) to another color:

1. Find: `--primary-color: #FF8C00;`
2. Replace with your color, e.g., `--primary-color: #00A8FF;` (Blue)

### Light Theme (Optional)

For a light theme instead of dark:

```css
:root {
    --primary-color: #FF8C00;
    --dark-bg: #FFFFFF;
    --text-white: #000000;
    --text-light: #333333;
    --text-muted: #666666;
    --dark-panel: #F5F5F5;
    --dark-card: #FAFAFA;
    --border-color: #CCCCCC;
}
```

### Update Logo Colors

**File**: `index.html` - Line ~62

```html
<div class="logo">
    <i class="fas fa-graduation-cap"></i>
    <span>Bhairavi Academy</span>
</div>
```

The logo inherits primary color automatically. Change the graduation cap icon:
- `fa-graduation-cap` → `fa-book` (Book icon)
- `fa-graduation-cap` → `fa-brain` (Brain icon)
- `fa-graduation-cap` → `fa-lightbulb` (Bulb icon)

---

## 3️⃣ CONTENT UPDATES

### Hero Section

**File**: `index.html` - Lines ~290-330

```html
<!-- Change Headline -->
<h1 class="hero-title">Crack NEET & JEE with Expert Guidance</h1>

<!-- Change Subheadline -->
<p class="hero-subtitle">10th, 11th, 12th | Foundation | Crash Course | Repeaters</p>

<!-- Change Quick Stats -->
<div class="hero-stats">
    <div class="stat-item">
        <h3>1000+</h3>
        <p>Students Trained</p>
    </div>
</div>
```

### Courses Section

**File**: `index.html` - Lines ~360-550

**Example: Modify a Course Card**

```html
<div class="course-card">
    <div class="card-icon">
        <i class="fas fa-flask"></i>  <!-- Change icon -->
    </div>
    <h3>NEET Coaching</h3>  <!-- Change title -->
    <p>Complete medical entrance preparation...</p>  <!-- Change description -->
    <ul class="course-features">
        <li><i class="fas fa-check"></i> Physics, Chemistry, Biology</li>
        <li><i class="fas fa-check"></i> Mock Tests Weekly</li>
        <li><i class="fas fa-check"></i> Personalized Doubt Sessions</li>
    </ul>
    <button class="btn btn-outline">Learn More</button>
</div>
```

**Available Icons** (Font Awesome):
- `fa-flask` - Chemistry
- `fa-cube` - Mathematics
- `fa-book` - Studies
- `fa-brain` - Knowledge
- `fa-rocket` - Launch
- `fa-star` - Premium
- `fa-graduation-cap` - Graduation

### Why Choose Us Section

**File**: `index.html` - Lines ~580-650

```html
<div class="why-card">
    <div class="why-icon">
        <i class="fas fa-star"></i>  <!-- Change icon -->
    </div>
    <h3>Expert Faculty</h3>  <!-- Change title -->
    <p>Highly qualified teachers with 10+ years of experience...</p>  <!-- Change description -->
</div>
```

### Faculty Section

**File**: `index.html` - Lines ~670-780

```html
<div class="faculty-card">
    <div class="faculty-image">
        <div class="placeholder-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="subject-badge physics">Physics</div>
    </div>
    <h3>Dr. Rajesh Kumar</h3>  <!-- Change name -->
    <p class="faculty-title">Physics Specialist</p>  <!-- Change title -->
    <p class="faculty-description">12+ years experience...</p>  <!-- Change description -->
    <div class="faculty-stats">
        <span><i class="fas fa-users"></i> 500+ Students</span>
        <span><i class="fas fa-star"></i> 4.9/5</span>
    </div>
</div>
```

**Badge Colors**: `physics`, `chemistry`, `biology`, `maths`

### Results/Statistics Section

**File**: `index.html` - Lines ~800-850

```html
<div class="result-card">
    <div class="result-number" data-target="1500">0</div>  <!-- Change target number -->
    <p class="result-label">Students Trained</p>  <!-- Change label -->
    <p class="result-description">Across all programs and batches</p>  <!-- Change description -->
</div>
```

### Testimonials

**File**: `index.html` - Lines ~870-920

```html
<div class="testimonial-card">
    <div class="stars">
        <!-- 5 stars for 5-star rating -->
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">"Bhairavi Academy transformed my preparation..."</p>
    <p class="testimonial-author">- Anjali Gupta, NEET 2024</p>
</div>
```

### Contact Form

**File**: `index.html` - Lines ~990-1010

```html
<form id="enquiryForm">
    <div class="form-group">
        <input type="text" placeholder="Your Name" required>
    </div>
    <div class="form-group">
        <input type="tel" placeholder="Phone Number" pattern="[0-9]{10}" required>
    </div>
    <div class="form-group">
        <select required>
            <option value="">Select Course</option>
            <option value="NEET">NEET Coaching</option>
            <option value="JEE">JEE Coaching</option>
            <!-- Add more courses -->
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit Inquiry</button>
</form>
```

### Footer Links

**File**: `index.html` - Lines ~1050-1100

```html
<div class="footer-section">
    <h4>Quick Links</h4>
    <ul>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#faculty">Faculty</a></li>
        <li><a href="#why-us">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</div>
```

---

## 4️⃣ ANIMATION & STYLING TWEAKS

### Modify Animation Speed

**File**: `styles.css` - Line ~30

```css
:root {
    --animation-duration: 0.6s;  /* Increase for slower, decrease for faster */
    --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Change Button Styles

**File**: `styles.css` - Lines ~60-80

```css
.btn-primary {
    background: var(--primary-color);
    color: var(--dark-bg);
    box-shadow: 0 8px 25px rgba(255, 140, 0, 0.3);  /* Adjust shadow */
}

.btn-primary:hover {
    transform: translateY(-3px);  /* Adjust hover lift */
    box-shadow: 0 12px 35px rgba(255, 140, 0, 0.5);
}
```

### Adjust Spacing

**File**: `styles.css` - Search for `padding` or `margin`

```css
/* Increase/decrease spacing */
padding: 100px 20px;  /* Vertical | Horizontal */
margin-bottom: 60px;
gap: 30px;
```

### Change Border Radius

**File**: `styles.css` - Search for `border-radius`

```css
border-radius: 20px;  /* Increase for rounder, decrease for sharper */
```

### Adjust Hover Effects

**File**: `styles.css` - Search for `:hover`

```css
.course-card:hover {
    border-color: var(--primary-color);
    transform: translateY(-10px);  /* Adjust movement distance */
    box-shadow: 0 20px 50px rgba(255, 140, 0, 0.2);  /* Adjust shadow */
}
```

---

## 5️⃣ ADVANCED CUSTOMIZATIONS

### Add Custom Fonts

**File**: `index.html` - Lines ~8-9

Current fonts from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
```

Change to other Google Fonts:
1. Visit: https://fonts.google.com
2. Select fonts and copy the link
3. Replace the link in HTML
4. Update `font-family` in CSS

### Change Font Family in CSS

**File**: `styles.css` - Line ~22

```css
body {
    font-family: 'Poppins', sans-serif;  /* Change font */
}
```

### Add Your Logo Image

Replace the icon logo with an image:

**File**: `index.html` - Line ~62

```html
<!-- Change from: -->
<div class="logo">
    <i class="fas fa-graduation-cap"></i>
    <span>Bhairavi Academy</span>
</div>

<!-- To: -->
<div class="logo">
    <img src="path/to/logo.png" alt="Bhairavi Academy" style="height: 40px;">
</div>
```

### Add Background Images

**File**: `styles.css` - Search for `background:`

```css
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('path/to/image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Modify Google Maps

**File**: `index.html` - Lines ~1015-1020

```html
<iframe src="https://www.google.com/maps/embed?pb=EMBED_CODE" 
        width="100%" height="400" style="border:0;" 
        allowfullscreen="" loading="lazy"></iframe>
```

To get embed code:
1. Go to Google Maps
2. Search for your location
3. Click Share → Embed a map
4. Copy the embed code

---

## 6️⃣ JAVASCRIPT CUSTOMIZATIONS

### Modify WhatsApp Integration

**File**: `script.js` - Lines ~50-65

```javascript
function handleFormSubmit(e) {
    // Change WhatsApp phone number
    const whatsappUrl = `https://wa.me/918056738833?text=${encodeURIComponent(message)}`;
    // Replace 918056738833 with your number
}
```

### Change Phone Number

**File**: `script.js` - Line ~73

```javascript
function callNow() {
    window.location.href = 'tel:+918056738833';  // Change phone number
}
```

### Modify Animated Counter Values

**File**: `index.html` - Lines ~800-850

```html
<div class="result-number" data-target="1500">0</div>  <!-- Change 1500 -->
```

### Customize Notifications

**File**: `script.js` - Lines ~80-120

```javascript
function showNotification(message, type = 'info') {
    notification.style.background = '#25D366';  /* Change color */
    notification.style.top = '100px';           /* Change position */
}
```

---

## 7️⃣ DEPLOYMENT CHECKLIST

Before going live:

- [ ] ✅ Update all contact information
- [ ] ✅ Add all social media links
- [ ] ✅ Update faculty names and descriptions
- [ ] ✅ Update course information
- [ ] ✅ Update statistics
- [ ] ✅ Add testimonials
- [ ] ✅ Update footer links
- [ ] ✅ Test all forms and buttons
- [ ] ✅ Test on Chrome, Firefox, Safari
- [ ] ✅ Test on iPhone and Android
- [ ] ✅ Test WhatsApp button
- [ ] ✅ Test phone call button
- [ ] ✅ Verify Google Maps
- [ ] ✅ Test smooth scrolling
- [ ] ✅ Check page load speed
- [ ] ✅ Enable HTTPS
- [ ] ✅ Set up analytics
- [ ] ✅ Backup files

---

## 8️⃣ COMMON CUSTOMIZATIONS

### Change "Bhairavi Academy" Name

1. **HTML** - Search for "Bhairavi Academy" and replace
2. **CSS** - Update branding styles if needed
3. **Footer** - Update copyright year and name

### Add Multiple Faculty Members

Copy this template and add to Faculty Section:

```html
<div class="faculty-card">
    <div class="faculty-image">
        <div class="placeholder-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="subject-badge physics">Physics</div>
    </div>
    <h3>Faculty Name</h3>
    <p class="faculty-title">Specialty</p>
    <p class="faculty-description">Description here...</p>
    <div class="faculty-stats">
        <span><i class="fas fa-users"></i> X+ Students</span>
        <span><i class="fas fa-star"></i> Rating</span>
    </div>
</div>
```

### Add More Testimonials

Copy this template and add to Testimonials Section:

```html
<div class="testimonial-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">"Your testimonial text here..."</p>
    <p class="testimonial-author">- Student Name, Exam Year</p>
</div>
```

---

## 9️⃣ TROUBLESHOOTING COMMON ISSUES

### Colors Not Changing

1. Clear browser cache: `Ctrl+Shift+Delete`
2. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check if you edited the correct file: `styles.css`

### Buttons Not Working

1. Check phone number format: `+91` country code required
2. Test WhatsApp link: `https://wa.me/918056738833`
3. Verify internet connection
4. Check browser console for errors: `F12`

### Mobile Menu Not Opening

1. Verify hamburger span styling in CSS
2. Clear browser cache
3. Check if JavaScript is enabled
4. Test on actual mobile device

### Images Not Showing

1. Verify file path is correct
2. Use relative paths: `images/photo.jpg`
3. Ensure image file exists
4. Check file permissions

---

## 🔟 USEFUL RESOURCES

- **Font Awesome Icons**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com
- **Color Picker**: https://htmlcolorcodes.com
- **Responsive Test**: https://responsively.app
- **Performance Test**: https://gtmetrix.com
- **SEO Checker**: https://www.seostack.net

---

## ✨ QUICK TIP

The website uses CSS variables (custom properties) for easy color management. Change one variable to update colors across the entire site:

```css
--primary-color: #FF8C00;  /* Change once, updates everywhere */
```

---

**Need more help? Contact Bhairavi Academy!**
- Phone: +91 8056738833
- WhatsApp: https://wa.me/918056738833

---

**Last Updated**: April 2024
**Version**: 1.0
