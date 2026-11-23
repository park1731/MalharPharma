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
            title: "Best Clinic Near Me | Pharmacy Shop | Lab Tests | Blood Tests - Bengaluru",
            description: "Looking for clinic near me? Malhar Pharma & Clinic - Best pharmacy shop near me in Bengaluru. Medicines, lab tests, blood tests, full body checkup, ECG. Open 8AM-10:30PM. Free home delivery!",
            keywords: "clinic near me, hospital near me, pharmacy near me, best clinic near me, best pharmacy shop near me, medicines near me, pharmacy shop near me, medical store near me, doctor near me, lab tests near me, blood tests near me, full body checkup near me, health checkup near me, pathology lab near me, diagnostic center near me, medicine delivery near me, medicine shop near me, chemist near me, medical clinic bengaluru, pharmacy bengaluru, laboratory services bengaluru, ECG near me, general physician near me, pediatrician near me, family doctor near me, home visit doctor, emergency clinic near me, 24 hour pharmacy near me, cheap medicines near me, medicine offers near me, discount pharmacy near me",
            author: "Malhar Pharma & Clinic",
            robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
            viewport: "width=device-width, initial-scale=1.0",
            charset: "UTF-8",
            language: "en",
            canonical: "https://malharcare.in",
            ogType: "website",
            ogSiteName: "Malhar Pharma & Clinic",
            ogTitle: "Best Clinic Near Me | Pharmacy Shop | Lab Tests - Bengaluru",
            ogDescription: "Looking for clinic near me? Best pharmacy shop, lab tests, blood tests, full body checkup in Bengaluru. Free medicine delivery. Open 8AM-10:30PM!",
            ogImage: "https://malharcare.in/images/medical-gallery/full_front_view.jpeg",
            ogUrl: "https://malharcare.in",
            twitterCard: "summary_large_image",
            twitterSite: "@malharpharma",
            twitterCreator: "@malharpharma"
        },
        title: "Best Clinic Near Me | Pharmacy Shop | Lab Tests | Blood Tests - Bengaluru",
        description: "Looking for clinic near me? Malhar Pharma & Clinic - Best pharmacy shop near me in Bengaluru. Medicines, lab tests, blood tests, full body checkup, ECG. Open 8AM-10:30PM. Free home delivery!",
        
        // Schema.org Structured Data
        structuredData: {
            organization: {
                "@context": "https://schema.org",
                "@type": "MedicalOrganization",
                "name": "Malhar Pharma & Clinic",
                "alternateName": "Malhar",
                "description": "Comprehensive healthcare services including general medicine, pediatrics, laboratory services, pharmacy, and home delivery in Bengaluru, Karnataka.",
                "url": "https://malharcare.in",
                "logo": "https://malharcare.in/images/logo/logo.png",
                "image": "https://malharcare.in/images/logo/logo.png",
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
                "url": "https://malharcare.in",
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
                "url": "https://malharcare.in",
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
