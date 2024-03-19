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
    const icons = document.querySelectorAll('.icon');

    function changeIcon(icon, newSrc, delay) {
        const originalSrc = icon.src;
        icon.src = newSrc;
        setTimeout(function () {
            icon.src = originalSrc;
        }, delay);
    }

    icons.forEach(function(icon) {
        icon.addEventListener('mouseover', function () {
            icon.src = '/images/' + icon.id + '-bold.png';
        });

        icon.addEventListener('mouseout', function () {
            icon.src = '/images/' + icon.id + '.png';
        });

        icon.addEventListener('click', function () {
            changeIcon(icon, '/images/' + icon.id + '-bold-yellow.png', 500);
        });
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
    const categoryLinks = document.querySelectorAll('.to-category-link');
    const aboutUsBlock = document.querySelector('.categories_about-us_block');

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            aboutUsBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const reviewLinks = document.querySelectorAll('.to-reviews-link');
    const reviewBlock = document.querySelector('.reviews-block');

    reviewLinks.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            reviewBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });
    const catalogLinks = document.querySelectorAll('.to-catalog-link');
    const catalogBlock = document.querySelector('.catalog-block');

    catalogLinks.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            catalogBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });
    const contactsLinks = document.querySelectorAll('.to-contacts-link');
    const contactsBlock = document.querySelector('.footer');

    contactsLinks.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            contactsBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });
    const deliveryLinks = document.querySelectorAll('.to-delivery-link');
    const deliveryBlock = document.querySelector('.delivery-block');

    deliveryLinks.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            deliveryBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });
});






