// Language Translation System for العدسة الكونية
// Supports Arabic (RTL) and English (LTR) languages

class LanguageSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.translations = {
            ar: {
                // Header
                siteName: 'العدسة الكونية',
                searchPlaceholder: 'ابحث عن منتجك...',
                
                // Navigation Categories
                allProducts: 'جميع المنتجات',
                laptops: 'لابتوبات',
                desktops: 'كمبيوترات',
                tablets: 'تابلت',
                storage: 'وحدات تخزين',
                network: 'شبكات',
                security: 'كاميرات مراقبة',
                power: 'أجهزة طاقة',
                accessories: 'اكسسوارات',
                ipPhones: 'هواتف IP',
                
                // Hero Section
                heroTitle: 'تقنيات المستقبل',
                heroSubtitle: 'بين يديك اليوم',
                heroDescription: 'اكتشف أحدث التقنيات والإلكترونيات بأفضل الأسعار',
                heroButton: 'تسوق الآن',
                heroBadgeExclusive: 'حصري',
                heroBadgeNew: 'جديد',
                heroBadgeSpecial: 'عرض خاص',
                heroTitle1: 'أحدث أجهزة اللابتوب',
                heroDesc1: 'تشكيلة واسعة من أفضل الماركات العالمية',
                heroTitle2: 'كمبيوترات الألعاب',
                heroDesc2: 'قوة الأداء وأحدث التقنيات',
                heroTitle3: 'أجهزة التابلت',
                heroDesc3: 'للعمل والترفيه في جهاز واحد',
                heroButton2: 'اكتشف المزيد',
                
                // Products Section
                ourProducts: 'منتجاتنا',
                sortBy: 'ترتيب حسب',
                priceLowHigh: 'السعر: الأقل للأعلى',
                priceHighLow: 'السعر: الأعلى للأقل',
                rating: 'التقييم',
                newest: 'الأحدث',
                filter: 'فلترة',
                brand: 'العلامة التجارية',
                priceRange: 'نطاق السعر',
                
                // Filter Section
                filterTitle: 'تصفية النتائج',
                filterByCategory: 'حسب الفئة',
                filterByPrice: 'حسب السعر',
                priceRange1: 'أقل من 500 ألف',
                priceRange2: '500 ألف - 1 مليون',
                priceRange3: '1-2 مليون',
                priceRange4: 'أكثر من 2 مليون',
                
                // Product Actions
                addToCart: 'أضف للسلة',
                addToWishlist: 'أضف للمفضلة',
                removeFromWishlist: 'إزالة من المفضلة',
                viewDetails: 'عرض التفاصيل',
                
                // Cart & Wishlist
                cart: 'سلة التسوق',
                wishlist: 'قائمة المفضلة',
                cartEmpty: 'السلة فارغة',
                wishlistEmpty: 'المفضلة فارغة',
                continueShopping: 'متابعة التسوق',
                total: 'المجموع',
                checkout: 'إتمام الطلب عبر واتساب',
                
                // Features Bar
                fastShipping: 'شحن سريع',
                fastShippingDesc: 'خلال 24-48 ساعة',
                originalWarranty: 'ضمان أصلي',
                originalWarrantyDesc: 'منتجات أصلية 100%',
                easyReturn: 'إرجاع سهل',
                easyReturnDesc: 'خلال 7 أيام',
                securePayment: 'دفع آمن',
                securePaymentDesc: 'طرق دفع متعددة',
                
                // Newsletter
                newsletterTitle: 'اشترك في النشرة البريدية',
                newsletterDesc: 'احصل على أحدث العروض والخصومات الحصرية',
                emailPlaceholder: 'بريدك الإلكتروني',
                subscribe: 'اشترك',
                
                // Footer
                quickLinks: 'روابط سريعة',
                aboutUs: 'من نحن',
                privacyPolicy: 'سياسة الخصوصية',
                termsConditions: 'الشروط والأحكام',
                returnPolicy: 'سياسة الإرجاع',
                customerService: 'خدمة العملاء',
                trackOrder: 'تتبع الطلب',
                faq: 'الأسئلة الشائعة',
                paymentMethods: 'طرق الدفع',
                shippingDelivery: 'الشحن والتوصيل',
                contactUs: 'تواصل معنا',
                workingHours: 'السبت - الخميس: 10ص - 9م',
                allRightsReserved: 'جميع الحقوق محفوظة',
                siteDescription: 'وجهتك الأولى للتقنية والإلكترونيات',
                location: 'بغداد - ساحة التحرير - عمارة الخيام',
                
                // Mobile Navigation
                home: 'الرئيسية',
                theme: 'الثيم',
                account: 'حسابي',
                
                // Account Page
                backToStore: 'العودة للمتجر',
                myAccount: 'حسابي',
                profile: 'الملف الشخصي',
                settings: 'الإعدادات',
                themeAppearance: 'الثيم والمظهر',
                language: 'اللغة',
                help: 'المساعدة',
                
                // Profile Section
                profileTitle: 'الملف الشخصي',
                welcome: 'مرحباً بك',
                loginPrompt: 'قم بتسجيل الدخول لرؤية معلوماتك',
                signIn: 'تسجيل الدخول',
                signOut: 'تسجيل الخروج',
                
                // Settings Section
                settingsTitle: 'الإعدادات',
                notifications: 'الإشعارات',
                notificationsDesc: 'تلقي إشعارات حول العروض والمنتجات الجديدة',
                newsletter: 'النشرة البريدية',
                newsletterDesc: 'تلقي رسائل بريدية بالعروض والأخبار',
                
                // Theme Section
                themeTitle: 'الثيم والمظهر',
                chooseTheme: 'اختر الثيم المفضل',
                bronzeTheme: 'البرونزي',
                blueTheme: 'الأزرق',
                
                // Language Section
                languageTitle: 'اللغة',
                chooseLanguage: 'اختر لغة الواجهة',
                arabic: 'العربية',
                english: 'English',
                
                // Help Section
                helpTitle: 'المساعدة والدعم',
                callUs: 'اتصل بنا',
                callUsDesc: 'تواصل معنا مباشرة للحصول على المساعدة',
                whatsapp: 'واتساب',
                whatsappDesc: 'تواصل معنا عبر الواتساب',
                openWhatsapp: 'فتح الواتساب',
                
                // Toast Messages
                signInSuccess: 'تم تسجيل الدخول بنجاح!',
                signOutSuccess: 'تم تسجيل الخروج بنجاح!',
                signInFailed: 'فشل تسجيل الدخول',
                signOutFailed: 'فشل تسجيل الخروج',
                themeChanged: 'تم تغيير الثيم',
                languageChanged: 'تم تغيير اللغة',
                settingEnabled: 'تم تفعيل الإعداد',
                settingDisabled: 'تم إلغاء الإعداد',
                addedToCart: 'تم إضافة المنتج للسلة',
                addedToWishlist: 'تم إضافة المنتج للمفضلة',
                removedFromWishlist: 'تم إزالة المنتج من المفضلة',
                
                // Currency
                currency: 'د.ع'
            },
            en: {
                // Header
                siteName: 'Cosmic Lens',
                searchPlaceholder: 'Search for your product...',
                
                // Navigation Categories
                allProducts: 'All Products',
                laptops: 'Laptops',
                desktops: 'Desktops',
                tablets: 'Tablets',
                storage: 'Storage',
                network: 'Network',
                security: 'Security Cameras',
                power: 'Power Devices',
                accessories: 'Accessories',
                ipPhones: 'IP Phones',
                
                // Hero Section
                heroTitle: 'Future Technology',
                heroSubtitle: 'In Your Hands Today',
                heroDescription: 'Discover the latest technology and electronics at the best prices',
                heroButton: 'Shop Now',
                heroBadgeExclusive: 'Exclusive',
                heroBadgeNew: 'New',
                heroBadgeSpecial: 'Special Offer',
                heroTitle1: 'Latest Laptops',
                heroDesc1: 'Wide range from the best global brands',
                heroTitle2: 'Gaming Computers',
                heroDesc2: 'Powerful performance and latest technologies',
                heroTitle3: 'Tablet Devices',
                heroDesc3: 'For work and entertainment in one device',
                heroButton2: 'Discover More',
                
                // Products Section
                ourProducts: 'Our Products',
                sortBy: 'Sort By',
                priceLowHigh: 'Price: Low to High',
                priceHighLow: 'Price: High to Low',
                rating: 'Rating',
                newest: 'Newest',
                filter: 'Filter',
                brand: 'Brand',
                priceRange: 'Price Range',
                
                // Filter Section
                filterTitle: 'Filter Results',
                filterByCategory: 'By Category',
                filterByPrice: 'By Price',
                priceRange1: 'Less than 500K',
                priceRange2: '500K - 1M',
                priceRange3: '1M - 2M',
                priceRange4: 'More than 2M',
                
                // Product Actions
                addToCart: 'Add to Cart',
                addToWishlist: 'Add to Wishlist',
                removeFromWishlist: 'Remove from Wishlist',
                viewDetails: 'View Details',
                
                // Cart & Wishlist
                cart: 'Shopping Cart',
                wishlist: 'Wishlist',
                cartEmpty: 'Cart is Empty',
                wishlistEmpty: 'Wishlist is Empty',
                continueShopping: 'Continue Shopping',
                total: 'Total',
                checkout: 'Complete Order via WhatsApp',
                
                // Features Bar
                fastShipping: 'Fast Shipping',
                fastShippingDesc: 'Within 24-48 hours',
                originalWarranty: 'Original Warranty',
                originalWarrantyDesc: '100% Original Products',
                easyReturn: 'Easy Return',
                easyReturnDesc: 'Within 7 days',
                securePayment: 'Secure Payment',
                securePaymentDesc: 'Multiple payment methods',
                
                // Newsletter
                newsletterTitle: 'Subscribe to Newsletter',
                newsletterDesc: 'Get the latest offers and exclusive discounts',
                emailPlaceholder: 'Your Email',
                subscribe: 'Subscribe',
                
                // Footer
                quickLinks: 'Quick Links',
                aboutUs: 'About Us',
                privacyPolicy: 'Privacy Policy',
                termsConditions: 'Terms & Conditions',
                returnPolicy: 'Return Policy',
                customerService: 'Customer Service',
                trackOrder: 'Track Order',
                faq: 'FAQ',
                paymentMethods: 'Payment Methods',
                shippingDelivery: 'Shipping & Delivery',
                contactUs: 'Contact Us',
                workingHours: 'Sat - Thu: 10AM - 9PM',
                allRightsReserved: 'All Rights Reserved',
                siteDescription: 'Your first destination for technology and electronics',
                location: 'Baghdad - Tahrir Square - Al-Khayam Building',
                
                // Mobile Navigation
                home: 'Home',
                theme: 'Theme',
                account: 'Account',
                
                // Account Page
                backToStore: 'Back to Store',
                myAccount: 'My Account',
                profile: 'Profile',
                settings: 'Settings',
                themeAppearance: 'Theme & Appearance',
                language: 'Language',
                help: 'Help',
                
                // Profile Section
                profileTitle: 'Profile',
                welcome: 'Welcome',
                loginPrompt: 'Sign in to view your information',
                signIn: 'Sign In',
                signOut: 'Sign Out',
                
                // Settings Section
                settingsTitle: 'Settings',
                notifications: 'Notifications',
                notificationsDesc: 'Receive notifications about offers and new products',
                newsletter: 'Newsletter',
                newsletterDesc: 'Receive email updates about offers and news',
                
                // Theme Section
                themeTitle: 'Theme & Appearance',
                chooseTheme: 'Choose Your Preferred Theme',
                bronzeTheme: 'Bronze',
                blueTheme: 'Blue',
                
                // Language Section
                languageTitle: 'Language',
                chooseLanguage: 'Choose Interface Language',
                arabic: 'العربية',
                english: 'English',
                
                // Help Section
                helpTitle: 'Help & Support',
                callUs: 'Call Us',
                callUsDesc: 'Contact us directly for help',
                whatsapp: 'WhatsApp',
                whatsappDesc: 'Contact us via WhatsApp',
                openWhatsapp: 'Open WhatsApp',
                
                // Toast Messages
                signInSuccess: 'Successfully signed in!',
                signOutSuccess: 'Successfully signed out!',
                signInFailed: 'Sign in failed',
                signOutFailed: 'Sign out failed',
                themeChanged: 'Theme changed',
                languageChanged: 'Language changed',
                settingEnabled: 'Setting enabled',
                settingDisabled: 'Setting disabled',
                addedToCart: 'Product added to cart',
                addedToWishlist: 'Product added to wishlist',
                removedFromWishlist: 'Product removed from wishlist',
                
                // Currency
                currency: 'IQD'
            }
        };
        
        this.init();
    }
    
    init() {
        this.applyLanguage(this.currentLanguage);
        this.setupLanguageToggle();
    }
    
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage(lang);
        
        // Show toast message
        if (window.showToast) {
            window.showToast(this.get('languageChanged'));
        }
        
        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
    
    applyLanguage(lang) {
        // Set document direction and lang attribute
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = this.get(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update language selection indicators
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.langOption === lang) {
                option.classList.add('active');
            }
        });
        
        // Handle specific elements that don't have data-lang attributes
        this.updateSpecificElements(lang);
        
        // Update page title based on current page
        this.updatePageTitle();
    }
    
    updatePageTitle() {
        const isAccountPage = window.location.pathname.includes('account.html');
        const siteName = this.get('siteName');
        
        if (isAccountPage) {
            document.title = `${this.get('myAccount')} | ${siteName}`;
        } else {
            document.title = siteName;
        }
    }
    
    get(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
    
    setupLanguageToggle() {
        // Setup language option clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.language-option')) {
                const option = e.target.closest('.language-option');
                const lang = option.dataset.lang;
                if (lang && lang !== this.currentLanguage) {
                    this.setLanguage(lang);
                }
            }
        });
    }
    
    // Method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // Method to check if current language is RTL
    isRTL() {
        return this.currentLanguage === 'ar';
    }
}

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageSystem = new LanguageSystem();
});

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageSystem;
}
