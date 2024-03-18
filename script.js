document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });
            this.classList.add('active');
            setTimeout(() => this.classList.remove('active'), 500); // Змінити через 500 мс
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const instagramIcon = document.getElementById('instagram-icon');
    const iconsContainer = document.querySelector('.icons');

    function changeIcon(icon, newSrc, delay) {
        const originalSrc = icon.src;
        icon.src = newSrc;
        setTimeout(function () {
            icon.src = originalSrc;
        }, delay);
    }

    cartIcon.addEventListener('mouseover', function () {
        cartIcon.src = '/images/cart-icon-bold.png';
    });

    instagramIcon.addEventListener('mouseover', function () {
        instagramIcon.src = '/images/instagram-icon-bold.png';
    });

    cartIcon.addEventListener('mouseout', function () {
        cartIcon.src = '/images/cart-icon.png';
    });

    instagramIcon.addEventListener('mouseout', function () {
        instagramIcon.src = '/images/instagram-icon.png';
    });

    cartIcon.addEventListener('click', function () {
        changeIcon(cartIcon, '/images/cart-icon-bold-yellow.png', 500);
    });

    instagramIcon.addEventListener('click', function () {
        changeIcon(instagramIcon, '/images/instagram-icon-bold-yellow.png', 500);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const catalogButtons = document.querySelectorAll('.catalog-button');

    catalogButtons.forEach(function(catalogButton) {
        catalogButton.addEventListener('click', function () {
            catalogButton.style.color = '#FFD964'; 
            setTimeout(function () {
                catalogButton.style.color = '#FBF9FA'; 
            }, 500);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const visBlock = document.querySelector('.vis-block');
    const headerHeight = document.querySelector('.main-header').offsetHeight;
    const saleLineHeight = document.querySelector('.sale-line').offsetHeight;
    const screenHeight = window.innerHeight;

    const visBlockHeight = screenHeight - headerHeight - saleLineHeight;
    visBlock.style.height = visBlockHeight + 'px';
});
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(function(category) {
        category.addEventListener('click', function () {
            const categoryText = category.querySelector('p');
            categoryText.style.color = '#FFD964';
            setTimeout(function () {
                categoryText.style.color = '';
            }, 500);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const catalogLink = document.querySelector('.to-catalog a');
    const arrowImg = document.querySelector('.arrow-img');

    catalogLink.addEventListener('mouseover', function () {
        catalogLink.style.color = '#AC2E91';
        arrowImg.src = '/images/arrow-catalog-2.png';
    });

    catalogLink.addEventListener('mouseout', function () {
        catalogLink.style.color = '#908E9F';
        arrowImg.src = '/images/arrow-catalog.png';
    });

    catalogLink.addEventListener('click', function (event) {
        event.preventDefault(); // Зупиняє перехід за посиланням
        catalogLink.style.color = '#FFD964'; // Змінює колір тексту
        arrowImg.src = '/images/arrow-catalog-3.png'; // Змінює зображення

        // Повертає колір тексту та зображення до попереднього стану через 500 мс
        setTimeout(function () {
            catalogLink.style.color = '#908E9F';
            arrowImg.src = '/images/arrow-catalog.png';
        }, 500);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const reviewsFrame = document.querySelector('.reviews-frame');
    const nextArrow = document.querySelector('.reviews-menu img:last-child');

    let currentSlide = 0;
    const numSlides = reviewsFrame.children.length;
    const slideWidth = reviewsFrame.offsetWidth; 

    const totalWidth = slideWidth * numSlides;
    reviewsFrame.style.width = totalWidth + 'px';

    nextArrow.addEventListener('click', function () {
        currentSlide++;
        if (currentSlide >= numSlides) {
            currentSlide = 0;
        }
        const offset = -currentSlide * slideWidth;
        reviewsFrame.style.transform = `translateX(${offset}px)`;
    });
});



