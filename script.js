document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const products = [
        { name: 'Memoria USB 32GB', price: '10 USD', specs: 'USB 3.0', units: 50 },
        { name: 'Bocina Bluetooth', price: '20 USD', specs: '10W', units: 30 },
        // Agrega más productos aquí
    ];

    let html = '<ul>';
    products.forEach(product => {
        html += `<li>${product.name} - ${product.price} - ${product.specs} - Units: ${product.units}</li>`;
    });
    html += '</ul>';

    productList.innerHTML = html;
});
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const contactBtn = document.getElementById('contact-btn');
    const contactSection = document.getElementById('contact');
    const contactForm = document.getElementById('contact-form');
    const products = [
        { name: 'Memoria USB 32GB', price: '10 USD', specs: 'USB 3.0', units: 50 },
        { name: 'Bocina Bluetooth', price: '20 USD', specs: '10W', units: 30 },
        { name: 'Cargador Portátil', price: '15 USD', specs: '10,000mAh', units: 20 },
        { name: 'Batería Externa', price: '25 USD', specs: '20,000mAh', units: 15 }
    ];

    let html = '<ul>';
    products.forEach(product => {
        html += `<li>${product.name} - ${product.price} - ${product.specs} - Units: ${product.units}</li>`;
    });
    html += '</ul>';

    productList.innerHTML = html;

    contactBtn.addEventListener('click', () => {
        contactSection.classList.toggle('hidden');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});
