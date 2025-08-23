// products.js - قاعدة بيانات المنتجات المحدثة
const products = [
    // أجهزة الكمبيوتر المحمولة والمكتبية
    {
        id: 1,
        name: "Lenovo ThinkCentre neo 50a 24 Gen 5",
        brand: "Lenovo",
        category: "desktop",
        type: "All in One",
        price: 1450000,
        originalPrice: 1650000,
        discount: 12,
        description: "جهاز مكتبي أنيق ومتكامل، معالج Intel Core i5-13420H، ذاكرة 8GB DDR4، شاشة 24 بوصة FHD IPS، تخزين 512GB SSD",
        features: ["Intel Core i5-13420H", "8GB DDR4 RAM", "512GB SSD", "24\" FHD IPS Display", "Intel UHD Graphics"],
        images: [
            "https://p1-ofp.static.pub/medias/26146349384_ThinkCentreneo50a24Gen5_202310310229451721409478839.png",
        ],
        inStock: true,
        badge: "جديد",
        rating: 4.5
    },
    {
        id: 2,
        name: "Microsoft Surface Pro 10",
        brand: "Microsoft",
        category: "tablet",
        type: "2-in-1 Laptop",
        price: 2850000,
        originalPrice: null,
        discount: null,
        description: "كمبيوتر لوحي قوي، معالج Intel Core Ultra 5-135U، ذاكرة 8GB DDR5، شاشة 13 بوصة 2880x1920 120Hz، تخزين 256GB SSD Gen4",
        features: ["Intel Core Ultra 5-135U", "8GB DDR5", "256GB SSD Gen4", "13\" Touch 120Hz", "Intel Graphics"],
        images: [
            "https://www2.0zz0.com/2025/08/23/17/427829806.png"
        ],
        inStock: true,
        badge: "مميز",
        rating: 5
    },
    {
        id: 3,
        name: "MSI Stealth 16 MercedesAMG Motorsport",
        brand: "MSI",
        category: "laptop",
        type: "Gaming Laptop",
        price: 7500000,
        originalPrice: 8200000,
        discount: 8.5,
        description: "إصدار خاص فاخر، معالج Intel Core Ultra 9 185H، ذاكرة 32GB DDR5، شاشة 16 بوصة QHD+ OLED 240Hz، RTX 4070 8GB، تخزين 2TB SSD",
        features: ["Intel Core Ultra 9 185H", "32GB DDR5", "RTX 4070 8GB", "16\" QHD+ OLED 240Hz", "2TB SSD M.2"],
        images: [
            "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/stealth-16-mercedes-amg-motorsport-a1v/images/kv-nb.png",
    
        ],
        inStock: true,
        badge: "حصري",
        rating: 5
    },
    {
        id: 4,
        name: "HP All in One 24-CB1025",
        brand: "HP",
        category: "desktop",
        type: "All in One",
        price: 1250000,
        originalPrice: null,
        discount: null,
        description: "كمبيوتر مكتبي متكامل، معالج Intel Core i5-1235U، ذاكرة 8GB DDR4، شاشة 24 بوصة Full HD، Intel Iris Xe Graphics، تخزين 512GB SSD",
        features: ["Intel Core i5-1235U", "8GB DDR4", "512GB SSD", "24\" Full HD", "Intel Iris Xe Graphics"],
        images: [
            "https://store.alnabaa.com/cdn/shop/files/c07960543_1024x.png?v=1696148957"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 5,
        name: "MSI Vector 16 HX AI A2XW",
        brand: "MSI",
        category: "laptop",
        type: "Gaming/Performance Laptop",
        price: 8900000,
        originalPrice: null,
        discount: null,
        description: "للمحترفين في STEM، معالج Intel Core Ultra 9 275HX، ذاكرة 32GB DDR5، شاشة 16 بوصة QHD+ IPS 240Hz، RTX 5080 16GB، تخزين 1TB SSD",
        features: ["Intel Core Ultra 9 275HX", "32GB DDR5", "RTX 5080 16GB", "16\" QHD+ 240Hz", "1TB SSD M.2"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_1736409237d3e130c0898585dcedcf212aa5d4c955.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            "https://asset.msi.com/resize/image/global/product/product_17364092397ac54d6c1e0305ae555406eca1515174.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            "https://asset.msi.com/resize/image/global/product/product_17364092396736869361fbdf883425af4e3a79c775.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
        ],
        inStock: false,
        badge: "قريباً",
        rating: 0
    },
    {
        id: 6,
        name: "Dell Precision 7560 Mobile Workstation",
        brand: "Dell",
        category: "laptop",
        type: "Mobile Workstation",
        price: 5200000,
        originalPrice: 5800000,
        discount: 10.3,
        description: "محطة عمل محمولة، معالج Intel Xeon W-11955M، ذاكرة 64GB DDR4، شاشة لمس 15.6 بوصة، NVIDIA RTX A3000 6GB، تخزين 1TB SSD",
        features: ["Intel Xeon W-11955M", "64GB DDR4", "RTX A3000 6GB", "15.6\" Touch", "1TB SSD M.2"],
        images: [
            "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/15-7560/media-gallery/workstation_precision_15_7560_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=823&qlt=100,1&resMode=sharp2&size=823,402&chrss=full",
            "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/workstations/mobile-workstations/precision/15-7560/media-gallery/workstation_precision_15_7560_gallery_5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=580&qlt=100,1&resMode=sharp2&size=580,402&chrss=full"
        ],
        inStock: true,
        badge: "خصم 10%",
        rating: 4.5
    },
    {
        id: 7,
        name: "MSI Cyborg 15 A13UDX",
        brand: "MSI",
        category: "laptop",
        type: "Gaming Laptop",
        price: 1850000,
        originalPrice: null,
        discount: null,
        description: "لابتوب ألعاب بتصميم مستقبلي، معالج Intel Core i5-13420H، ذاكرة 16GB DDR5، شاشة 15.6 بوصة FHD IPS 144Hz، RTX 3050 6GB، تخزين 512GB SSD",
        features: ["Intel Core i5-13420H", "16GB DDR5", "RTX 3050 6GB", "15.6\" FHD 144Hz", "512GB SSD Gen4"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_1710832583bed5df323c7a7a6385823e4e25ad7673.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            "https://fourstarit.com.bd/image/cache/catalog/LAPTOP/MSI/MSI%20Cyborg%2015%20A13UDX%20%201-600x600.webp",
            "https://storage-asset.msi.com/global/picture/image/feature/nb/Cyborg15-A13V/images/cyborg-kv-laptop2.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 8,
        name: "Dell Latitude 5400",
        brand: "Dell",
        category: "laptop",
        type: "Business Laptop",
        price: 950000,
        originalPrice: null,
        discount: null,
        description: "لابتوب أعمال موثوق، معالج Intel Core i7-8665U، ذاكرة 16GB DDR4، شاشة 14 بوصة Full HD، Intel UHD 620، تخزين 256GB SSD",
        features: ["Intel Core i7-8665U", "16GB DDR4", "256GB SSD", "14\" Full HD", "Intel UHD 620"],
        images: [
            "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-5400/global-spi/ng/notebook-latitude-14-5400-campaign-hero-504x350-ng.psd?fmt=png-alpha"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 9,
        name: "Dell Precision 7550 Mobile Workstation",
        brand: "Dell",
        category: "laptop",
        type: "Mobile Workstation",
        price: 3950000,
        originalPrice: null,
        discount: null,
        description: "محطة عمل قوية، معالج Intel Xeon W-10855M، ذاكرة 32GB DDR4، شاشة لمس 15.6 بوصة، NVIDIA RTX 3000 6GB، تخزين 512GB SSD",
        features: ["Intel Xeon W-10855M", "32GB DDR4", "RTX 3000 6GB", "15.6\" Touch", "512GB SSD M.2"],
        images: [
            "https://www2.0zz0.com/2025/08/23/17/372679628.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 10,
        name: "Lenovo IdeaPad Slim 3 15IRH8",
        brand: "Lenovo",
        category: "laptop",
        type: "Laptop",
        price: 1150000,
        originalPrice: null,
        discount: null,
        description: "لابتوب أنيق للدراسة والعمل، معالج Intel Core i5-13420H، ذاكرة 8GB DDR5، شاشة 15.6 بوصة FHD IPS، Intel UHD، تخزين 512GB SSD",
        features: ["Intel Core i5-13420H", "8GB DDR5", "512GB SSD Gen4", "15.6\" FHD IPS", "لوحة مفاتيح مضيئة"],
        images: [
            "https://www2.0zz0.com/2025/08/23/17/214543716.png",
            "https://www2.0zz0.com/2025/08/23/17/506638509.png"
        ],
        inStock: true,
        badge: "الأكثر مبيعاً",
        rating: 4.5
    },
    {
        id: 11,
        name: "Dell Latitude 5410",
        brand: "Dell",
        category: "laptop",
        type: "Business Laptop",
        price: 1050000,
        originalPrice: null,
        discount: null,
        description: "لابتوب أعمال قوي، معالج Intel Core i7-10610U يصل إلى 4.4GHz، ذاكرة 16GB DDR4، شاشة 14.1 بوصة 1080p، Intel UHD، تخزين 256GB SSD",
        features: ["Intel Core i7-10610U", "16GB DDR4", "256GB SSD", "14.1\" Full HD", "Intel UHD Graphics"],
        images: [
            "https://www2.0zz0.com/2025/08/23/17/349928337.png",
            "https://www2.0zz0.com/2025/08/23/17/974954447.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 12,
        name: "MSI Modern 15 F13MG",
        brand: "MSI",
        category: "laptop",
        type: "Laptop",
        price: 1350000,
        originalPrice: null,
        discount: null,
        description: "لابتوب عصري للمهام الصعبة، معالج Intel Core i5-1334U، ذاكرة 16GB DDR4، شاشة 15.6 بوصة FHD IPS، Intel Iris Xe، تخزين 512GB SSD",
        features: ["Intel Core i5-1334U", "16GB DDR4", "512GB SSD Gen4", "15.6\" FHD IPS", "Intel Iris Xe"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_172716866880ff643a805917c94520b7f9731565f4.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            "https://asset.msi.com/resize/image/global/product/product_17271686681ef237cb5c654aec4120c067f4711eb6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            "https://storage-asset.msi.com/global/picture/image/feature/nb/2024_LNL/modern-15-f1mx/images/modern-dark-pd.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 13,
        name: "Dell Latitude 5420",
        brand: "Dell",
        category: "laptop",
        type: "Business Laptop",
        price: 1250000,
        originalPrice: null,
        discount: null,
        description: "لابتوب أعمال بميزات أمان متقدمة، معالج Intel Core i5-1145G7، ذاكرة 16GB DDR4، شاشة لمس 14 بوصة، Intel Iris Xe، تخزين 256GB SSD",
        features: ["Intel Core i5-1145G7", "16GB DDR4", "256GB SSD", "14\" Touch", "بصمة + تعرف على الوجه"],
        images: [
            "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-5420/media-gallery/notebook-latitude-14-5420-gray-gallery-1.psd?fmt=png-alpha"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 14,
        name: "MSI Raider GE68 HX 14VIG",
        brand: "MSI",
        category: "laptop",
        type: "Gaming Laptop",
        price: 9500000,
        originalPrice: 10500000,
        discount: 9.5,
        description: "لابتوب ألعاب فائق، معالج Intel Core i9-14900HX، ذاكرة 64GB DDR5، شاشة 16 بوصة UHD+ 120Hz، RTX 4090 16GB، تخزين 2TB SSD",
        features: ["Intel Core i9-14900HX", "64GB DDR5", "RTX 4090 16GB", "16\" UHD+ 120Hz", "2TB SSD Gen4"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_17042699296a5f2c3aa7b11c72bcdb31e0ea04e1f8.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        ],
        inStock: true,
        badge: "خصم خاص",
        rating: 5
    },
    {
        id: 15,
        name: "MSI Thin 15 B13VE",
        brand: "MSI",
        category: "laptop",
        type: "Gaming Laptop",
        price: 2150000,
        originalPrice: null,
        discount: null,
        description: "لابتوب ألعاب نحيف، معالج Intel Core i7-13620H، ذاكرة 16GB DDR5، شاشة 15.6 بوصة FHD 144Hz، RTX 4050 6GB، تخزين 512GB SSD",
        features: ["Intel Core i7-13620H", "16GB DDR5", "RTX 4050 6GB", "15.6\" FHD 144Hz", "512GB SSD Gen4"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_16746190850ad49e979b674f4fb57701e4da29e970.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 16,
        name: "MSI Summit E13 Flip Evo",
        brand: "MSI",
        category: "laptop",
        type: "2-in-1 Laptop",
        price: 2450000,
        originalPrice: null,
        discount: null,
        description: "لابتوب 2 في 1 للإنتاجية، معالج Intel Core i7-1360P، ذاكرة 16GB DDR5، شاشة 13.4 بوصة FHD+ 120Hz، Intel Iris Xe، تخزين 1TB SSD",
        features: ["Intel Core i7-1360P", "16GB DDR5", "1TB SSD Gen4", "13.4\" FHD+ Touch 120Hz", "قابل للطي 360°"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_16736302648c48e1b48e0c039c887b88c0cf4c8538.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 17,
        name: "MSI Prestige 13 AI+ Evo A2VMG",
        brand: "MSI",
        category: "laptop",
        type: "Laptop",
        price: 3250000,
        originalPrice: null,
        discount: null,
        description: "لابتوب مدعوم بالذكاء الاصطناعي، معالج Intel Core Ultra 7 258V، ذاكرة 32GB DDR5، شاشة 13.3 بوصة 2.8K OLED، Intel Arc 140V، تخزين 1TB SSD",
        features: ["Intel Core Ultra 7 258V", "32GB DDR5", "1TB SSD Gen4", "13.3\" 2.8K OLED", "Intel Evo معتمد"],
        images: [
            "https://asset.msi.com/resize/image/global/product/product_17265003179c67652c1f3e7c067e3e47f070eadfa8.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        ],
        inStock: true,
        badge: "جديد",
        rating: 5
    },
    {
        id: 18,
        name: "Lenovo ThinkPad X1 Tablet Gen 2",
        brand: "Lenovo",
        category: "tablet",
        type: "2-in-1 Tablet",
        price: 1450000,
        originalPrice: null,
        discount: null,
        description: "تابلت احترافي 2 في 1، معالج Intel Core i5-7Y57، ذاكرة 8GB DDR3، شاشة لمس 12 بوصة 2K IPS، Intel HD Graphics، تخزين 256GB SSD",
        features: ["Intel Core i5-7Y57", "8GB DDR3", "256GB SSD", "12\" 2K Touch", "قلم رقمي"],
        images: [
            "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTczMzgwfGltYWdlL3BuZ3xoMzEvaDg3LzE0MjAwMjI3MDQ1NDA2LnBuZ3w1OTIzNTNhNTA1MzA3OTNjYTZhY2Y3MDMzYmRjZWE0OWU0YTZhNmQ1ODExMWE0MmYxNDcxYWJhN2QzODdiMDY0/lenovo-tablet-thinkpad-x1-tablet-gen2-hero.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },

    // وحدات التخزين
    {
        id: 19,
        name: "Lexar NM620 M.2 2280 PCIe Gen3x4 NVMe 2TB",
        brand: "Lexar",
        category: "storage",
        type: "SSD",
        price: 285000,
        originalPrice: null,
        discount: null,
        description: "قرص SSD سريع بسعة 2TB، واجهة PCIe Gen3x4 NVMe، سرعات قراءة وكتابة عالية، مثالي لترقية الأجهزة",
        features: ["2TB Capacity", "PCIe Gen3x4", "NVMe Protocol", "3500MB/s Read", "3000MB/s Write"],
        images: [
            "https://www.lexar.com/wp-content/uploads/2021/03/Lexar-NM620_Angled-Right.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 20,
        name: "WD Purple Surveillance Hard Drive",
        brand: "Western Digital",
        category: "storage",
        type: "HDD",
        price: 150000,
        originalPrice: null,
        discount: null,
        description: "قرص صلب مصمم لأنظمة المراقبة 24/7، تقنية AllFrame، متوفر بسعات مختلفة من 1TB إلى 12TB",
        features: ["للمراقبة 24/7", "تقنية AllFrame", "موثوقية عالية", "سعات متعددة", "3 سنوات ضمان"],
        images: [
            "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-purple-surveillance-hard-drive/gallery/wd-purple-surveillance-hard-drive-1tb.png"
        ],
        inStock: true,
        badge: "الأكثر مبيعاً",
        rating: 5,
        variants: [
            { capacity: "1TB", price: 150000 },
            { capacity: "2TB", price: 195000 },
            { capacity: "4TB", price: 285000 },
            { capacity: "6TB", price: 385000 },
            { capacity: "8TB", price: 485000 },
            { capacity: "10TB", price: 650000 },
            { capacity: "12TB", price: 850000 }
        ]
    },
    {
        id: 21,
        name: "Lexar NM790 M.2 2280 PCIe Gen4x4 NVMe",
        brand: "Lexar",
        category: "storage",
        type: "SSD",
        price: 385000,
        originalPrice: null,
        discount: null,
        description: "قرص SSD فائق السرعة، واجهة PCIe Gen4x4، سرعة قراءة تصل إلى 7400MB/s، متوفر بسعات 1TB و 4TB",
        features: ["PCIe Gen4x4", "7400MB/s Read", "6500MB/s Write", "Low Power", "5 Years Warranty"],
        images: [
            "https://www.lexar.com/wp-content/uploads/2022/11/NM790_Angle_R_2280.png"
        ],
        inStock: true,
        badge: "أداء فائق",
        rating: 5,
        variants: [
            { capacity: "1TB", price: 385000 },
            { capacity: "4TB", price: 1250000 }
        ]
    },
    {
        id: 22,
        name: "Seagate Surveillance HDD",
        brand: "Seagate",
        category: "storage",
        type: "HDD",
        price: 145000,
        originalPrice: null,
        discount: null,
        description: "قرص صلب للمراقبة، مصمم للعمل 24/7، موثوقية عالية لتخزين لقطات المراقبة، سعات من 1TB إلى 12TB",
        features: ["24/7 Operation", "موثوقية عالية", "سعات متعددة", "ImagePerfect", "3 سنوات ضمان"],
        images: [
            "https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/product-content/surveillance-fam/skyhawk/images/skyhawk-8tb-front-lo-res.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5,
        variants: [
            { capacity: "1TB", price: 145000 },
            { capacity: "2TB", price: 185000 },
            { capacity: "4TB", price: 275000 },
            { capacity: "6TB", price: 375000 },
            { capacity: "8TB", price: 475000 },
            { capacity: "10TB", price: 625000 },
            { capacity: "12TB", price: 825000 }
        ]
    },
    {
        id: 23,
        name: "Lexar NS100 2.5\" SATA III SSD",
        brand: "Lexar",
        category: "storage",
        type: "SSD",
        price: 85000,
        originalPrice: null,
        discount: null,
        description: "قرص SSD بواجهة SATA III، مثالي لتحديث الأجهزة القديمة، متوفر بأحجام مختلفة",
        features: ["SATA III 6Gb/s", "520MB/s Read", "Shock Resistant", "Low Power", "3 Years Warranty"],
        images: [
            "https://www.lexar.com/wp-content/uploads/2020/01/NS100_Hero_Angle.png"
        ],
        inStock: true,
        badge: null,
        rating: 4,
        variants: [
            { capacity: "128GB", price: 85000 },
            { capacity: "256GB", price: 125000 },
            { capacity: "512GB", price: 185000 },
            { capacity: "1TB", price: 285000 }
        ]
    },

    // أجهزة الشبكات
    {
        id: 24,
        name: "TP-Link Deco E4 AC1200 Mesh Wi-Fi System",
        brand: "TP-Link",
        category: "network",
        type: "Mesh System",
        price: 245000,
        originalPrice: null,
        discount: null,
        description: "نظام شبكة Mesh، تغطية واسعة ومستقرة، يزيل المناطق الضعيفة، سهل الإعداد، تحكم أبوي",
        features: ["AC1200 Speed", "تغطية واسعة", "سهل الإعداد", "تطبيق Deco", "تحكم أبوي"],
        images: [
            "https://static.tp-link.com/2019/201906/20190620/Deco%20E4(1-pack).png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5,
        variants: [
            { pack: "2-Pack", price: 245000 },
            { pack: "3-Pack", price: 345000 }
        ]
    },
    {
        id: 25,
        name: "Ubiquiti U6-PLUS Wireless Access Point",
        brand: "Ubiquiti",
        category: "network",
        type: "Access Point",
        price: 485000,
        originalPrice: null,
        discount: null,
        description: "نقطة وصول Wi-Fi 6، تغطية واسعة واتصال موثوق، أداء عالي في الشبكات المزدحمة",
        features: ["Wi-Fi 6", "5GHz & 2.4GHz", "300+ Clients", "PoE Powered", "UniFi Controller"],
        images: [
            "https://cdn.ui.com/app-unifi/products/U6-Plus/default/c70b690f-b259-47e7-823f-16bb9e962b32.png"
        ],
        inStock: true,
        badge: "Wi-Fi 6",
        rating: 5
    },
    {
        id: 26,
        name: "TP-Link Deco X10 AX1500 Wi-Fi 6 Mesh System",
        brand: "TP-Link",
        category: "network",
        type: "Mesh System",
        price: 485000,
        originalPrice: 520000,
        discount: 7,
        description: "نظام Mesh بتقنية Wi-Fi 6، سرعات تصل إلى 1500Mbps، مثالي للمنازل الذكية والألعاب",
        features: ["Wi-Fi 6 AX1500", "OFDMA & MU-MIMO", "تغطية شاملة", "WPA3 Security", "3-Pack"],
        images: [
            "https://static.tp-link.com/2020/202012/20201208/Deco%20X10(3-pack).png"
        ],
        inStock: true,
        badge: "Wi-Fi 6",
        rating: 4.5
    },
    {
        id: 27,
        name: "TP-Link Archer AX10 AX1500 Wi-Fi 6 Router",
        brand: "TP-Link",
        category: "network",
        type: "Router",
        price: 185000,
        originalPrice: null,
        discount: null,
        description: "راوتر Wi-Fi 6 بسرعة جيجابت، مثالي للبث بدقة 4K والألعاب",
        features: ["Wi-Fi 6 AX1500", "Dual Band", "4 Gigabit Ports", "OFDMA", "WPA3"],
        images: [
            "https://static.tp-link.com/2019/201912/20191216/Archer%20AX10.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 28,
        name: "TP-Link TL-WA855RE Wi-Fi Range Extender",
        brand: "TP-Link",
        category: "network",
        type: "Range Extender",
        price: 65000,
        originalPrice: null,
        discount: null,
        description: "مقوي إشارة Wi-Fi، يوسع التغطية، منفذ إيثرنت، متوافق مع جميع أجهزة الراوتر",
        features: ["300Mbps", "External Antennas", "Ethernet Port", "WPS Button", "LED Signal Indicator"],
        images: [
            "https://static.tp-link.com/2016/201607/20160725/TL-WA855RE-01.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 29,
        name: "Ubiquiti U6 MESH PRO Indoor/Outdoor AP",
        brand: "Ubiquiti",
        category: "network",
        type: "Access Point",
        price: 785000,
        originalPrice: null,
        discount: null,
        description: "نقطة وصول Wi-Fi 6 للداخل والخارج، تصميم Mesh، 4 تدفقات مكانية، أداء عالي",
        features: ["Wi-Fi 6", "Indoor/Outdoor", "4x4 MIMO", "IP55 Rated", "UniFi Mesh"],
        images: [
            "https://cdn.ui.com/app-unifi/products/U6-Mesh-Pro/default/3e2e7e42-b743-4e72-b089-0e45ef4c31e9.png"
        ],
        inStock: true,
        badge: "Pro",
        rating: 5
    },
    {
        id: 30,
        name: "TP-Link Archer C80 AC1900 MU-MIMO Router",
        brand: "TP-Link",
        category: "network",
        type: "Router",
        price: 145000,
        originalPrice: null,
        discount: null,
        description: "راوتر مزدوج النطاق، سرعات تصل إلى 1900Mbps، تقنية MU-MIMO للأجهزة المتعددة",
        features: ["AC1900", "3×3 MU-MIMO", "Beamforming", "4 Gigabit Ports", "Parental Controls"],
        images: [
            "https://static.tp-link.com/2019/201908/20190809/Archer%20C80.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 31,
        name: "Hikvision DS-3WF02-5AC/D Wireless Bridge Kit",
        brand: "Hikvision",
        category: "network",
        type: "Wireless Bridge",
        price: 685000,
        originalPrice: null,
        discount: null,
        description: "جسر لاسلكي للمسافات الطويلة حتى 5 كم، سرعة 867Mbps على تردد 5GHz",
        features: ["5GHz Frequency", "867Mbps", "5KM Range", "IP66 Rated", "Point-to-Point"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000051/S000000141/S000001396/OFR002614/M000022814/images/DS-3WF02C-5AC.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 32,
        name: "TP-Link TL-WR845N 300Mbps Wireless Router",
        brand: "TP-Link",
        category: "network",
        type: "Router",
        price: 55000,
        originalPrice: null,
        discount: null,
        description: "راوتر اقتصادي، سرعة 300Mbps، مثالي للاستخدامات اليومية",
        features: ["300Mbps", "3 Antennas", "4 LAN Ports", "WPS Button", "IP Bandwidth Control"],
        images: [
            "https://static.tp-link.com/2016/201608/20160819/TL-WR845N-01.jpg"
        ],
        inStock: true,
        badge: "اقتصادي",
        rating: 3.5
    },
    {
        id: 33,
        name: "TP-Link Archer C6 AC1200 Gigabit Router",
        brand: "TP-Link",
        category: "network",
        type: "Router",
        price: 125000,
        originalPrice: null,
        discount: null,
        description: "راوتر جيجابت مزدوج النطاق، تقنية MU-MIMO، سرعات عالية واتصال مستقر",
        features: ["AC1200", "MU-MIMO", "Gigabit Ports", "Access Point Mode", "IPv6 Support"],
        images: [
            "https://static.tp-link.com/2018/201809/20180907/Archer%20C6.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 34,
        name: "Hikvision DS-3WF0EC-SACT(B) Elevator Bridge",
        brand: "Hikvision",
        category: "network",
        type: "Wireless Bridge",
        price: 485000,
        originalPrice: null,
        discount: null,
        description: "جسر لاسلكي للمصاعد، مزدوج التردد 5GHz، نطاق يصل إلى 500 متر",
        features: ["Dual 5GHz", "500M Range", "Elevator Special", "Auto-Tracking", "Stable Connection"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000051/S000001601/OFR002621/M000023026/images/DS-3WF0EC-SACT(B).png"
        ],
        inStock: true,
        badge: "للمصاعد",
        rating: 4.5
    },
    {
        id: 35,
        name: "TP-Link TL-WR840N 300Mbps Wireless N",
        brand: "TP-Link",
        category: "network",
        type: "Router",
        price: 45000,
        originalPrice: null,
        discount: null,
        description: "راوتر بسعر مناسب للجميع، سرعة 300Mbps، موثوق للمنازل الصغيرة",
        features: ["300Mbps", "2 Antennas", "4 LAN Ports", "WPS", "Easy Setup"],
        images: [
            "https://static.tp-link.com/res/images/products/TL-WR840N_EU_6.20_01.jpg"
        ],
        inStock: true,
        badge: "الأرخص",
        rating: 3.5
    },
    {
        id: 36,
        name: "TP-Link Deco M4 AC1200 Mesh System",
        brand: "TP-Link",
        category: "network",
        type: "Mesh System",
        price: 285000,
        originalPrice: null,
        discount: null,
        description: "نظام Mesh قوي، تغطية حتى 5500 قدم مربع، شبكة موحدة باسم واحد",
        features: ["AC1200", "5500 sq ft Coverage", "100+ Devices", "Seamless Roaming", "Parental Controls"],
        images: [
            "https://static.tp-link.com/2018/201807/20180717/Deco%20M4(3-pack).jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5,
        variants: [
            { pack: "2-Pack", price: 285000 },
            { pack: "3-Pack", price: 385000 }
        ]
    },
    {
        id: 37,
        name: "Ubiquiti Powerbeam 5AC Gen2",
        brand: "Ubiquiti",
        category: "network",
        type: "Wireless Bridge",
        price: 385000,
        originalPrice: null,
        discount: null,
        description: "جسر لاسلكي خارجي 5GHz، اتصال عالي السرعة للمسافات الطويلة",
        features: ["5GHz airMAX", "25+ km Range", "450+ Mbps", "25 dBi Antenna", "GigE Port"],
        images: [
            "https://cdn.ui.com/app-airmax/products/PBE-5AC-Gen2/gallery/PBE-5AC-Gen2_01.png"
        ],
        inStock: true,
        badge: null,
        rating: 5
    },
    {
        id: 38,
        name: "TP-Link Archer C20 AC750 Dual Band Router",
        brand: "TP-Link",
        category: "network",
        type: "Router",
        price: 85000,
        originalPrice: null,
        discount: null,
        description: "راوتر مزدوج النطاق، تغطية أوسع وأداء أقوى، سرعات تصل إلى 750Mbps",
        features: ["AC750", "Dual Band", "3 Antennas", "4 LAN Ports", "Guest Network"],
        images: [
            "https://static.tp-link.com/res/images/products/Archer%20C20.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 39,
        name: "Ubiquiti U7 PRO Wireless Access Point",
        brand: "Ubiquiti",
        category: "network",
        type: "Access Point",
        price: 985000,
        originalPrice: null,
        discount: null,
        description: "نقطة وصول Wi-Fi 7، أحدث التقنيات، تدعم 300+ جهاز، تغطية 1500 قدم مربع",
        features: ["Wi-Fi 7", "BE11000", "300+ Clients", "1500 sq ft", "2.5GbE Port"],
        images: [
            "https://cdn.ui.com/app-unifi/products/U7-Pro/gallery/U7-Pro_01.png"
        ],
        inStock: false,
        badge: "Wi-Fi 7",
        rating: 0
    },
    {
        id: 40,
        name: "Ubiquiti U6 LR Wireless Access Point",
        brand: "Ubiquiti",
        category: "network",
        type: "Access Point",
        price: 585000,
        originalPrice: null,
        discount: null,
        description: "نقطة وصول Wi-Fi 6 طويلة المدى، تغطية 2000 قدم مربع، دعم 300+ جهاز",
        features: ["Wi-Fi 6", "Long Range", "2000 sq ft", "300+ Clients", "PoE+"],
        images: [
            "https://cdn.ui.com/app-unifi/products/U6-LR/gallery/U6-LR_01.png"
        ],
        inStock: true,
        badge: "Long Range",
        rating: 4.5
    },
    {
        id: 41,
        name: "Hikvision DS-3WF0BC-2NT(B) Wireless Bridge",
        brand: "Hikvision",
        category: "network",
        type: "Wireless Bridge",
        price: 285000,
        originalPrice: null,
        discount: null,
        description: "جسر لاسلكي بنقل مستقر حتى 200 متر، سرعة 300Mbps على تردد 2.4GHz",
        features: ["2.4GHz", "300Mbps", "200M Range", "IP66", "Point-to-Point"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000051/OFR002619/M000023024/images/DS-3WF0BC-2NT(B).png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 42,
        name: "Ubiquiti Litebeam M5 LBE-M5-23",
        brand: "Ubiquiti",
        category: "network",
        type: "Wireless Bridge",
        price: 185000,
        originalPrice: null,
        discount: null,
        description: "جسر لاسلكي خارجي 5GHz، سرعة 100+ Mbps، مثالي للربط بتكلفة منخفضة",
        features: ["5GHz", "100+ Mbps", "23 dBi", "30+ km Range", "airMAX"],
        images: [
            "https://dl.ubnt.com/press/litebeam/LBE-M5-23_3.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 43,
        name: "TP-Link Deco S7 AC1900 Mesh System",
        brand: "TP-Link",
        category: "network",
        type: "Mesh System",
        price: 385000,
        originalPrice: null,
        discount: null,
        description: "نظام Mesh قوي، تغطية 5600 قدم مربع، سرعات 1900Mbps، 3 منافذ جيجابت لكل وحدة",
        features: ["AC1900", "5600 sq ft", "3 Gigabit Ports", "100 Devices", "2-Pack"],
        images: [
            "https://static.tp-link.com/upload/product-overview/2021/202105/20210521/Deco%20S7(2-pack).png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 44,
        name: "TP-Link TL-WA850RE Range Extender",
        brand: "TP-Link",
        category: "network",
        type: "Range Extender",
        price: 55000,
        originalPrice: null,
        discount: null,
        description: "مقوي إشارة 300Mbps، سهل التركيب، يوسع التغطية بضغطة زر",
        features: ["300Mbps", "Range Extender Mode", "WPS", "Ethernet Port", "LED Indicator"],
        images: [
            "https://static.tp-link.com/res/images/products/TL-WA850RE_V7.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },

    // كاميرات المراقبة وأنظمة الأمان
    {
        id: 45,
        name: "Hikvision G2PRO DASHCAM",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 485000,
        originalPrice: null,
        discount: null,
        description: "كاميرا سيارة احترافية، شاشة 3 بوصة تعمل باللمس، GPS، تسجيل 4K، نظام ADAS الذكي، Wi-Fi",
        features: ["4K Recording", "3\" Touch Screen", "GPS Tracking", "ADAS System", "Parking Mode"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/G2PRO/hikvision-g2-pro-side.png"
        ],
        inStock: true,
        badge: "Pro",
        rating: 5
    },
    {
        id: 46,
        name: "Hikvision DS-KIS604-S(C) IP Video Intercom",
        brand: "Hikvision",
        category: "security",
        type: "Video Intercom",
        price: 785000,
        originalPrice: null,
        discount: null,
        description: "نظام انتركم IP، مراقبة وتواصل بوضوح HD، وحدة خارجية بكاميرا ووحدة داخلية بشاشة",
        features: ["IP Intercom", "HD Video", "Two-way Audio", "Remote Access", "Night Vision"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000201/S000003001/S000005851/OFR002274/images/DS-KIS604-S_C_.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 47,
        name: "Hikvision DS-KIS213(B) HD Video Intercom",
        brand: "Hikvision",
        category: "security",
        type: "Video Intercom",
        price: 485000,
        originalPrice: null,
        discount: null,
        description: "نظام انتركم فيديو HD، وحدة خارجية مع كاميرا ووحدة داخلية مع شاشة للزوار",
        features: ["HD Video", "7\" Monitor", "Door Release", "Night Vision", "Two-way Audio"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000201/OFR002272/images/DS-KIS213_B_.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 48,
        name: "Hikvision K5 DASHCAM",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 385000,
        originalPrice: null,
        discount: null,
        description: "كاميرا سيارة، تطبيق HikDashcam، تسجيل 5MP، Wi-Fi، شاشة 3 بوصة، ذاكرة حتى 256GB",
        features: ["5MP Recording", "3\" Screen", "Wi-Fi", "256GB Support", "G-Sensor"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/K5/K5.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 49,
        name: "Hikvision D1PRO DASHCAM",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 285000,
        originalPrice: null,
        discount: null,
        description: "كاميرا سيارة مدمجة، تسجيل 4MP، Wi-Fi، G-Sensor، ذاكرة حتى 256GB",
        features: ["4MP Recording", "Compact Design", "Wi-Fi", "G-Sensor", "Auto Recording"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/D1/D1.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 50,
        name: "Hikvision K2 DASHCAM",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 185000,
        originalPrice: null,
        discount: null,
        description: "كاميرا سيارة، دقة 2MP، ذاكرة حتى 128GB، G-Sensor، Wi-Fi، تطبيق HikDashcam",
        features: ["2MP Recording", "128GB Support", "Wi-Fi", "G-Sensor", "Loop Recording"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/K2/K2.png"
        ],
        inStock: true,
        badge: "اقتصادي",
        rating: 3.5
    },
    {
        id: 51,
        name: "Hikvision C200S DASHCAM",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 325000,
        originalPrice: null,
        discount: null,
        description: "كاميرا مزدوجة أمامية وخلفية 1080p، شاشة 3 بوصة، Wi-Fi، ذاكرة حتى 256GB",
        features: ["Dual Camera", "1080p Front/Rear", "3\" Screen", "Wi-Fi", "G-Sensor"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/C200S/C200S.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 52,
        name: "Hikvision C8PRO DASHCAM",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 585000,
        originalPrice: null,
        discount: null,
        description: "كاميرا احترافية، 4K أمامية و 2MP خلفية، ADAS، أوامر صوتية، Wi-Fi",
        features: ["4K Front", "2MP Rear", "ADAS", "Voice Control", "256GB Support"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/C8PRO/C8PRO.png"
        ],
        inStock: true,
        badge: "Pro",
        rating: 5
    },
    {
        id: 53,
        name: "Hikvision C6S DASHCAM GPS",
        brand: "Hikvision",
        category: "security",
        type: "Dashcam",
        price: 425000,
        originalPrice: null,
        discount: null,
        description: "كاميرا سيارة مع GPS، مراقبة عند الوقوف، شاشة 3 بوصة، تسجيل 4K، Wi-Fi",
        features: ["4K Recording", "GPS", "Parking Mode", "3\" Screen", "Wi-Fi"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/auto-product-line/Dash-cam/C6S/C6S.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 54,
        name: "Hikvision DS-KIS703Y-P IP Video Intercom",
        brand: "Hikvision",
        category: "security",
        type: "Video Intercom",
        price: 985000,
        originalPrice: null,
        discount: null,
        description: "انتركم ذكي بشاشة لمس 7 بوصة، كاميرا 2MP، نظام السلكين الرقمي IP",
        features: ["7\" Touch Screen", "2MP Camera", "Two-wire System", "Remote Access", "Smart Home"],
        images: [
            "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000201/S000005901/OFR004217/images/DS-KIS703-P.png"
        ],
        inStock: true,
        badge: "Smart",
        rating: 5
    },

    // مزودات الطاقة وبنوك الطاقة
    {
        id: 55,
        name: "Power Maxma UPS 2000VA",
        brand: "Power Maxma",
        category: "power",
        type: "UPS",
        price: 485000,
        originalPrice: null,
        discount: null,
        description: "مزود طاقة 2000VA، بطاريتين 12V/9Ah، حماية للأجهزة الإلكترونية عند انقطاع الكهرباء",
        features: ["2000VA/1200W", "2x 12V/9Ah", "AVR", "6 Outlets", "LCD Display"],
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2023/6/319853289/GZ/LN/SH/74973802/power-guard-pg2000va-24v-2000va-24v-ups.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 56,
        name: "Yesido YP64 Super Mini Power Bank",
        brand: "Yesido",
        category: "power",
        type: "Power Bank",
        price: 85000,
        originalPrice: null,
        discount: null,
        description: "بنك طاقة صغير 10000mAh، شحن سريع 22.5W، شاشة LED، Type-C 18W/20W",
        features: ["10000mAh", "22.5W Fast Charge", "LED Display", "Type-C PD", "Compact Size"],
        images: [
            "https://yesido.com/cdn/shop/files/YP64_3.jpg"
        ],
        inStock: true,
        badge: "صغير الحجم",
        rating: 4.5
    },
    {
        id: 57,
        name: "Power Maxma UPS 850VA",
        brand: "Power Maxma",
        category: "power",
        type: "UPS",
        price: 225000,
        originalPrice: null,
        discount: null,
        description: "مزود طاقة 850VA، بطارية 12V/7Ah، حماية أساسية للأجهزة المنزلية والمكتبية",
        features: ["850VA/510W", "1x 12V/7Ah", "AVR", "4 Outlets", "Compact Design"],
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2023/7/325584875/EI/FV/IX/189875825/850va-offline-ups.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 58,
        name: "Power Maxma UPS 2500VA",
        brand: "Power Maxma",
        category: "power",
        type: "UPS",
        price: 685000,
        originalPrice: null,
        discount: null,
        description: "مزود طاقة 2500VA، بطاريتين 12V/12Ah، طاقة احتياطية لوقت أطول",
        features: ["2500VA/1500W", "2x 12V/12Ah", "AVR", "8 Outlets", "LCD Display"],
        images: [
            "https://5.imimg.com/data5/ANDROID/Default/2023/8/333244477/OP/WD/TZ/74973802/product-jpeg.jpg"
        ],
        inStock: true,
        badge: "قوي",
        rating: 5
    },
    {
        id: 59,
        name: "Power Maxma UPS 1500VA",
        brand: "Power Maxma",
        category: "power",
        type: "UPS",
        price: 385000,
        originalPrice: null,
        discount: null,
        description: "مزود طاقة 1500VA، بطاريتين 12V/9Ah، مناسب لأجهزة الكمبيوتر والشاشات",
        features: ["1500VA/900W", "2x 12V/9Ah", "AVR", "6 Outlets", "LED Indicators"],
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2022/12/FV/QI/GD/74973802/whatsapp-image-2022-12-14-at-10-52-33-am.jpeg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 60,
        name: "Power Maxma UPS 1200VA",
        brand: "Power Maxma",
        category: "power",
        type: "UPS",
        price: 325000,
        originalPrice: null,
        discount: null,
        description: "مزود طاقة 1200VA، بطاريتين 12V/7Ah، حماية فعالة للأجهزة الإلكترونية",
        features: ["1200VA/720W", "2x 12V/7Ah", "AVR", "4 Outlets", "Overload Protection"],
        images: [
            "https://5.imimg.com/data5/SELLER/Default/2023/1/HO/YB/YA/74973802/1200va-ups.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 61,
        name: "Yesido YP69 Wireless Power Bank",
        brand: "Yesido",
        category: "power",
        type: "Power Bank",
        price: 125000,
        originalPrice: null,
        discount: null,
        description: "بنك طاقة لاسلكي 10000mAh، شحن مغناطيسي 15W، قاعدة للساعة 2W، Type-C 18W",
        features: ["10000mAh", "15W Wireless", "MagSafe Compatible", "Watch Charger", "22.5W Output"],
        images: [
            "https://yesido.com/cdn/shop/files/YP69-1.jpg"
        ],
        inStock: true,
        badge: "لاسلكي",
        rating: 5
    },
    {
        id: 62,
        name: "Yesido YP52 Super Mini Power Bank",
        brand: "Yesido",
        category: "power",
        type: "Power Bank",
        price: 75000,
        originalPrice: null,
        discount: null,
        description: "بنك طاقة صغير 10000mAh، شحن سريع 22.5W، مؤشر LED، Type-C 18W/20W",
        features: ["10000mAh", "22.5W Fast", "LED Indicator", "Type-C PD", "Ultra Compact"],
        images: [
            "https://yesido.com/cdn/shop/files/YP52-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 63,
        name: "Yesido YP40 Power Bank",
        brand: "Yesido",
        category: "power",
        type: "Power Bank",
        price: 65000,
        originalPrice: null,
        discount: null,
        description: "بنك طاقة 10000mAh مع شاشة LED، بطارية ليثيوم بوليمر عالية الجودة",
        features: ["10000mAh", "LED Display", "10W Output", "Dual USB", "Safety Protection"],
        images: [
            "https://yesido.com/cdn/shop/products/YP40.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 3.5
    },

    // ملحقات وإكسسوارات
    {
        id: 64,
        name: "4K HDTV Cable 2.0V",
        brand: "Generic",
        category: "accessories",
        type: "Cable",
        price: 22500,
        originalPrice: 25000,
        discount: 10,
        description: "كابل HDMI 2.0 يدعم 4K وHDR، متوفر بأطوال مختلفة من 1.5م إلى 30م",
        features: ["4K@60Hz", "HDR Support", "18Gbps", "Gold Plated", "Multiple Lengths"],
        images: [
            "https://m.media-amazon.com/images/I/61kZAwtUd6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71o+i5bAXiL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: "خصم 10%",
        rating: 4,
        variants: [
            { length: "1.5m", price: 22500 },
            { length: "3m", price: 31500 },
            { length: "5m", price: 40500 },
            { length: "10m", price: 58500 },
            { length: "15m", price: 76500 },
            { length: "20m", price: 112500 },
            { length: "30m", price: 166500 }
        ]
    },
    {
        id: 65,
        name: "Type C to USB Adapter",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 15000,
        originalPrice: null,
        discount: null,
        description: "محول USB-C إلى USB-A، أداء سريع وتوافق واسع",
        features: ["USB 3.0", "5Gbps", "OTG Support", "Aluminum Body", "Plug & Play"],
        images: [
            "https://m.media-amazon.com/images/I/51Brl52OqIL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 66,
        name: "Yesido C98 Universal Holder",
        brand: "Yesido",
        category: "accessories",
        type: "Holder",
        price: 45000,
        originalPrice: null,
        discount: null,
        description: "حامل مكتبي قابل للتعديل 360°، يدعم الأجهزة حتى 12.9 بوصة",
        features: ["360° Rotation", "Up to 12.9\"", "Stable Base", "Adjustable Height", "Anti-Slip"],
        images: [
            "https://yesido.com/cdn/shop/products/C98-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 67,
        name: "RJ45 to USB Extender",
        brand: "Generic",
        category: "accessories",
        type: "Extender",
        price: 85000,
        originalPrice: null,
        discount: null,
        description: "موسع USB عبر كابل الشبكة، يوصل أجهزة USB لمسافات طويلة",
        features: ["Up to 60m", "USB 2.0", "480Mbps", "RJ45 Cable", "Plug & Play"],
        images: [
            "https://m.media-amazon.com/images/I/61bXJDNQgML._AC_SL1000_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 68,
        name: "Yesido C297 Broadcast Holder",
        brand: "Yesido",
        category: "accessories",
        type: "Holder",
        price: 65000,
        originalPrice: null,
        discount: null,
        description: "حامل للبث المباشر، قابل للتعديل 30-46 سم، قاعدة مغناطيسية قوية N52",
        features: ["360° Rotation", "30-46cm Height", "N52 Magnet", "Live Streaming", "Stable Base"],
        images: [
            "https://yesido.com/cdn/shop/files/C297-1.jpg"
        ],
        inStock: true,
        badge: "للبث",
        rating: 5
    },
    {
        id: 69,
        name: "Yesido C299 Desktop Stand",
        brand: "Yesido",
        category: "accessories",
        type: "Stand",
        price: 35000,
        originalPrice: null,
        discount: null,
        description: "حامل مكتبي من الألومنيوم، قابل للطي، للهواتف 4.5-6.7 بوصة",
        features: ["Aluminum Alloy", "Foldable", "4.5-6.7\"", "Multi-Angle", "Anti-Slip"],
        images: [
            "https://yesido.com/cdn/shop/files/C299-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 70,
        name: "Yesido C185 Tablet Stand",
        brand: "Yesido",
        category: "accessories",
        type: "Stand",
        price: 55000,
        originalPrice: null,
        discount: null,
        description: "حامل معدني للأجهزة اللوحية، قابل للطي، تبريد هوائي، 4.5-13 بوصة",
        features: ["Metal Build", "Height Adjustable", "4.5-13\"", "Heat Dissipation", "Foldable"],
        images: [
            "https://yesido.com/cdn/shop/products/C185-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 71,
        name: "8-in-1 Type-C HUB",
        brand: "Generic",
        category: "accessories",
        type: "HUB",
        price: 125000,
        originalPrice: null,
        discount: null,
        description: "محطة توصيل USB-C متعددة، 8 منافذ مختلفة في جهاز واحد",
        features: ["HDMI 4K", "3x USB 3.0", "SD/TF Card", "Ethernet", "100W PD"],
        images: [
            "https://m.media-amazon.com/images/I/61O5jCTn0YL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: "8 في 1",
        rating: 4.5
    },
    {
        id: 72,
        name: "USB Bluetooth 5.0 Adapter",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 25000,
        originalPrice: null,
        discount: null,
        description: "محول بلوتوث USB، يضيف اتصال بلوتوث لأجهزة الكمبيوتر",
        features: ["Bluetooth 5.0", "20m Range", "Low Energy", "Windows/Linux", "Plug & Play"],
        images: [
            "https://m.media-amazon.com/images/I/51mP7Vq6qJL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 73,
        name: "Yesido LP01 Laptop Stand",
        brand: "Yesido",
        category: "accessories",
        type: "Stand",
        price: 75000,
        originalPrice: null,
        discount: null,
        description: "حامل لابتوب من الألومنيوم، محمول وقابل للطي، تصميم مريح",
        features: ["Aluminum Alloy", "Portable", "Ergonomic", "Heat Dissipation", "Multi-Device"],
        images: [
            "https://yesido.com/cdn/shop/products/LP01-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 74,
        name: "USB WiFi 6 + Bluetooth Adapter",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 65000,
        originalPrice: null,
        discount: null,
        description: "محول Wi-Fi 6 وبلوتوث، اتصال مزدوج في جهاز واحد",
        features: ["WiFi 6 AX1800", "Bluetooth 5.2", "WPA3", "MU-MIMO", "Dual Band"],
        images: [
            "https://m.media-amazon.com/images/I/61n0ct9HFCL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: "WiFi 6",
        rating: 5
    },
    {
        id: 75,
        name: "VGA to HDMI Adapter",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 35000,
        originalPrice: null,
        discount: null,
        description: "محول VGA إلى HDMI، يربط الأجهزة القديمة بالشاشات الحديثة",
        features: ["1080p@60Hz", "Audio Support", "Powered by USB", "Gold Plated", "Plug & Play"],
        images: [
            "https://m.media-amazon.com/images/I/61pI5HzorkL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 76,
        name: "USB WiFi 6 Adapter AX1800",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 55000,
        originalPrice: null,
        discount: null,
        description: "محول USB Wi-Fi 6، سرعة فائقة واستقرار عالي",
        features: ["WiFi 6 AX1800", "Dual Band", "WPA3", "Low Latency", "Windows/Linux"],
        images: [
            "https://m.media-amazon.com/images/I/51+vJZpPnGL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 77,
        name: "USB to Type-C Adapter",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 12000,
        originalPrice: null,
        discount: null,
        description: "محول USB-A إلى USB-C، سرعة ومرونة في التوصيل",
        features: ["USB 3.0", "5Gbps", "Aluminum", "Compact", "Reversible"],
        images: [
            "https://m.media-amazon.com/images/I/41Ye-3PbTFL._AC_SL1024_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 78,
        name: "USB WiFi Adapter with Antenna",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 45000,
        originalPrice: null,
        discount: null,
        description: "محول Wi-Fi USB مع هوائي خارجي، استقبال قوي ومستقر",
        features: ["AC1200", "5dBi Antenna", "Dual Band", "WPS", "Windows/Mac/Linux"],
        images: [
            "https://m.media-amazon.com/images/I/51vE3AV4HCL._AC_SL1280_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 79,
        name: "8K HDTV Cable 2.1V",
        brand: "Generic",
        category: "accessories",
        type: "Cable",
        price: 45000,
        originalPrice: null,
        discount: null,
        description: "كابل HDMI 2.1 يدعم 8K وHDR، أعلى جودة للصورة والصوت",
        features: ["8K@60Hz", "4K@120Hz", "48Gbps", "eARC", "Dynamic HDR"],
        images: [
            "https://m.media-amazon.com/images/I/71p0BVEqNUL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: "8K",
        rating: 5,
        variants: [
            { length: "1.5m", price: 45000 },
            { length: "3m", price: 65000 },
            { length: "5m", price: 85000 },
            { length: "10m", price: 125000 },
            { length: "15m", price: 185000 },
            { length: "20m", price: 285000 }
        ]
    },
    {
        id: 80,
        name: "Yesido C96 Phone Holder",
        brand: "Yesido",
        category: "accessories",
        type: "Holder",
        price: 25000,
        originalPrice: null,
        discount: null,
        description: "حامل هواتف مرن من الألومنيوم والسيليكون، تصميم أنيق ومستقر",
        features: ["Flexible Arm", "Aluminum + Silicone", "360° Rotation", "Anti-Slip", "Universal"],
        images: [
            "https://yesido.com/cdn/shop/products/C96-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 81,
        name: "Yesido C183 Tablet Stand",
        brand: "Yesido",
        category: "accessories",
        type: "Stand",
        price: 45000,
        originalPrice: null,
        discount: null,
        description: "حامل أجهزة لوحية من الألومنيوم، قابل للطي والتمديد، قوي ومتين",
        features: ["Aluminum Alloy", "Foldable", "Extendable", "Heavy Duty", "Anti-Slip"],
        images: [
            "https://yesido.com/cdn/shop/products/C183-1.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 82,
        name: "Type-C to RJ45 Gigabit Adapter",
        brand: "Generic",
        category: "accessories",
        type: "Adapter",
        price: 55000,
        originalPrice: null,
        discount: null,
        description: "محول Type-C إلى RJ45، اتصال إنترنت سلكي سريع ومستقر",
        features: ["Gigabit Ethernet", "1000Mbps", "Aluminum", "LED Indicator", "Plug & Play"],
        images: [
            "https://m.media-amazon.com/images/I/51bXf0wTCZL._AC_SL1500_.jpg"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },

    // هواتف IP
    {
        id: 83,
        name: "Fanvil W611W Portable Wi-Fi Phone",
        brand: "Fanvil",
        category: "ipphone",
        type: "Wi-Fi Phone",
        price: 385000,
        originalPrice: null,
        discount: null,
        description: "هاتف محمول يعمل عبر Wi-Fi، مثالي للبيئات التي تتطلب التنقل المستمر",
        features: ["Wi-Fi 802.11b/g/n", "HD Voice", "Color Display", "Push-to-Talk", "Long Battery"],
        images: [
            "https://fanvil.com/Uploads/detail/2020-07-15/5f0ec4e6bc6f9.png"
        ],
        inStock: true,
        badge: null,
        rating: 4.5
    },
    {
        id: 84,
        name: "Fanvil X303P Enterprise IP Phone",
        brand: "Fanvil",
        category: "ipphone",
        type: "IP Phone",
        price: 225000,
        originalPrice: null,
        discount: null,
        description: "هاتف IP للمؤسسات، تصميم مريح مع ميزات متقدمة للأعمال",
        features: ["2 SIP Lines", "HD Voice", "PoE Support", "3-way Conference", "Color Display"],
        images: [
            "https://fanvil.com/Uploads/detail/2021-08-25/61260d2e8a827.png"
        ],
        inStock: true,
        badge: null,
        rating: 4
    },
    {
        id: 85,
        name: "Fanvil X4U Enterprise IP Phone",
        brand: "Fanvil",
        category: "ipphone",
        type: "IP Phone",
        price: 325000,
        originalPrice: null,
        discount: null,
        description: "هاتف IP متقدم بشاشتين ملونتين، يعزز الإنتاجية في بيئة العمل",
        features: ["4 SIP Lines", "Dual Display", "Gigabit", "Bluetooth", "30 DSS Keys"],
        images: [
            "https://fanvil.com/Uploads/detail/2021-03-04/603ff0d0a9d24.png"
        ],
        inStock: true,
        badge: "شاشتين",
        rating: 4.5
    },
    {
        id: 86,
        name: "Fanvil X301P Enterprise IP Phone",
        brand: "Fanvil",
        category: "ipphone",
        type: "IP Phone",
        price: 185000,
        originalPrice: null,
        discount: null,
        description: "هاتف IP اقتصادي للمؤسسات، جودة صوت عالية وميزات أساسية",
        features: ["2 SIP Lines", "HD Voice", "PoE", "Headset Support", "Wall Mountable"],
        images: [
            "https://fanvil.com/Uploads/detail/2023-03-15/6411525ac8c8c.png"
        ],
        inStock: true,
        badge: "اقتصادي",
        rating: 4
    }
];

// دوال المساعدة
function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
}

function sortProducts(productList, sortBy) {
    const sorted = [...productList];
    switch(sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'discount':
            return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        default:
            return sorted;
    }
}

function getFeaturedProducts() {
    return products.filter(product => product.badge !== null || product.discount > 0).slice(0, 12);
}

function getDiscountedProducts() {
    return products.filter(product => product.discount && product.discount > 0);
}

function getBestDeals() {
    return products
        .filter(product => product.discount && product.discount >= 10)
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 6);
}

function formatPrice(price) {
    return price.toLocaleString('ar-IQ') + ' د.ع';
}

function calculateDiscountedPrice(price, discount) {
    if (!discount) return price;
    return Math.round(price * (1 - discount / 100));
}
