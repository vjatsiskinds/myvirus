# PawPump Website 🐱💪

A fun, vibrant meme coin website for PawPump ($PAW) - where gym gains meet crypto gains!

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Floating clouds, bouncing cat mascot, and scroll effects
- **Modern UI**: Clean, professional design with ginger cat color scheme
- **Interactive Elements**: Copy contract address, hover effects, smooth scrolling
- **Social Media Integration**: Ready for TikTok, Twitter, and YouTube links
- **Video Gallery**: Showcase your viral gym cat videos

## 📁 Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive features and animations

## 🛠️ Customization Guide

### 1. Add Your Logo Image

**IMPORTANT**: The website is set up to use a 500x500px logo image.

Replace the demo logo with your actual ginger cat gym logo:

**Step 1**: Save your logo as `logo.png` (500x500px recommended)

**Step 2**: Place it in the same folder as `index.html`

**Step 3**: The code is already set up! It references:
```html
<img src="logo.png" alt="PawPump Logo" class="logo-img">
```

**If your image has a different name or path**, update these lines in `index.html`:
- Line ~15 (Navigation logo)
- Line ~209 (Footer logo)

Change `src="logo.png"` to match your file, e.g.:
```html
<img src="images/my-cat-logo.png" alt="PawPump Logo" class="logo-img">
```

**Note**: The CSS automatically:
- Fits your 500x500px image perfectly in the circular logo
- Centers it properly
- Maintains aspect ratio
- Crops to circle shape

### 2. Favicon

The favicon (browser tab icon) is already set up with the cat emoji 🐱. It will automatically appear in:
- Browser tabs
- Bookmarks
- Mobile home screen icons

No action needed! The favicon is embedded in the HTML.

### 3. Update Contract Address

In `index.html`, find this line (around line 48):
```html
<input type="text" id="contractAddress" value="YOUR_CONTRACT_ADDRESS_HERE" readonly>
```
Replace `YOUR_CONTRACT_ADDRESS_HERE` with your actual Pump.fun contract address.

### 4. Update Buy Links

Find these buttons in `index.html` (around lines 54-55):
```html
<a href="#" class="btn btn-primary">Buy PawPump</a>
<a href="#" class="btn btn-secondary">See Whitepaper</a>
```
Replace the `#` with:
- Your Pump.fun token purchase link
- Your whitepaper/documentation link (if you have one)

Also update the "Buy Now" button in the navigation (around line 21):
```html
<a href="#" class="btn-buy-nav">Buy Now</a>
```

### 5. Add Social Media Links

In the footer section (around lines 206-230), replace the `#` in these links:
```html
<a href="#" class="social-link" target="_blank">
    <!-- Twitter/X Link -->
</a>
<a href="#" class="social-link" target="_blank">
    <!-- TikTok Link -->
</a>
<a href="#" class="social-link" target="_blank">
    <!-- YouTube Link -->
</a>
```

Example:
```html
<a href="https://twitter.com/yourhandle" class="social-link" target="_blank">
```

### 6. Add TikTok Videos

In the Gallery section (around lines 178-197), replace the placeholder video cards with actual TikTok embeds:

**Step 1**: Get TikTok embed code
- Go to your TikTok video
- Click the "Share" button (arrow icon)
- Click "Embed"
- Copy the embed code

**Step 2**: Replace the placeholder
```html
<!-- Replace this: -->
<div class="video-card">
    <div class="video-placeholder">
        <p>🎥</p>
        <p>TikTok Video 1</p>
        <small>Add your TikTok embed code</small>
    </div>
</div>

<!-- With this: -->
<div class="video-card">
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@username/video/1234567890" 
        data-video-id="1234567890" style="max-width: 605px;min-width: 325px;" >
        <section> ... TikTok embed code ... </section>
    </blockquote>
    <script async src="https://www.tiktok.com/embed.js"></script>
</div>
```

### 7. Update Tokenomics

In `index.html` (around lines 96-120), update these values based on your actual token:
```html
<p class="token-value">1,000,000,000</p> <!-- Total supply -->
<p class="token-value">100%</p> <!-- LP status -->
<p class="token-value">0%</p> <!-- Tax -->
```

### 8. Customize Roadmap

Edit the roadmap phases in `index.html` (around lines 130-177) to match your actual plans:
```html
<h3>🚀 Launch & Awareness</h3>
<ul>
    <li>Your milestone here</li>
    <li>Another milestone</li>
</ul>
```

## 🎨 Color Customization

To change colors, edit the CSS variables in `styles.css` (lines 9-17):
```css
:root {
    --primary-orange: #FF8C42;    /* Main brand color */
    --light-orange: #FFB366;      /* Lighter accent */
    --dark-orange: #E67324;       /* Darker accent */
    --cream: #FFF4E6;             /* Background */
    --dark-brown: #2D1B00;        /* Dark text/borders */
    --gray-brown: #4A3C2E;        /* Secondary text */
}
```

## 📱 Responsive Design

The website automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload `index.html`, `styles.css`, and `script.js`
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your folder
3. Get instant live URL
4. Can connect custom domain (pawpump.fun)

### Option 3: Vercel (Free)
1. Sign up at vercel.com
2. Import your project
3. Deploy with one click

### Custom Domain Setup
Once deployed, you can connect www.pawpump.fun:
1. Go to your domain registrar (where you bought pawpump.fun)
2. Add DNS records pointing to your hosting provider
3. Follow provider's instructions for custom domain

## ✨ Tips for Maximum Engagement

1. **Post regularly**: Keep your TikTok videos fresh and funny
2. **Update the gallery**: Add new videos weekly
3. **Engage on socials**: Reply to comments, share memes
4. **Community contests**: Run giveaways for holders
5. **Transparency**: Keep the roadmap updated with progress

## 🔧 Troubleshooting

**Videos not showing?**
- Make sure you added the TikTok embed script
- Check that the video is set to "Public" on TikTok

**Copy button not working?**
- Check browser console for errors
- Ensure HTTPS is enabled (required for clipboard API)

**Animations not smooth?**
- Clear browser cache
- Test on different browsers

## 📞 Need Help?

If you need any modifications or have questions about customizing the website, feel free to ask!

## ⚠️ Legal Disclaimer

Remember to keep the disclaimer in the footer. This is important for a meme coin:
- No promises of financial returns
- Entertainment purposes only
- Invest at your own risk

---

**Built with ❤️ for the PawPump community**

Let's pump it! 🐱💪🚀
