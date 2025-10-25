class ProductPage {
    constructor() {
        this.productId = this.getProductIdFromUrl();
        this.product = null;
        this.init();
    }

    getProductIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('id')) || 1;
    }
    init() {
        this.findProduct();
        if (this.product) {
            this.renderProduct();
            this.setupEventListeners();
            this.loadRelatedProducts();
        } else {
            this.showProductNotFound();
        }
    }
    findProduct() {
        for (const category in productsByCategory) {
            this.product = productsByCategory[category].find(p => p.id === this.productId);
            if (this.product) {
                this.product.category = category;
                break;
            }
        }
    }
    renderPrice() {
        const priceNotice = document.querySelector('.price-notice');
        
        if (this.product.price) {
            priceNotice.innerHTML = `
                <div class="product-price">
                    <span class="price-label">Цена:</span>
                    <span class="price-value">${this.product.price}</span>
                </div>
            `;
        } else {
            priceNotice.innerHTML = `
                <i class="fas fa-info-circle"></i>
                <p><strong>Цена:</strong> Индивидуальный расчет для каждого заказчика. Для получения коммерческого предложения свяжитесь с нашими менеджерами.</p>
            `;
        }
    }

    renderProduct() {
        this.updatePageTitle();
        this.renderGallery();
        this.renderProductInfo();
        this.renderPrice();
        this.renderSpecifications();
        this.renderDocuments();
        this.updateBreadcrumbs();
    }

    updatePageTitle() {
        document.title = `${this.product.name} - ООО "Торгсин"`;
    }

    renderGallery() {
        const mainImage = document.getElementById('mainImage');
        const thumbnailsContainer = document.getElementById('galleryThumbnails');

        if (this.product.images && this.product.images.length > 0) {
            mainImage.src = this.product.images[0];
            mainImage.alt = this.product.name;
            thumbnailsContainer.innerHTML = this.product.images.map((image, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}">
                    <img src="${image}" alt="${this.product.name} - фото ${index + 1}">
                </div>
            `).join('');

            this.setupGalleryEvents();
        } else {
            mainImage.src = this.product.image;
            mainImage.alt = this.product.name;
            thumbnailsContainer.innerHTML = '';
        }
    }

    setupGalleryEvents() {
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                document.getElementById('mainImage').src = thumbnail.dataset.image;
            });
        });
    }

    renderProductInfo() {
        document.getElementById('productTitle').textContent = this.product.name;
        document.getElementById('productDescription').innerHTML = this.product.longdescription;
    }

    renderSpecifications() {
        const specsGrid = document.getElementById('specsGrid');
        
        if (this.product.specifications) {
            let specsHTML = '';
            
            if (typeof tableConfig !== 'undefined' && tableConfig[this.product.category]) {
                const categoryConfig = tableConfig[this.product.category];
                
                if (categoryConfig && categoryConfig.columns) {
                    specsHTML = categoryConfig.columns
                        .filter(column => column.key !== 'name' && this.product.specifications[column.key])
                        .map(column => {
                            return `
                                <div class="spec-item">
                                    <span class="spec-label">${column.label}:</span>
                                    <span class="spec-value">${this.product.specifications[column.key]}</span>
                                </div>
                            `;
                        })
                        .join('');
                }
            } else {
                console.warn('tableConfig not found, using fallback specifications');
                specsHTML = this.renderFallbackSpecifications();
            }
            
            specsGrid.innerHTML = specsHTML || '<p>Характеристики не указаны</p>';
        } else {
            specsGrid.innerHTML = '<p>Характеристики не указаны</p>';
        }
    }

    renderFallbackSpecifications() {
        const labels = {
            'volume': 'Объем камеры',
            'power': 'Мощность',
            'temperature': 'Температура',
            'dimensions': 'Габариты',
            'weight': 'Вес',
            'square': 'Площадь пола',
            'capacity': 'Вместимость',
            'pressure': 'Давление',
            'voltage': 'Напряжение',
            'material': 'Материал',
            'warranty': 'Гарантия',
            'internal': 'Внутренние размеры',
            'source': 'Источник пара',
            'maxloading': 'Норма загрузки белья',
            'options': 'Варианты исполнения',
            'closemechanic': 'Механизм закрывания крышки',
            'humidity': 'Остаточная влажность',
            'modes': 'Количество режимов стерилизации',
            'type': 'Тип',
            'vacuumdry': 'Вакуумная сушка стерилизуемых изделий',
            'purpose': 'Назначение',
            'efficiency': 'Производительность',
            'tan': 'Нагревательные элементы',
            'quality': 'Качество производимой воды'
        };
        
        return Object.entries(this.product.specifications)
            .map(([key, value]) => {
                const label = labels[key] || key;
                return `
                    <div class="spec-item">
                        <span class="spec-label">${label}:</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `;
            })
            .join('');
    }

    renderDocuments() {
        const documentsGrid = document.getElementById('documentsGrid');
        
        if (this.product.documents && this.product.documents.length > 0) {
            documentsGrid.innerHTML = this.product.documents.map(doc => `
                <div class="document-card">
                    <div class="document-icon">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="document-info">
                        <h4>${doc.name}</h4>
                        <p>${doc.description || 'Техническая документация'}</p>
                        <a href="${doc.url}" class="btn btn-download" download>
                            <i class="fas fa-download"></i>
                            Скачать PDF
                        </a>
                    </div>
                </div>
            `).join('');
        } else {
            documentsGrid.innerHTML = `
                <div class="no-documents">
                    <i class="fas fa-file-alt"></i>
                    <p>Документация временно недоступна</p>
                    <p>Свяжитесь с нами для получения полного пакета документов</p>
                </div>
            `;
        }
    }

    updateBreadcrumbs() {
        const categoryLink = document.getElementById('categoryLink');
        const productName = document.getElementById('productNameBreadcrumb');
        
        const categoryNames = {
            'chambers': 'Дезинфекционные камеры',
            'sterilizers': 'Стерилизаторы',
            'equipment': 'Дополнительное оборудование'
        };
        
        const categoryName = categoryNames[this.product.category] || 'Категория';
        const categoryPage = this.getCategoryPage();
        
        categoryLink.textContent = categoryName;
        categoryLink.href = categoryPage;
        productName.textContent = this.product.name;
    }

    getCategoryPage() {
        const pages = {
            'chambers': 'disinfection-chambers.html',
            'sterilizers': 'sterilizers.html',
            'equipment': 'equipment.html'
        };
        
        return pages[this.product.category] || 'index.html';
    }

    showProductNotFound() {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="product-not-found">
                    <h1>Товар не найден</h1>
                    <p>Извините, запрашиваемый товар не существует или был удален.</p>
                    <a href="index.html" class="btn btn-primary">Вернуться на главную</a>
                </div>
            `;
        }
    }

    loadRelatedProducts() {
        console.log('Загрузка связанных товаров...');
    }
}
class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobileMenuBtn');
        this.navMenu = document.getElementById('navMenu');
        this.init();
    }
    init() {
        if (this.menuBtn && this.navMenu) {
            this.setupEventListeners();
        }
    }
    setupEventListeners() {
        this.menuBtn.addEventListener('click', () => {
            this.toggleMenu();
        });
        document.querySelectorAll('#navMenu a').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-btn')) {
                this.closeMenu();
            }
        });
    }
    toggleMenu() {
        this.navMenu.classList.toggle('active');
        const icon = this.menuBtn.querySelector('i');
        
        if (this.navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
            document.body.style.overflow = 'hidden';
        } else {
            icon.className = 'fas fa-bars';
            document.body.style.overflow = '';
        }
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        const icon = this.menuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
        document.body.style.overflow = '';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    if (typeof productsByCategory === 'undefined') {
        console.error('productsByCategory is not defined');
        return;
    }
    new MobileMenu();
    new ProductPage();
});