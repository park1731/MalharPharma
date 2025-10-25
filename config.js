// Mahlar Medical Website Configuration
// Update these values to customize your website

const CONFIG = {
    // Company Information
    company: {
        name: "Malhar Pharma & Clinic",
        tagline: "Your Health, Our Priority",
        description: "Comprehensive healthcare services delivered with compassion and expertise. From general medicine to specialized pediatric care, we're here for you and your family."
    },
    
    // Contact Information
    contact: {
        phone: "+919423178631, +919307845862",
        phoneNumbers: ["+919423178631", "+919307845862"],
        email: "malharpharma887@gmail.com",
        address: "Shop No.3, Begur Koppa Main Road, Koppa Village, Hulimangala Post, Jigani Hobli, Taluk, Anekal, Bengaluru, Karnataka 560105",
        hours: "Mon-Sat: 8:00 AM - 10:30 PM",
        whatsapp: "9423178631" // WhatsApp number without + or leading zeros
    },
    
    // Social Media Links (Dummy links - update when accounts are created)
    social: {
        facebook: "https://facebook.com/mahlarmedical",
        instagram: "https://instagram.com/mahlarmedical"
    },
    
    // Services
    services: [
        {
            title: "General Physician",
            icon: "fas fa-user-md",
            description: "Comprehensive adult healthcare including diagnosis, treatment, and preventive care for various medical conditions."
        },
        {
            title: "ECG",
            icon: "fas fa-heartbeat",
            description: "Electrocardiogram services for heart health monitoring and cardiovascular disease diagnosis."
        },
        {
            title: "Laboratory",
            icon: "fas fa-flask",
            description: "Accurate diagnostic testing and analysis to support proper medical diagnosis and treatment planning."
        },
        {
            title: "Physiotherapy",
            icon: "fas fa-walking",
            description: "Physical therapy and rehabilitation services for injury recovery and mobility improvement."
        },
        {
            title: "Home Visit",
            icon: "fas fa-home",
            description: "Professional medical care provided in the comfort of your own home."
        },
        {
            title: "Family Physician",
            icon: "fas fa-users",
            description: "Comprehensive family healthcare services for all age groups."
        },
        {
            title: "Gynecology",
            icon: "fas fa-female",
            description: "Specialized women's health care and reproductive health services."
        },
        {
            title: "Pharmacy",
            icon: "fas fa-pills",
            description: "Professional pharmacy services with expert guidance and medication management."
        },
        {
            title: "Health Packages",
            icon: "fas fa-clipboard-list",
            description: "Comprehensive health checkup packages for preventive care."
        },
        {
            title: "Free Home Delivery",
            icon: "fas fa-truck",
            description: "Convenient medicine delivery service right to your doorstep."
        },
        {
            title: "Emergency Care",
            icon: "fas fa-ambulance",
            description: "Urgent medical care and emergency services for critical health situations."
        },
        {
            title: "Vaccination",
            icon: "fas fa-syringe",
            description: "Comprehensive vaccination services for children and adults including routine and travel vaccines."
        }
    ],
    
    // Gallery Images (replace with actual image URLs)
    gallery: [
        {
            title: "Medical Store",
            description: "Our well-stocked medical store with a wide range of medicines and healthcare products."
        },
        {
            title: "Consultation Room",
            description: "Private consultation rooms for patient comfort and confidentiality."
        },
        {
            title: "Laboratory",
            description: "Modern laboratory equipment for accurate diagnostic testing."
        },
        {
            title: "Waiting Area",
            description: "Comfortable waiting area for patients and visitors."
        },
        {
            title: "Pharmacy",
            description: "Professional pharmacy services with expert guidance."
        },
        {
            title: "Reception",
            description: "Welcoming reception area with friendly staff."
        }
    ],
    
    // WhatsApp Messages
    whatsapp: {
        appointment: {
            greeting: "Hello Malhar Pharma & Clinic,",
            request: "I would like to book an appointment.",
            fields: ["Name", "Service", "Preferred Date/Time"]
        },
        medicine: {
            greeting: "Hello Malhar Pharma & Clinic,",
            request: "I would like to order medicines.",
            fields: ["Name", "Medicines", "Delivery Address"]
        }
    },
    
    // Colors and Theme
    theme: {
        primary: "#2563eb",    // Blue
        secondary: "#10b981",  // Green
        accent: "#f59e0b",     // Amber
        dark: "#1f2937",       // Dark gray
        light: "#f9fafb"       // Light gray
    },
    
    // Advanced SEO Configuration
    seo: {
        // Meta Tags
        meta: {
            title: "Mahlar Pharma & Clinic - Best Medical Clinic & Pharmacy in Bengaluru, Karnataka",
            description: "Mahlar Pharma & Clinic offers comprehensive healthcare services in Bengaluru. General medicine, pediatrics, laboratory, pharmacy, home delivery & emergency care. Book appointment today!",
            keywords: "medical clinic bengaluru, pharmacy bengaluru, general physician, pediatrics, laboratory services, home delivery medicine, emergency care, health packages, vaccination, ECG services, physiotherapy, gynecology, family physician, home visit doctor, medical store bengaluru, healthcare bengaluru, doctor near me, medicine delivery, clinic near me",
            author: "Mahlar Pharma & Clinic",
            robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
            viewport: "width=device-width, initial-scale=1.0",
            charset: "UTF-8",
            language: "en",
            canonical: "https://mahlarmedical.com",
            ogType: "website",
            ogSiteName: "Mahlar Pharma & Clinic",
            ogTitle: "Mahlar Pharma & Clinic - Best Medical Clinic & Pharmacy in Bengaluru",
            ogDescription: "Comprehensive healthcare services in Bengaluru. General medicine, pediatrics, laboratory, pharmacy & home delivery. Book appointment today!",
            ogImage: "https://mahlarmedical.com/images/og-image.jpg",
            ogUrl: "https://mahlarmedical.com",
            twitterCard: "summary_large_image",
            twitterSite: "@mahlarmedical",
            twitterCreator: "@mahlarmedical"
        },
        
        // Schema.org Structured Data
        structuredData: {
            organization: {
                "@context": "https://schema.org",
                "@type": "MedicalOrganization",
                "name": "Malhar Pharma & Clinic",
                "alternateName": "Malhar",
                "description": "Comprehensive healthcare services including general medicine, pediatrics, laboratory services, pharmacy, and home delivery in Bengaluru, Karnataka.",
                "url": "https://mahlarmedical.com",
                "logo": "https://mahlarmedical.com/images/logo/logo.png",
                "image": "https://mahlarmedical.com/images/logo/logo.png",
                "telephone": "+919423178631",
                "email": "malharpharma887@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Shop No.3, Begur Koppa Main Road, Koppa Village, Hulimangala Post, Jigani Hobli, Taluk, Anekal",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560105",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "12.9716",
                    "longitude": "77.5946"
                },
                "openingHours": "Mo-Sa 08:00-22:30",
                "priceRange": "₹₹",
                "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
                "currenciesAccepted": "INR",
                "areaServed": "Bengaluru, Karnataka, India",
                "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": "12.9716",
                        "longitude": "77.5946"
                    },
                    "geoRadius": "50000"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Healthcare Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "MedicalService",
                                "name": "General Medicine",
                                "description": "Comprehensive adult healthcare services"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "MedicalService",
                                "name": "Pediatrics",
                                "description": "Specialized children's healthcare"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "MedicalService",
                                "name": "Laboratory Services",
                                "description": "Diagnostic testing and analysis"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Offer",
                                "name": "Medicine Home Delivery",
                                "description": "Convenient medicine delivery service"
                            }
                        }
                    ]
                }
            },
            
            medicalClinic: {
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "name": "Malhar Pharma & Clinic",
                "description": "Professional medical clinic providing comprehensive healthcare services in Bengaluru",
                "url": "https://mahlarmedical.com",
                "telephone": "+919423178631",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Shop No.3, Begur Koppa Main Road, Koppa Village, Hulimangala Post, Jigani Hobli, Taluk, Anekal",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560105",
                    "addressCountry": "IN"
                },
                "medicalSpecialty": [
                    "General Medicine",
                    "Pediatrics",
                    "Gynecology",
                    "Physiotherapy",
                    "Laboratory Medicine"
                ],
                "availableService": [
                    {
                        "@type": "MedicalService",
                        "name": "General Consultation",
                        "description": "Comprehensive medical consultation and treatment"
                    },
                    {
                        "@type": "MedicalService",
                        "name": "ECG Services",
                        "description": "Electrocardiogram for heart health monitoring"
                    },
                    {
                        "@type": "MedicalService",
                        "name": "Laboratory Testing",
                        "description": "Diagnostic laboratory services"
                    },
                    {
                        "@type": "MedicalService",
                        "name": "Home Visit",
                        "description": "Medical consultation at patient's home"
                    }
                ]
            },
            
            pharmacy: {
                "@context": "https://schema.org",
                "@type": "Pharmacy",
                "name": "Malhar Pharma & Clinic",
                "description": "Professional pharmacy services with expert guidance and medication management",
                "url": "https://mahlarmedical.com",
                "telephone": "+919423178631",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Shop No.3, Begur Koppa Main Road, Koppa Village, Hulimangala Post, Jigani Hobli, Taluk, Anekal",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560105",
                    "addressCountry": "IN"
                },
                "availableService": [
                    {
                        "@type": "Offer",
                        "name": "Medicine Sales",
                        "description": "Wide range of prescription and over-the-counter medicines"
                    },
                    {
                        "@type": "Offer",
                        "name": "Home Delivery",
                        "description": "Convenient medicine delivery to your doorstep"
                    },
                    {
                        "@type": "Offer",
                        "name": "Medication Counseling",
                        "description": "Expert advice on medication usage and interactions"
                    }
                ]
            }
        },
        
        // Performance & Technical SEO
        performance: {
            preload: [
                "/fonts/inter-var.woff2",
                "/images/hero-section-bg/hero-section-bg2.png",
                "/styles.css",
                "/script.js"
            ],
            prefetch: [
                "/images/clinic-gallary-images/",
                "/images/medical-gallary-images/"
            ],
            dnsPrefetch: [
                "//fonts.googleapis.com",
                "//cdnjs.cloudflare.com"
            ]
        },
        
        // Local SEO
        local: {
            googleMyBusiness: "https://g.page/malharpharma",
            bingPlaces: "https://www.bing.com/maps?where1=Malhar+Pharma+%26+Clinic",
            justdial: "https://www.justdial.com/Bangalore/Malhar-Pharma-Clinic",
            practo: "https://www.practo.com/bangalore/malhar-pharma-clinic",
            phonepe: "https://phonepe.com",
            paytm: "https://paytm.com"
        }
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
