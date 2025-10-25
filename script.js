// Mahlar Medical Website JavaScript - Enhanced Mobile Experience

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Wait for CONFIG to be available
    if (typeof CONFIG === 'undefined') {
        console.log('⏳ Waiting for CONFIG to load...');
        // Check every 50ms for CONFIG to be available
        const configCheck = setInterval(() => {
            if (typeof CONFIG !== 'undefined' && CONFIG && CONFIG.seo && CONFIG.seo.title) {
                console.log('✅ CONFIG loaded, proceeding with initialization...');
                clearInterval(configCheck);
                
                // Initialize everything
                initializePreloader();
                initializeConfiguration();
                initializeMobileMenu();
                initializeSmoothScrolling();
                initializeFormHandling();
                initializeGallery();
                initializeScrollAnimations();
                initializeWhatsAppButton();
                initializeTouchGestures();
                initializePerformanceOptimizations();
                initializeVideo();
                
                // Fix mobile scrolling issues
                fixMobileScroll();
                
                // Add loading animation to page
                addPageLoadingAnimation();
                
                // Additional mobile scroll fix after a short delay
                setTimeout(fixMobileScroll, 1000);
                
                // Ensure carousel animation continues running
                setTimeout(ensureCarouselAnimation, 2000);
                
                // Periodic check to ensure carousel animation is always running
                setInterval(ensureCarouselAnimation, 10000); // Check every 10 seconds
                
                // More frequent check for carousel animation
                setInterval(ensureCarouselAnimation, 5000); // Check every 5 seconds
                
                // Fallback: Ensure contact info is updated
                setTimeout(() => {
                    if (typeof CONFIG !== 'undefined') {
                        updateContactInfo();
                    }
                }, 1000);
                
                // Force carousel animation to work
                setTimeout(() => {
                    forceCarouselAnimation();
                }, 500);
                
                // Start JavaScript-based carousel as fallback
                setTimeout(() => {
                    startJavaScriptCarousel();
                }, 1000);
                
                // Add a simple test to see if JavaScript is working
                setTimeout(() => {
                    const carousel = document.querySelector('.services-carousel-container');
                    if (carousel) {
                        console.log('🎯 Testing carousel movement...');
                        // Move it slightly to test
                        carousel.style.transform = 'translateX(-10px)';
                        setTimeout(() => {
                            carousel.style.transform = 'translateX(0px)';
                            console.log('✅ Carousel movement test completed');
                        }, 500);
                    }
                }, 1500);
                
            }
        }, 50);
        
        // Fallback: if CONFIG doesn't load within 5 seconds, proceed anyway
        setTimeout(() => {
            if (typeof CONFIG === 'undefined') {
                console.warn('⚠️ CONFIG not loaded after 5 seconds, proceeding with fallback...');
                clearInterval(configCheck);
                
                // Initialize with fallback values
                initializePreloader();
                initializeConfiguration();
                initializeMobileMenu();
                initializeSmoothScrolling();
                initializeFormHandling();
                initializeGallery();
                initializeScrollAnimations();
                initializeWhatsAppButton();
                initializeTouchGestures();
                initializePerformanceOptimizations();
                initializeVideo();
                
                // Fix mobile scrolling issues
                fixMobileScroll();
                
                // Add loading animation to page
                addPageLoadingAnimation();
                
                // Additional mobile scroll fix after a short delay
                setTimeout(fixMobileScroll, 1000);
                
                // Ensure carousel animation continues running
                setTimeout(ensureCarouselAnimation, 2000);
                
                // Periodic check to ensure carousel animation is always running
                setInterval(ensureCarouselAnimation, 10000); // Check every 10 seconds
                
                // More frequent check for carousel animation
                setInterval(ensureCarouselAnimation, 5000); // Check every 5 seconds
                
                // Fallback: Ensure contact info is updated
                setTimeout(() => {
                    if (typeof CONFIG !== 'undefined') {
                        updateContactInfo();
                    }
                }, 1000);
                
                // Force carousel animation to work
                setTimeout(() => {
                    forceCarouselAnimation();
                }, 500);
                
                // Start JavaScript-based carousel as fallback
                setTimeout(() => {
                    startJavaScriptCarousel();
                }, 1000);
                
                // Add a simple test to see if JavaScript is working
                setTimeout(() => {
                    const carousel = document.querySelector('.services-carousel-container');
                    if (carousel) {
                        console.log('🎯 Testing carousel movement...');
                        // Move it slightly to test
                        carousel.style.transform = 'translateX(-10px)';
                        setTimeout(() => {
                            carousel.style.transform = 'translateX(0px)';
                            console.log('✅ Carousel movement test completed');
                        }, 500);
                    }
                }, 1500);
            }
        }, 5000);
        
        return; // Don't proceed with the rest of the function
    }
    
    // CONFIG is available, proceed normally
    console.log('✅ CONFIG available, initializing...');
    
    // Initialize the preloader first
    initializePreloader();
    
    // Initialize configuration
    initializeConfiguration();
    
    // Initialize all functionality
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeFormHandling();
    initializeGallery();
    initializeScrollAnimations();
    initializeWhatsAppButton();
    initializeTouchGestures();
    initializePerformanceOptimizations();
    initializeVideo();
    
    // Fix mobile scrolling issues
    fixMobileScroll();
    
    // Add loading animation to page
    addPageLoadingAnimation();
    
    // Additional mobile scroll fix after a short delay
    setTimeout(fixMobileScroll, 1000);
    
    // Ensure carousel animation continues running
    setTimeout(ensureCarouselAnimation, 2000);
    
    // Periodic check to ensure carousel animation is always running
    setInterval(ensureCarouselAnimation, 10000); // Check every 10 seconds
    
    // More frequent check for carousel animation
    setInterval(ensureCarouselAnimation, 5000); // Check every 5 seconds
    
    // Fallback: Ensure contact info is updated
    setTimeout(() => {
        if (typeof CONFIG !== 'undefined') {
            updateContactInfo();
        }
    }, 1000);
    
    // Force carousel animation to work
    setTimeout(() => {
        forceCarouselAnimation();
    }, 500);
    
    // Start JavaScript-based carousel as fallback
    setTimeout(() => {
        startJavaScriptCarousel();
    }, 1000);
    
    // Add a simple test to see if JavaScript is working
    setTimeout(() => {
        const carousel = document.querySelector('.services-carousel-container');
        if (carousel) {
            console.log('🎯 Testing carousel movement...');
            // Move it slightly to test
            carousel.style.transform = 'translateX(-10px)';
            setTimeout(() => {
                carousel.style.transform = 'translateX(0px)';
                console.log('✅ Carousel movement test completed');
            }, 500);
        }
    }, 1500);
});

// Authentic Medical Store & Clinic Preloader
function initializePreloader() {
    const preloader = document.getElementById('preloader');
    const loadingCounter = document.getElementById('loading-counter');
    
    if (!preloader || !loadingCounter) {
        console.log('Preloader elements not found, skipping...');
        return;
    }
    
    console.log('Preloader initialized, starting countdown...');
    
    let progress = 0;
    const targetProgress = 100;
    const increment = 3;
    
    // Add loading class for enhanced animations
    preloader.classList.add('loading');
    
    // Progress counter animation - complete in exactly 3 seconds
    const progressInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= targetProgress) {
            progress = targetProgress;
            clearInterval(progressInterval);
            
            console.log('Progress complete, starting fade out...');
            
            // Update final counter
            loadingCounter.textContent = targetProgress;
            
            // Start fade out process
            setTimeout(() => {
                preloader.classList.remove('loading');
                preloader.classList.add('success');
                
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                    
                    setTimeout(() => {
                        console.log('Hiding preloader and showing main content...');
                        preloader.style.display = 'none';
                        showMainContent();
                    }, 800);
                }, 200);
            }, 100);
        }
        
        // Update counter
        loadingCounter.textContent = Math.min(progress, targetProgress);
    }, 90);
    
    // Fallback: Force completion after exactly 3 seconds
    setTimeout(() => {
        console.log('Fallback timer triggered, forcing completion...');
        clearInterval(progressInterval);
        loadingCounter.textContent = targetProgress;
        
        setTimeout(() => {
            preloader.classList.remove('loading');
            preloader.classList.add('success');
            
            setTimeout(() => {
                preloader.classList.add('fade-out');
                
                setTimeout(() => {
                    preloader.style.display = 'none';
                    showMainContent();
                }, 800);
            }, 200);
        }, 100);
    }, 3000);
}

function showMainContent() {
    // Fix mobile scrolling first
    fixMobileScroll();
    
    // Add entrance animations to main content
    const mainElements = document.querySelectorAll('header, section, footer');
    
    mainElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add special entrance for hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
        setTimeout(() => {
            heroSection.style.animation = 'fadeInUp 1.2s ease-out forwards';
        }, 500);
    }
    
    // Add entrance for services carousel
    const servicesCarousel = document.querySelector('.services-carousel-container');
    if (servicesCarousel) {
        setTimeout(() => {
            servicesCarousel.style.animation = 'slideInLeft 1s ease-out forwards';
        }, 800);
    }
    
    // Final mobile scroll fix after animations
    setTimeout(fixMobileScroll, 1500);
    
    // Ensure carousel animation is running
    setTimeout(ensureCarouselAnimation, 2000);
    
    // Ensure carousel animation is working properly
    setTimeout(() => {
        const carousel = document.querySelector('.services-carousel-container');
        if (carousel) {
            // Only restart if animation is not working
            const computedStyle = window.getComputedStyle(carousel);
            const animationName = computedStyle.getPropertyValue('animation-name');
            
            if (animationName === 'none') {
                carousel.style.animation = 'scroll 30s linear infinite';
            }
        }
    }, 3000);
}

// Mobile Scroll Fix Function - minimal and targeted
function fixMobileScroll() {
    // Only fix the specific sections that have overflow issues
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.overflow = 'visible';
    }
    
    // Remove any overflow-hidden from body that might be stuck
    document.body.classList.remove('overflow-hidden');
    
    // Force enable scrolling
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    
    // Mobile-specific touch scroll fix
    if ('ontouchstart' in window) {
        // Force enable touch scrolling
        document.documentElement.style.webkitOverflowScrolling = 'touch';
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // Add touch event listeners to prevent blocking
        document.addEventListener('touchstart', function(e) {
            // Allow touch events to propagate
            e.stopImmediatePropagation();
        }, { passive: true, capture: true });
        
        document.addEventListener('touchmove', function(e) {
            // Allow touch move events to propagate
            e.stopImmediatePropagation();
        }, { passive: true, capture: true });
        
        // Force scroll to work by adding a small scroll
        setTimeout(() => {
            window.scrollTo(0, 1);
            window.scrollTo(0, 0);
        }, 100);
        
        // Fix service cards touch events
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.style.touchAction = 'pan-y';
            card.style.webkitUserSelect = 'none';
            card.style.userSelect = 'none';
            card.style.pointerEvents = 'auto';
        });
    }
}

// Enhanced Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuOverlay = document.getElementById('side-menu-overlay');
    const closeSideMenuBtn = document.getElementById('close-side-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
                // Add haptic feedback for mobile
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });
        });
        
        // Enhanced mobile menu animations
        mobileMenu.addEventListener('transitionend', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.display = 'none';
            }
        });
    }
    
    // Side Menu Functionality
    if (mobileMenuBtn && sideMenu && sideMenuOverlay && closeSideMenuBtn) {
        // Open side menu when hamburger is clicked
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openSideMenu();
        });
        
        // Close side menu when close button is clicked
        closeSideMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeSideMenu();
        });
        
        // Close side menu when overlay is clicked
        sideMenuOverlay.addEventListener('click', function() {
            closeSideMenu();
        });
        
        // Close side menu when clicking on menu items
        const sideMenuLinks = sideMenu.querySelectorAll('a');
        sideMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeSideMenu();
                // Add haptic feedback for mobile
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });
        });
        
        // Close side menu with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !sideMenu.classList.contains('hidden')) {
                closeSideMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu.classList.contains('hidden')) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    mobileMenu.style.display = 'block';
    mobileMenu.classList.remove('hidden');
    mobileMenuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
    
    // Add entrance animation
    mobileMenu.style.animation = 'slideInDown 0.3s ease-out';
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    
    // Add exit animation
    mobileMenu.style.animation = 'slideOutUp 0.3s ease-out';
}

// Side Menu Functions
function openSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const sideMenuOverlay = document.getElementById('side-menu-overlay');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Show overlay and side menu
    sideMenuOverlay.classList.add('overlay-visible');
    sideMenu.classList.add('side-menu-open');
    
    // Change hamburger to close icon
    mobileMenuBtn.innerHTML = '<div class="w-10 h-10 bg-gradient-to-b from-blue-400 to-green-400 rounded-xl shadow-lg flex items-center justify-center"><i class="fas fa-times text-white text-2xl font-bold"></i></div>';
    
    // Prevent body scroll
    document.body.classList.add('menu-open');
    
    // Add haptic feedback
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
}

function closeSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const sideMenuOverlay = document.getElementById('side-menu-overlay');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Hide overlay and side menu
    sideMenuOverlay.classList.remove('overlay-visible');
    sideMenu.classList.remove('side-menu-open');
    
    // Change close icon back to hamburger
    mobileMenuBtn.innerHTML = '<div class="w-10 h-10 bg-gradient-to-b from-blue-400 to-green-400 rounded-xl shadow-lg flex items-center justify-center"><i class="fas fa-bars text-white text-2xl font-bold"></i></div>';
    
    // Restore body scroll
    document.body.classList.remove('menu-open');
    
    // Add haptic feedback
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

// Enhanced Smooth Scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                // Smooth scroll with easing
                smoothScrollTo(targetPosition, 1000);
                
                // Add haptic feedback for mobile
                if ('vibrate' in navigator) {
                    navigator.vibrate(30);
                }
            }
        });
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
}

// Enhanced Form Handling with WhatsApp Integration
function initializeFormHandling() {
    const appointmentForm = document.getElementById('appointmentForm');
    const medicineOrderForm = document.getElementById('medicineOrderForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAppointmentSubmission(this);
        });
    }
    
    if (medicineOrderForm) {
        medicineOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleMedicineOrderSubmission(this);
        });
    }
    
    // Add form validation and enhanced UX
    addFormEnhancements();
}

function handleAppointmentSubmission(form) {
    // Get form values directly from the form elements
    const patientName = document.getElementById('patientName').value;
    const service = document.getElementById('service').value;
    const preferredDate = document.getElementById('preferredDate').value;
    const preferredTime = document.getElementById('preferredTime').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const additionalNotes = document.getElementById('additionalNotes').value;
    
    if (!validateFormData(patientName, service, preferredDate, preferredTime, phoneNumber)) {
        return;
    }
    
    // Show loading state
    setFormLoading(form, true);
    
    // Simulate form processing with enhanced UX
    setTimeout(() => {
        setFormLoading(form, false);
        
        // Redirect to WhatsApp with pre-filled message (direct chat)
        const whatsappNumber = '919423178631'; // Mahlar Medical WhatsApp number
        const message = `Hello Malhar Pharma & Clinic! 🏥%0A%0AI would like to book an appointment:%0A%0A👤 *Patient Name:* ${patientName}%0A🏥 *Service Required:* ${service}%0A📅 *Preferred Date:* ${preferredDate}%0A⏰ *Preferred Time:* ${preferredTime}%0A📱 *Phone Number:* ${phoneNumber}%0A📝 *Additional Notes:* ${additionalNotes || 'None'}`;
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
        
        // Redirect to WhatsApp immediately
        window.open(url, '_blank');
        
        // Reset form with animation
        resetFormWithAnimation(form);
    }, 1000);
}

function handleMedicineOrderSubmission(form) {
    // Get form values directly from the form elements
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumberOrder').value;
    const email = document.getElementById('emailOrder').value;
    const medicines = document.getElementById('medicinesList').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const specialInstructions = document.getElementById('specialInstructions').value;
    
    if (!validateFormData(customerName, phoneNumber, medicines, deliveryAddress, deliveryDate, deliveryTime)) {
        return;
    }
    
    // Show loading state
    setFormLoading(form, true);
    
    // Simulate form processing
    setTimeout(() => {
        setFormLoading(form, false);
        
        // Redirect to WhatsApp with pre-filled message (direct chat)
        const whatsappNumber = '919423178631'; // Mahlar Medical WhatsApp number
        const message = `Hello Malhar Pharma & Clinic! 💊%0A%0AI would like to order medicines:%0A%0A👤 *Customer Name:* ${customerName}%0A📱 *Phone Number:* ${phoneNumber}%0A📧 *Email:* ${email || 'Not provided'}%0A💊 *Medicines Required:* ${medicines}%0A📍 *Delivery Address:* ${deliveryAddress}%0A📅 *Preferred Delivery Date:* ${deliveryDate}%0A⏰ *Preferred Delivery Time:* ${deliveryTime}%0A📝 *Special Instructions:* ${specialInstructions || 'None'}`;
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
        
        // Redirect to WhatsApp immediately
        window.open(url, '_blank');
        
        // Reset form with animation
        resetFormWithAnimation(form);
    }, 1000);
}

// Quick Action Panel Form Handlers
function handleQuickAppointmentSubmission(form) {
    // Get form values from quick appointment form
    const patientName = document.getElementById('quick-patient-name').value;
    const service = document.getElementById('popup-service').value;
    const preferredDate = document.getElementById('quick-preferred-date').value;
    const phoneNumber = document.getElementById('quick-phone-number').value;
    
    if (!validateFormData(patientName, service, preferredDate, phoneNumber)) {
        return;
    }
    
    // Show loading state
    setFormLoading(form, true);
    
    // Simulate form processing
    setTimeout(() => {
        setFormLoading(form, false);
        
        // Redirect to WhatsApp with pre-filled message (direct chat)
        const whatsappNumber = '919423178631'; // Mahlar Medical WhatsApp number
        const message = `Hello Malhar Pharma & Clinic! 🏥%0A%0AI would like to book an appointment:%0A%0A👤 *Patient Name:* ${patientName}%0A🏥 *Service Required:* ${service}%0A📅 *Preferred Date:* ${preferredDate}%0A📱 *Phone Number:* ${phoneNumber}`;
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
        
        // Redirect to WhatsApp immediately
        window.open(url, '_blank');
        
        // Close popup and reset form
        closeAppointmentPopup();
        resetFormWithAnimation(form);
    }, 1000);
}

function handleQuickMedicineSubmission(form) {
    // Get form values from quick medicine form
    const customerName = document.getElementById('quick-customer-name').value;
    const medicines = document.getElementById('quick-medicines-list').value;
    const phoneNumber = document.getElementById('quick-medicine-phone').value;
    const deliveryAddress = document.getElementById('quick-delivery-address').value;
    
    if (!validateFormData(customerName, medicines, phoneNumber, deliveryAddress)) {
        return;
    }
    
    // Show loading state
    setFormLoading(form, true);
    
    // Simulate form processing
    setTimeout(() => {
        setFormLoading(form, false);
        
        // Redirect to WhatsApp with pre-filled message (direct chat)
        const whatsappNumber = '919423178631'; // Mahlar Medical WhatsApp number
        const message = `Hello Malhar Pharma & Clinic! 💊%0A%0AI would like to order medicines:%0A%0A👤 *Customer Name:* ${customerName}%0A💊 *Medicines Required:* ${medicines}%0A📱 *Phone Number:* ${phoneNumber}%0A📍 *Delivery Address:* ${deliveryAddress}`;
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
        
        // Redirect to WhatsApp immediately
        window.open(url, '_blank');
        
        // Close popup and reset form
        closeMedicinePopup();
        resetFormWithAnimation(form);
    }, 1000);
}

function validateFormData(...fields) {
    return fields.every(field => field && field.trim().length > 0);
}

function setFormLoading(form, isLoading) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    if (isLoading) {
        form.classList.add('form-loading');
        submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
        submitBtn.disabled = true;
        inputs.forEach(input => input.disabled = true);
    } else {
        form.classList.remove('form-loading');
        submitBtn.innerHTML = submitBtn.getAttribute('data-original-text') || 'Submit';
        submitBtn.disabled = false;
        inputs.forEach(input => input.disabled = false);
    }
}

function resetFormWithAnimation(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.style.transform = 'scale(0.95)';
            input.style.opacity = '0.5';
            
            setTimeout(() => {
                input.value = '';
                input.style.transform = 'scale(1)';
                input.style.opacity = '1';
            }, 150);
        }, index * 100);
    });
}

// Enhanced Gallery Functionality
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Enhanced click feedback
            this.style.transform = 'scale(0.98)';
            this.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 100);
            
            // Add haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
            
            // TODO: Implement lightbox functionality
            // showToast('Gallery feature coming soon!', 'info');
        });
        
        // Add touch gesture support for mobile
        addTouchGestures(item);
    });
}

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation for child elements
                const animatedChildren = entry.target.querySelectorAll('.animate-child');
                animatedChildren.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Enhanced WhatsApp Button
function initializeWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Enhanced click animation
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.15s ease';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 150);
            
            // Add haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(100);
            }
        });
        
        // Add touch gesture support
        addTouchGestures(whatsappBtn);
    }
}

// Touch Gesture Support for Mobile
function initializeTouchGestures() {
    // Add touch gesture support to interactive elements
    const touchElements = document.querySelectorAll('.gallery-item, .service-card, .btn-primary, .btn-secondary');
    touchElements.forEach(element => {
        addTouchGestures(element);
    });
}

function addTouchGestures(element) {
    let startX, startY, startTime;
    
    element.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startTime = Date.now();
        
        // Add touch feedback
        this.style.transform = 'scale(0.98)';
        this.style.transition = 'transform 0.1s ease';
    });
    
    element.addEventListener('touchend', function(e) {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        // Reset transform
        this.style.transform = '';
        this.style.transition = '';
        
        // Handle tap gesture
        if (duration < 300) {
            // This is a tap, handle accordingly
            if (this.classList.contains('gallery-item')) {
                // Gallery item tap
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            }
        }
    });
    
    element.addEventListener('touchmove', function(e) {
        // Prevent default scrolling on interactive elements
        e.preventDefault();
    });
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Debounce scroll events
    const debouncedScrollHandler = debounce(() => {
        // Handle scroll-based functionality
        handleScrollEffects();
    }, 16);
    
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    
    // Optimize resize events
    const debouncedResizeHandler = debounce(() => {
        handleResizeEffects();
    }, 250);
    
    window.addEventListener('resize', debouncedResizeHandler);
    
    // Add intersection observer for lazy loading (future enhancement)
    initializeLazyLoading();
}

function handleScrollEffects() {
    // Add scroll-based effects like parallax or sticky elements
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

function handleResizeEffects() {
    // Handle responsive behavior
    if (window.innerWidth >= 1024) {
        closeMobileMenu();
    }
}

function initializeLazyLoading() {
    // Future enhancement for image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Utility Functions
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

function addFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.setAttribute('data-original-text', submitBtn.innerHTML);
        }
        
        // Add enhanced form validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            input.addEventListener('input', function() {
                clearInputError(this);
            });
        });
    });
}

function validateInput(input) {
    if (input.hasAttribute('required') && !input.value.trim()) {
        showInputError(input, 'This field is required');
    } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
        showInputError(input, 'Please enter a valid email');
    } else {
        clearInputError(input);
    }
}

function showInputError(input, message) {
    input.classList.add('border-red-500');
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-text');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-text text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
}

function clearInputError(input) {
    input.classList.remove('border-red-500');
    const errorText = input.parentNode.querySelector('.error-text');
    if (errorText) {
        errorText.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// showToast function removed to eliminate white popup notifications

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu and popups
    if (e.key === 'Escape') {
        closeMobileMenu();
        closeAppointmentPopup();
        closeMedicinePopup();
        closeSocialMediaPopup();
    }
    
    // Enter key on form inputs submits the form
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    }
    
    // Arrow keys for navigation (accessibility)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
        
        if (e.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % focusableElements.length;
            focusableElements[nextIndex].focus();
        } else {
            const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
            focusableElements[prevIndex].focus();
        }
    }
});

// Initialize Configuration
function initializeConfiguration() {
    console.log('🔧 Initializing configuration...');
    
    // Check if CONFIG is available
    if (typeof CONFIG !== 'undefined' && CONFIG && CONFIG.seo && CONFIG.seo.title) {
        console.log('✅ CONFIG loaded successfully:', CONFIG.company.name);
        
        // Update company name
        const companyName = document.getElementById('company-name');
        if (companyName) {
            companyName.textContent = CONFIG.company.name;
        }
        
        // Update hero title
        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) {
            heroTitle.innerHTML = `${CONFIG.company.tagline.split(',')[0]}, <span class="text-green-200">${CONFIG.company.tagline.split(',')[1]}</span>`;
        }
        
        // Update hero description
        const heroDescription = document.getElementById('hero-description');
        if (heroDescription) {
            heroDescription.textContent = CONFIG.company.description;
        }
        
        // Update page title with fallback
        const title = CONFIG.seo.title || 'Mahlar Pharma & Clinic - Best Medical Clinic & Pharmacy in Bengaluru, Karnataka';
        document.title = title;
        console.log('📝 Page title updated to:', title);
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', CONFIG.seo.description);
        }
        
        // Update contact information
        updateContactInfo();
        
        // Update services
        updateServices();
        
    } else {
        console.warn('❌ CONFIG not found or incomplete. Using fallback values...');
        
        // Set fallback title
        document.title = 'Mahlar Pharma & Clinic - Best Medical Clinic & Pharmacy in Bengaluru, Karnataka';
        console.log('📝 Using fallback title');
        
        // Try to update again after a short delay
        setTimeout(() => {
            if (typeof CONFIG !== 'undefined' && CONFIG && CONFIG.seo && CONFIG.seo.title) {
                console.log('🔄 Retrying configuration update...');
                initializeConfiguration();
            }
        }, 100);
    }
}

function updateContactInfo() {
    console.log('📞 Updating contact information...');
    
    // Update phone numbers
    const phoneElements = document.querySelectorAll('[data-contact="phone"]');
    const phone2Elements = document.querySelectorAll('[data-contact="phone2"]');
    console.log('📱 Found phone elements:', phoneElements.length);
    console.log('📱 Found phone2 elements:', phone2Elements.length);
    
    // Update first phone number
    phoneElements.forEach((element, index) => {
        element.textContent = CONFIG.contact.phoneNumbers[0];
        console.log(`✅ Phone ${index + 1} updated:`, CONFIG.contact.phoneNumbers[0]);
    });
    
    // Update second phone number
    phone2Elements.forEach((element, index) => {
        element.textContent = CONFIG.contact.phoneNumbers[1];
        console.log(`✅ Phone2 ${index + 1} updated:`, CONFIG.contact.phoneNumbers[1]);
    });
    
    // Update email addresses
    const emailElements = document.querySelectorAll('[data-contact="email"]');
    console.log('📧 Found email elements:', emailElements.length);
    emailElements.forEach((element, index) => {
        element.textContent = CONFIG.contact.email;
        console.log(`✅ Email ${index + 1} updated:`, CONFIG.contact.email);
    });
    
    // Update address
    const addressElements = document.querySelectorAll('[data-contact="address"]');
    console.log('📍 Found address elements:', addressElements.length);
    addressElements.forEach((element, index) => {
        element.textContent = CONFIG.contact.address;
        console.log(`✅ Address ${index + 1} updated:`, CONFIG.contact.address);
    });
    
    // Update hours
    const hoursElements = document.querySelectorAll('[data-contact="hours"]');
    console.log('🕐 Found hours elements:', hoursElements.length);
    hoursElements.forEach((element, index) => {
        element.textContent = CONFIG.contact.hours;
        console.log(`✅ Hours ${index + 1} updated:`, CONFIG.contact.hours);
    });
    
    // Update WhatsApp links
    const whatsappElements = document.querySelectorAll('[data-contact="whatsapp"]');
    console.log('💬 Found WhatsApp elements:', whatsappElements.length);
    whatsappElements.forEach((element, index) => {
        element.href = `https://wa.me/${CONFIG.contact.whatsapp}`;
        console.log(`✅ WhatsApp ${index + 1} updated:`, CONFIG.contact.whatsapp);
    });
    
    console.log('✅ Contact information update complete!');
}

function updateServices() {
    console.log('🔄 Updating services dropdowns...');
    
    // Get all service select elements
    const serviceSelects = document.querySelectorAll('#service, #popup-service');
    console.log('📋 Found service selects:', serviceSelects.length);
    
    serviceSelects.forEach((select, index) => {
        // Clear existing options except the first one
        const firstOption = select.querySelector('option');
        select.innerHTML = '';
        select.appendChild(firstOption);
        
        // Add services from config
        CONFIG.services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.title;
            option.textContent = service.title;
            select.appendChild(option);
        });
        
        console.log(`✅ Service select ${index + 1} updated with ${CONFIG.services.length} services`);
    });
    
    console.log('✅ Services update complete!');
}

// Initialize popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        const appointmentPopup = document.getElementById('appointment-popup');
        const medicinePopup = document.getElementById('medicine-popup');
        const socialMediaPopup = document.getElementById('social-media-popup');
        
        if (appointmentPopup && !appointmentPopup.contains(e.target) && !e.target.closest('[onclick*="openAppointmentPopup"]')) {
            closeAppointmentPopup();
        }
        
        if (medicinePopup && !medicinePopup.contains(e.target) && !e.target.closest('[onclick*="openMedicinePopup"]')) {
            closeMedicinePopup();
        }
        
        if (socialMediaPopup && !socialMediaPopup.contains(e.target) && !e.target.closest('[onclick*="openSocialMedia"]')) {
            closeSocialMediaPopup();
        }
    });
    
    // Handle form submissions
    const appointmentForm = document.getElementById('quick-appointment-form');
    const medicineForm = document.getElementById('quick-medicine-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleQuickAppointmentSubmission(this);
        });
    }
    
    if (medicineForm) {
        medicineForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleQuickMedicineSubmission(this);
        });
    }
});

function handleQuickAppointment(form) {
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
    submitBtn.disabled = true;
    
    // Simulate form processing
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        // Success feedback handled by WhatsApp redirect
        
        // Close popup
        closeAppointmentPopup();
        
        // Reset form
        form.reset();
        
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
    }, 2000);
}

function handleQuickMedicineOrder(form) {
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
    submitBtn.disabled = true;
    
    // Simulate form processing
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        // Success feedback handled by WhatsApp redirect
        
        // Close popup
        closeMedicinePopup();
        
        // Reset form
        form.reset();
        
        // Add haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100]);
        }
    }, 2000);
}

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service Worker registered successfully: ', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New version available
                            if (confirm('A new version is available! Reload to update?')) {
                                window.location.reload();
                            }
                        }
                    });
                });
            })
            .catch((registrationError) => {
                console.log('Service Worker registration failed: ', registrationError);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or notification
    const installBtn = document.createElement('button');
    installBtn.textContent = 'Install App';
    installBtn.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    installBtn.onclick = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    };
    document.body.appendChild(installBtn);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (installBtn.parentNode) {
            installBtn.parentNode.removeChild(installBtn);
        }
    }, 10000);
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
});

// Bottom Navigation Panel Functions
function scrollToSection(sectionId) {
    const targetSection = document.querySelector(`#${sectionId}`);
    if (targetSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        // Smooth scroll with easing
        smoothScrollTo(targetPosition, 1000);
        
        // Add haptic feedback for mobile
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
}

function openSocialMedia() {
    const popup = document.getElementById('social-media-popup');
    popup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
}

function closeSocialMediaPopup() {
    const popup = document.getElementById('social-media-popup');
    popup.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

function openMedicineOrder() {
    // Scroll to contact section where medicine order form is located
    scrollToSection('contact');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

// Popup Form Functions
function openAppointmentPopup() {
    const popup = document.getElementById('appointment-popup');
    popup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
}

function openAppointmentPopupWithService(serviceName) {
    const popup = document.getElementById('appointment-popup');
    const serviceSelect = document.getElementById('popup-service');
    
    // Open the popup
    popup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    // Automatically select the service
    if (serviceSelect) {
        // Find the option that matches the service name
        const options = serviceSelect.querySelectorAll('option');
        for (let option of options) {
            if (option.value === serviceName) {
                serviceSelect.value = serviceName;
                break;
            }
        }
    }
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
    
    // Ensure carousel animation continues
    const carousel = document.querySelector('.services-carousel-container');
    if (carousel) {
        carousel.style.animationPlayState = 'running';
    }
    
    // Service selection feedback removed to eliminate additional popup
}

function closeAppointmentPopup() {
    const popup = document.getElementById('appointment-popup');
    popup.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
    
    // Ensure carousel animation continues
    ensureCarouselAnimation();
}

function openMedicinePopup() {
    const popup = document.getElementById('medicine-popup');
    popup.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
    
    // Ensure carousel animation continues
    ensureCarouselAnimation();
}

function closeMedicinePopup() {
    const popup = document.getElementById('medicine-popup');
    popup.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    
    // Add haptic feedback for mobile
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
    
    // Ensure carousel animation continues
    ensureCarouselAnimation();
}

// Ensure carousel animation continues running
function ensureCarouselAnimation() {
    const carousel = document.querySelector('.services-carousel-container');
    if (carousel) {
        // Force restart animation to ensure it's working
        carousel.style.animation = 'none';
        carousel.offsetHeight; // Trigger reflow
        carousel.style.animation = 'scroll 30s linear infinite';
        
        // Ensure animation is always running
        carousel.style.animationPlayState = 'running';
        
        console.log('Carousel animation restarted');
    }
}

// Force carousel animation to work
function forceCarouselAnimation() {
    const carousel = document.querySelector('.services-carousel-container');
    if (carousel) {
        console.log('🚀 Forcing carousel animation to work...');
        
        // Remove any inline styles that might be interfering
        carousel.removeAttribute('style');
        
        // Force the CSS animation to work
        carousel.style.animation = 'scroll 30s linear infinite';
        carousel.style.animationPlayState = 'running';
        
        // Add a class to ensure animation works
        carousel.classList.add('force-animation');
        
        console.log('✅ Carousel animation forced to work');
        
        // Check if animation is working
        setTimeout(() => {
            const computedStyle = window.getComputedStyle(carousel);
            const animationName = computedStyle.getPropertyValue('animation-name');
            console.log('🎬 Current animation:', animationName);
        }, 100);
    }
}

// JavaScript-based carousel animation (fallback)
function startJavaScriptCarousel() {
    const carousel = document.querySelector('.services-carousel-container');
    if (carousel) {
        console.log('🎠 Starting JavaScript-based carousel animation...');
        
        let position = 0;
        const speed = 0.5; // pixels per frame (slower for smoother movement)
        const maxPosition = -(carousel.scrollWidth / 2); // Move by half the width
        
        function animate() {
            position -= speed;
            
            // Reset position when we've moved half the width
            if (position <= maxPosition) {
                position = 0;
            }
            
            carousel.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }
        
        // Start the animation
        requestAnimationFrame(animate);
        
        console.log('✅ JavaScript carousel animation started');
        
        // Add hover pause functionality
        carousel.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });
        
        carousel.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });
    }
}

// Initialize video functionality
function initializeVideo() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Ensure video controls are visible
        video.controls = true;
        
        // Add click event to play/pause
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
        
        // Add error handling
        video.addEventListener('error', function(e) {
            console.log('Video error:', e);
        });
        
        // Add load event
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
        });
    });
}
