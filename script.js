// Copy Contract Address Function
function copyContract() {
    const contractAddress = document.getElementById('contractAddress');
    const copyBtn = document.querySelector('.copy-btn');
    
    // Select the text
    contractAddress.select();
    contractAddress.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy to clipboard using modern API
    navigator.clipboard.writeText(contractAddress.value).then(() => {
        // Show success message
        showCopiedMessage();
        
        // Change button text temporarily
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        try {
            document.execCommand('copy');
            showCopiedMessage();
        } catch (e) {
            alert('Failed to copy address. Please copy manually.');
        }
    });
}

// Show copied message notification
function showCopiedMessage() {
    // Remove existing message if any
    const existing = document.querySelector('.copied-message');
    if (existing) {
        existing.remove();
    }
    
    // Create new message
    const message = document.createElement('div');
    message.className = 'copied-message';
    message.textContent = '✅ Contract address copied!';
    document.body.appendChild(message);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu a, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle internal links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Mobile menu toggle (if needed in future)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Add scroll animation observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Prevent zoom on double tap (mobile)
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);
