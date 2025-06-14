// Create floating hearts background
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-bg');
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        heartsContainer.appendChild(heart);
    }
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to images
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const img = item.querySelector('img');
        img.style.transform = `scale(1.1) translate(${x * 10}px, ${y * 10}px)`;
    });
    
    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        img.style.transform = 'scale(1) translate(0, 0)';
    });
});

// Add typing effect to love message
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add lightbox functionality
function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-close">&times;</div>
        <img src="" alt="Enlarged photo">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // Open lightbox when clicking on photos
    document.querySelectorAll('.photo-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Create floating elements (hearts and balloons)
function createFloatingElements() {
    const container = document.querySelector('.hearts-bg');
    const colors = ['#ff4d6d', '#ff8fa3', '#ffb3c1'];
    
    // Create hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-element heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
    
    // Create balloons
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'floating-element balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 10 + 15) + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(balloon);
    }
}

// Add sparkle effect to photos
function addSparkleEffect() {
    document.querySelectorAll('.photo-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = e.offsetX + 'px';
            sparkle.style.top = e.offsetY + 'px';
            item.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });
    });
}

// Audio Player Functionality
function initAudioPlayer() {
    const audio = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const musicText = document.querySelector('.music-text');
    let isPlaying = false;

    // Function to play music
    function playMusic() {
        audio.play();
        isPlaying = true;
        toggleBtn.classList.add('playing');
        musicText.textContent = 'Our song is playing';
    }

    // Function to pause music
    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        toggleBtn.classList.remove('playing');
        musicText.textContent = 'Play our song';
    }

    // Toggle music on button click
    toggleBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Handle audio errors
    audio.addEventListener('error', () => {
        console.error('Error loading audio file');
        musicText.textContent = 'Music not available';
    });

    // Handle audio loading
    audio.addEventListener('canplay', () => {
        musicText.textContent = 'Play our song';
    });
}

// Create floating petals
function createPetals() {
    const petals = ['🌸', '🌺', '🌹', '🌷', '💐'];
    const container = document.body;
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(petal);
        
        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, 5000);
    }, 300);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createFloatingElements();
    createLightbox();
    addSparkleEffect();
    initAudioPlayer();
    createPetals();
    
    // Your beautiful love message
    const loveMessage = `My dearest Vedika, 💖

I just wanted to remind you of something deeply true—I love you more than words can ever fully express. You're not just the girl I adore, you are the peace in my chaos, the smile in my mornings, and the warmth in my soul. Every time I think of you, my heart whispers, "She's the one."

"You don't cross my mind—you live in it."

I pray that no matter where life takes us, we walk hand in hand through every chapter. Please never leave me, because without you, even the brightest day would feel incomplete. You're my today, my tomorrow, and every heartbeat in between.

"In a world full of temporary things, you are my forever."

Let's promise each other—no matter the highs or lows, joys or struggles—we'll always hold on to this love. Because with you, I don't just feel alive—I feel infinite.

Yours forever,
Aayushmaan ❤️`;
    
    const messageElement = document.querySelector('.message');
    typeWriter(messageElement, loveMessage, 30);
    
    // Add reasons why you love her
    const reasons = [
        "You are the peace in my chaos",
        "Your smile brightens my mornings",
        "You're the warmth in my soul",
        "You live in my mind and heart",
        "You make me feel infinite",
        "You're my forever in a world of temporary things",
        "You're my today and tomorrow",
        "You're the one my heart whispers about"
    ];
    
    const quotesContainer = document.querySelector('.quotes-container');
    reasons.forEach(reason => {
        const quote = document.createElement('div');
        quote.className = 'quote';
        quote.innerHTML = `
            <i class="fas fa-heart"></i>
            <p>${reason}</p>
        `;
        quotesContainer.appendChild(quote);
    });
}); 